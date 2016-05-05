
angular.module('MyProfile', ['ngSanitize'])
        .controller('ExampleController', ['$scope','$http', function($scope, $http)
        {
            $http.get('json.json').success(function(data) {
              $scope.data = data;

              function res(data){
                 var s="";
                 console.log(data);
                  data.forEach(function(entry){s+=entry.content+"\n";});
                 console.log(s);
                  return s;
              };

              $scope.summarycontent=res($scope.data.summary.contents);
              $scope.educationcontent=res($scope.data.education.contents);
              $scope.educationcontent=res($scope.data.education.contents);
              $scope.projectcontent=res($scope.data.project.contents);

            }); 

          


           $scope.edit = {statusfullname:{name:"hello", status:false},
           					statusjob:{name:"hello",  status:false},
           					statushistory:{name:"hello",  status:false},
           					statusinformationme:{name:"hello",  status:false},
                    statesummary:{name:"hello",  status:false},
                    stateeducation:{name:"hello",  status:false},
                    stateproject:{name:"hello",  status:false},
                    stateavatar:{name:"hello",  status:false},
                    stateskill:{name:"hello",  status:false}
           				};

            $scope.hidetextbox = function(nameshow){
            	nameshow.status = !nameshow.status;
              console.log(nameshow);   
            };

         
        }]);






 	// npm install serve -g serve
       // (function(console){

//     console.save = function(data, filename){

//         if(!data) {
//             console.error('Console.save: No data')
//             return;
//         }

//         if(!filename) filename = 'console.json'

//         if(typeof data === "object"){
//             data = JSON.stringify(data, undefined, 4)
//         }

//         var blob = new Blob([data], {type: 'text/json'}),
//             e    = document.createEvent('MouseEvents'),
//             a    = document.createElement('a')

//         a.download = filename
//         a.href = window.URL.createObjectURL(blob)
//         a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
//         e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
//         a.dispatchEvent(e)
//     }
// })(console)