(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.home', {
        url: '/',
        views: {
          '@': {
            templateUrl: 'src/app/home/home.tpl.html',
            controller: 'HomeCtrl as home',
            resolve: {
              data: function(DataService) {
                return DataService.get();
              }
            }
          }
        }
      });
  }

  /**
   * @name  HomeCtrl
   * @description Controller
   */
  function HomeCtrl($sce, data, basicFactory) {
    var home = this;
    home.data = data.data;
    //console.log(data);

    basicFactory.getAll('Audio').success(function(data){
        home.audio=data.results;
    });
    basicFactory.getAll('Video').success(function(data){
        home.video=data.results;
    });
    /*
    home.onItemDelete=function(item){
        basicFactory.delete(item.objectId);
        home.items.splice(home.items.indexOf(item),1);
    }
    */
  }

  angular.module('home', [])
    .config(config)
    .controller('HomeCtrl', HomeCtrl);
})();
