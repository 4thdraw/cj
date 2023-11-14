$(document).ready(function () {

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
        observer: true,	// 추가
        observeParents: true,	// 추가
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        on: {
            // init: function () {
            //     document.body.classList = "realIndex" + 0;
            // },
            realIndexChange: function () { // realindex (활성화번호) 바뀔때마다 찾던 이벤트이름은 이것이다.
                console.log("realIndexChange", this.realIndex);
                document.body.classList = "realIndex" + this.realIndex;
            }
        }
    });

    var toggle = true;

    $(".toggle").click(function () {
        $(this).toggleClass("on");

        if (toggle) {
            swiperMain.autoplay.stop(); // 무조건 첫번째 클릭
            toggle = false; // 다음클릭시 else 실행하게 하도록 설계
        } else {
            swiperMain.autoplay.start();
            toggle = true; // 다음클릭 if 실행되게 처리해둔다.
        }

    })

})



