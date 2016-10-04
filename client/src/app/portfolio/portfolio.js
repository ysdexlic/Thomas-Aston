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

    var parallaxElements = $('.para-stuff'),
      parallaxQuantity = parallaxElements.length;

    $(window).on('scroll', function () {

      window.requestAnimationFrame(function () {

        for (var i = 0; i < parallaxQuantity; i++) {
          var currentElement =  parallaxElements.eq(i);
          var scrolled = $(window).scrollTop();

          currentElement.css({
            'transform': 'translate3d(0,' + scrolled * 0.3 + 'px, 0)'
          });

        }
      });

    });

  }

  angular.module('portfolio',
    [
      'duParallax'
    ])
    .config(config)
    .controller('PortfolioCtrl', PortfolioCtrl);
})();
