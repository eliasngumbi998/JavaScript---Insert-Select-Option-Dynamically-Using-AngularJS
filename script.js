var app = angular.module("myModule", [])
							   .controller("myController", function($scope){
 
								$scope.newName = {};
 
								$scope.names = [
									{name: "Jason Smith"},
									{name: "Claire Temple"},
								];
 
								$scope.saveName = function(){
									if($scope.name ==""){
										alert("Please enter something first!");
									}else{
										$scope.names.push($scope.newName);
										$scope.newName = {};
									}
								};		
 
 
});
