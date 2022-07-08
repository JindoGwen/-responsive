$(function(){

    $('.mbtn').on('click', function(){
        $('.gnb').toggleClass('on');
    })
    $('.gnb>ul>li>a').on('click', function(event){
        if($(window).width() < 769){ 
        event.preventDefault();
        $('.smenu').hide();
        $(this).next().toggle();
    }
    });

    $(window).on('resize', function(){
        $('.smenu').removeAttr('style')
    })
})