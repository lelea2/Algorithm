/**
 * Helper handle user data
 */

'use strict';

var Cookies = require('cookies'),
    security = require('./security.js'),
    USER_COOKIE = 'u',
    TTL = 15 * 24 * 3600 * 1000; //15 days

module.exports = (function() {

    /**
     * Function setting user cookie
     * @method  setUserCookie
     */
    function setUserCookie(req, userId) {
        console.log('set user cookie, userId=' + userId);
        try {
            var cookies = new Cookies(req, req.res);
            cookies.set(USER_COOKIE, security.encrypt(userId), {
                httpOnly: true,
                path: '/',
                expires: new Date(Date.now() + TTL),
                overwrite: true
            });
        } catch(ex) {
            console.log(ex);
        }
    }

    /**
     * Function get user cookie
     * @param Express request object
     * @return userId
     */
    function getUserId(req) {
        try {
            var cookies = new Cookies(req, req.res);
            var userCookie = cookies.get(USER_COOKIE);
            var userId = security.decrypt(userCookie);
            return userId;
        } catch(ex) {
            //console.log(ex);
            return '';
        }
    }

    /**
     * Function handle user logout
     * @method logout
     */
    function logout(req) {
        try {
            var cookies = new Cookies(req, req.res);
            cookies.set(USER_COOKIE, null, {
                httpOnly: true,
                path: '/',
                expires: 0,
                overwrite: true
            });
        } catch(ex) {}
    }

    /** Interface for user class **/
    return {
        setUserCookie: setUserCookie,
        getUserId: getUserId,
        logout: logout
    };

}());
