(function(){
    var controller= {},
        $container,
        values;
    controller.show = function(container){
        $container = container;
        $controllerView  = $('<input class="mvc-controller" type="range" min="0" max="255" value="0" title="Controllerr">');
        $container.append($controllerView);
        
    }
    controller.echange = function(num){
        $controllerView.on("change",function(){
            values = $controllerView.val();
            console.log($controllerView.val());
            num = values;
        })
        
    }
    window.controller = controller;
}())