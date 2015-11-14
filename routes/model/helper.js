/**
 * Helper class for rendering
 */

'use strict';

var minify = require('html-minifier').minify;

module.exports = (function() {

    /**
     * Function minify HTML response
     */
    function minifyHTML(html) {
        return minify(html, {
            collapseWhitespace: true,
            minifyJS: true,
            minifyCSS: true
        });
    }

    return {
        minifyHTML: minifyHTML
    };

}());
