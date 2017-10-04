var app = angular.module('GameSalesHubIndex');

app.controller('GameDetailCtrl', ['$scope', '$stateParams',  function ($scope, $stateParams) {
    this.game = $stateParams.game;
    $scope.game = this.game;
    console.log($scope.game);
}]);
