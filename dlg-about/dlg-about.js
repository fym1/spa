var $dlgGoto =(function(){
  var html=
      '<div class="notepad-dlg-mask notepad-dlg-about">'
      + '<div class="dialogbox notepad-dlgbox">'
        + '<div class="notepad-dlg-titlebar">'
          + '<p class="title">关于“记事本”</p>'
          + '<span class="close-btn">✖</span>'
        + '</div>'
        + '<div class="main notepad-dlg-main">'
          + '<h1 class="slogan">JSNotepad</h1>'
          + '<hr>'
          + '<img class="app-logo" src="./notepad-icon-32.png" alt="JSNotepad">'
          + '<div class="info">'
            + '<p>作者：王顶</p>'
            + '<p>QQ：408542507</p>'
            + '<p>仓库地址：<a href="https://github.com/wangding/jsnotepad/" target="_blank">https://github.com/wangding/jsnotepad/</a></p>'
          + '</div>'
          + '<input class="btn-ok btn" type="button" value="确定" autofocus>'
        + '</div>'
      + '</div>'
    + '</div>';
  $dlg = $(html);
  var $btnClose = $dlg.find('.close-btn'),
      $btnOk = $dlg.find('.btn-ok')
  function destoryDlg() { $dlg.remove(); }

  function show() {

    $('#main').append($dlg);

    $btnClose.click(destoryDlg);
    $btnOk.click(destoryDlg);
  }
    return{
        show:show
    }
}());