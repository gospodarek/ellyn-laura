$(function(){  
  $(".links li").hover(function(){  // onmouseover
    $(this).addClass("menu_hover");
  }, function(){                    // onmouseout
    $(this).removeClass("menu_hover");
  });
});
