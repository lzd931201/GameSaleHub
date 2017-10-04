var app = angular.module('GameSalesHubIndex');

app.controller('GameDetailCtrl', ['$scope', '$stateParams',  function ($scope, $stateParams) {
    this.game = $stateParams;
    console.log($stateParams);
}]);
