var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var settings = require('./settings');
var flash = require('connect-flash');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(flash());

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

routes(app);

var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

app.use(session({
      secret: settings.cookieSecret,
      key: settings.db,//cookie name
      cookie: {maxAge: 1000 * 60 * 60 * 24 * 30},//30 days
      store: new MongoStore({
              db: settings.db,
          host: settings.host,
          port: settings.port
            })
}));


module.exports = app;
