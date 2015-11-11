/**
 * Handle routing for apps
 */

var dataSrc = require('./model/data-massage'),
    dataComponents = require('./model/data-components'),
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

exports.signin = function(req, res) {
    res.render('signin', {}, function (err, html) {
        if (err) { return next(err); }
        res.send(minifyHTML(html));
    });
};
