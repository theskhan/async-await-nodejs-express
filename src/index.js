'use strict'; 
require('babel-polyfill');

var express = require('express');
var request = require('request-promise');
	
var app = express();

let wrap = fn => (...args) => fn(...args).catch(args[2])

app.get('/', wrap(async function(req, res, next){	
	res.send(await request('http://www.google.com'));
}))

app.listen(3000, function(){
	console.log("listening on 3000");
});
