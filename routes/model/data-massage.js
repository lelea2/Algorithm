/**
 * Helper module handle data massaging
 */

var request = require('request'),
    Q = require('q'),
    URL = require('./URL');

module.exports = (function() {

    /**
     * Get All courses
     * @return data for all courses
     */
    function getCourses() {
        return getData('GET_COURSES');
    }

    /**
     * Get All majors
     * @return data of all majors available
     */
    function getMajors() {
        return getData('GET_MAJORS');
    }

    /**
     * Function to get courses per major
     * @param  Interger MajorId
     * @return data of all courses for major
     */
    function getMajorCourses(majorId) {
        return getData('GET_MAJOR_COURSES', {'majorId': majorId});
    }

    /**
     * Function to get course per courseId
     */
    function getCourseById(courseId) {
        return getData('GET_COURSE_BY_ID', {'courseId': courseId});
    }

    /**
     * Function to get user by Id
     * @param  GUUID userId
     * @return data for user
     */
    function getUserById(userId) {
        return getData('GET_USER_BYID', {'userId': userId});
    }

    /**
     * Function to get courses per user
     * @return collection of courses per user
     */
    function getUsersCourses(userId) {
        return getData('USERS_COURSE', {'userId': userId});
    }

    /**
     * Function to log user in based on email and password
     * @return user token
     */
    function logIn(email, password) {
        return getData('LOGIN', {
            'reqBody': {
                'userName': email,
                'userPassword': password
            }
        });
    }

    /**
     * Function to register user
     * @return usertoken data
     */
    function registerUser(userData) {
        return getData('REGISTER_USER', {'reqBody': userData});
    }

    /**
     * Function updating user
     */
    function updateUser(userData, userId) {
        return getData('UPDATE_USER', {
            'userId': userId,
            'reqBody': userData
        });
    }

    /**
     * Function to register courses
     * @params Array of courseIds
     * @params GUUID userId
     */
    function registerCourses(courseIds, userId) {
        return getData('REGISTER_COURSES', {
            'userId': userId,
            'reqBody': {
                'courseIds': courseIds
            }
        });
    }

    /**
     * Function to drop courses
     * @params Array of courseIds
     * @params GUUID userId
     */
    function dropCourses(courseIds, userId) {
        return getData('DROP_COURSES', {
            'userId': userId,
            'reqBody': {
                'courseIds': courseIds
            }
        });
    }

    //Generate REST url
    function getFinalURL(url, obj) {
        var reqObj = obj || {};
        return url.replace('{HOST}', 'http://localhost:8000')
                .replace('{userId}', reqObj.userId)
                .replace('{majorId}', reqObj.majorId)
                .replace('{courseId}', reqObj.courseId);
    }

    //Helper function to get current partnerId (default walgreen)
    function generateReqBody(callname, obj) {
        var restcall = URL[callname],
            reqObj = obj || {};
        return {
            url: getFinalURL(restcall.url, reqObj),
            method: restcall.method,
            headers: {
                'Accept': 'application/json'
            },
            json: reqObj.reqBody || {},
            timeout: 5000
        }
    }

    //Helper function get data from REST
    function getData(calltype, reqObj) {
        var d = Q.defer();
        request(generateReqBody(calltype, reqObj), function(error, response, body) {
            var result = getReturnObj(error, response, body);
            if (!result.errorCode) {
                d.resolve(result);
            } else {
                d.reject();
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
                return body.data;
            }
        } catch(ex) { /* istanbul ignore next */
        }
        return (!body) ? getFailureResp(response) : body;
    }

    return {
        getCourses: getCourses,
        getMajors: getMajors,
        getMajorCourses: getMajorCourses,
        getCourseById: getCourseById,
        getUserById: getUserById,
        getUsersCourses: getUsersCourses,
        logIn: logIn,
        registerUser: registerUser,
        updateUser: updateUser,
        registerCourses: registerCourses,
        dropCourses: dropCourses
    };
}());
