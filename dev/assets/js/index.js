var LayoutSingleton = (function () {
    var instantiated;
    function init() {
        // singleton here
        var trigger = $('.hamburger'),
            overlay = $('.overlay');
      function initMenu() {
        $('#menu ul').hide();
        $('#menu ul').children('.current').parent().show();
        //$('#menu ul:first').show();
        $('#menu li a').click(
          function() {
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
        function initHmaburgerButton(){
          $("#menu-toggle").click(function(e) {
              e.preventDefault();
              $("#wrapper").toggleClass("toggled-2").toggleClass("toggled");
              $('#menu ul').hide();
              $("#menu-toggle-2").toggleClass('is-open');
              $("#menu-toggle-2").toggleClass('is-closed');
              if($("#wrapper").hasClass("toggled")){
                overlay.show();
              }else{
                $('#menu li.open').removeClass('open');
                overlay.hide();
              }
          });
          $("#menu-toggle-2").click(function(e) {
              e.preventDefault();
              $("#wrapper").toggleClass("toggled-2").toggleClass("toggled");
              $('#menu ul').hide();
              $("#menu-toggle-2").toggleClass('is-open');
              $("#menu-toggle-2").toggleClass('is-closed');
              if(!$("#wrapper").hasClass("toggled-2")){
                overlay.show();
              }else{
                $('#menu li.open').removeClass('open');
                overlay.hide();
              }
          });
        }
        return {
            init: function init() {
               initMenu();
               initHmaburgerButton();
               //hide and reset menu if showed by mouse hover
              $("#sidebar-wrapper").mouseleave(function() {
                if(!$("#wrapper").hasClass("toggled-2"))
                  return;
                if($("#wrapper").hasClass("toggled"))
                  return;
                //$('#menu ul').hide();
                $('#menu ul:visible').slideUp('normal');
                $('#menu li.open').removeClass('open');
              });

              $(".menu-overlay").click(function(){
                $("#menu-toggle").trigger("click");
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