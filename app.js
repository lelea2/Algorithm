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
  interceptor = require('./routes/util/interceptor'),
  routes = require('./routes'),
  http = require('http'),
  path = require('path');

var app = module.exports = express();

/**
 * Middleware for JSON-ify MessageBodyReader
 */
app.use(bodyParser.urlencoded({"extended": false}));
app.use(bodyParser.json())
app.use(methodOverride());

/** Middleware interceptor enforce CSRF on every request */
app.use(cookieParser('group8272'));
app.use(csrfCrypto({ key: 'group8cmpe272' }));
app.use(csrfCrypto.enforcer());

app.use(function(req, res, next) {
    if(res.getFormToken !== undefined) {
        res.locals._csrf = res.getFormToken();
    }
    next();
});

//Setting default port to run node client
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

/***************************************************/
/***************** Handle Routing ******************/
/***************************************************/

/** Handle user on login/signup pages **/
app.get('/', interceptor.userAuthenticated(), routes.signin);
app.get('/signin', interceptor.userAuthenticated(), routes.signin);
app.get('/signup', interceptor.userAuthenticated(), routes.signup);

/*** Middleware inteceptor, authenticate user before display the page ***/
app.get('/mycourse', interceptor.authenticate(), routes.mycourse);
app.get('/courselist', interceptor.authenticate(), routes.courselist);
app.get('/searchcourse', interceptor.authenticate(), routes.searchcourse);
app.get('/profile', interceptor.authenticate(), routes.profile);
app.get('/signout', interceptor.authenticate(), routes.signout);
app.get('/admin', interceptor.authenticate(), routes.admin);


//Handle ajax post
app.post('/ajax/signin', routes.ajaxLogin);
app.post('/ajax/signup', routes.ajaxSignup);
app.post('/ajax/updateuser', routes.ajaxUpdateUser);
app.post('/ajax/searchcourse', routes.ajaxSearchCourse);
app.post('/ajax/dropcourse', routes.ajaxDropcourses);
app.post('/ajax/addcourse', routes.ajaxAddcourses);


//Handle pagination (REST has HATEOAS to get specific paging, here is the corresponding client call for it)
app.get('/paginate/getUsers', interceptor.authenticate(), routes.getUsers);

/**** Handle static files loaded, include caching, gzip ****/
var oneWeek = 7 * 24 * 3600 * 1000; //caching time in miliseconds
// New call to compress content
app.use(compression());
app.get('*', express.static(path.join(__dirname, 'public'), { maxAge: oneWeek }));

/**
 * Start Server on port given or default port
 */
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

