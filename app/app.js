var app = angular.module('myApp', []);
app.controller('HomeController', function($scope){
  $scope.message = 'Hello from HomeController';
});

app.controller('surflineController', function($scope, $http){
  $http.jsonp('http://api.surfline.com/v1/forecasts/62371?resources=analysis,surf&callback=JSON_CALLBACK')
  .success(function(data){
    $scope.range = data.Analysis.surfRange[0]
  })
});

app.controller('mswController', function($scope, $http){
  $http.jsonp('http://magicseaweed.com/api/98/forecast/?spot_id=402&callback=JSON_CALLBACK&fields=timestamp,fadedRating,solidRating,swell.minBreakingHeight,swell.maxBreakingHeight,wind.speed,wind.compassDirection,wind.gusts,condition.temperature,condition.weather,charts.swell')
  .success(function(data){
    $scope.lrange = data[2];
  })
});

