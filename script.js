$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html, body').animate({scrollTop: 0}, 500);
    });

    var typed = new Typed(".typing", {
        strings:["Desenvolvedor", "Devops", "Engenheiro de Software", "Analista de Sistemas"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings:["Desenvolvedor", "Devops", "Engenheiro de Software", "Analista de Sistemas"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn ion-icon').toggleClass("active");
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
