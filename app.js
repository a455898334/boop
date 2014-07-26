
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , dropdown = require('./routes/dropdown')
  , http = require('http')
  , path = require('path');

var app = express();
var favicon = require('serve-favicon');
var Mongoose = require('mongoose');
var db = Mongoose.createConnection('localhost', 'mytestapp');

// all environments
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon(path.join(__dirname,'public','images','favicon.ico')));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/dropdown', dropdown.game);

http.createServer(app).listen(80, function(){
  console.log('Express server listening on port 80');
});
