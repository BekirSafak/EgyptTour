var hamburgerButton = document.querySelector('.dropLi');
var dropdownMenu = document.querySelector('.dropMenu');

hamburgerButton.addEventListener('click', function () {
    if (dropdownMenu.style.opacity == 0) {
        dropdownMenu.style.opacity = 1;
    } else {
        dropdownMenu.style.opacity = 0;
    }
});