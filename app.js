/**
 * Module dependencies
 */

var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  errorHandler = require('error-handler'),
  morgan = require('morgan'),
  expressHbs = require('express-handlebars'),
  routes = require('./routes'),
  api = require('./routes/api'),
  http = require('http'),
  path = require('path');

var app = module.exports = express();

/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);

//Using handlebar helper on both client and server side
//http://codyrushing.com/using-handlebars-helpers-on-both-client-and-server/
app.engine('hbs', expressHbs({
    extname:'.hbs',
    defaultLayout:'main.hbs',
    helpers: require("./public/js/handlebar-helpers/helpers.js").helpers, // same file that gets used on our client
    partialsDir: "views/partials/", // same as default, I just like to be explicit
    layoutsDir: "views/layouts/" // same as default, I just like to be explicit
}));
app.set('view engine', 'hbs');

app.use(function(req, res, next) {
    morgan('dev');
    next();
});
app.use(function(req, res, next) {
    bodyParser();
    next();
});
app.use(function(req, res, next) {
    methodOverride()
    next();
});


/**
 * Handle Routing
 */
// serve index and view partials
app.get('/', routes.index);
app.get('/user', routes.user);

// redirect all others to the index (HTML5 history)
app.get('*', express.static(path.join(__dirname, 'public')));

/**
 * Start Server
 */
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

