# angular-ssac
This is a SuperSimpleAutoComplete (ssac) done in Angular.js: no timer, no UI, no special cases. 
Good as basic example of directive with DOM manipulation and isolated scope. I've also written a blog article about this as part of the [#AngularSecondDay](http://www.davideserafini.com/tag/angularsecondday/) serie named [2. Build a super simple autocomplete field with directives](http://www.davideserafini.com/2015/12/angularsecondday-build-an-autocomplete-field-with-directives/)

## How to use
Usage is very simple, just add 
```html
<superSimpleAutoComplete id="autocomplete" placeholder="yourPlaceholder" source="yourSourceOfData"/>
```
in your html file. yourSourceOfData is the array to use as haystack and present in your $scope, something like
```javascript
.controller('yourController', function($scope) {
	...
	$scope.yourSourceOfData = ['something1', 'something2', 'guess what?', 'another something'];
	...
})
