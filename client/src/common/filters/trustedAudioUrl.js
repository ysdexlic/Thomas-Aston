
(function() {
  'use strict';

  function trustedAudioUrl($sce) {
    return function(audioFile) {
        return $sce.trustAsResourceUrl(audioFile);
    };
  }

  angular.module('common.filters.trustedAudioUrl', [])
    .filter('trustedAudioUrl', trustedAudioUrl);
})();
