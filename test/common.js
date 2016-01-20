import chai from 'chai';
import lodash from 'lodash';
import r from '../src';
import path from 'path';

const mockModulesPath = path.join(__dirname, './samples/node_modules');
Object.defineProperty(r, 'modulesPath', { get: () => mockModulesPath });

global.expect = chai.expect;
global._ = lodash;
