//Define set of URL for data endpoints


module.exports = {
    "GET_COURSES": {
        "url": "{HOST}/services/courses/all",
        "method": "GET"
    },
    "GET_MAJOR_COURSES": {
        "url": "{HOST}/services/majors/{majorId}/courses",
        "method": "GET"
    },
    "GET_MAJORS": {
        "url": "{HOST}/services/majors/all",
        "method": "GET"
    },
    "GET_USER_BYID": {
        "url": "{HOST}/services/users/id/{userId}",
        "method": "GET"
    },
    "LOGIN": {
        "url": "{HOST}/services/users/login",
        "method": "POST"
    },
    "REGISTER_USER": {
        "url": "{HOST}/services/users/create",
        "method": "PUT"
    },
    "UPDATE_USER": {
        "url": "{HOST}/services/users/update/{userId}",
        "method": "PUT"
    },
    "USERS_COURSE": {
        "url": "{HOST}/services/users/courses/registered/{userId}",
        "method": "GET"
    },
    "REGISTER_COURSES": {
        "url": "{HOST}/services/users/courses/add/?userId={userId}",
        "method": "PUT"
    },
    "DROP_COURSES": {
        "url": "{HOST}/services/users/courses/delete/?userId={userId}",
        "method": "DELETE"
    },
    "GET_COURSE_BY_ID": {
        "url": "{HOST}/services/courses/course/?id={courseId}&type=courseNumber",
        "method": "GET"
    },
    "GET_ALL_USER": {
        "url": "{HOST}/services/users/all?startIndex={startIndex}&number={pageSize}",
        "method": "GET"
    }
};
