
angular.module('MyProfile', [])
        .controller('ExampleController', ['$scope','$http', function($scope, $http)
        {
            
            
           $http.get('json/profile.json').success(function(data) {
              $scope.profile = data;
            });

           $http.get('json/profile_overview.json').success(function(data) {
              $scope.profile_overview = data;
            });

           $http.get('json/extra_info.json').success(function(data) {
              $scope.extra_infos = data;
            });

            $http.get('json/aboutme.json').success(function(data) {
              $scope.aboutmes = data;
            });    

            $http.get('json/summary.json').success(function(data) {
              $scope.summary = data;
            });     
            
            $http.get('json/position.json').success(function(data) {
              $scope.positions = data;
            });  
            
             $http.get('json/skill.json').success(function(data) {
              $scope.skills = data;
            }); 
             $http.get('json/education.json').success(function(data) {
              $scope.education = data;
            });  
             $http.get('json/project.json').success(function(data) {
              $scope.project = data;
            });  
       
           
        }]);
                        
 
                   