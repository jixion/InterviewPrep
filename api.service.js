(function () {
    'use strict';
    angular.module('api')
        .service('dataService', dataService)
    ;
    dataService.$inject = ['$http'];
    function dataService($http) {
        var ds = this;

        ds.getApod = function () {
            return $http({
                method: 'GET',
                url: 'https://api.nasa.gov/planetary/apod?api_key=8b8ivohwBVjazxt1Ex7v0ScVEjh2yPTEjctGSHqn'
            }).then(function (result) {
                return result.data;
            });
        };
    }
})();