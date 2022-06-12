export function isWebp() {
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    testWebP(function (support) {
        if (support == true) {
            document.querySelector('body').classList.add('webp');
        } else {
            document.querySelector('body').classList.add('no-webp');
        }
    });
}

export function fixedHeader(header) {
    const main = document.querySelector('main');
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        if (scrollPos > header.offsetHeight + 30) {
            header.classList.add('sticky')
            main.style.marginTop = header.offsetHeight;
            document.querySelector('main').style.marginTop = `${header.offsetHeight}px`;
        } else {
            main.style.marginTop = null;
            header.classList.remove('sticky')
            document.querySelector('main').style.marginTop = null;
        }
    })
}

export function scrollTo(menuItems, scrollSections, burger, menu) {
    if (menuItems && scrollSections) {
        menuItems.forEach(button => {
            scrollSections.forEach(section => {
                button.addEventListener('click', () => {
                    burger.classList.remove('active');
                    menu.classList.remove('active');
                    document.body.classList.remove('lock');
                    if (button.dataset.scroll === section.dataset.scroll) {
                        const pos = section.offsetTop;
                        window.scrollTo({
                            top: pos - 106,
                            left: 0,
                            behavior: 'smooth'
                        })
                    }
                })
            })
        })
    }
}

export function tabs(tabs, tabsButtons, tabsContents) {
    if (tabs) {
        tabs.addEventListener('click', (e) => {
            if (e.target.classList.contains('tabs__button')) {
                const tabsPath = e.target.dataset.tabsPath;
                tabsHandler(tabsPath);
            }
        })
    }

    const tabsHandler = (path) => {
        tabsButtons.forEach(button => {
            button.classList.remove('tabs__button--active')
        })
        document.querySelector(`[data-tabs-path="${path}"]`).classList.add('tabs__button--active');

        tabsContents.forEach(content => {
            content.classList.remove('tabs__content--active')
        })
        document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
    }
}