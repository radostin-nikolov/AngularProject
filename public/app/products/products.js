angular.module('myApp')
.factory('productsFactory', productsFactory);

function productsFactory() {
  var factory = {
    addProduct: addProduct,
    getProducts: getProducts,
    addToCart: addToCart,
    getProductsFromCart: getProductsFromCart
  };

  var products = [];
  var cart = [];
  activate()

  return factory;

  function activate() {
    var localProducts = JSON.parse(window.localStorage.cart ? window.localStorage.cart : '[]');
    cart = localProducts
  }

  function addProduct(product) {
    products.push(product)
  }

  function getProducts() {
    return products;
  }

  function addToCart(product) {
    cart.push(product);
    cacheProducts();
  }

  function cacheProducts() {
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }

  function getProductsFromCart() {
    return cart;
  }
}
