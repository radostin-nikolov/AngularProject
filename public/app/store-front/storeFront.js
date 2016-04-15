angular.module('myApp')
.controller('storeFrontController', function($scope, $http, productsFactory) {
  $scope.products = productsFactory.getProducts;
  $scope.addToCart = productsFactory.addToCart;
  if (!productsFactory.getProducts().length) {
    $http.get('http://beta.json-generator.com/api/json/get/41IRga-kW')
    .then(function(response) {
      response.data.forEach(function(product) {
        productsFactory.addProduct(product)
      });
    });
  }
});
