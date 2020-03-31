(function(){
    var color= {},
        $container,
        $colorView;
    color.show = function(container){
        $container = container;
        $colorView  = $('<div class="mvc-colorview" title="color View"></div>');
        $container.append($colorView);
        $colorView.css({'opacity':0});
    }
    color.positionChange = function(){
        var $width = $colorView.parent().width(),
        $height = $colorView.parent().height(),
        a = $height/2,
        top = $height/2-a/2,
        left = $width/2-a/2;
        $colorView.css({'width': a+'px','height': a+'px',"top":top+'px',"left":left+'px'})
    }
    color.echange = function(num){
        var opacity = num*(1/255);
        $colorView.css({'opacity':opacity})
    }
    window.color = color;
}())