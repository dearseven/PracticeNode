var express = require('express');
var router = express.Router();

var Spider={
    init:function  () {
        Console.log("Spider.init");
    }
};
module.exports  = Spider;

