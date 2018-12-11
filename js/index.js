
window.addEventListener("load",function(){
    //顶部背景颜色变化
    document.addEventListener("scroll",function(){
        var silde=document.querySelector("#silde");
        var header=document.querySelector("#header");
        var scrollHight=document.documentElement.scrollTop
        var op=scrollHight/silde.offsetHeight
        header.style.backgroundColor='rgba(255, 0, 0,'+op+')';
    })


    //轮播图
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        // autoplay:true,//等同于以下设置
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
          },
    
        
        // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      }) 



    //倒计时
    var spans=document.querySelectorAll(".time span");
    var future=new Date(2018,11,8,21,00);
    var time=(future-new Date())/1000;
    console.log(time);
    
    function downTime(){

        var hour=Math.floor(time/3600);
     
        
        var mid=Math.floor(time%3600/60);

        var second=Math.floor(time%60);



        spans[0].innerHTML=Math.floor(hour/10);
        spans[1].innerHTML=Math.floor(hour%10);
        spans[3].innerHTML=Math.floor(mid/10);
        spans[4].innerHTML=Math.floor(mid%10);
        spans[6].innerHTML=Math.floor(second/10);
        spans[7].innerHTML=Math.floor(second%10)
        
    }
    downTime();
    var timeID=this.setInterval(function(){
        time--;
        downTime()
        if (time==0) {
            clearInterval(timeID);
        }
    },1000)
})


