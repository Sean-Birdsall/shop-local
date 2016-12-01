angular.module('shopLocal')
  .controller('mainController', mainController);

function mainController() {
  var main = this;
  
  main.greeting = "Hello Squirrels";
}