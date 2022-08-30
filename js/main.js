$(function () {
    // 
    $('.top_close_btn').on('click', function () {
        $('.TopBanner').addClass('on');
        $('.Section01').addClass('on');
    });

    $('.Main_slider').slick({
        arrows: false,
    });

    $('.Section01 .slider_handler button:first-child').on('click', function () {
        $('.Main_slider').slick('slickPrev')
    })
    $('.Section01 .slider_handler button:last-child').on('click', function () {
        $('.Main_slider').slick('slickNext')
    })

    $('.Main_slider').on('init reInit afterChange', function (e, s, c) {
        var current = $('.Main_slider .slick-current');
        current.addClass('on').siblings().removeClass('on')
        $('.slider_dots li').eq(c).addClass('on').siblings().removeClass('on')
    })

    $('.left_slider').slick({
        arrows: false,
        fade: true,
        asNavFor: '.right_slider'
    });
    $('.right_slider').slick({
        arrows: false,
        asNavFor: '.left_slider',
        slidesToShow: 5,
    });

    $('.center_slider').on('init reInit afterChange', function (e, s, c) {
        console.log(s.slideCount);
        var current = $('.center_slider .slick-center');
        console.log(current);
        current.addClass('on').siblings().removeClass('on');
        $('.num').html((c ? c : 0) + 1 + '<span> / 0' + s.slideCount + '</span>');
        $('.content_box>div').eq(c).addClass('on').siblings().removeClass('on');
    });

    $('.center_slider').slick({
        arrows: false,
        centerMode: true,
        dots: true,
        centerPadding: '300px',
    });


    $('.section04 .slider_handler i:first-child').on('click', function () {
        $('.center_slider').slick('slickPrev')
    });
    $('.section04 .slider_handler button:last-child').on('click', function () {
        $('.center_slider').slick('slickNext')
    });


    $('.slider_handler i:first-child').on('click', function () {
        $('.left_slider').slick('slickPrev')
    });
    $('.slider_handler i:last-child').on('click', function () {
        $('.right_slider').slick('slickNext')
    });


    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        sct > 0
            ? $('.Header').addClass('on')
            : $('.Header').removeClass('on')
    })


    //
})