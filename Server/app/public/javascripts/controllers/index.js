var app = angular.module('GameSalesHubIndex');

app.controller('IndexCtrl', ['$scope', '$http', 'GameDataService', '$mdSidenav', function ($scope, $http, GameDataService, $mdSidenav) {
    this.message = 'Game Sales Hub';
    // var controller = this;
    // var games = [];
    // $http.get('/api/games')
    //     .then(function(response) {
    //         controller.games = response.data;
    //         games = response.data;
    //         $scope.games = response.data;
    //     })
    //     .catch(function(response) {
    //         console.log(response);
    //     });
    // console.log(this.games);
    // console.log(games);
    GameDataService.getAllGameData()
        .then(function(response) {
            $scope.games = response.data;
        });
    this.toggleSidenav = function() {
      $mdSidenav('indexSidenav').toggle();
    };
    // this.games = GameDataService.games;
    console.log(this.games);
}]);
