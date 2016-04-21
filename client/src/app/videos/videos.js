(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.videos', {
        url: '/videos',
        views: {
          '@': {
            templateUrl: 'src/app/videos/videos.tpl.html',
            controller: 'VideoCtrl as vid'
          }
        }
      });
  }

  /**
   * @name  VideoCtrl
   * @description Controller
   */
  function VideoCtrl() {
    //var vid = this;
    /*
    basicFactory.getAll('Audio').success(function(data){
        docs.audio=data.results;
    });
    */
  }

  angular.module('videos', [])
    .config(config)
    .controller('VideoCtrl', VideoCtrl);
})();
