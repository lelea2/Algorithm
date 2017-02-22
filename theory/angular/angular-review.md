-- References:
* https://www.toptal.com/angular-js/interview-questions


##### 1. What are the ways to communicate between modules of your application using core AngularJS functionality? Name three ways.
* Using services
* Using events
* By assigning models on $rootScope
* Directly between controllers, using $parent, nextSibling, etc
* Directly between controllers, using ControllerAs, or other forms of inheritance


##### 2. What is $rootScope and how does it relate to $scope?

* $rootScope is the parent object of all $scope Angular objects created in a web page.


##### 3. What is Angular Directive
AngularJS directives (ng-directives) are HTML attributes with an ng prefix (ng-model, ng-app, ng-repeat, ng-bind) used by Angular to extends HTML.

* The ng-app directive defines an AngularJS application.
* The ng-model directive binds the value of HTML controls (input, select, textarea) to application data.
* The ng-bind directive binds application data to the HTML view.


##### 4. Error Handling in AngularJS

```javascript
app.config(function($provide) {
  $provide.decorator("$exceptionHandler", function($delegate, $injector){
    return function(exception, cause){
      var $rootScope = $injector.get("$rootScope");
      $rootScope.addError({message:"Exception", reason:exception});
      $delegate(exception, cause);
    };
  });
});
```

##### 5. Promising Errors

```javascript
someService
  .doWork()
  .then(workComplete)
  .catch(errors.catch("Could not complete work!"));

var workComplete = function(result){
  return  $q.reject("Feeling lazy");
};

app.factory("errors", function($rootScope){
  return {
    catch: function(message){
      return function(reason){
        $rootScope.addError({message: message, reason: reason})
      };
    }
  };
});

```
