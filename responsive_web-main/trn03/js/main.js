
const topanner = document.querySelector('.TopBanner')

function topEvnetHabdler (){
    topanner.classList.toggle('on')
}

topanner.addEventListener('click' , topEvnetHabdler);

$(function(){
    $('.productSlider').slick({
        arrows: false,
        slidesToShow: 5,
        responsive: [
            {
              breakpoint: 1230,
              settings: {
                slidesToShow: 1,
                dots: true
              }
            },
        ]
    })
})