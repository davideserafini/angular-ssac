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
                        scope.source.forEach(function(sourceElem) {
                            if (sourceElem.indexOf(scope.searchTerm) !== -1) {
                                scope.results.push(sourceElem);
                            };
                        });
                    };
                    scope.$apply();
                });

                scope.selectItem = function(index) { console.log(scope.results[index]); }
            }
        };
    });