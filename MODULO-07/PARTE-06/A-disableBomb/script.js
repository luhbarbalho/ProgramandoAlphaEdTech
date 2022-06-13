const turnOn = document.querySelector(".turnOn");
let explode;
const bombOff = document.querySelector(".bombOff");
const bombOn = document.querySelector(".bombOn");
const boom = document.querySelector(".boom");
const audioBomb = document.querySelector(".audioBomb");

turnOn.addEventListener('click', () => {

    
    bombOn.style.display = "flex";
    bombOff.style.display = "none";
    boom.style.display = "none";
    
    explode = setTimeout(() => {
        bombOn.style.display = "none";
        boom.style.display = "flex";
        audioBomb.play();
        
        
    }, 10000);
});

function disableBomb () {
    clearTimeout(explode);
    bombOn.style.display = "none";
    bombOff.style.display = "flex";
};