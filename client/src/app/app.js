(function() {
  'use strict';

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
  });

  function config($stateProvider, $urlRouterProvider, $logProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');
    $logProvider.debugEnabled(true);
    $httpProvider.interceptors.push('httpInterceptor');
    $stateProvider
      .state('root', {
        views: {
          'header': {
            templateUrl: 'src/common/header.tpl.html',
            controller: 'HeaderCtrl'
          },
          'footer': {
            templateUrl: 'src/common/footer.tpl.html',
            controller: 'FooterCtrl'
          }
        }
      });
  }

  function MainCtrl($scope, $window, $log, parallaxHelper) {

    $log.debug('MainCtrl loaded');
    // on scope change, scroll to top of page
    $scope.$on('$viewContentLoaded', function () {
      $window.scrollTo(0, 0);
    });

    $scope.background = parallaxHelper.createAnimator(-0.4);

  }

  function run($log) {
    $log.debug('App is running');

  }

  angular.module('app', [
      'ui.router',
      'ui.bootstrap',
      'ngAnimate',
      'duParallax',
      'duScroll',
      'home',
      'portfolio',
      'music',
      'videos',
      'studio',
      'contact',
      'common.header',
      'common.footer',
      'common.services.data',
      'common.services.services',
      'common.directives.version',
      'common.directives.bgImg',
      'common.controllers.controllers',
      'common.filters.uppercase',
      'common.filters.trustedAudioUrl',
      'common.filters.trustedHtml',
      'common.interceptors.http',
      'templates'
    ])
    .config(config)
    .run(run)
    .controller('MainCtrl', MainCtrl)
    .value('version', '1.1.0');
})();
