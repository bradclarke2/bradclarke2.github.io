// Selection of HTML objects
const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav');

// Defining a function
function toggleNav() {
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    nav.classList.toggle('nav-active');
}
// Calling the function after click event occurs
burger.addEventListener('click', function () {
    toggleNav();
});

document.addEventListener("DOMContentLoaded", function (event) {
    scrollPosition = document.getElementById('main-body').scrollTop;
});
