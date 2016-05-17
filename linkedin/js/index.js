
angular.module('formapp', ['ngSanitize','firebase'])
        .controller('formcontroller', ['$scope','$http','$firebaseObject' , '$window', function($scope, $http, $firebaseObject, $window)
        {
              $scope.link="#"
              $scope.user="";
              $scope.password="";
              $scope.login = function(){
                  var ref = new Firebase('https://htlinkedin.firebaseio.com/');
                  ref.authWithPassword({
                      email    : $scope.user+"",
                      password : $scope.password+""
                    }, function(error, authData) {
                      if (error) {
                        console.log("Authenticated Error with payload:");
                      } else {
                        templateUrl:'google.com';
                        console.log("Authenticated successfully with payload:", authData);
                        location.href = "child/index.html";

                      }
                    });
              };
         
        }]);