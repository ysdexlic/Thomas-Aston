(function() {
  'use strict';

  function bgImg() {
    return {
      /*jshint unused:false*/
      link: function(scope, element, attrs) {
        var url = attrs.bgImg;
        element.css({
            'background': 'url(' + url +')' + '50% 0 no-repeat fixed',
            'background-size' : 'cover'
        });
      }
    };
  }



  angular.module('common.directives.bgImg', [])
    .directive('bgImg', bgImg);
})();
