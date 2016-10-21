angular.module('app.controllers', ['app.services'])
    .controller('HomeCtrl', function ($scope) {

    })
    .controller('HeaderCtrl', function ($scope, $http, githubApi) {
        githubApi.get('orgs/HexagonMinecraft/repos').then(function (res) {
            $scope.repos = res.data;
            console.log($scope.repos);
        }).catch(function (err) {
            onError(err);
        });
    })
    .filter('extrakey', function () {
        return function (text) {
            var text = text ? String(text).replace('versions/', '') : '';
            var text = text ? String(text).substring(0, text.indexOf('/')) : '';
            return text;
        };
    })
    .controller('SpigotCtrl', function ($scope, $filter, $http) {
        $http.get('https://s3.amazonaws.com/spigot.download/',
            {
                transformResponse: function (data) {
                    // convert the data to JSON and provide
                    // it to the success function below
                    var x2js = new X2JS();
                    var json = x2js.xml_str2json(data);
                    return json;
                }
            })
            .success(function (data, status) {
                // send the converted data back
                // to the callback function
                $scope.spigotversions = data.ListBucketResult.Contents;

                console.log($scope.spigotversions);
            });
    })
    .filter('extrakey', function () {
        return function (text) {
            var text = text ? String(text).replace('versions/', '') : '';
            var text = text ? String(text).substring(0, text.indexOf('/')) : '';
            return text;
        };
    });