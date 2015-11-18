/**
 * Module dependencies
 */

var express = require('express'),
  compression = require('compression'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  errorHandler = require('error-handler'),
  morgan = require('morgan'),
  cookieParser = require('cookie-parser'),
  csrfCrypto = require('csrf-crypto'),
  expressHbs = require('express-handlebars'),
  routes = require('./routes'),
  http = require('http'),
  path = require('path');

var app = module.exports = express();

/**
 * Configuration
 */
app.use(bodyParser.urlencoded({"extended": false}));
app.use(bodyParser.json())
app.use(methodOverride());

/** CSRF enforcer */
app.use(cookieParser('group8272'));
app.use(csrfCrypto({ key: 'group8cmpe272' }));
app.use(csrfCrypto.enforcer());

app.use(function(req, res, next) {
    if(res.getFormToken !== undefined) {
        res.locals._csrf = res.getFormToken();
    }
    next();
});

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

/**
 * Handle Routing
 */
// serve index and view partials
app.get('/', routes.signin);
app.get('/signin', routes.signin);
app.get('/signup', routes.signup);
app.get('/mycourse', routes.mycourse);
app.get('/courselist', routes.courselist);
app.get('/searchcourse', routes.searchcourse);
app.get('/profile', routes.profile);
app.get('/signout', routes.signout);
app.get('/admin', routes.admin);


//Handle ajax post
app.post('/ajax/signin', routes.ajaxLogin);
app.post('/ajax/signup', routes.ajaxSignup);
app.post('/ajax/searchcourse', routes.ajaxSearchCourse);
app.post('/ajax/dropcourse', routes.ajaxDropcourses);
app.post('/ajax/addcourse', routes.ajaxAddcourses);

/**** Handle static files loaded ****/
var oneDay = 86400000; //caching time
// New call to compress content
app.use(compression());

// redirect all others to the index (HTML5 history)
app.get('*', express.static(path.join(__dirname, 'public'), { maxAge: oneDay }));

/**
 * Start Server
 */
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

