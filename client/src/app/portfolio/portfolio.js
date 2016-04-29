(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.portfolio', {
        url: '/about_me',
        views: {
          '@': {
            templateUrl: 'src/app/portfolio/portfolio.tpl.html',
            controller: 'PortfolioCtrl as docs'
          }
        }
      });
  }

  /**
   * @name  PortfolioCtrl
   * @description Controller
   */
  function PortfolioCtrl() {

    //var docs = this;
    /*
    basicFactory.getAll('Audio').success(function(data){
        docs.audio=data.results;
    });
    */
  }

  angular.module('portfolio',
    [
      'duParallax'
    ])
    .config(config)
    .controller('PortfolioCtrl', PortfolioCtrl);
})();
