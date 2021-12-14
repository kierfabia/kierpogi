
let menuBar = document.querySelector('#menubar');
let navigation = document.querySelector('nav');

menuBar.addEventListener('click', () =>{
    menuBar.classList.toggle('fa-times');
    navigation.classList.toggle('active');
});