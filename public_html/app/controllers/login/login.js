/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
sbgSampleApplication.controller('logInCtrl', function($scope, $location) {
        
	$scope.logIn = function() {
                        if($scope.username == "sbg" && $scope.password == "sbg"){
			 $location.path("/dashboard");
                     } else {
                         alert("Invalid Username and Password");
                     }
                     };
                });		