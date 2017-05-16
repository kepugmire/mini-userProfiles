angular.module('userProfiles').controller('MainController', function($scope, mainService){
    
    $scope.thisAppIsBroken = "This angular app is working";

    $scope.test2=mainService.test2;
    
   
    $scope.getUsers = function(){
        $scope.users = mainService.getUsers();
    }
    
    $scope.getUsers();
    
    $scope.toggleFavorite = mainService.toggleFavorite;


})