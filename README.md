# Node Human Logger

A basic console logger format

### Install
```
npm install --save node-human-logger
```

### Usage


```js
var logger = require('node-human-logger');
```

To log a message in the console

```js
logger.info('This is an info log message');
logger.success('This is a success log message');
logger.warning('This is a warninglog message');
logger.error('This is an error log message');
```

Will output a message with colors and icons to identify what's going on, and
the date/space to know where and when it happens

```
[application] 2014-06-25 13:38:11 → Mongoose connected to database on "main"
```

You can also change the prefix log like that :

```
logger.info('The message', null, 'my space name');
```

And you can pass an object to get its dump in the console

```
var objectToDebug = {};
logger.info('The message', objectToDebug);
```

### Note
It's a really small and quite useless package, my first one in node, but could
help.
