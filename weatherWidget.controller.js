(function () {
    'use strict';

    angular
        .module('WeatherWidget')
        .controller('WeatherWidgetController', WeatherWidgetController)
    ;

    function WeatherWidgetController() {
        var wwc = this;
        wwc.greeting = 'Hello, World!';
    }
})();