$(function () {
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
     var mySwiper = new Swiper('.swiper-container'/*'#swiper-container1'*/, {
        loop: true,
        // // 是否循环
        autoplay: 1000,
        // autoplayDisableOnInteraction : false,
        // // 轮播延时
        // //freeMode:true,
        // //是否可以滑动即贴边，默认false贴边
        // //direction : 'vertical',
        // //滑动方向

        // // 如果需要分页器
        // pagination: '.swiper-pagination',
        // paginationClickable :true,
        
        // // 如果需要前进后退按钮
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',
        
        // // 如果需要滚动条
        // scrollbar: '.swiper-scrollbar',
        // //切换效果
        effect : 'fade',
        // /*fade，cube，coverflow，flip（旋转翻页）*/
        // // zoom:true,
        // //是否可以双击放大 
    });
    var mySwiper = new Swiper('.swiper-container2'/*'#swiper-container1'*/, {
        // loop: true,
        // 是否循环
        // autoplay: 1000,
        // autoplayDisableOnInteraction : false,
        // // 轮播延时
        // //freeMode:true,
        //是否可以滑动即贴边，默认false贴边
        //direction : 'vertical',
        //滑动方向

        // // 如果需要分页器
        // pagination: '.swiper-pagination',
        // paginationClickable :true,
        
        // // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
        
        // // 如果需要滚动条
        // scrollbar: '.swiper-scrollbar',
        // //切换效果
        // effect : 'fade',
        slidesPerView : 6,
        slidesPerGroup : 6,
        slidesPerColumn:3,
        spaceBetween:20,
        // /*fade，cube，coverflow，flip（旋转翻页）*/
        // // zoom:true,
        // //是否可以双击放大 
    });
})