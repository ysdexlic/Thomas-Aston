(function() {
  'use strict';
  /*jshint unused:false*/

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
  function StudioCtrl(Lightbox, $rootScope) {
    var vm = this;

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

    vm.images = [
      {
        'url': '../../../assets/images/01.jpg',
        'thumbUrl': '../../../assets/images/thumb01.jpg'
      },
      {
        'url': '../../../assets/images/02.jpg',
        'thumbUrl': '../../../assets/images/thumb02.jpg'
      },
      {
        'url': '../../../assets/images/03.jpg',
        'thumbUrl': '../../../assets/images/thumb03.jpg'
      },
      {
        'url': '../../../assets/images/04.jpg',
        'thumbUrl': '../../../assets/images/thumb04.jpg'
      },
      {
        'url': '../../../assets/images/05.jpg',
        'thumbUrl': '../../../assets/images/thumb05.jpg'
      },
      {
        'url': '../../../assets/images/06.jpg',
        'thumbUrl': '../../../assets/images/thumb06.jpg'
      },
      {
        'url': '../../../assets/images/07.jpg',
        'thumbUrl': '../../../assets/images/thumb07.jpg'
      },
      {
        'url': '../../../assets/images/08.jpg',
        'thumbUrl': '../../../assets/images/thumb08.jpg'
      }
    ];

    vm.openLightboxModal = function (index) {
      Lightbox.openModal(vm.images, index);
    };

    vm.closeLightboxModal = function() {
      Lightbox.closeModal();
    };

    //Detect location change
    $rootScope.$on('$locationChangeStart', function(event, next, current) {
      if($('body').hasClass('modal-open')){
        // Close open modal(s)
        vm.closeLightboxModal();
        // Prevent page transition
        event.preventDefault();
      }

    });

  }

  angular.module('studio', [
    'bootstrapLightbox'
  ])
    .config(config)
    .controller('StudioCtrl', StudioCtrl);
})();



