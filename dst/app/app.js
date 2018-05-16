"use strict";
/**
 * Expressアプリケーション
 * @ignore
 */
const bodyParser = require("body-parser");
// import * as createDebug from 'debug';
const express = require("express");
const errorHandler_1 = require("./middlewares/errorHandler");
const notFoundHandler_1 = require("./middlewares/notFoundHandler");
// const debug = createDebug('pecorino-console:*');
const app = express();
// view engine setup
app.set('views', `${__dirname}/../../views`);
app.set('view engine', 'ejs');
app.use(bodyParser.json());
// The extended option allows to choose between parsing the URL-encoded data
// with the querystring library (when false) or the qs library (when true).
app.use(bodyParser.urlencoded({ extended: true }));
// 静的ファイル
app.use(express.static(`${__dirname}/../../public`));
// routers
const router_1 = require("./routes/router");
app.use('/', router_1.default);
// 404
app.use(notFoundHandler_1.default);
// error handlers
app.use(errorHandler_1.default);
module.exports = app;
