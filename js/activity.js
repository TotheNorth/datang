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
    })
    $('select').change(function(){
        var valu=this[this.selectedIndex].innerHTML;
        if(valu=='所有活动'){
            $('.activ>div').css('display','block');
        } else{
            $('.activ>div').css('display','none');
        }
        $('.activ>div').each(function(i,ele){
            if($(ele).find('#jinxing').html()==valu){
                ele.style.display='block'
            }
        })
    });
    $('.tou>div:eq(0) a').click(function(e){
        e.preventDefault();
        var val=this.innerHTML;
        if(this.innerHTML=='所有活动'){
            $('.activ>div').css('display','block');
        } else{
            $('.activ>div').css('display','none');
        }
        $('.activ>div').each(function(i,ele){
            if($(ele).find('#jinxing').html()==val){
                ele.style.display='block'
            }
        })
    })
     $.ajax({
        url:'http://123.58.241.146:8088//ylkj-api/c/article/grid',
        type:'post',
        async:true,
        data:{
            typeCodes:[ "activity"],//所有活动
            limit:2000
	        },
        dataType:'json',
        success:function(data,kl){
            console.log(data);
            for(var i=0;i<data.totalCount;i++){
                var reg=/www/;
                if(reg.test(data.data[i].smallImg)){
                    var that=$('<div></div>').addClass('col-sm-4 col-xs-12');
                    $('<div></div>').addClass('col-sm-12 col-xs-12').css({'marginTop':'2%','padding':'0'}).append($('<a href="http://123.58.241.146:8088/'+data.data[i].url+'" class="col-xs-4 ol"><img src="'+data.data[i].smallImg+'" alt="" class="col-xs-4"><div id="jinxing">'+data.data[i].attr.activityStatus+'</div></a><h4>'+data.data[i].title+'</h4><span class="col-xs-6 col-sm-12 sb">'+data.data[i].subTitle+'</span><p class="col-xs-6 col-sm-12 db">'+data.data[i].intro+'</p>').addClass('col-sm-12').css({'marginRight':'4%',})).appendTo(that);
                    that.appendTo($('.activ'));
                } else{
                    var that=$('<div></div>').addClass('col-sm-4 col-xs-12');
                    $('<div></div>').addClass('col-sm-12 col-xs-12').css({'marginTop':'2%','padding':'0'}).append($('<a href="http://123.58.241.146:8088/'+data.data[i].url+'" class="col-xs-4 ol col-xs-8"><img src="http://123.58.241.146:8088/'+data.data[i].smallImg+'" alt="" class="col-xs-4"><div id="jinxing">'+data.data[i].attr.activityStatus+'</div></a><h4>'+data.data[i].title+'</h4><span class="col-xs-6 col-sm-12 sb">'+data.data[i].subTitle+'</span><p class="col-xs-6 col-sm-12 db">'+data.data[i].intro+'</p>').addClass('col-sm-12').css({'marginRight':'4%'})).appendTo(that);
                    that.appendTo($('.activ'));
                }              
            }  
        }
    });
    function c(){
        $('.activ img').each(function(i,ele){
                ele.style.height=parseInt(window.getComputedStyle(ele,null).width)*0.7+'px';
        })
    } 
    var se=setInterval(c,80);
    $.ajax({
        url:'http://115.182.107.203:8088/xinda/xinda-api/cart/list',
        type:'post',
        async:true,
        data:{},
        dataType:'json',
        success:function(a,b){
            console.log(a,b)
        }
    })
})