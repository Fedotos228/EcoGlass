import * as flsFunctions from './modules/functions.js'

flsFunctions.isWebp();


let sliders = document.querySelectorAll('.swiper');
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');

            if (slider.classList.contains('swiper_scroll')) {
                let sliderScroll = document.createElement('div');
                sliderScroll.classList.add('swiper-scrollbar');
                slider.appendChild(sliderScroll);
            }
        }
        if (slider.classList.contains('gallery')) {
            // slider.data('lightGallery').destroy(true);
        }
    }
    sliders_bild_callback()
}

function sliders_bild_callback(params) { }

let sliderScollItems = document.querySelectorAll('.swiper-scroll');
if (sliderScollItems.length > 0) {
    for (let index = 0; index < sliderScollItems.length; index++) {
        const sliderScrollItem = sliderScollItems[index];
        const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
        const sliderScroll = new Swiper(sliderScrollItem, {
            observer: true,
            observeParents: true,
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: sliderScrollBar,
                draggable: true,
                snapOnRelease: false,
            },
            mousewheel: {
                releaseOnEdges: true,
            },
        });
        sliderScroll.scrollbar.updateSize();
    }
}

// let sliderTemplate = new Swiper('.slider', {
//     // effect: 'fade',
//     // autoplay:{
//     //     delay: 3000,
//     //     disableOnInteraction: false,
//     // }

//     observer: true,
//     observeParents: true,
//     slidesPerView: 1,
//     spaceBetween: 0,
//     autoHeight: true,
//     speed: 800,
//     // touchRatio: 0,
//     // simulateTouch: false,
//     // loop: true,
//     // preloadImages: false,
//     // lazy: true,
//     // pagination: {
//     //     el: '.slider-pagging',
//     //     clickable: true,
//     // },
//     navigation: {
//         nextEl: '.swiper-next',
//         prevEl: '.swiper-prev',
//     },

//     // breakpoints: {
//     //     320: {
//     //         slidesPerView: 1,
//     //         spaceBetween: 0,
//     //         autoHeight: true,
//     //     },
//     //     768: {
//     //         slidesPerView: 2,
//     //         spaceBetween: 20,
//     //     },
//     //     992: {
//     //         slidesPerView: 3,
//     //         spaceBetween: 20,
//     //     },
//     //     1268: {
//     //         slidesPerView: 4,
//     //         spaceBetween: 30,
//     //     },
//     // },
//     on: {
//         lazyImageReady: function() {
//             ibg();
//         },
//     },
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     }
// })

const burger = document.querySelector('.burger')
const headerNav = document.querySelector('.header-nav')
const headerList = document.querySelector('.header-nav__list')
const headerItem = document.querySelectorAll('.header-nav__list li')

burger.addEventListener("click", () => {
    burger.classList.toggle("active")
    headerNav.classList.toggle("active")
    document.body.classList.toggle("lock")


})

for (var i = 0; i < headerItem.length; i++) {
    headerItem[i].addEventListener("click", function () {
        burger.classList.remove('active')
        headerNav.classList.remove('active')
        document.body.classList.remove('lock')
    });
}

new Swiper('.slider-intro__body', {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: true,
    speed: 800,
    // autoplay: {
    //     delay: 6000,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: '.slider-intro-controls__dots',
        clickable: true,
    },
    navigation: {
        nextEl: '.slider-arrow__next',
        prevEl: '.slider-arrow__prev',
    },

    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //         spaceBetween: 0,
    //         autoHeight: true,
    //     },
    //     768: {
    //         slidesPerView: 2,
    //         spaceBetween: 20,
    //     },
    //     992: {
    //         slidesPerView: 3,
    //         spaceBetween: 20,
    //     },
    //     1268: {
    //         slidesPerView: 4,
    //         spaceBetween: 30,
    //     },
    // },
})

