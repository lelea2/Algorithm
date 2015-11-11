/**
 * Handle routing for apps
 */

var dataSrc = require('./model/data-massage'),
    Q = require('q'),
    minify = require('html-minifier').minify;

//Helper function minify html response
function minifyHTML(html) {
    return minify(html, {
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true
    });
}

exports.signin = function(req, res, next) {
    res.render('signin', {}, function (err, html) {
        if (err) { console.log(err); return next(err); }
        res.send(minifyHTML(html));
    });
};

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

exports.mycourse = function(req, res, next) {
    res.render('mycourse', {}, function (err, html) {
        if (err) { return next(err); }
        res.send(minifyHTML(html));
    });
};
