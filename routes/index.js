/**
 * Handle routing for apps
 */

var dataSrc = require('./model/data-massage'),
    user = require('./model/user'),
    Q = require('q'),
    minify = require('html-minifier').minify,
    Cookies = require('cookies');

//Helper function minify html response
function minifyHTML(html) {
    return minify(html, {
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true
    });
}
/************************************************************************/
/**                            Handle Routing                          **/
/************************************************************************/

/**
 * Display /sigin page
 */
exports.signin = function(req, res, next) {
    res.render('signin', {}, function (err, html) {
        if (err) { console.log(err); return next(err); }
        res.send(minifyHTML(html));
    });
};

/**
 * Display /signup page
 */
exports.signup = function(req, res, next) {
    dataSrc.getMajors().then(
        function(result) { //promise resolved
            res.render('signup', {'majors': result}, function (err, html) {
                if (err) { return next(err); }
                res.send(minifyHTML(html));
            });
        },
        function(err) { //promise rejected
        }
    );
};

/**
 * Display /mycourse page
 */
exports.mycourse = function(req, res, next) {
    var userId = user.getUserId(req);
    if (userId === '' || userId.length !== 36) {
        //invalid userId, log user out
        user.logout(req);
        res.redirect(302, '/signin'); //redirect to signin page
        return;
    }
    Q.all([
        dataSrc.getUserById(userId),
        dataSrc.getUsersCourses(userId)
    ]).then(function(result) {
        res.render('mycourse', {'userinfo': result[0], 'users_courses': result[1]}, function (err, html) {
            if (err) { return next(err); }
            res.send(minifyHTML(html));
        });
    });
};

/**
 * Display /courselist page
 */
exports.courselist = function(req, res, next) {
    var userId = user.getUserId(req);
    if (userId === '' || userId.length !== 36) {
        //invalid userId, log user out
        user.logout(req);
        res.redirect(302, '/signin'); //redirect to signin page
        return;
    }
    Q.all([
        dataSrc.getUserById(userId),
        dataSrc.getUsersCourses(userId)
    ]).then(function(result1) {
        var major = result1[0].major,
            majorId = major.majorId;
        dataSrc.getMajorCourses(majorId).then(function(result2) {
            res.render('courselist', {
                'userinfo': result1[0],
                'courselist': result2
            }, function (err, html) {
                if (err) { return next(err); }
                res.send(minifyHTML(html));
            });
        });
    });
};

/**
 * Display course search page
 */
exports.searchcourse = function(req, res, next) {
    res.render('searchcourse', {}, function (err, html) {
        if (err) { return next(err); }
        res.send(minifyHTML(html));
    });
};

/**
 * Handle user sign-out, clear cookie and redirect user to signin page
 */
exports.signout = function(req, res, next) {
    user.logout(req);
    res.redirect(302, '/signin');
};

/**
 * Handle signin ajax post
 */
exports.ajaxLogin = function(req, res, next) {
    var name = req.body.name,
        pwd = req.body.password,
        cookies;
    dataSrc.logIn(name, pwd).then(function(result) {
        if (result && result.userId) {
            user.setUserCookie(req, result.userId);
            res.status(200).json(result);
        } else {
            res.status(500).json(err);
        }
    }, function(err) {
        res.status(500).json(err);
    });
};
