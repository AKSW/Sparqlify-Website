//assign the module
angular.module('dlBox', [])

        //controller for wiring the editor together
        .controller('dlBoxController', ['$scope', function($scope){
        	$scope.foo = 'bar';

        	$scope.init = function(){
        		console.log('fooLog');
        	}
        }]);