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

  angular.module('contact', [])
    .config(config)
    .controller('ContactCtrl', ContactCtrl);
})();
