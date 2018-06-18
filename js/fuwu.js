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
    var arr=[$('.zhong'),$('.ypt'),$('.cy'),$('.jr'),$('.rc')];
    console.log(arr)
    $('.targ a').each(function(i,ele){
        ele.onclick=function(e){
            $('.targ a').css({'borderBottom':'none','color':'#7b7b7c'});
            $(this).css({'borderBottom':'1px solid #f54336','color':'#f54336'})
            e.preventDefault();
            $.each(arr,function(i,ele){
                $(ele).css('display','none')
            })
            arr[i].css('display','block');
        }
    })
    $.ajax({
        url:' http://123.58.241.146:8088/ylkj-api/c/article/grid',
        type:'post',
        async:true,
        data:{
            typeCodes:[ "cyfw"],
            limit:2000
	        },
        dataType:'json',
        success:function(data,kl){
            console.log(data)        
            for(var i=0;i<7;i++){
                if(i==5){
                    var that=$('<div></div>').html('<a href=""><img src="" alt=""></a>');
                    var that_1=$('<h3></h3>').html(data.data[i].title);
                    var that_2=$('<p></p>').html(data.data[i].subTitle);
                    $('.chuangye').append(that);
                    $('.chuangye div:eq('+i+')').append(that_1);
                    $('.chuangye div:eq('+i+')').append(that_2);         
                    $('.chuangye div').css('position','relative');  
                    $('.chuangye>div h3').css({'position':'absolute','left':'0','top':'24px','fontFamily':'黑体','width':'100%','color':'#fff'});  
                    $('.chuangye>div p').css({'position':'absolute','left':'16%','top':'56%','fontFamily':'黑体','width':'70%','color':'#fff','fontSize':'14px'}); 
                    $('.chuangye div').addClass('col-sm-3 col-xs-6 img');            
                    $('.chuangye img')[i].src="http://123.58.241.146:8088/"+data.data[i].smallImg;
                } else{
                    var that=$('<div></div>').html('<a href=""><img src="" alt=""></a>');
                    var that_1=$('<h3></h3>').html(data.data[i].title);
                    var that_2=$('<p></p>').html(data.data[i].subTitle);
                    $('.chuangye').append(that);
                    $('.chuangye div:eq('+i+')').append(that_1);
                    $('.chuangye div:eq('+i+')').append(that_2);         
                    $('.chuangye div').css('position','relative');  
                    $('.chuangye>div h3').css({'position':'absolute','left':'0','top':'24px','fontFamily':'黑体','width':'100%','color':'#fff'});  
                    $('.chuangye>div p').css({'position':'absolute','left':'16%','top':'56%','fontFamily':'黑体','width':'70%','color':'#fff','fontSize':'14px'}); 
                    $('.chuangye div').addClass('col-sm-3 col-xs-6 img');            
                    $('.chuangye img')[i].src=data.data[i].smallImg;
                }    
            }          
        }
    })
    var heg=$('.main>li').css('height');
    console.log(heg);
    $('.main>li div').css('height',heg);
    $('.main>li img').css('padding','0');
    var wid=parseInt($('.main .xu').css('width'));
    var heig=parseInt($('.main .xu').css('height'));
    var t;
    $('.main .xu').on('mouseenter',function(e){
            var x=e.offsetX;
            var y=e.offsetY;
            if(x<wid*0.125&&y<heig*0.125){
                t=1;
                 $(this).siblings().filter('div').animate({    
                    left:'-100%','top':'-100%'
                },0).animate({
                    left:'0','top':'0'
                },200);
            };
           if(x<wid*0.5&&y>heig*0.125&&y<heig*0.875){
                t=2;
                 $(this).siblings().filter('div').animate({    
                    left:'-100%','top':'0'
                },0).animate({
                    left:'0','top':'0'
                },200);
            };
            if(x<wid*0.125&&y>heig*0.875){
                t=3;
                 $(this).siblings().filter('div').animate({    
                    left:'-100%','top':'200%'
                },0).animate({
                    left:'0','top':'0'
                },200);
            };
            if(x>wid*0.875&&y<heig*0.125){
                t=4;            
                 $(this).siblings().filter('div').animate({    
                    left:'100%','top':'-100%'
                },0).animate({
                    left:'0','top':'0'
                },200);
            };
            if(x>wid*0.5&&y>heig*0.125&&y<heig*0.875){
                t=5;            
                 $(this).siblings().filter('div').animate({    
                    left:'100%','top':'0'
                },0).animate({
                    left:'0','top':'0'
                },200);
            };
            if(x>wid*0.875&&y>heig*0.875){
                t=6;            
                 $(this).siblings().filter('div').animate({    
                    left:'100%','top':'100%'
                },0).animate({
                    left:'0','top':'0'
                },200);
            };
            if(x<wid*0.875&&y<heig*0.5&&x>wid*0.125){
                t=7;            
                 $(this).siblings().filter('div').animate({    
                    left:'0','top':'-100%'
                },0).animate({
                    left:'0','top':'0'
                },200);
            };
            if(x<wid*0.875&&y>heig*0.5&&x>wid*0.125){
                t=8;            
                 $(this).siblings().filter('div').animate({    
                    left:'0','top':'100%'
                },0).animate({
                    left:'0','top':'0'
                },200);
            };
        }
    )
    $('.main .xu').on('mouseleave',function(e){
            if(t==1){
                $(this).siblings().filter('div').animate({    
                    left:'100%','top':'100%'
                },200,function(){
                $('.main>li>div:eq(0)').css('left','-100%')
                });
            }
            if(t==2){
                $(this).siblings().filter('div').animate({    
                    left:'100%','top':'0'
                },200,function(){
                    $('.main>li>div:eq(0)').css('left','-100%')
                });
            }
             if(t==3){
                $(this).siblings().filter('div').animate({    
                    left:'100%','top':'-100%'
                },200,function(){
                    $('.main>li>div:eq(0)').css('left','-100%')
                });
            }
            if(t==4){
                $(this).siblings().filter('div').animate({    
                    left:'-100%','top':'200%'
                },200,function(){
                    $('.main>li>div:eq(0)').css('left','-100%')
                });
            }
            if(t==5){
                $(this).siblings().filter('div').animate({    
                    left:'-100%','top':'0'
                },200,function(){
                    $('.main>li>div:eq(0)').css('left','-100%')
                });
            }
            if(t==6){
                $(this).siblings().filter('div').animate({    
                    left:'-100%','top':'-100%'
                },200,function(){
                    $('.main>li>div:eq(0)').css('left','-100%')
                });
            }
            if(t==7){
                $(this).siblings().filter('div').animate({    
                    left:'0','top':'100%'
                },200,function(){
                    $('.main>li>div:eq(0)').css('left','-100%')
                });
            }
            if(t==8){
                $(this).siblings().filter('div').animate({    
                    left:'0','top':'-200%'
                },200,function(){
                    $('.main>li>div:eq(0)').css('left','-100%')
                });
            }
            $(this).find('p').animate({    
                left:'100%',
            },200,function(){
                    $('.main>li>p').css('left','-100%')
                }
            );
        }
    )
     $.ajax({
        url:' http://123.58.241.146:8088/ylkj-api/c/article/grid',
        type:'post',
        async:true,
        data:{
                typeCodes:[ "cyfw"],
                limit:2000
	        },
        dataType:'json',
        success:function(data,kl){
            console.log(data);
            for(var i=0;i<5;i++){
            }  
        }
    })
})

    
