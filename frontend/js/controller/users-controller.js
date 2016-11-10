/**
 * Created by heloisa.r.carbone on 11/7/2016.
 */
'use strict'

desafio.controller('UsersController',
    function UsersController($scope, usersData) {


        usersData.getUsers().success(function (users) {
            console.log(users);
            $scope.users = users;
        });

        $scope.changeUsersData = function() {
            console.log($scope.newEntry)
            $scope.users.users.push($scope.newEntry);
            $scope.newEntry = "";
        }

        $scope.sortorder = "name";

        $scope.sortBy = function (sortorder) {
            $scope.changeFilterGender('all');
            $scope.sortorder = sortorder;

        };

        $scope.filtergender = "all";

        $scope.changeFilterGender = function (gender) {
            $scope.filtergender = gender;
        };
        
    });