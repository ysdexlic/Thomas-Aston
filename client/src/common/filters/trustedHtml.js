(function() {
  'use strict';

  function trustedHtml($sce) {
    return function(html) {
        return $sce.trustAsHtml(html);
    };
  }

  angular.module('common.filters.trustedHtml', [])
    .filter('trustedHtml', trustedHtml);
})();
