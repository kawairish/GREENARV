let navbar = document.querySelector('.navbar');
let navLink1 = document.querySelector('#nav-link1')
let navLink2 = document.querySelector('#nav-link2')
let navLink3 = document.querySelector('#nav-link3')
let navLink4 = document.querySelector('#nav-link4')
let btn1 = document.querySelector('.btn-1')
window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = '#FFF';
        navbar.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
        navLink1.style.color = 'black'
        navLink2.style.color = 'black'
        navLink3.style.color = 'black'
        navLink4.style.color = 'black'
        btn1.style.color = '#4E4E4E'
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.boxShadow = "none";
        navLink1.style.color = '#ECEDEE'
        navLink2.style.color = '#ECEDEE'
        navLink3.style.color = '#ECEDEE'
        navLink4.style.color = '#ECEDEE'
        btn1.style.color = '#FFF'
    }
});

// const showDropdown2Button = document.querySelector('.btn-1');
// const dropdown2 = document.querySelector('.dropdown2');

// showDropdown2Button.addEventListener('click', function () {
//     if (dropdown2.style.display === 'none' || dropdown2.style.display === '') {
//         dropdown2.style.display = 'block';
//     } else {
//         dropdown2.style.display = 'none';
//     }
// });

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 2500); // Change image every 2.5 seconds
}



