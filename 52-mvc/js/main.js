$(function(){
    var num = 0;
    controller.show($('.mvc-view3'))
    size.show($('.mvc-view2'));
    color.show($('.mvc-view1'));
    $('.mvc-view3').children(".mvc-controller").on("change",function(){
        values = $controllerView.val();
        console.log($controllerView.val());
        num = values;
        console.log(num)
        size.echange(num);
        color.positionChange(num);
        color.echange(num);
        
    })
    $(window).resize(function(){
        size.echange(num);
        color.positionChange(num);
    })
})