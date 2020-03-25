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
  var $btnClose = $dlg.find('.close-btn'),
      $btnCancel = $dlg.find('.btn-cancel'),
      $btnGoto = $dlg.find('.btn-goto'),
      $txtLineNum = $dlg.find('.txt-line-num'),
      $titleBar = $dlg.find('.notepad-dlg-titlebar');
  cfg = {
    lineNum: 1,
    totalLine: 1,
    gotoHandler: null
  };
  function destoryDlg() { $dlg.remove(); }

  function gotoHandler() {
    if(!validate()) return;

    cfg.gotoHandler($txtLineNum.val()); 
    destoryDlg();
  }

  function filterKey(e) {
    if(!/[0-9]/.test(e.key)) {
      e.preventDefault();
      showErrMsg();
    }
  }

  function showErrMsg() {
    alert('你只能在此输入数字！');   // TODO: 需要改成气泡框提示错误信息
  }

  function validate() {
    if($txtLineNum.val() === '') {
      alert('请输入要转到的行号！');
      return false;
    }

    var n = Number($txtLineNum.val());

    if(n === 0 || n > cfg.totalLine) {
      alert('行数超过了总行数！');    // TODO：需要改成自己的对话框
      $txtLineNum.select();
      return false;
    }

    return true;
  }

  function show(conf) {
    $.extend(cfg, conf);

    $('body').append($dlg);
    $dlg.find('.dialogbox').draggable({handle: $titleBar});

    $btnClose.click(destoryDlg);
    $btnCancel.click(destoryDlg);
    $btnGoto.click(gotoHandler);
    $txtLineNum.keypress(filterKey);

    $txtLineNum.val(cfg.lineNum);
    $txtLineNum.select();
  }
    return{
        show:show
    }
}());