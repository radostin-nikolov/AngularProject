angular.module('myApp')
.directive('loginForm', function() {
  var directive = {
    restrict: 'E',
    link: link,
    templateUrl: 'app/login-form/loginForm.html'
  };

  return directive;

  function link(scope) {
    scope.submitHandler = function() {
      console.log(scope.user);
    }
  }
});
