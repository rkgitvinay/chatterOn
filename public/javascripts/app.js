'use strict';


angular.module('admin', [])
    .controller('HomeCtrl',function ($http,$scope, $rootScope, $interval){ 

        //$interval(checkUpdate, 30000);   	

        //var base_url = '52.38.120.7:8080';
        var base_url = 'localhost:3000';


        $scope.test = function(){
            $http({
              method  : 'GET',
              url     : 'http://'+base_url+'/admin/corn',
              params  : $scope.formData                    
            })
            .success(function (response) {
                  if(response.status=='success' && response.data.length > 0){
                    $rootScope.hash_id = response.hash_id;
                    $rootScope.max_id = response.data[0].id;
                    $rootScope.hash = response.hash;
                    $rootScope.created_at = response.data[0].created_at;                
                    $scope.tweet_list = response.data;
                 }else{
                    $scope.tweet_list = [];
                 }
            });
        }

    });  
   
