'use strict';

const configuration = require('./configuration');
const router = require('./routes');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const Koa = require('koa');
const app = new Koa();

app.use(cors());

app.use(require('koa-jwt')({
    secret: configuration.authorization.secret
}).unless({
    path: [
        new RegExp(`^${configuration.router.prefix}/health`),
        new RegExp(`^${configuration.router.prefix}/sendSMS`)
    ]
}));

app.use(logger());
app.use(bodyParser());
app.use(require('./urls')(router));
app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;
