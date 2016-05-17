
angular.module('MyProfile', ['ngSanitize','firebase'])
        .controller('ExampleController', ['$scope','$http','$firebaseObject', function($scope, $http, $firebaseObject)
        {
              var res = new Firebase('https://htlinkedin.firebaseio.com/');

              res.createUser({
                email    : "bobtony@firebase.com",
                password : "correcthorsebatterystaple"
              }, function(error, userData) {
                if (error) {
                  console.log("Error creating user:", error);
                } else {
                  console.log("Successfully created user account with uid:", userData.uid);
                }
              });


              $scope.data = $firebaseObject(res);
             $scope.data.$loaded()
                .then(function() {

                  function res(data){
                     var s="";
                      // console.log(data);
                       data.forEach(function(entry){s+=entry.content+"\n";});
                      // console.log(s);
                      return s;
                   };

                   $scope.summarycontent=res($scope.data.summary.contents);
                  $scope.educationcontent=res($scope.data.education.contents);
                  $scope.educationcontent=res($scope.data.education.contents);
                  $scope.projectcontent=res($scope.data.project.contents);
                
                  $scope.data_experience = $scope.data.experience.contents;
                  $scope.data_skill = $scope.data.experience.contents;

                  console.log($scope.data);
                })
                .catch(function(err) {
                  console.error(err);
                });

           $scope.edit = {statusfullname:{name:"hello", status:false},
           					statusjob:{name:"hello",  status:false},
           					statushistory:{name:"hello",  status:false},
           					statusinformationme:{name:"hello",  status:false},
                    statesummary:{name:"hello",  status:false},
                    stateeducation:{name:"hello",  status:false},
                    stateproject:{name:"hello",  status:false},
                    stateavatar:{name:"hello",  status:false},
                    stateskill:{name:"hello",  status:false},
           				};

            $scope.hidetextbox = function(nameshow){
            	nameshow.status = !nameshow.status;
              // console.log(nameshow);   
              console.log( $scope.data);

            };
            $scope.changestate = function(state){
              state = !state;
              console.log(state);   

            }
               $scope.addex = function(){
              var y = {
                        "href":"https://www.linkedin.com/company/linkedin?trk=ppro_cprof",
                        "logo_img":"https://media.licdn.com/media/AAEAAQAAAAAAAAL0AAAAJGMwYWZhNTYxLWJkMTktNDAzMi05NzEzLTlhNzUxMGU0NDg0Mw.png",
                        "title_href":"https://www.linkedin.com/title/ceo?trk=pprofile_title",
                        "title_name":"Student",
                        "subtitle_name":"University of Sience",
                        "date_range":"September 2013 – Present (2 years 7 months)",
                        "content":"Connecting the world's professionals to make them more productive and successful. Since joining the company in December 2008, LinkedIn has expanded its global platform to 23 languages and more than 30 offices around the world, grown its membership base from 33M to more than 347M, and increased its revenue from $78M to over $2.2B in 2014.",
                        "status":true
                    };
             $scope.data_experience.push(y);
          };

            $scope.addskill = function(){
               var x={
                            "name":"C/C++",
                            "href":"https://www.linkedin.com/topic/product-development?trk=pprofile_topic",
                            "title":"C/C++"
                        };
              $scope.data.skill.contents.push(x);
            }
         
        }]);