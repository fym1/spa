$(function(){
    //get dom elem
    var $width = $('#width'),
        $height = $('#height'),
        $bthCal = $('#calculate'),
        $perimeter = $('#perimeter'),
        $area = $('#area');

    $bthCal.click(function(){
        //validate if error return;
        if(!validate('#width') || !validate('#height')) return;
        //get value
        var w = Number($width.val()),
            h = Number($height.val());
        //calculate
        var p = 2 *(w+h),
            a = w*h;
        //output
        $perimeter.val(p);
        $area.val(a);
    });
    //1.event keypress
    //2.event arguments get key value
    //3.ilegal key filter
    //4.合法字符1还要考虑出现的位置，例如e E - ，
    $width.keypress(function(e){
        var pos = e.target.selectionStart,
            con = e.target.value;
        console.log(pos);
        console.log(con);
        if(/[abcdef-zABCDEF-Z~!@#$%^&*()\-=_+[\]{}|;:'",<>/?\\]/.test(e.key)){
            e.preventDefault();
            return;
        }
        // 合法字符e
        // 允许出现在非科学计数法的数字末尾
        // 允许出现在非科学计数法的数字中间
        // 不允许出现在非科学计数法的数字前面
        // 不允许出现在空文本中
        // 不允许出现在负号后面
        // 不允许出现在科学计数法（e和E）数字的末尾
        // 不允许出现在科学计数法数字的前面
        // 不允许出现在科学计数法数字的中间
        if(e.key === 'e'){
            if(con.indexOf('e') !== -1 || con.indexOf('E') !== -1 || pos === 0){
                e.preventDefault();
                return;
            }
            if(pos === 1 && con.substring(0,1) === '-'){
                e.preventDefault();
                return;
            }
        }
        //合法字符'e'
    })
    
    $height.keypress(function(e){
        if(/[abcdef-zABCDEF-Z~!@#$%^&*()\-=_+[\]{}|;:'",<>/?\\]/.test(e.key)){
            e.preventDefault();
            return;
        }
    })
    $width.focusout(function(){
        //if(!validate('#width')) select this
        if(!validate('#width')) $width.select();
        console.log(validate('#width'));
    });
    $height.focusout(function(){
        //if(!validate('#height')) select this
        if(!validate('#height')) $height.select();
        console.log(validate('#height'));
    });
    function validate(field){
        //get DOM error message
        var $data = $(field),
            $msg = $(field + '-validation-message');
        //validate.null
        if($data.val() === ''){
            $msg.html('不能为空！');
            $data.select();
            return false;
        }
        //validate.number
        if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())){
            $msg.html('必须是数值！');
            $data.select();
            return false;
        }
        //validate>0
        if(Number($data.val())<0){
            $msg.html('数值必须大于0！');
            $data.select();
            return false;
        }
        //prompt error message
        //return false
        return true
    }
});