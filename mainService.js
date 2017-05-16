angular.module("userProfiles").service('mainService', function(){

this.test2="Service working."



var data = 
  [
    {
        "id": 0,
        "first_name": "George",
        "last_name": "Bluth",
        "avatar": "https://therebelprince.files.wordpress.com/2013/06/dc1.jpg"
    },
    {
        "id": 1,
        "first_name": "Lucille",
        "last_name": "Bluth",
        "avatar": "https://flavorwire.files.wordpress.com/2013/05/lucille2.jpg"
    },
    {
        "id": 2,
        "first_name": "Oscar",
        "last_name": "Bluth",
        "avatar": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Oscarbluthcoffeeshop.JPG/200px-Oscarbluthcoffeeshop.JPG"
    }];


     this.getUsers = function(){
        return data;   
    }
    
    this.toggleFavorite = function(userIndex){
        data[userIndex].isFavorite = !data[userIndex].isFavorite;
    }


});