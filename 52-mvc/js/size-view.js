(function(){
    var size= {},
        $container,
        $sizeView;
    size.show = function(container){
        $container = container;
        $sizeView  = $('<div class="mvc-sizeview" title="Size View"></div>');
        $container.append($sizeView);
        $sizeView.css({'width': '0px','height': '0px'});
    }
    size.echange = function(num){
        var $width = $sizeView.parent().width(),
        $height = $sizeView.parent().height(),
        a = $height/2*num/255,
        top = $height/2-a/2,
        left = $width/2-a/2;
        $sizeView.css({'width': a+'px','height': a+'px',"top":top+'px',"left":left+'px'})
    }
    window.size = size;
}())