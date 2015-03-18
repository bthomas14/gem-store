(function() {
var app = angular.module('gemStore', ['store-products']);

app.controller('StoreController', [ '$http', function($http){
  //this.products = $http({ method: 'GET', url: '/products.json' });
  //$http.get('/products.json', { apiKey: 'myApiKey' });
  var store = this;

  store.products = [];
  $http.get('store-products.json').success(function(data){
    store.products = data;
  });
  //$http.post('/path/to/resource.json', { param: 'value' }); //post to server
  //$http.delete('/path/to/resource.json'); //delete from server
  //$http({ method: 'OPTIONS', url: '/path/to/resource.json' }); //post other methods to server using config object

}]);

/*
app.controller('GalleryController', function(){

  this.current = 0;

  this.setCurrent = function(imageNumber){
    this.current = imageNumber || 0;
  };
});
*/
app.controller("ReviewController", function(){
  this.review = {};

  this.addReview = function(product) {
    this.review.createdOn = Date.now();
    product.reviews.push(this.review);
    this.review = {};
  };
});

})();
