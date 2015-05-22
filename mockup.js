/*
 * mockup.js
 * Copyright (C) 2015 hasnaer <hasnaer@haz>
 *
 * Distributed under terms of the MIT license.
 */

var express     = require('express');
var serveStatic = require('serve-static');
var util        = require('util');
var open        = require('open');
var path        = require('path');

var mockup = express();

mockup.use(serveStatic(path.resolve(__dirname, 'webapp')));

var server  = mockup.listen(9999, function (){
  console.log(util.format('mockup walking on sunshine ... running on port %s', 
                          server.address().port));
  open(util.format('http://localhost:%s', server.address().port));
});
