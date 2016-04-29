(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.music', {
        url: '/music',
        views: {
          '@': {
            templateUrl: 'src/app/music/music.tpl.html',
            controller: 'MusicCtrl as music'

          }
        }
      });
  }

  /**
   * @name  MusicCtrl
   * @description Controller
   */
  function MusicCtrl(basicFactory) {
    var vm = this;
    basicFactory.getAll('Art').success(function(data){
        vm.art=data.results;
    });
  }

  angular.module('music', [])
    .config(config)
    .controller('MusicCtrl', MusicCtrl);
})();
