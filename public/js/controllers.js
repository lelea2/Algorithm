angular.module('studentregApp', [])
  .controller('StudentRegAppController', ['$scope', '$http', function ($scope, $http) {

    $scope.formSigninData = {};

    /**
     * Function handle signin
     * Log user in and redirect for success cases
     */
    $scope.processSignin = function() {
        if ($scope.formSigninData.name === '') {
            $('.signin .userNameRow .err').removeClass('hidden');
            return false;
        }
        if ($scope.formSigninData.password === '') {
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
     */
    $scope.processSignup = function() {
        alert('signup');
    };

    /**
     * Function handle reset all the field in signup
     */
    $scope.handleSignupReset = function() {
        alert('handle signup reset');
    };

    /**
     * Function handle DropCourse
     */
    $scope.handleDropCourse = function() {
        alert('handle drop course');
    };
}]);
