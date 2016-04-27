
angular.module('MyProfile', [])
        .controller('ExampleController', ['$scope', function($scope)
        {
            // data
            $scope.profile = {
                src:'http://i.imgur.com/kl28G4G.jpg',
                href:'https://www.facebook.com/0195thanhhieu'
            };
            $scope.profile_overview = {
                name:'Hiếu Thanh'
            };
            $scope.extra_info={
                current:'google, facebook',
                previous:'Malaria No More, Accel Partners, Greylock',
                recommend:'7 people have recommended Jeff',
                websites:'Company Website'
            };
            $scope.description={
                content1:"Internet executive with over 20 years of experience, including general management of mid to large size organizations, corporate development, product development, business operations, and strategy.",
                 content2:"Currently CEO at LinkedIn, the web's largest and most powerful network of professionals.",
                content3:"Prior to LinkedIn, was an Executive in Residence at Accel Partners and Greylock Partners. Primarily focused on advising the leadership teams of the firm's existing consumer technology portfolio companies while also working closely with the firm’s partners to evaluate new investment opportunities.",
                content4:"Previously served in key leadership roles at Yahoo! for over seven years, most recently as the Executive Vice President of Yahoo!'s Network Division managing Yahoo's consumer web product portfolio, including Yahoo's Front Page, Mail, Search, and Media products.",
                content5:"Specialties: general management, corporate development, product development, business operations, strategy, product marketing, non-profit governance"
                
                 };
        
           
        }]);
                        
 
                   