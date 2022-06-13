const turnOn = document.querySelector(".turnOn");
let explode;
let tickTick;
const bombOff = document.querySelector(".bombOff");
const bombOn = document.querySelector(".bombOn");
const boom = document.querySelector(".boom");
const audioBomb = document.querySelector(".audioBomb");
const ticking = document.querySelector('.ticking');

turnOn.addEventListener('click', () => {

    
    bombOn.style.display = "flex";
    bombOff.style.display = "none";
    boom.style.display = "none";
    
    
    tickTick = setInterval(() => {
        ticking.play();
    }, 1000);
    
    explode = setTimeout(() => {
        bombOn.style.display = "none";
        boom.style.display = "flex";
        audioBomb.play();
        clearInterval(tickTick);
    }, 10000);

});

function disableBomb () {
    clearTimeout(explode);
    clearInterval(tickTick);
    ticking.pause();
    
    bombOn.style.display = "none";
    bombOff.style.display = "flex";
};