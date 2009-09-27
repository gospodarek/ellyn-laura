$(document).ready(function(){
 
    //$('.down-list').width($('.dropdown-menu').width()-2);
 
    $('.dropdown-menu').hover(
      function () {
        $('.menu-first', this).addClass('slide-down');
        $('.down-list', this).slideDown(100);
      },
      function () {
        obj = this;
        $('.down-list', this).slideUp(100, function(){ $('.menu-first', obj).removeClass('slide-down'); });
      }
    );
 
});