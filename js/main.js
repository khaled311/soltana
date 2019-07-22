$(function() {


    $(".accDrop .dropHead").on("click", function() {
        $(".accDrop .dropBody").slideToggle();
        $(".accDrop .arr").toggleClass("trans");
    });

    // open Side Nav
    $(".menuTriger").on("click", function() {
        $(this).fadeOut();
        $(".sideNav").toggleClass("open");
        $(".navBody").toggleClass("open");
        $("body").css("overflow", "hidden");
    });


    // Close Side Nav
    $(".sideNav, .close1").on("click", function() {
        if($(".navBody").hasClass("open")){
            $(".menuTriger").fadeIn();
            $(".sideNav").removeClass("open");
            $(".navBody").toggleClass("open");
            $("body").css("overflow", "auto");
        }
    });

    // Up Search
    $(".search.vis").on("click", function (e) {
        $(this).fadeOut();
        $(".search.hid").addClass("show");
    });

    $(".search.hid .over").on("click", function (e) {
        $(".search.hid").removeClass("show");
        $(".search.vis").fadeIn();
    });



    // Sticky Navbar
    $(window).on("scroll", function() {
        if($(window).width() >= 992 && $(window).scrollTop() >= $(".navTop").offset().top){
            $(".navTop").addClass("scroll")
        }else{
            $(".navTop").removeClass("scroll")
        }
    });

    // Header Slider
    var swiper = new Swiper('.car-sec .swiper-container', {
        loop: true,
        autoplay: true,
        navigation: {
          nextEl: '.car-sec .swiper-button-next',
          prevEl: '.car-sec .swiper-button-prev',
        },
        pagination: {
            el: '.car-sec .swiper-pagination',
            clickable: true
        },
    });

    // Testimonials Slider
    $('#slider').cardSlider({
        slideTag: 'div',
        slideClass: 'slide',
        current: 0
    });
        
    // Slider Arrows
    $(".ourTestim button.right").on("click", function() {
        $(".right-slide").click();
    });

    $(".ourTestim button.left").on("click", function() {
        $(".left-slide").click();
    });

    // Trigger WOW Plugin
    new WOW().init();

    $('.innerGrid .owl-carousel').owlCarousel({
        // autoplay: true,
        rtl:true,
        loop:true,
        nav:true,
        items: 1,
        dots: true,
        smartSpeed: 1000
    });

    $('.testim .owl-carousel').owlCarousel({
        // autoplay: true,
        rtl:true,
        loop:true,
        nav:true,
        items: 1,
        margin: 10,
        dots: true,
        smartSpeed: 1000
    });

})