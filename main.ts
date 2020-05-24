// Selection of HTML objects
const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav');

function toggleNav(): void {
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    nav.classList.toggle('nav-active');
}
burger.addEventListener('click', function () {
    toggleNav();
});

document.addEventListener("DOMContentLoaded", function (event: Event) {
    document.getElementById('main-body').scrollTop;
});
