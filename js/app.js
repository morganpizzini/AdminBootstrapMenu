import '../css/app.scss';
import '../index.html';
import $ from "jquery";
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import 'waypoints';
import 'scrollTo';

var LayoutSingleton = (function () {
    var instantiated;
    function init() {
        // singleton here
      function initMenu() {
        $("body").on("click",'#menu li a',function() {
            var $element = $(this);
            var $elementNode = $element.closest("li");
            var $checkElement = $element.next();
              if(($checkElement.is('ul')) && ($checkElement.is(':visible'))) {
              $checkElement.slideUp('normal');
              $elementNode.removeClass("open");
              return false;
              }
            if(($checkElement.is('ul')) && (!$checkElement.is(':visible'))) {
              //close all open menus
              $('#menu ul:visible').slideUp('normal');
              //open the selected one
              $checkElement.slideDown('normal');
              $elementNode.closest("li").addClass("open");
              return false;
              }
            }
          );
        }
        function toggleMenu($toggledClass){
          $("#wrapper").toggleClass("toggled");
          $(".hamburger").toggleClass('is-open');
          $('#menu ul:visible').slideUp('normal');
          //$("#menu-toggle").toggleClass('is-open');
          if(!$("#wrapper").hasClass("toggled")){
            $(".overlay").show();
          }else{
            $('#menu li.open').removeClass('open');
            $(".overlay").hide();
          }
        }
        function initHmaburgerButton(){
          $("body").on("click",".hamburger",function(e) {
              e.preventDefault();
              toggleMenu();
          });
        }
        function initTranslationFunction(){
          //function like #href
          $('[id^=scrollTo]').click(function() {
              var id = $(this).attr('id').slice(9);
              $(window).scrollTo($('#' + id), 1000, { offset: { top: -51, left: 0 } });
          });
          //bouncing circle on scroll
          $('#marketing').waypoint(function() {
              $('.img-circle').addClass('animated zoomIn');
          }, {
              offset: '50%',
              triggerOnce: true
          });
          //bouncing square on scroll
          $('.featurette').waypoint(function() {
              $('#' + this.element.id + ' .featurette-image').addClass('animated pulse');
          }, {
              offset: '50%',
              triggerOnce: true
          });
        }
        return {
            init: function init() {
               initMenu();
               initHmaburgerButton();
               initTranslationFunction();
               //hide and reset menu if showed by mouse hover
              $("body").on("mouseleave","#sidebar-wrapper",function() {
                if(!$("#wrapper").hasClass("toggled"))
                  return;
                $('#menu ul:visible').slideUp('normal');
                $('#menu li.open').removeClass('open');
              });

              $("body").on("click",".menu-overlay",function(){
                toggleMenu();
              });
            }
        };
    }
    return {
        getInstance: function getInstance() {
            if (!instantiated) {
                instantiated = init();
            }
            return instantiated;
        }
    };
})();

$(document).ready(function () {
    LayoutSingleton.getInstance().init();
});