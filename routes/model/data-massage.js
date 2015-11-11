/**
 * Helper module handle data massaging
 */

var request = require('request'),
    Q = require('q'),
    URL = require('./URL');

module.exports = (function() {

    function getFinalURL(url, req) {
    }

    //Helper function to get current partnerId (default walgreen)
    function generateReqBody(req, method) {
        return {
            url: getFinalURL(URL[method], req),
            method: method,
            headers: {
                'Accept': 'application/json'
            },
            timeout: '10000'
        }
    }

    function getData(req, method) {
        var d = Q.defer();
        request(generateReqBody(req, method), function(error, response, body) {
            var result = getReturnObj(error, response, body);
            if (!result.errorCode) {
                d.resolve(result);
            } else {
                d.resolve({});
            }
        });
        return d.promise;
    }

    //Helper function generate default failure response (404 NOT FOUND url)
    function getFailureResp(response) {
        return {
            errorCode: response.statusCode
        };
    }

    /**
     * Helper function checking for successful response
     * @method isSuccessfulRESTCall
     */
    function getReturnObj(error, response, body) {
        try {
            if (!error && response && (response.statusCode === 200 || response.statusCode === 201 )) {
                return JSON.parse(body);
            }
        } catch(ex) { /* istanbul ignore next */
        }
        return (!body) ? getFailureResp(response) : body;
    }

    return {

    };


}());
