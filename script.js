const headerEl = document.querySelector('.header');
const navLinksEl = document.querySelectorAll('.nav-link');
const logoNavEl = document.querySelector('.logo');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        headerEl.classList.add('header-scrolled');
        navLinksEl.forEach(link => {
            link.classList.add('nav-link-scrolled');
            link.classList.add('nav-link-hovered');
            link.style.setProperty('--underline-color', 'black');
        });
    } else {
        headerEl.classList.remove('header-scrolled');
        navLinksEl.forEach(link => {
            link.classList.remove('nav-link-scrolled');
            link.classList.remove('nav-link-hovered');
            link.style.setProperty('--underline-color', 'white');
        });
    }
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        logoNavEl.classList.add('logo-scrolled');
    } else if (window.scrollY < 50) {
        logoNavEl.classList.remove('logo-scrolled');
    }
});
