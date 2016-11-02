(function () {
    'use strict';

    angular
        .module('WeatherWidget')
        .controller('WeatherWidgetController', WeatherWidgetController)
    ;

    WeatherWidgetController.$inject = ['dataService'];
    function WeatherWidgetController(dataService) {
        var wwc = this;
        dataService.getApod().then(function (result) {
            wwc.data = result;
        })
    }
})();