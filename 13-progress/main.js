$(function(){
  var $begin = $('#begin'),
      $stop = $('#stop'),
      $restart = $('#restart'),
      $progress = $('progress'),
      num = 0;
      n = 0;
  $begin.click(function(){
    n = setInterval(function(){
      if(num<=100){
        num+=0.2;
        $progress.val(num);
      }
    },50);
  });
  $stop.click(function(){
    clearInterval(n);
  });
  $restart.click(function(){
    clearInterval(n);
    num = 0;
    $progress.val(num);
    
  })
      
});
