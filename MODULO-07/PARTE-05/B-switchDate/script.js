
const resultadoData = document.querySelector(".resultadoData");
const showDate = document.querySelector(".showDate");
let mensagemErro = 'Alow? Cê não escolheu data nenhuma';


showDate.addEventListener('click', function(e) {
    e.preventDefault();


    const chosenDate = document.querySelector("#writenDate").value;

    let fullDate = new Date(chosenDate);
    let date = fullDate.getUTCDate();
    let month = (fullDate.getUTCMonth() + 1);
    let monthName;
    let year = fullDate.getUTCFullYear();
    let weekday;
    let weekdays = fullDate.getUTCDay();
    let timeStamp = fullDate.getTime();


        // *********************** DIA DA SEMANA
    switch (weekdays) {
        case 1:
            weekday = 'Domingo';
            break;
        case 2:
            weekday = 'Segunda-feira';
            break;
        case 3:
            weekday = 'Terça-feira';
            break;
        case 4:
            weekday = 'Quarta-feira';
            break;
        case 5:
            weekday = 'Quinta-feira';
            break;
        case 6:
            weekday = 'Sexta-feira';
            break;
        case 7:
            weekday = 'Sábado';
            break;
    };

    // *********************** MÊS POR EXTENSO
    switch (month) {
        case 1:
            monthName = 'Janeiro';
            break;
        case 2:
            monthName = 'Fevereiro';
            break;
        case 3:
            monthName = 'Março';
            break;
        case 4:
            monthName = 'Abril';
            break;
        case 5:
            monthName = 'Maio';
            break;
        case 6:
            monthName = 'Junho';
            break;
        case 7:
            monthName = 'Julho';
            break;
        case 8:
            monthName = 'Agosto';
            break;
        case 9:
            monthName = 'Setembro';
            break;
        case 10:
            monthName = 'Outubro';
            break;
        case 9:
            monthName = 'Novembro';
            break;
        case 10:
            monthName = 'Dezembro';
            break;
    };
    
    isNaN(date)
    ?
    resultadoData.innerHTML = `<h3>${ mensagemErro }</h3>`
    :
    resultadoData.innerHTML =
    `<h3>O data escolhida é ${ date } / ${ month } / ${ year }</h3>
    <h3>O dia da semana é ${ weekday }</h3>
    <h3>O mês é ${ monthName }</h3>
    <h3>Em milissegundos isso tudo é ${ timeStamp }</h3>`;

});