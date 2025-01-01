const animatedIcon = document.querySelector(".navbar-toggler .animated-icon");
const navbarToggler = document.querySelector("#main-nav .navbar-toggler");

navbarToggler.addEventListener('click', (e) => {
    
        animatedIcon.classList.toggle("open");
        
    });