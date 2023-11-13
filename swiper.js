window.onload = function () {
    // 외부연동이고, 태그가 나오기도 전에 연결된 자바스크립트라서
    // onload 이벤트에 실행식을 넣어두어야 한다.
    // 딱 한번만...  제이쿼리 ready는 여러번해도됨
    const swiperMain = new Swiper('#mainBanner .swiper', {
        loop: true,
        effect: 'fade',
        pagination: {
            el: '#mainBanner .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#mainBanner .swiper-button-next',
            prevEl: '#mainBanner .swiper-button-prev',
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        }
    });
}

