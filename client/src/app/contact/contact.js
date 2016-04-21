(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.contact', {
        url: '/contact',
        views: {
          '@': {
            templateUrl: 'src/app/contact/contact.tpl.html',
            controller: 'ContactCtrl as contact'
          }
        }
      });
  }

  /**
   * @name  ContactCtrl
   * @description Controller
   */
  function ContactCtrl() {
    /*
    basicFactory.getAll('Audio').success(function(data){
        docs.audio=data.results;
    });
    */
  }

  angular.module('contact', [])
    .config(config)
    .controller('ContactCtrl', ContactCtrl);
})();
