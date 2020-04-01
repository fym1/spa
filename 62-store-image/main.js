$(function(){
    var $img = $('img'),
        $url = $('input[type="url"]'),
        $btn = $('input[type="button"]'),
        $tmpImg = $('<img>');
    var strImg = window.localStorage.getItem('img');
    $img.attr('src',strImg);
    $btn.click(function(){
        var url = $url.val();
        if(url ==='') return;
        $tmpImg.attr('crossOrigin', 'anonymous');
        $tmpImg.attr('src', url);
        $url.val('');
    })
    $tmpImg.load(function() {
        var can = $('<canvas>').get(0);
        var ctx = can.getContext('2d');
        can.width = this.width;
        can.height = this.height;
        ctx.drawImage(this, 0, 0, can.width, can.height);
        var str = can.toDataURL();
        localStorage.setItem('img', str);
        var strImg = window.localStorage.getItem('img');
        $img.attr('src',strImg);
    })
})