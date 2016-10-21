angular.module('app.services', [])
    .service('githubApi', function ($http) {
        return {
            get: function (api) {
                return $http.get('https://api.github.com/' + api)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        console.error(err);
                        return err;
                    });
            }
        };
    });