window.onload = function(){
    let clickedBurger = document.querySelector('.hamburger-box');
    let navbar = document.querySelector('ul.nav-links');
    clickedBurger.addEventListener('click', () => {
        console.log('done boss');
        navbar.classList.toggle('show')
    })

}