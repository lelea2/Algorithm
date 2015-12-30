/**
 * Act like interceptor for request routing
 */

var user = require('./user');

module.exports = (function() {

    /**
     * Middleware Function redirect to signin/signup page for not login user
     * @method authenticate
     */
    function authenticate() {
        return function (req, res, next) {
            var userId = user.getUserId(req);
            if (userId === '' || userId.length !== 36) {
                //invalid userId, log user out
                user.logout(req);
                res.redirect(302, '/signin'); //redirect to signin page
            } else {
                next(); //continue the original request if user signin
            }
        };
    }

    /**
     * Redirect to /mycourse page for logged in user
     * @method userAuthenticated
     */
    function userAuthenticated() {
        return function (req, res, next) {
            var userId = user.getUserId(req);
            if (userId === '' || userId.length !== 36) {
                next();
            } else {
                res.redirect(302, '/mycourse');
            }
        };
    }

    /** Return interecept interface method **/
    return {
        authenticate: authenticate,
        userAuthenticated: userAuthenticated
    };

}());
