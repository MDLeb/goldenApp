const openMenu = () => {  
    document.querySelector(".header__burger").classList.toggle("active");
    document.querySelector(".header").classList.toggle("active");

    document.querySelector(".header__burger").classList.contains("active") ?
    document.body.style.overflow = 'hidden' : 
    document.body.style.overflow = 'scroll';
}

Array.from(document.querySelectorAll('.header__navigation a')).forEach(elem =>
    elem.addEventListener('click', () => {
        openMenu()
    }));