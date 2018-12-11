  $(function(){
        var swiper = new Swiper('.swiper-container', {
          direction: 'vertical',
          slidesPerView: 'auto',
          freeMode: true,
          scrollbar: {
            el: '.swiper-scrollbar',
          },
          mousewheel: true,
        });


        $(".left .swiper-slide li").each(function (index,ele) {
            $(ele).on("click",function(index){
                return function(){
                  if(index*$(this).height()> $(".left .swiper-slide").height()- $(".left .swiper-container").height()){
                    $(".left .swiper-wrapper").css({
                      transform: 'translateY('+(-$(".left .swiper-slide").height()+$(".left .swiper-container").height())+'px)',
                      transition: "all 0.5",
                    })
                  }else{
                  $(".left .swiper-wrapper").css({
                    transform: 'translateY('+(-index*$(this).height())+'px)',
                    transition: "all 0.5",
                  })
                 
                }
                $(this).addClass("active").siblings().removeClass("active");
              }
              
            }(index))
          
        });
         
      })

      
  

