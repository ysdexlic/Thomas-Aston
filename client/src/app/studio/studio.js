(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.studio', {
        url: '/my_studio',
        views: {
          '@': {
            templateUrl: 'src/app/studio/studio.tpl.html',
            controller: 'StudioCtrl as studio'
          }
        }
      });
  }

  /**
   * @name  StudioCtrl
   * @description Controller
   */
  function StudioCtrl(basicFactory) {
    var vid = this;

    basicFactory.getAll('Studio').success(function(data){
        vid.pics=data.results;
    });
  }

  angular.module('studio', [])
    .config(config)
    .controller('StudioCtrl', StudioCtrl);
})();



