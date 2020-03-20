$(function(){
    //get dom elem
    var $width = $('#width'),
        $height = $('#height'),
        $bthCal = $('#calculate'),
        $perimeter = $('#perimeter'),
        $area = $('#area');
        $form = $('form')

    $form.submit(function(e){
        e.preventDefault();
        var w = Number($width.val());
        var h = Number($height.val());
        var p = 2+(w+h),
            a = w*h
        $perimeter.val(p);
        $area.val(a)
    })
});