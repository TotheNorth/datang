$(function(){
    var n=0;
    $('#list').on('click',function(){
        $('.black').slideToggle();
        $('.noop').slideToggle();
        if(n==1){
            b();
        }else{
            a();
        }
        function a() {
            n++;
            $('#list span').css('transition','1s');
            $('#list span:eq(2)').css('width','0')
            $('#list span:eq(4)').css('width','0')
            $('#list span:eq(1)').css({'transform':'translateY(5px) rotate(45deg)','background-color':'#fff'});
            $('#list span:eq(3)').css({'transform':'translateY(-10px) rotate(-45deg)','background-color':'#fff'})
        };
        function b() {
            n--;
            $('#list span').css('transition','1s');
            $('#list span:eq(2)').css('width','22px')
            $('#list span:eq(4)').css('width','22px')
            $('#list span:eq(1)').css({'transform':'translateY(0) rotate(0)','background-color':'red'});
            $('#list span:eq(3)').css({'transform':'translateY(0) rotate(0)','background-color':'red'})
        }
    });
    $('[name=shijian]').datepicker();
    $.validator.addMethod('yuyueren',function(value,ele){
        var reg=new RegExp("^[\\u4e00-\\u9fa5]{2,4}$");
        return reg.test(value)
    },'请写入正确的预约人中文姓名');

    $.validator.addMethod('dianhuahao',function(value,ele){
        var reg=/^1[3578]\d{9}$/;
        var rag=/^0\d{3}-\d{7}/
        return reg.test(value)||rag.test(value)
    },'请写入规范的联系人电话');

    $.validator.addMethod('xiangmu',function(value,ele){
        var reg=new RegExp("^[\\u4e00-\\u9fa5]{2,}$");
        return reg.test(value);
    },'请写入规范的的项目名称');

    $('#yanzheng').validate({
        errorContainer:'label.error',
        rules:{
            people:{
                yuyueren:true,
            },
            phnum:{
                dianhuahao:true,
            },
            pname:{
                xiangmu:true,
            },
            pnum:{
                max:50,
                min:1,
            },
            
        },
        messages:{
            pnum:{
                max:'预约人数不能大于50',
                min:'预约人数必须大于或等于1',
            },
        }
    })
})