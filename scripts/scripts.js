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

const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `You are the first visit. Welcome!`;
}

numVisits++;
localStorage.setItem("numVisits-ls", numVisits);