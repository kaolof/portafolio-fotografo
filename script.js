document.querySelector('.menu-btn').addEventListener('click', () =>{
    document.querySelector('.nav-menu').classList.toggle('show')
});

ScrollReveal().reveal('.carousel');
ScrollReveal().reveal('.about', {delay:500});
ScrollReveal().reveal('.contact', {delay:500});
ScrollReveal().reveal('.social', {delay:500});