var app = angular.module('GameSalesHubIndex');

app.controller('GameCardCtrl', ['$scope', '$http', function ($scope, $http, GameDataService) {
    this.message = 'Game Sales Hub';
    this.setTab = function(index) {
        this.index = index;
        this.game = $scope.games[index];
        $scope.imagePath = 'http://placehold.it/150x150';
        //console.log(this.game);
    };
    this.viewDetail = function() {
        console.log($state);
        $state.go('gameDetail', this.game);
    };
}]);
