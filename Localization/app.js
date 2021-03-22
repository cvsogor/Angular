angular.module('app', ['components'])

.controller('BeerCounter', function($scope, $locale) {
  $scope.beers = [0, 1, 2, 3, 4, 5, 6];
  if ($locale.id == 'en-us') {
    $scope.beerForms = {
      0: 'no beers',
      one: '{} beer',
      other: '{} beers'
    };
  } else {
    $scope.beerForms = {
      0: 'žiadne pivo',
      one: '{} pivo',
      few: '{} pivá',
      other: '{} pív'
    };
  }
});


/*
Copyright 2021 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/