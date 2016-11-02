(function () {
    angular
        .module('WeatherWidget')
        .component('weatherWidget', {
            templateUrl: 'weatherWidget.template.html',
            bindings: {
                greeting: '<'
            }
        });
})();