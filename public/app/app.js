angular.module('myApp', [
  'ngAnimate',
  'ui.bootstrap',
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home/store");
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'app/home/home.html'
    })
    .state('home.store', {
      url: '/store',
      templateUrl: 'app/store-front/storeFront.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'app/about/about.html'
    })
    .state('cart', {
      url: '/cart',
      templateUrl: 'app/cart/cart.html'
    })
});
