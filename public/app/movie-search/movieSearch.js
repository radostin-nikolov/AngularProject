angular.module('myApp')
.directive('movieSearch', function($http) {
  var directive = {
    restrict: 'E',
    link: link,
    templateUrl: 'app/movie-search/movieSearch.html'
  }

  return directive;

  function link(scope) {
    scope.submitHandler = function(query) {
      $http.get('http://www.omdbapi.com/?s=' + query)
      .then(function(response) {
        console.log(response.data);
        scope.results = response.data.Search;
      })
      .catch(function(error) {
        console.log(error);
      });
    }
  }
})
