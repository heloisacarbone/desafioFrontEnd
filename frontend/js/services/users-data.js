/**
 * Created by heloisa.r.carbone on 11/8/2016.
 */

desafio.factory('usersData', function($http) {
    return {
        getUsers: function() {
            return $http({method: 'GET', url: '/data/users.json'});
        }
    };
});
