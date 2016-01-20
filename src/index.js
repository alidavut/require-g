import which from 'which';
import path from 'path';
import fs from 'fs';
import Module from 'module';

const modulesPath = path.join(which.sync('node'), '../../lib/node_modules');

const requireG = (module) => {
  return require(path.join(requireG.modulesPath, module));
}

const isModule = (name) => {
  return fs.existsSync(path.join(requireG.modulesPath, name, 'package.json'));
}

const modules = () => {
  const list = fs.readdirSync(requireG.modulesPath)
                 .filter(name => isModule(name));

  return list;
}

const register = () => {
  const regex = /^global:(.+)$/;
  const old = Module._load;

  Module._load = (request, parent, isMain) => {
    const result = request.match(regex);

    if (result) {
      return old(path.join(requireG.modulesPath, result[1]));
    } else {
      return old(request, parent, isMain);
    }
  }
}

Object.defineProperty(
  requireG,
  'modulesPath',
  { get: () => modulesPath, configurable: true }
);

Object.defineProperty(
  requireG,
  'modules',
  { get: modules }
);

requireG.register = register;

module.exports = requireG;
