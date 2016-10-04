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
  function HomeCtrl(data) {

    $(document).ready(function() {
      // START Fast & Agile YouTube Embed by Schoberg.net
      $('.youtube').each(function() {
        // Set the BG image from the youtube ID
        $(this).css('background-image', 'url(//i.ytimg.com/vi/' + this.id + '/hqdefault.jpg)');
        // Click the video div
        $(document).delegate('#' + this.id, 'click', function() {
          // Build embed URL
          var iframe_url = '//www.youtube.com/embed/' + this.id + '?autoplay=1&autohide=1';
          // Grab extra parameters set on div
          if ($(this).data('params')) {
            iframe_url += '&' + $(this).data('params');
          }
          // Build iframe tag
          var iframe = $('<iframe/>', {'allowfullscreen':'allowfullscreen', 'frameborder': '0', 'src': iframe_url});
          // Replace the YouTube thumbnail with YouTube HTML5 Player
          $(this).append(iframe);
        });// /click
      }); // /each video

      $('.soundclouds').each(function() {
        $(this).css('background-image', 'url(../../assets/images/' + this.id + '.jpg)');
        $(document).delegate('#' + this.id, 'click', function(){
          var iframe_url = '//w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + this.id + '&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true';
          // Grab extra parameters set on div
          if ($(this).data('params')) {
            iframe_url += '&' + $(this).data('params');
          }
          // Build iframe tag
          var iframe = $('<iframe/>', {'width':'100%', 'height':'100%', 'scrolling':'no', 'frameborder': 'no', 'src': iframe_url});
          // Replace the YouTube thumbnail with YouTube HTML5 Player
          $(this).append(iframe);
        });
      });

      // END Fast & Agile YouTube Embed by Schoberg.net
    }); // /document ready


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


    var home = this;
    home.data = data.data;

    home.pattern = 'http://ounae.com/img/ounae/2010/07/logitech-z523-3-560x312.jpg';


    home.audio = [
      {
        'link': '<div class="soundclouds" id="279408440"></div>',
        'title': 'Edmund Jeffery',
        'content': 'Recording/mix engineer | producer',
        'createdAt': '2016-11-24T14:06:16.613Z'
      },
      {
        'link': '<div class="soundclouds" id="254548841"></div>',
        'title': 'Sunbird',
        'content': 'Recording/mix engineer | producer',
        'createdAt': '2015-11-25T10:38:21.235Z'
      },
      {
        'link': '<div class="soundclouds" id="160667009"></div>',
        'title': 'Sublemon',
        'content': 'Recording/mix engineer | producer',
        'createdAt': '2015-11-24T14:06:17.940Z'
      }
    ];

    home.video = [
      {
        'link': '<div class="youtube" id="uGLRO2d37Hc"></div>',
        'title': 'Calvin Travers Trio',
        'content': 'Recording/mix engineer | video production ',
        'createdAt': '2015-11-24T15:08:45.868Z'
      },
      {
        'link': '<div class="youtube" id="0r_vtgJKplk"></div>',
        'title': 'Edmund Jeffery',
        'content': 'Recording/mix engineer | video production',
        'createdAt': '2015-11-24T15:08:22.195Z'
      }
    ];


  }

  angular.module('home',
    [

    ])
    .config(config)
    .controller('HomeCtrl', HomeCtrl);
})();
