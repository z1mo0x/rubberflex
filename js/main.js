window.addEventListener("DOMContentLoaded", () => {
    //sidebar
    const sidebarButton = document.querySelector('.sidebar__menu');
    const headerMenuButton = document.querySelector('.header-mobile__menu')
    const sidebarClose = document.querySelector('.menu__close');
    const sidebarContent = document.querySelector('.menu');

    sidebarButton.addEventListener('click', () => {
        sidebarContent.classList.toggle('menu-active');
    })

    sidebarClose.addEventListener('click', () => {
        sidebarContent.classList.toggle('menu-active');
    })

    // if (window.screenX < 993) {
    //     headerMenuButton.addEventListener('click', () => {
    //         sidebarContent.classList.toggle('menu-active');
    //     })
    // }


    //maskphone 
    //maskphone 
    var inputElements = document.querySelectorAll(".maskphone");

    for (let inputElement of inputElements) {
        console.log(inputElement);

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

    function companySlider() {
        const companySlider = new Swiper('.company__slider', {

            pagination: {
                el: ".company__pagination",
            },


            speed: 500,

            navigation: {
                nextEl: ".company-next",
                prevEl: ".company-prev",
            },

        });
    }

    heroSlider();
    companySlider();
});