angular.module('starter.controllers', [])

.controller('loginCtrl', function($scope, $http, $state) {

   $scope.data = {};
 
    $scope.submit = function(){
        var link = 'http://45.55.194.40/app/api/authenticate';
 
        $http.post(link, {email : $scope.data.email, password : $scope.data.password})
		.then(function (res){
            $scope.response = res.data['token'];
			sessionStorage.setItem('token', $scope.response);
			//var landingUrl = $window.location.host + "/app/dash";
			//$window.open(landingUrl, "_self");
			$state.go('app.dash', {}, {location: "replace", reload: true});
        });
    };
})

.controller('listwithdrawCtrl', function($scope, $http, $state) {
  $scope.result = "";
  var token = sessionStorage.getItem('token');
  $http.get('http://45.55.194.40/app/api/listwithdraws?token='+ token)
    .success(function(data, status, headers,config){
      //console.log('data success');
      //console.log(JSON.stringify(data)); // for browser console
      $scope.result = data; // for UI
    })
    .error(function(data, status, headers,config){
      $scope.data.error = { message: error, status: status};
        sessionStorage.removeItem('token');
        $state.go('login');
      console.log('data error');
    })
    .then(function(result){
      things = result.data;
    });
})

.controller('listdepositsCtrl', function($scope, $http, $state) {
  $scope.result = "";
  var token = sessionStorage.getItem('token');
  $http.get('http://45.55.194.40/app/api/listdeposits?token='+ token)
    .success(function(data, status, headers,config){
      //console.log('data success');
      //console.log(JSON.stringify(data)); // for browser console
      $scope.result = data; // for UI
    })
    .error(function(data, status, headers,config){
      $scope.data.error = { message: error, status: status};
        sessionStorage.removeItem('token');
        $state.go('login');
      console.log(data.error);
    })
    .then(function(result){
      things = result.data;
    });
})

.controller('listaddressesCtrl', function($scope, $http, $state) {
  $scope.result = "";
  var token = sessionStorage.getItem('token');
  $http.get('http://45.55.194.40/app/api/listaddresses?token='+ token)
    .success(function(data, status, headers,config){
     // console.log('data success');
     // console.log(JSON.stringify(data)); // for browser console
      $scope.result = data; // for UI
    })
    .error(function(data, status, headers,config){
      $scope.data.error = { message: error, status: status};
        sessionStorage.removeItem('token');
        $state.go('login');
      console.log(data.error);
    })
    .then(function(result){
      things = result.data;
    });
})

.controller('transactionsCtrl', function($scope, $http, $state) {
  $scope.result = "";
  var token = sessionStorage.getItem('token');
  $http.get('http://45.55.194.40/app/api/transactions?token='+ token)
    .success(function(data, status, headers,config){
      console.log('data success');
      console.log(JSON.stringify(data)); // for browser console
      $scope.result = data; // for UI
    })
    .error(function(data, status, headers,config){
      $scope.data.error = { message: error, status: status};
        sessionStorage.removeItem('token');
        $state.go('login');
      console.log('data error');
    })
    .then(function(result){
      things = result.data;
    });
})

.controller('balanceCtrl', function($scope, $http, $state) {
  $scope.result = "";
  var token = sessionStorage.getItem('token');
  $http.get('http://45.55.194.40/app/api/balance?token='+ token)
    .success(function(data, status, headers,config){
      //console.log('data success');
      console.log(data); // for browser console
      $scope.result = data; // for UI
    })
    .error(function(data, status, headers,config){
      $scope.data.error = { message: error, status: status};
        sessionStorage.removeItem('token');
        $state.go('login');
      console.log('data error');
    })
    .then(function(result){
      things = result.data;
    });
})

.controller('profileCtrl', function($scope, $http, $state) {
  $scope.result = "";
  var token = sessionStorage.getItem('token');
  $http.get('http://45.55.194.40/app/api/profile?token='+ token)
    .success(function(data, status, headers,config){
      //console.log('data success');
      //console.log(data); // for browser console
      $scope.result = data; // for UI
    })
    .error(function(data, status, headers,config){
      $scope.data.error = { message: error, status: status};
        sessionStorage.removeItem('token');
        $state.go('login');
      console.log('data error');
    })
    .then(function(result){
      things = result.data;
    });
})

.controller("scanCtrl", function($scope, $cordovaBarcodeScanner) {
 
    $scope.scanBarcode = function() {
        $cordovaBarcodeScanner.scan().then(function(imageData) {
            alert(imageData.text);
            console.log("Barcode Format -> " + imageData.format);
            console.log("Cancelled -> " + imageData.cancelled);
        }, function(error) {
            console.log("An error happened -> " + error);
        });
    };
 
})


.controller('updateprofileCtrl', function($scope, $http, $state) {
  $scope.result = "";
  $scope.submit = function(){
  var token = sessionStorage.getItem('token');
  $http.post('http://45.55.194.40/app/api/updateprofile?token='+ token,  {name : $scope.data.name, phone : $scope.data.phone})
    .success(function(data, status, headers,config){
      //console.log('data success');
      console.log(data); // for browser console
      $scope.result = data; // for UI
    })
    .error(function(data, status, headers,config){
      $scope.data.error = { message: error, status: status};
        sessionStorage.removeItem('token');
        $state.go('login');
      console.log('data error');
    })
    .then(function(result){
      things = result.data;
    });
  }
});