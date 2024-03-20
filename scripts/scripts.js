const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.rockstar');


hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open')
});


const darkFeature = document.querySelector('#darkMode');
const main = document.querySelector('main');


darkFeature.addEventListener('click', ()=> {
    main.classList.toggle('dark');
});