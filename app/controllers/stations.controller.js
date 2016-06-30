(function() {
    'use strict';

    angular
        .module('controllers')
        .controller('StationController', StationController);

    function StationController($http) {

        var vm = this;

        vm.map = { center: { latitude: 45, longitude: -73 }, zoom: 16 };

        vm.newStation = {};

        vm.setStation = function(currentStation){
            if(vm.currentStation != currentStation)
                vm.currentStation = currentStation;
            else
                vm.currentStation = undefined;
            vm.map = { center: { latitude : vm.currentStation.geoLat, longitude: vm.currentStation.geoLong }, zoom: 16};
            console.log(vm.map);
        };

        vm.createStation = function(){
            var newStation = {
                name: vm.newStation.name,
                age: vm.newStation.age
            }

            vm.allStations.splice(0, 0, newStation);

            vm.newStation = {};
        }

        vm.allStations = [];


        $http.get('data/trainstations.json').then(function(stations){

            vm.allStations = stations.data;
            console.log(vm.allStations);
        });


    }


})();
