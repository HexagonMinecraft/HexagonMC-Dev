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
    .controller('SpigotCtrl', function ($scope, $filter) {
        $scope.creds = {
            bucket: 'spigot.download',
            access_key: 'AKIAIBQRHTAIVLW5PM5A',
            secret_key: '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'
        }

        AWS.config.update({ accessKeyId: $scope.creds.access_key, secretAccessKey: $scope.creds.secret_key });
        AWS.config.region = 'us-east-1';
        var bucket = new AWS.S3({ params: { Bucket: $scope.creds.bucket } });

        $scope.params = {
            Bucket: 'spigot.download',
        };
        bucket.listObjects($scope.params, function (err, data) {
            if (err) console.log(err, err.stack);
            else {
                $scope.$apply(function () {
                    $scope.spigotversions = data.Contents;
                });

                console.log($scope.spigotversions);
            }
        })
    })
    .filter('extrakey', function () {
        return function (text) {
            var text = text ? String(text).replace('versions/', '') : '';
            var text = text ? String(text).substring(0, text.indexOf('/')) : '';
            return text;
        };
    });