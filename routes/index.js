/**
 * Handle routing for apps
 */

var dataSrc = require('./model/data-massage'),
    user = require('./model/user'),
    helper = require('./model/helper'),
    Q = require('q'),
    Cookies = require('cookies');

/************************************************************************/
/**                            Handle Routing                          **/
/************************************************************************/

/**
 * Display /sigin page
 */
exports.signin = function(req, res, next) {
    res.render('signin', {}, function (err, html) {
        if (err) { console.log(err); return next(err); }
        res.send(helper.minifyHTML(html));
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
                res.send(helper.minifyHTML(html));
            });
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
        console.log(result[1]);
        res.render('mycourse', {
            'userinfo': result[0],
            'users_courses': result[1]
        }, function (err, html) {
            if (err) { return next(err); }
            res.send(helper.minifyHTML(html));
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
            //console.log(result1[1]);
            res.render('courselist', {
                'userinfo': result1[0],
                'courselist': result2,
                'usercourses': helper.getUserCourseArr(result1[1])
            }, function (err, html) {
                if (err) { return next(err); }
                res.send(helper.minifyHTML(html));
            });
        });
    });
};

/**
 * Display course search page
 */
exports.searchcourse = function(req, res, next) {
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
        res.render('searchcourse', {
            'userinfo': result[0],
            'usercourses': helper.getUserCourseArr(result[1])
        }, function (err, html) {
            if (err) { return next(err); }
            res.send(helper.minifyHTML(html));
        });
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
        pwd = req.body.password;
    dataSrc.logIn(name, pwd).then(function(result) {
        if (result && result.userId) {
            user.setUserCookie(req, result.userId);
            res.status(200).json(result);
        } else {
            res.status(500).json(result);
        }
    }, function(err) {
        res.status(500).json(err);
    });
};

/**
 * Handle signin ajax post
 */
exports.ajaxSignup = function(req, res, next) {
    var obj = req.body;
    console.log(obj);
    dataSrc.registerUser(obj).then(function(result) {
        if (result && result.userId) {
            user.setUserCookie(req, result.userId);
            res.status(200).json(result);
        } else {
            res.status(500).json(result);
        }
    }, function(err) {
        res.status(500).json(err);
    });
};

/**
 * Handle search course by course number
 */
exports.ajaxSearchCourse = function(req, res, next) {
    var courseId = req.body.courseNumber;
    dataSrc.getCourseById(courseId).then(function(result) {
        if (result && result.courseId) {
            res.status(200).json(result);
        } else {
            res.status(500).json(result);
        }
    }, function(err) {
        res.status(500).json(err);
    });
};

/**
 * Handle add courses (based on courseId)
 */
exports.ajaxAddcourses = function(req, res, next) {

};

/**
 * Handle drop courses (based on courseId)
 */
exports.ajaxDropcourses = function(req, res, next) {

};
