var hamburgerButton = document.querySelector('.dropLi');
var dropdownMenu = document.querySelector('.dropMenu');

hamburgerButton.addEventListener('click', function () {
    if (dropdownMenu.style.display === 'none') {
        dropdownMenu.style.display = 'block';
    } else {
        dropdownMenu.style.display = 'none';
    }
});