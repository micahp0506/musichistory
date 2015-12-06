var app = angular.module("MusicHistoryApp", ["firebase", "ngRoute","angular.filter",]);


app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/songs/list', {
        templateUrl: 'partials/song-list.html',
        controller: 'MusicHistoryCtrl'
      }).
      when('/songs/new', {
        templateUrl: 'partials/song-form.html',
        controller: 'songFormCtrl'
      }).
      when('/songs/:songId', {
        templateUrl: 'partials/song-detail.html',
        controller: 'SongDetailCtrl'
      }).
      otherwise('/songs/list')
  }]);

