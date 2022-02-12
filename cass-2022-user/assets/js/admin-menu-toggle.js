let toggle = document.querySelector('.admin-toggle');
let navigation = document.querySelector('.admin-navigation');
let main = document.querySelector('.admin-main');

toggle.onClick = function () {
    navigation.classList.toggles('active');
    main.classList.toggles('active');
}