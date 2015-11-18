/**
 * Angular studentReg app controllers
 */
angular.module('studentregApp', [])
  .controller('StudentRegAppController', ['$scope', '$http', function ($scope, $http) {

    $scope.formSigninData = {};
    $scope.formSignupData = {
        'roleId': 2
    };
    $scope.formSearchData = {};

    var User = window.user || {};
    $scope.formUser = {
        'firstName': user.firstName,
        'lastName': user.lastName,
        'email': user.email,
        'majorId': user.major.majorId,
        'userPassword': 'default',
        'roleId': 2
    };

    $scope.courseIdsArr = [];

    /**
     * Function handle signin
     * Log user in and redirect for success cases
     * @method processSignin
     */
    $scope.processSignin = function() {
        if (!$scope.formSigninData.name) {
            $('.signin .userNameRow .err').removeClass('hidden');
            return false;
        }
        if (!$scope.formSigninData.password) {
            $('.signin .passwordNameRow .err').removeClass('hidden');
            return false;
        }
        $http({
            method  : 'POST',
            url     : '/ajax/signin',
            data    : $.param($scope.formSigninData),  // pass in data as strings
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-csrf-token': $('input[name="_csrf"]').val()
            }  // set the headers so angular passing info as form data (not request payload)
        }).then(function(data) {
            console.log(data);
            window.location = '/mycourse'; //redirect to my course page
        }, function(err) {
            alert('Fail to login. Please try again');
        });
    };

    /**
     * Function handle signup
     * Log user in and redirect for success cases
     * @method processSignup
     */
    $scope.processSignup = function() {
        var signupData = $scope.formSignupData,
            valid = true;
        $('.signup .err').addClass('hidden');
        if (!signupData.firstName) {
            $('.firstNameRow .err').removeClass('hidden');
            valid = false;
        }
        if (!signupData.lastName) {
            $('.lastNameRow .err').removeClass('hidden');
            valid = false;
        }
        if (!signupData.userEmail) {
            $('.emailRow .err').removeClass('hidden');
            valid = false;
        }
        if (!signupData.userPassword) {
            $('.passwordRow .err').removeClass('hidden');
            valid = false;
        } else if (signupData.userPassword !== $('#rePassword').val()) {
            $('.rePasswordRow .err').removeClass('hidden');
            valid = false;
        }
        if (!signupData.majorId) {
            $('.majorRow .err').removeClass('hidden');
            valid = false;
        }
        if (valid === false) {
            return; //return right away if not pass validation
        }
        $http({
            method  : 'POST',
            url     : '/ajax/signup',
            data    : $.param($scope.formSignupData),  // pass in data as strings
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-csrf-token': $('input[name="_csrf"]').val()
            }  // set the headers so angular passing info as form data (not request payload)
        }).then(function(data) {
            console.log(data);
            window.location = '/mycourse'; //redirect to my course page
        }, function(err) {
            alert('Fail to signup. Please try again');
        });
    };

    /**
     * Function handle profile page
     * @method processProfileUpdate
     */
    $scope.processProfileUpdate = function() {

    };

    /**
     * Function handle reset all the field in signup
     * @method handleSignupReset
     */
    $scope.handleSignupReset = function() {
        $('.signup input').val(''); //Wipe out all field on reset
    };

    /**
     * Function handle display course search
     * @method searchCourse
     */
    $scope.searchCourse = function() {
        if (!$scope.formSearchData.courseNumber) {
            $('.searchform .err').removeClass('hidden');
            return false;
        }
        $scope.formSearchData.usercourses  = (window.mycourses || []).join('~');
        $http({
            method  : 'POST',
            url     : '/ajax/searchcourse',
            data    : $.param($scope.formSearchData),  // pass in data as strings
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-csrf-token': $('input[name="_csrf"]').val()
            }  // set the headers so angular passing info as form data (not request payload)
        }).then(function(data) {
            //console.log(data);
            $('#searchBar').val('');
            $('.course-search').append(data.data.view);
        }, function(err) {
            alert('Fail to search course. Please try again');
        });
    };

    /**
     * Function handle DropCourse
     * @method handleDropCourse
     */
    $scope.handleDropCourse = function(courseId) {
        //alert('handle drop course, courseId=' + courseId);
        $http({
            method  : 'POST',
            url     : '/ajax/dropcourse',
            data    : $.param({
                courseIds: courseId
            }),
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-csrf-token': $('input[name="_csrf"]').val()
            }  // set the headers so angular passing info as form data (not request payload)
        }).then(function(data) {
            $('tr[data-id="' + courseId + '"] .greenButton').removeClass('hidden');
            $('tr[data-id="' + courseId + '"] .redButton').addClass('hidden');
        }, function(err) {
            alert('Fail to drop course. Please try again');
        });
    };

    /**
     * Fucntion handle addcourse
     * @method  handleAddCourse
     */
    $scope.handleAddCourse = function(courseId) {
        //alert('handle add course');
        $http({
            method  : 'POST',
            url     : '/ajax/addcourse',
            data    : $.param({
                courseIds: courseId
            }),
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-csrf-token': $('input[name="_csrf"]').val()
            }  // set the headers so angular passing info as form data (not request payload)
        }).then(function(data) {
            $('tr[data-id="' + courseId + '"] .greenButton').addClass('hidden');
            $('tr[data-id="' + courseId + '"] .redButton').removeClass('hidden');
        }, function(err) {
            alert('Fail to add course. Please try again');
        });
    };

    /**
     * Function handle state change input checkbox
     */
    $scope.stateChanged = function(courseId) {
        var index = $.inArray(courseId, $scope.courseIdsArr),
            arr = [];
        if (index > -1) {
            arr = $scope.courseIdsArr.slice(index, 1);
        } else {
            arr = $scope.courseIdsArr.push(courseId);
        }
        $scope.courseIdsArr = arr;
    };

    function getCourseIds() {
        var arr = [],
            elem = $('.courseIds-search');
        for (var i = 0; i < $(elem).length; i++) {
            if ($(elem).prop('checked')) {
                arr.push($($(elem)[i]).data('id'));
            }
        }
        return arr;
    }

    /**
     * Function handle addcourses
     */
    $scope.addCourses = function() {
        var courseArr = getCourseIds();
        //console.log(courseArr);
        $http({
            method  : 'POST',
            url     : '/ajax/addcourse',
            data    : $.param({
                courseIds: courseArr.join('~') //$scope.courseIdsArr.join("~")
            }),
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-csrf-token': $('input[name="_csrf"]').val()
            }  // set the headers so angular passing info as form data (not request payload)
        }).then(function(data) {
            alert('Add all course successfully')
            for (var i = 0; i < courseArr.length; i++) {
                $(".course-state[data-id='" + courseArr[i] + "']").html('Added');
            }
        }, function(err) {
            alert('Fail to add course. Please try again');
        });
    };

}]);
