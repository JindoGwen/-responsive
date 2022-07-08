$(function(){
    $('.gnb>ul>li>a').on('click', function(e){
        if($('.gnb').hasClass('on')){
        e.preventDefault();
        $('.sub_menu').slideUp()
        $(this).next().stop().slideToggle();

    }
    });
    $('.mbtn').on('click',function(){
        $('.gnb').toggleClass('on')
    })
    $(window).on('resize', function(){
        $('.gnb').removeClass('on');
        $('.sub_menu').removeAttr('on')
    })

    
        var siteMap = $('.gnb>ul').clone().addClass('container');
        siteMap.appendTo($('body')).wrap('<div class="siteMap"></div>');
        $('<i class="xi-close"></i>').appendTo(siteMap.parent());
        
    $('.mclone').on('click',function(){
            siteMap.show();


    });

    $('.sitemap .xi-close').on('click', function(){
        console.log('click')
    })
})