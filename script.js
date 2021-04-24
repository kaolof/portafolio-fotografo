var li= document.getElementsByTagName("li");


document.querySelector('.menu-btn').addEventListener('click', () =>{
    document.querySelector('.nav-menu').classList.toggle('show');

});

for(i=0; i<li.length; i++){
    
    li[i].addEventListener('click', () =>{
        document.querySelector('.nav-menu').classList.toggle('show');

    });
}

ScrollReveal().reveal('.carousel');
ScrollReveal().reveal('.about', {delay:500});
ScrollReveal().reveal('.contact', {delay:500});
ScrollReveal().reveal('.social', {delay:500});