$(function(){
  var $pwd = $('input'),
      $eye = $('img')
  $eye.mouseover(function () { 
    $eye.attr('src','./密码可见.png');
    $pwd.attr('type','text');
  });
  $eye.mouseleave(function () { 
    $eye.attr('src','./密码不可见.png');
    $pwd.attr('type','password');
  });
});
