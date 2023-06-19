$('.first-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplayTimeout: 3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})