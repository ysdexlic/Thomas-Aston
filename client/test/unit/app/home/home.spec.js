/* jshint undef:false*/
(function() {
  'use strict';

  describe('HomeCtrl', function() {
    var rootScope;
    var fakeData = ['some', 'data'];
    var ctrl;
    var scope;

    beforeEach(module('app'));
    beforeEach(inject(function($rootScope, $controller) {
      rootScope = $rootScope;
      scope = $rootScope.$new();
      ctrl = $controller('HomeCtrl as home', {
        $scope: scope,
        data: {
          data: fakeData
        }
      });
    }));

  });
})();
