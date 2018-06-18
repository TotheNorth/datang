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
            typeCodes:[ "information"],
            limit:2000,
            },
        dataType:'json',
        success:function(data,kl){
            console.log(data);
            var reg=/20\d{2}/;
            for(var i=0;i<data.totalCount;i++){
                var date=new Date(data.data[i].publishTime);
                var tit=String(date).substr(4,3);
                // console.log($("[class*='month']"))
                for(var o=0;o<12;o++){
                    if(date.getMonth()==o){
                        console.log('month'+tit+date.getMonth()+date);
                        console.log($('.month'+tit+date.getMonth()+date.getFullYear()).length)                     
                        if($('.month'+tit+date.getMonth()+date.getFullYear()).length!=0){
                            $('<div></div>').addClass('col-sm-12 col-xs-12').css('padding','0').append($('<div>'+date.getFullYear()+'-'+date.getMonth()+'-'+'1'+date.getDay()+'</div>').addClass('col-sm-2 col-sm-pull-1 hidden-xs ko').css({'padding':'0','paddingBottom':'25%','paddingTop':'5%','paddingRight':'1%'})).append($('<div><img src="http://123.58.241.146:8088/'+data.data[i].smallImg+'" alt=""></div>').addClass('col-sm-3 img col-xs-4')).append($('<div><h4>'+data.data[i].title+'</h4><p class="hidden-lg hidden-md hidden-sm">'+date.getFullYear()+'-'+date.getMonth()+'-'+date.getDay()+'</p><p class="hidden-xs">'+data.data[i].intro+'</p></div>').addClass('col-sm-7 col-xs-8 wid')).appendTo($('.month'+tit+date.getMonth()+date.getFullYear()));
                        } else{
                            var that=$('<div></div>').addClass('col-sm-12 col-sm-offset-0 month'+tit+date.getMonth()+date.getFullYear());
                            $('<div></div>').addClass('col-sm-1 hidden-xs hei').css({'padding':'0','background':'#e60012','marginLeft':'4%'}).appendTo(that);
                            $('<div></div>').addClass('col-sm-12 col-xs-12').css('padding','0').append($('<div>'+date.getFullYear()+'-'+date.getMonth()+'-'+date.getDay()+'</div>').css('padding','0').addClass('col-sm-2 col-sm-pull-1 hidden-xs ko').css({'padding':'0','paddingBottom':'25%','paddingTop':'5%','paddingRight':'1%'})).append($('<div><img src="http://123.58.241.146:8088/'+data.data[i].smallImg+'" alt=""></div>').addClass('col-sm-3 img col-xs-4')).append($('<div><h4>'+data.data[i].title+'</h4><p class="hidden-lg hidden-md hidden-sm">'+date.getFullYear()+'-'+date.getMonth()+'-'+date.getDay()+'</p><p class="hidden-xs">'+data.data[i].intro+'</p></div>').addClass('col-sm-7 col-xs-8 wid')).appendTo(that);
                            $('.zhuti').prepend(that);
                        } 
                    }
                }
            };
            $("[class*='month']").children().not('.col-sm-12').each(function(i,ele){
                $(ele).html($(ele).parent().attr('class').slice(31,34).toUpperCase()).css({'color':'#fff','textAlign':'center'})
            })
            $("[class*='month']").appendTo($('.zhuti'));
            var ki=$('.wid');
            function a(){
                for(key in $.makeArray(ki)){
                    $.makeArray($('.ko'))[key].style.height=window.getComputedStyle($.makeArray(ki)[key], null).height
                }
            }
            setInterval(a,50)
        }   
    })
})
