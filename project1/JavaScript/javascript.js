$(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    var width = window.innerWidth;
    if(scrollTop<460 || width<=600){
        $(".subNav").css("display","none");
    }else if(scrollTop>460 && width>600){
        $(".subNav").css("display","block");
    }
})

$(".skills__session__content__button").hover(function(e){
    var val="#"+$(this).attr("value");
    $(val).css("background-color","rgb(217, 176, 233)");
    
    $(val +" i").css("display","none");
    $(val +" .skills__session__content__p").css("overflow","visible");
    $(val +" .skills__session__content__p").css("text-align","left");
    // $(val +" .skills__session__content__tri");
    
},function(){
    $(".skills__session__content").css("background-color","rgb(228, 227, 228)");
    $(".skills__session__content" +" i").css("display","block");
    $(".skills__session__content__p").css("overflow","hidden");
});

// function select(value){
//     if(value=="work"){
//         $(this).addClass("experience__content");
//         $(this).removeClass("experience__content__active")
//     }else if(value=="volunteer"){

//     }else if(value=="project"){

//     }
// }

window.onload=function(){
    $("div#experience__select__default").addClass('experience__select__active');
    $("div#experience__select__default").removeClass('experience__select');
    $("div#experience__work").addClass('experience__content__active');
    $("div#experience__work").removeClass('experience__content');
}


$('.experience__select').click(function() {
    $(".experience__select__active").addClass('experience__select');
    $(".experience__select__active").removeClass('experience__select__active');
    
    $(this).removeClass('experience__select');
    $(this).addClass('experience__select__active');
    $(".experience__content__active").addClass('experience__content');
    $(".experience__content__active").removeClass('experience__content__active');
    var val=$(this).attr("value");
    if(val=="work"){
        $("div#experience__work").addClass('experience__content__active');
        $("div#experience__work").removeClass('experience__content');
    }else if(val=="volunteer"){
        $("div#experience__volunteer").addClass('experience__content__active');
        $("div#experience__volunteer").removeClass('experience__content');
    }else if(val=="project"){
        $("div#experience__project").addClass('experience__content__active');
        $("div#experience__project").removeClass('experience__content');
    }
    

});