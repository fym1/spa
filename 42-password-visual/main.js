var $pwdEye =(function(){
  var cfg = {
        val:[],
        container:'.main',
        onClick: null
      };
  function show(conf){
    var $pwd     = $('<input type="password">'),
        $pwdText = $('<input type="text">'),
        $eye     = $('<div></div>'),
        $div     = $('<div class="wd-password">密码：</div>');
    $div.append($pwd);
    $div.append($eye);
    $div.append($pwdText);
    $(cfg.container).append($div)
    $pwd.on('input', function(){
      $pwdText.val($pwd.val());
      console.log($pwdText.val())
    });
  
    $eye.mouseover(function(){
      $pwdText.css('z-index', '10');
    });
  
    $eye.mouseout(function(){
      $pwdText.css('z-index', '-10');
    });
    $pwd.focusout('input',function(){
      conf.val.push($pwdText.val())
    })
    $.extend(cfg,conf);
  }
  return{
    show:show
  }
}());
