/*
run `node .\mock-server\server.js` to start mock server
*/

const express = require('express');
const logger = require('morgan');
const http = require('http');
const cors = require('cors');
const serveStatic = require('serve-static');
const devInterface = require('@ng-apimock/dev-interface');
const ngApiMock = require('@ng-apimock/core');
const oidc = require('./oidc.js');
const port = 9900;

// ng-apimock
ngApiMock.configure({
    middleware: {
      useHeader: true, // optional indicator to use a header to get the identifier. (defaults to false)
      identifier: 'apimockid', // optional name for the header or cookie to contain the identifier. (defaults to 'apimockid')
    },
  });
  
  ngApiMock.processor.process({
    echo: true,
    watch: true,
    src: './mock-server',
    patterns: {
      mocks: '*/*.json', // optional, defaults to **/*.mock.json,
      presets: 'api-presets/*.preset.json', // optional, defaults to **/*.preset.json
    },
  });

// configure server
const app = express();

app.use(logger('dev'));
app.use(cors({
  'allowedHeaders': ['Content-Type', 'Authorization'],
  'origin': '*'
}));
app.use(ngApiMock.middleware);
app.use('/dev-interface/', serveStatic(devInterface));
oidc('http://localhost:' + port, app);

// run server
http.createServer(app).listen(port);