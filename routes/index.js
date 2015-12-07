/**
 * Handle routing for apps
 */

var dataSrc = require('./model/data-massage'),
    user = require('./util/user'),
    helper = require('./util/helper'),
    Q = require('q');

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
    Q.all([
        dataSrc.getUserById(userId),
        dataSrc.getUsersCourses(userId)
    ]).then(function(result) {
        //console.log(result[1]);
        res.render('mycourse', {
            'userinfo': result[0],
            'users_courses': result[1],
            'usercourses': helper.getUserCourseArr(result[1])
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
 * Display user profile page
 */
exports.profile = function(req, res, next) {
    var userId = user.getUserId(req);
    Q.all([
        dataSrc.getMajors(),
        dataSrc.getUserById(userId)
    ]).then(function(result) {
        //console.log(result);
        res.render('user', {
            'majors': result[0],
            'profile': result[1]
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
 * Handle admin page
 */
exports.admin = function(req, res, next) {
    var userId = user.getUserId(req);
    dataSrc.getUserById(userId).then(function(result1) {
        if (result1.role.roleId === 1) { //admin
            dataSrc.getUsers().then(function(result) {
                res.render('admin', {
                    'users': result
                }, function (err, html) {
                    if (err) { return next(err); }
                    res.send(helper.minifyHTML(html));
                });
            });
        } else {
            res.status(403).send('Forbidden access');
        }
    });
};

/**
 * Handle signin ajax post
 */
exports.ajaxLogin = function(req, res, next) {
    //var encription = JSON.stringify(req.body);
    var info = new Buffer(JSON.stringify(req.body), 'base64').toString('ascii');

    var user = JSON.parse(info);
    req.body = user;

    var name = user.name,
        pwd = user.password;
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
    //console.log(obj);
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
 * Handle update user
 */
exports.ajaxUpdateUser = function(req, res, next) {
    var userId = user.getUserId(req),
        obj = req.body;
    dataSrc.updateUser(obj, userId).then(function(result) {
         res.status(200).json(result);
    }, function(err) {
        res.status(500).json(err);
    });
};

/**
 * Handle search course by course number
 */
exports.ajaxSearchCourse = function(req, res, next) {
    var courseId = req.body.courseNumber,
        usercourses = req.body.usercourses;
    //console.log(usercourses);
    dataSrc.getCourseById(courseId).then(function(result) {
        if (result && result.courseId) {
            //res.status(200).json(result);
            res.render('partials/courseRow', {
                'layout': false,
                'course': result,
                'usercourses': usercourses.split('~')
            }, function(err, viewString) { //return html view
                var response = {};
                response.view = viewString;
                res.json(response);
            });
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
    var courseIds = req.body.courseIds.split('~'),
        userId = user.getUserId(req);
    //console.log(courseIds);
    dataSrc.registerCourses(courseIds, userId).then(function(result) {
        res.status(200).json(result);
    }, function(err) {
        res.status(500).json(err);
    });
};

/**
 * Handle drop courses (based on courseId)
 */
exports.ajaxDropcourses = function(req, res, next) {
    var courseIds = req.body.courseIds.split('~'),
        userId = user.getUserId(req);
    //console.log(courseIds);
    dataSrc.dropCourses(courseIds, userId).then(function(result) {
        res.status(200).json(result);
    }, function(err) {
        res.status(500).json(err);
    });
};

/**
 * Handle get user
 */
exports.getUsers = function(req, res, next) {
    var startIndex = req.query.startIndex,
        pageSize = req.query.pageSize;
    //console.log(startIndex);
    //console.log(pageSize);
    dataSrc.getUsers(startIndex, pageSize).then(function(result) {
        res.render('partials/userdetail', {
            'layout': false,
            'users': result
        }, function(err, viewString) { //return html view
            var response = {};
            response.view = viewString;
            res.json(response);
        });
    });
};