new Swiper(".slider-construction__body", {
    spaceBetween: 10,
    navigation: {
        prevEl: ".slider-thumb-prev",
        nextEl: ".slider-thumb-next",
    },
    thumbs: {
        swiper: new Swiper(".slider-thumb__body", {
            spaceBetween: 20,
            slidesPerView: 4,
            direction: 'vertical',
            navigation: {
                prevEl: ".slider-thumb-prev",
                nextEl: ".slider-thumb-next",
            },
        }),
    },
});

new Swiper('.slider-project__body', {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: true,
    speed: 800,
    effect: 'fade',
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.slider-arrow__next',
        prevEl: '.slider-arrow__prev',
    },

    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //         spaceBetween: 0,
    //         autoHeight: true,
    //     },
    //     768: {
    //         slidesPerView: 2,
    //         spaceBetween: 20,
    //     },
    //     992: {
    //         slidesPerView: 3,
    //         spaceBetween: 20,
    //     },
    //     1268: {
    //         slidesPerView: 4,
    //         spaceBetween: 30,
    //     },
    // },
})

const tabBtn = document.querySelectorAll('.project-list__btn')
const tabsItems = document.querySelectorAll('.project-tab')

tabBtn.forEach(item => {
    item.addEventListener("click", () => {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId)

        tabBtn.forEach(item => {
            item.classList.remove('active');
        })
        tabsItems.forEach(item => {
            item.classList.remove('active');
        })
        currentBtn.classList.add('active');
        currentTab.classList.add('active')
    })
})

new Swiper('.slider-gallery__body', {
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    observer: true,
    observeParents: true,
    slidesPerView: 4,
    spaceBetween: 20,
    autoHeight: true,
    speed: 800,
    navigation: {
        nextEl: '.slider-arrow__next',
        prevEl: '.slider-arrow__prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1268: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
})

const topBtn = document.querySelector('.go-to-top')

if (topBtn) {
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 200) {
            topBtn.classList.add('active')
        } else {
            topBtn.classList.remove('active')

        }
    })

    function scrollToTop() {
        window.scrollTo({ top: 0 });
    }
    topBtn.addEventListener('click', () => {
        scrollToTop()
    })
}

const lightbox = document.querySelector('.lightbox')

const images = document.querySelectorAll('.lightbox-image');
const imagesArr = Array.from(document.querySelectorAll('.lightbox-image img'));
const galleryLeft = document.querySelector('.lightbox__controls--left')
const galleryRight = document.querySelector('.lightbox__controls--right')

images.forEach(image => {
    image.addEventListener("click", () => {
        lightbox.classList.add('active')
        document.body.classList.add('lock')
        var img = image.querySelector('img');
        var lightboxImage = document.createElement('img');
        lightboxImage.src = img.src;
        lightbox.insertBefore(lightboxImage, lightbox.firstChild);
    })
})

const clickNext = () => {
    const lightboxImage = lightbox.querySelector('img');
    const image = imagesArr.find(item => item.src === lightboxImage.src);
    if (lightboxImage.src === image.src) {
        const parent = image.parentNode;
        if (parent.nextElementSibling) {
            lightboxImage.remove()
            const nextImage = document.createElement('img');
            nextImage.src = parent.nextElementSibling.querySelector('img').src;
            lightbox.insertBefore(nextImage, lightbox.firstChild);
        } else {
            galleryRight.classList.add('disabled')
        }
    }
}

const clickPrev = () => {
    const lightboxImage = lightbox.querySelector('img');
    const image = imagesArr.find(item => item.src === lightboxImage.src);
    if (lightboxImage.src === image.src) {
        const parent = image.parentNode;
        if (parent.previousElementSibling) {
            lightboxImage.remove()
            const nextImage = document.createElement('img');
            nextImage.src = parent.previousElementSibling.querySelector('img').src;
            lightbox.insertBefore(nextImage, lightbox.firstChild);
        } else {
            galleryLeft.classList.add('disabled')
        }
    }
}

galleryLeft.addEventListener("click", clickPrev)
galleryRight.addEventListener("click", clickNext)


lightbox.addEventListener("click", e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
    document.body.classList.remove('lock');
    lightbox.querySelector('img').remove();
})
