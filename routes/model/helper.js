/**
 * Helper class for rendering
 */

'use strict';

var minify = require('html-minifier').minify;

module.exports = (function() {

    /**
     * Function minify HTML response
     * @method  minifyHTML
     */
    function minifyHTML(html) {
        return minify(html, {
            collapseWhitespace: true,
            minifyJS: true,
            minifyCSS: true
        });
    }

    /**
     * Helper function get back array list of courses Id for user
     * @method  getUserCourseArr
     */
    function getUserCourseArr(courseList) {
        console.log('Generate corseIds array per user from courseList=' + JSON.stringify(courseList));
        if (!courseList || courseList.length === 0) {
            return [];
        }
        var arr = [];
        for (var i = 0; i < courseList.length; i++) {
            arr.push(courseList[i].courseId);
        }
        return arr;
    }

    return {
        minifyHTML: minifyHTML,
        getUserCourseArr: getUserCourseArr
    };

}());
