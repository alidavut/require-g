require-g
=========

This module enables you to load global modules in Node.js.

## Usage
First install the module:

```
npm install require-g --save
```

### Loading Modules

```javascript
import requireG from 'require-g';
const MyGlobalModule = requireG('my-global-module');

MyGlobalModule.run();
```

### Require Hook

You can override the require hook by using register module and use ```global:...``` prefix.

```javascript
import 'require-g/register';
import MyGlobalModule from 'global:my-global-module';
// or require('global:my-global-module');

MyGlobalModule.run();
```

### Get All Global Modules
You can get all global module names:

```javascript
import requireG from 'require-g';
const globalModules = requireG.modules;

console.log(globalModules);

/*
will return ['mocha', 'gulp', ...]
*/
```
