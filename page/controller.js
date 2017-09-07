//appends angular object to the variable app
var app = angular.module('viewer', []);
  //sets the main controller directive of the app
	app.controller('MainCtrl', function($scope, $http) {
		  $scope.search = "";
	  	$scope.data = [];
	  	$scope.submitForm = function(search) {
	    	$scope.data = search;
        $scope.search = "";
        //variable where the AJAX request for JSON is made for the Wikipedia API
	    	var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ $scope.data +"&format=json&callback=?";
        var html = "";
        //AJAX method to get JSON data
	    	$.ajax({
	    		type: "GET",
	    		url: "/translation",
	    		dataType:"json",
	    		success: function(response){
            console.log(response)
          }

        });
      };
  });

	