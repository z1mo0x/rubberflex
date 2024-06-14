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

    //sliders 

    function heroSlider() {
        const heroSlider = new Swiper('.hero__slider', {

            pagination: {
                el: ".hero__slider-pagination",
                type: "fraction",
            },

            navigation: {
                nextEl: ".hero__slider-next",
                prevEl: ".hero__slider-prev",
            },

        });
    }

    heroSlider()
});