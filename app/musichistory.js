var app = angular.module("MusicHistoryApp", ["ngRoute"]);


app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/songs/list', {
        templateUrl: 'partials/song-list.html',
        controller: 'MusicHistoryCtrl'
      }).
      when('/songs/new', {
        templateUrl: 'partials/song-form.html',
        controller: 'MusicHistoryCtrl'
      }).
      otherwise('/songs/list')
  }]);

