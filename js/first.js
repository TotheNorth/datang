$(function(){
    $('#fix').click(function(){
       window.scrollTo(0,0)
    })
    $('.vide').on('click',function(){
        $('video').css({'display':'block'}).attr('src','./media/voder_2017102001 (1).mp4')
        $(this).css({'display':'none'});
    })
    $('body').on('mousewheel',function(){
        $('.lan').css('display','block');
        $('.mar img').attr('src','./img/112342590199698869.jpg');
        $.ajax({
            url:'http://123.58.241.146:8088//ylkj-api/c/article/grid',
            type:'post',
            async:true,
            data:{
                typeCodes:[ "information","mediaReport"] ,//公司资讯 媒体报道
                limit:3  //显示3条
            },
            dataType:'json',
            success:function(data,kl){
                for(var i=0;i<3;i++){
                    $('.news img')[i].src="http://123.58.241.146:8088/"+data.data[i].smallImg;
                }
                $('.news p').each(function(o,ele){
                    ele.innerHTML=data.data[o].title;
                })
                $('.news span').each(function(j,ele){
                ele.innerHTML=data.data[j].intro;
                })
                $('.news a').each(function(j,ele){
                ele.setAttribute('href',"http://123.58.241.146:8088/"+data.data[j].url)
                })     
            }
        })
        $.ajax({
            url:'http://123.58.241.146:8088//ylkj-api/c/article/grid',
            type:'post',
            async:true,
            data:{
                    typeCodes:[ "activity"],//活动
                    limit:4  //显示4条
                },
            dataType:'json',
            success:function(data,kl){
                for(var i=0;i<4;i++){
                    $('.huodong img')[i].src=data.data[i].smallImg;
                }
                $('.huodong p').each(function(o,ele){
                    ele.innerHTML=data.data[o].title;
                })
                $('.huodong h5').each(function(j,ele){
                    ele.innerHTML=data.data[j].intro;
                })
                $('.huodong span').each(function(j,ele){
                    var date=new Date(data.data[j].publishTime)
                    ele.innerHTML=date.getFullYear()+'-'+date.getMonth()+'-'+date.getDay()+1;
                })
                $('.huodong a').each(function(j,ele){
                ele.setAttribute('href',"http://123.58.241.146:8088/"+data.data[j].url)
                }) 
            }
        })
        $('.huodong img').each(function(i,ele){
            ele.style.height=parseInt(window.getComputedStyle(ele,null).width)*0.6+'px';
        })
        $.ajax({
            url:' http://123.58.241.146:8088/ylkj-api/c/article/grid',
            type:'post',
            async:true,
            data:{
                typeCodes:[ "hlwms","hlwcy"],//互联网-民生 互联网-产业
                limit:5  //显示5条
                },
            dataType:'json',
            success:function(data,kl){
                for(var i=0;i<4;i++){
                    $('.xiangmu img')[i].src="http://123.58.241.146:8088/"+data.data[i].middleImg;
                    $('.xiangmu a')[i].href="http://123.58.241.146:8088/"+data.data[i].url;
                } 
            }
        })
        var mySwiper = new Swiper('.swiper-container'/*'#swiper-container1'*/, {
            loop: true,
            autoplay: 2000,
            effect : 'fade',
        });
        var mySwiper1 = new Swiper('.swiper-container1'/*'#swiper-container1'*/, {
            slidesPerView : 4,
            slidesPerGroup : 1,
        });
        var mySwiper2 = new Swiper('.swiper-container2'/*'#swiper-container1'*/, {
            slidesPerView : 4,
            slidesPerGroup : 1,
    });
    function a(){
        $('.news img').each(function(i,ele){
            ele.style.height=parseInt(window.getComputedStyle(ele,null).width)*0.8+'px';
        })
        $('.huodong img').each(function(i,ele){
            ele.style.height=parseInt(window.getComputedStyle(ele,null).width)*0.8+'px';
        })
    }
    setInterval(a,20);   
    })


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
})