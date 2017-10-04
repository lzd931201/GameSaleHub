var app = angular.module('GameSalesHubIndex');

app.service('GameDataService', ['$http', function($http) {
    this.getAllGameData = function() {
        var svc = this;
        var games = {}
        return $http.get('/api/games');
        //     .then(response => {
        //         svc.games = response.data;
        //     })
        //     .catch(function(response) {
        //         console.log('ERROR');
        //     });
        // console.log('out of $http');
        // console.log(this.games);
        // return this.games;
    };
}]);
