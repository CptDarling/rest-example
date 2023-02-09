const { response } = require("express");
var express = require("express");
var app = express();

var rest = require("./src/rest");

const PORT = 3000;

rest.default(app, PORT);
