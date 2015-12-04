angular.module('supersimpleautocomplete', [])
    .directive('supersimpleautocomplete', function() {
        return {
            restrict : 'E',
            replace : true,
            scope : {
                "id" : "@id",
                "placeholder" : "@placeholder",
                "source": "=",
            },
            templateUrl : 'ssac.html',
            link : function(scope, elem) {
                var inputField = elem.find("input");
                inputField.on("keyup", function() {
                    scope.results = [];
                    if (scope.searchTerm.trim().length > 0) {
                        for (var sourceElem in scope.source) {
                            if (scope.source[sourceElem].indexOf(scope.searchTerm) !== -1) {
                                scope.results.push(scope.source[sourceElem]);
                            }
                        }
                    }
                    scope.$apply();
                });

                scope.selectItem = function(index) { console.log(scope.results[index]); }
            }
        };
    });