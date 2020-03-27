define(['jquery'],function($){
    function TimerButton(){
        var $btn=$('<input class="timer-button" type="button" value="同意(6s)" disabled />');
        var timer;
        var num;
        var cfg={
            container: "body",
            num: 6,
            title: "同意",
            onClick:null
        }
        
        // function show(conf) {
        this.show = function(conf){
            //1.DOM draw
            if (timer) clearInterval(timer);

            $(cfg.container).append($btn);
            $.extend(cfg,conf);
            num = cfg.num;
            $btn.val(cfg.title+"("+num+"s)")
            timer =setInterval(function() {
                num--;
                if(num===0){
                    clearInterval(timer);
                    $btn.val(cfg.title);
                    $btn.removeAttr("disabled");
                }
                else{
                    $btn.val( cfg.title+"("+num+"s)");
                }
            }, 1000);
            //2.event bind
            $btn.click(cfg.onClick());
        } 
    }
    return TimerButton;
    // var $timerButton=(function(){
    // function show(conf) {
    //     var $btn=$('<input class="timer-button" type="button" value="同意(6s)" disabled />');

    //     var timer;
    //     var num;
    //     var cfg={
    //         container: "body",
    //         num: 6,
    //         title: "同意",
    //         onClick:null
    //     }
    //     //1.DOM draw
    //     if (timer) clearInterval(timer);

    //     $(cfg.container).append($btn);
    //     $.extend(cfg,conf);
    //     num = cfg.num;
    //     $btn.val(cfg.title+"("+num+"s)")
    //     timer =setInterval(function() {
    //         num--;
    //         if(num===0){
    //             clearInterval(timer);
    //             $btn.val(cfg.title);
    //             $btn.removeAttr("disabled");
    //         }
    //         else{
    //             $btn.val( cfg.title+"("+num+"s)");
    //         }
    //     }, 1000);
    //     //2.event bind
    //     $btn.click(cfg.onClick());
    // }
    
    // return {
    //     show: show
    // }   
    // }());
})   
    
    //不用 page load event
    /**
     * 封装成对象有几种方案
     * 1.简单对象字面量，不完全是面向对象，不能包括私有方法
     * var timerButton={
     *  show:function()
     * }
     * 2.工厂函数，一个函数返回值是一个简单对象
     * var timerButton=(function(){
     *  return {
     *      show:function(){}
     *  }
     * }())
     * 3.构造函数
     * function TimerButton(){
     *  
     * }
     * var tb= new TimerButton();
     */