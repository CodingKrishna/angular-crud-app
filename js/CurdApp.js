var app = angular.module('myApp',[]);
app.controller('tabCtrl',function($scope){
    $scope.friend={};
    $scope.friendsList=[
        {name:"phani",id:"01",mobileNo:"1223",emailId:"phani@gmail.com"},
        {name:"krishna",id:"02",mobileNo:"7894",emailId:"krishna@gmail.com"},
        {name:"pcbhargav",id:"03",mobileNo:"2589",emailId:"pc@gmail.com"},
        {name:"kishon",id:"04",mobileNo:"6646",emailId:"kishon@gmail.com"},
        {name:"rajith",id:"05",mobileNo:"5166",emailId:"rajith@gmail.com"},
        {name:"vijay",id:"06",mobileNo:"1549496",emailId:"vijay@gmail.com"},
        {name:"pavan",id:"07",mobileNo:"1653265",emailId:"pavan@gmail.com"},
        {name:"praveen",id:"08",mobileNo:"165861",emailId:"praveen@gmail.com"},
    ];
    $scope.addFriend = function() {
        $scope.friendsList.push($scope.friend);
    };
    $scope.deleteFriend = function(index) {
        $scope.friendsList.splice(index,1);
    };
    $scope.editFriendInfo = function(user,index) {
        $scope.friend=angular.copy(user);
        $scope.idx = index;
        
    };
    $scope.updateFriendInfo = function(){
        $scope.friendsList[$scope.idx] = $scope.friend;
        $scope.friend = {};
    };
    

});
