window.addEventListener("DOMContentLoaded", () => {
    //sidebar
    const sidebarButton = document.querySelector('.sidebar__menu');
    const headerMenuButton = document.querySelector('.header-mobile__menu')
    const sidebarClose = document.querySelector('.menu__close');
    const secondMenuClose = document.querySelectorAll('.menu__downmenu-close')
    const sidebarContent = document.querySelector('.menu');
    const downMenuButtons = document.querySelectorAll('.menu__toggle-button');
    const downMenuSecond = document.querySelectorAll('.menu__downbackground')


    downMenuButtons.forEach((element, index) => {
        element.addEventListener('click', () => {
            downMenuSecond.forEach((el) => {
                if (el.classList.contains('second-lvl')) {
                    el.classList.remove('second-lvl');
                }
            })
            downMenuSecond[index].classList.toggle('second-lvl')
            secondMenuClose[index].addEventListener('click', (e) => {
                e.stopPropagation();
                downMenuSecond[index].classList.remove('second-lvl')
            })
        })
    });


    sidebarButton.addEventListener('click', () => {
        sidebarContent.classList.toggle('menu-active');

    })



    sidebarClose.addEventListener('click', () => {
        sidebarContent.classList.toggle('menu-active');
        downMenuSecond.forEach((el) => {
            if (el.classList.contains('second-lvl')) {
                el.classList.remove('second-lvl');
            }
        })
        if (window.screen.width < 450) {
            document.documentElement.classList.remove('off-scroll')
        }
    })


    if (window.screen.width < 993) {
        headerMenuButton.addEventListener('click', () => {
            sidebarContent.classList.toggle('menu-active');
            if (window.screen.width < 450) {
                document.documentElement.classList.add('off-scroll')
            }
        })

    }

    // tabs tabs  tabs tabs  tabs tabs  tabs tabs  tabs tabs  tabs tabs  tabs tabs  tabs tabs  tabs tabs  tabs tabs  tabs tabs 


    $(function () {
        $("#tabs").tabs({
            hide: { effect: "slide", duration: 300 },
            show: { effect: "slide", duration: 300 },
            active: '#tabs-1'
        });

        $("#docTabs").tabs({
            hide: { effect: "fade", duration: 300 },
            show: { effect: "fade", duration: 300 },
            active: '#docTabs-1'
        });

        $("#cardTabs").tabs({
            hide: { effect: "fade", duration: 300 },
            show: { effect: "fade", duration: 300 },
            active: '#cardTabs-2'
        });
    });



    //maskphone 
    var inputElements = document.querySelectorAll(".maskphone");

    for (let inputElement of inputElements) {

        inputElement.addEventListener("input", mask);
        inputElement.addEventListener("focus", mask);
        inputElement.addEventListener("blur", mask);

        function mask(event) {
            var blank = "+_ (___) ___-__-__";

            var i = 0;
            var val = this.value.replace(/\D/g, "").replace(/^8/, "7");
            // <---

            this.value = blank.replace(/./g, function (char) {
                if (/[_\d]/.test(char) && i < val.length)
                    return val.charAt(i++);

                return i >= val.length ? "" : char;
            });

            if (event.type == "blur") {
                if (this.value.length == 2)
                    this.value = "";
            } else {
                setCursorPosition(this, this.value.length);
            }
        };

        function setCursorPosition(elem, pos) {
            elem.focus();

            if (elem.setSelectionRange) {
                elem.setSelectionRange(pos, pos);
                return;
            }

            if (elem.createTextRange) {
                var range = elem.createTextRange();
                range.collapse(true);
                range.moveEnd("character", pos);
                range.moveStart("character", pos);
                range.select();
                return;
            }
        }

    }



    //sliders 

    function heroSlider() {
        const heroSlider = new Swiper('.hero__slider', {

            pagination: {
                el: ".hero__slider-pagination",
                type: "fraction",
            },
            parallax: true,
            speed: 500,
            navigation: {
                nextEl: ".hero__slider-next",
                prevEl: ".hero__slider-prev",
            },

        });
    }
    function cardSlider() {
        var swiper = new Swiper(".card__thumbs", {
            spaceBetween: 20,
            slidesPerView: 3,


            breakpoints: {
                994: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2,
                },
                577: {
                    slidesPerView: 3,
                },
                320: {
                    slidesPerView: 2,
                },
            },
        });

        var swiper2 = new Swiper(".card__slider", {
            spaceBetween: 10,
            navigation: {
                nextEl: ".card__next",
                prevEl: ".card__prev",
            },
            thumbs: {
                swiper: swiper,
            },
        });
    }

    function companySlider() {
        const companySlider = new Swiper('.company__slider', {

            pagination: {
                el: ".company__pagination",
            },

            navigation: {
                nextEl: ".company-next",
                prevEl: ".company-prev",
            },

        });
    }

    function sameSlider() {
        const sameSlider = new Swiper('.same__slider', {

            slidesPerView: 4,
            spaceBetween: 30,

            navigation: {
                nextEl: ".same__next",
                prevEl: ".same__prev",
            },

            breakpoints: {
                994: {
                    slidesPerView: 4,
                },
                767: {
                    slidesPerView: 3,
                },
                400: {
                    slidesPerView: 2,
                },
                320: {
                    slidesPerView: 1,
                },
            },

        });
    }

    sameSlider();
    heroSlider();
    companySlider();
    cardSlider();


    //video
    try {
        const videoButton = document.querySelector('.video__play')
        const wrapperVideo = document.querySelector('.video__item');


        videoButton.addEventListener('click', function () {
            if (wrapperVideo.classList.contains('video__off')) {
                wrapperVideo.play()
                wrapperVideo.classList.remove('video__off')
                videoButton.classList.add("video__active")
                wrapperVideo.setAttribute('controls', '')
            }
            else {
                wrapperVideo.pause()
                wrapperVideo.classList.add('video__off')
                videoButton.classList.remove("video__active")
                wrapperVideo.removeAttribute('controls', '')
            }
        });
    }
    catch { }

    //END video 



    // изменение количества 
    try {
        const plusButton = document.querySelector('.popup-zakaz__plus')
        const minusButton = document.querySelector('.popup-zakaz__minus')
        const inputPopup = document.querySelector('.popup-zakaz__number-input')

        minusButton.addEventListener('click', () => {
            minusButton.nextElementSibling.stepDown();
        })
        plusButton.addEventListener('click', () => {
            plusButton.previousElementSibling.stepUp();
        })

    } catch {

    }
    // изменение количества 


    if (window.location.pathname === '/') {
        $('.header').addClass('header-main');
        $('body').addClass('body-background');
    }

    // console.log(navigator);

    //up-button Подъем вверх
    const upButton = document.querySelector('.up-button');

    window.addEventListener('DOMContentLoaded', () => {
        if (window.scrollY < 300) {
            upButton.style.opacity = '0';
        } else {
            upButton.style.opacity = '1';
        }
    })

    window.addEventListener('scroll', () => {
        if (window.scrollY < 300) {
            upButton.style.opacity = '0';
        } else {
            upButton.style.opacity = '1';
        }
    })

    upButton.onclick = () => {
        window.scrollTo(0, 0);
    }

});