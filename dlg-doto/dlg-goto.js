var $dlgGoto =(function(){
    var html=''+
        '<div class="notepad-dlg-goto">'
          +'<div class="dialogbox">'
            +'<div class="titlebar">'
              +'<p class="title">转到指定行</p>'
              +'<span class="close-btn">×</span> '   
            +'</div>'
            +'<div class="main">'
              +'<label>行号(L):</label>'
              +'<br>'
              +'<input type="text" class="txt-line-num" autofocus>'
              +'<br>'
              +'<input type="button" value="转到" class="btn-goto">'
              +'<input type="button" value="取消" class="btn-cancel">'
            +'</div>'
          +'</div>'
        +'</div>';
    $dlg = $(html);
    cfg = {
        container:'body',
        num:6,
        title:'同意',
        onClick: null
    };
    function show(conf){
        $(cfg.container).append(html);
        $.extend(cfg,conf);
        $dlg.click(cfg.onClick());
    }
    return{
        show:show
    }
}());