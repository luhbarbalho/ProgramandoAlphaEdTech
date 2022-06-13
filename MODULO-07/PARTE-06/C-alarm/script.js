const begin = document.querySelector(".begin");
let alarming;
let tickTick;
const alarmOff = document.querySelector(".alarmOff");
const alarmOnLeft = document.querySelector(".alarmOnLeft");
const audioBomb = document.querySelector(".audioBomb");
const ticking = document.querySelector('.ticking');
let botao = document.querySelector(".botao");

for (let i = 0; i < 59; i++) {
    const chronometerMin = document.querySelector('#chronometerMin');
    chronometerMin.innerHTML += `<option class="min"> ${i} </option>`;
    const chronometerSec = document.querySelector('#chronometerSec');
    chronometerSec.innerHTML += `<option class="sec"> ${i} </option>`;
}



function activateAlarm () {

    botao.innerHTML = '<button class="begin" onClick="disableAlarm()">Desarmar</button>';

    let chooseMin = chronometerMin.options.selectedIndex;
    const minChosen = chronometerMin.options[chooseMin].text;
    let chooseSec = chronometerSec.options.selectedIndex;
    const secChosen = chronometerSec.options[chooseSec].text;

    const minInMillisecond = minChosen * 60000;
    const secInMillisecond = secChosen * 1000;

    const totalTime = minInMillisecond + secInMillisecond;
    console.log(totalTime);

    // alarmOff.style.display = "flex";

    // TODO: fazer o contador descrescente
    // TODO: tela de 5% do tempo restante


    tickTick = setInterval(() => {
        ticking.play();
    }, 1000);

    alarming = setTimeout(() => {
        alarmOnLeft.style.display = "flex";
        // alarmOff.style.display = "none";
        audioBomb.play();
        clearInterval(tickTick);
    }, totalTime);

};

function disableAlarm () {

    clearTimeout(alarming);
    clearInterval(tickTick);
    ticking.pause();
    audioBomb.pause();
    alarmOnLeft.style.display = "none";
    // alarmOff.style.display = "flex";

    botao.innerHTML = '<button class="begin" onClick="activateAlarm()">Iniciar</button>';
};