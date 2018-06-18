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
    $.ajax({
        url:' http://123.58.241.146:8088/ylkj-api/c/article/grid',
        type:'post',
        async:true,
        data:{
            typeCodes:[ "hlwms","hlwcy"],//互联网-民生 互联网-产业
            limit:5, //显示5条
	    },
        dataType:'json',
        success:function(data,kl){
            console.log(data);
            for(var i=4;i>=0;i--){         
                var that=$('<div></div>').addClass('col-sm-10 col-sm-offset-1').css({'paddingTop':'3%','paddingBottom':'5%' });$('<a href="http://123.58.241.146:8088/'+data.data[i].url+'" class="col-sm-3 img col-xs-4"><img src="'+'http://123.58.241.146:8088/'+data.data[i].smallImg+'" alt=""></a><div class="col-sm-8 col-xs-8"><h3>项目名称：'+data.data[i].title+'</h3><h3>公司名称：'+data.data[i].subTitle+'</h3><p><span>项目简介:</span>'+data.data[i].intro+'</p></div>').appendTo(that);
                that.insertAfter($('.border'));
            }              
        }
    })
})