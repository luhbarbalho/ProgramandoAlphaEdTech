<div display="flex">
    <img src="../assets/imgs/alpha-logo.png" width="40px" align="left"/>
    <h1>Módulo 07 - Parte 06</h1>
</div>

## setTimeout, setInterval e áudio

&nbsp;

### Exercícios

1. Crie uma página web que ‘arme uma bomba’ (imagem de uma bomba) que ‘exploda’ em 10 segundos, considerando:
    1. Utilize o setTimeout para ‘armar a bomba’ (bomba com pavil aceso);
    1. Caso o usuário clique na bomba, utilize o clearTimeout para desarmar a bomba
(bomba com pavil apagado);
    1. Caso a bomba não seja desarmada, ao terminar o tempo, a bomba deve explodir e
um som de explosão deve ser tocado.

1. Substitua o setTimeout do exercício anterior, aumente o tempo para 60 segundos e adicione um setInterval que mostra os segundos decrementando de 1 em 1 segundo até a explosão caso não seja desarmada, considerando:
    1. A cada ‘tick’ de tempo decrescente, adicione um som de ‘tick’ curto para demonstrar que o tempo está acabando;
    1. Se o usuário clicar na bomba, utilizar o clearInterval para desarmar a bomba;
    1. Se o usuário não clicar na bomba, a bomba deve explodir (som de explosão) e a contagem deve parar.

1. Crie uma página web que contenha um alarme no qual o usuário define os minutos (máximo 59 minutos) e segundos e clica em um botão que inicia a contagem regressiva, considerando:
    1. Utilizar o HTML select para seleção dos minutos e segundos;
    1. Criar um botão que inicia a contagem regressiva que ao ser clicado este se torna um
botão de desarmar alarme;
    1. O contador regressivo mostra o tempo a cada segundo;
    1. Quando faltar menos de 5% do tempo inicial mudar a interface de contagem para
informar que o tempo está acabando;
    1. Ao término da contagem, o tempo deve parar de ser decrementado e deve-se
disparar um alarme (som de alarme) informando que o tempo acabou;
    1. Se o usuário clicar no botão de desarmar alarme, a contagem deve ser parada e, caso o alarme esteja tocando, o som deve parar, transformando o botão para que possa
armar o alarme novamente.

&nbsp;

---

### Referências básicas

- setTimeout

  - [https://developer.mozilla.org/en-US/docs/Web/API/setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
  - [https://www.w3schools.com/jsref/met_win_settimeout.asp](https://www.w3schools.com/jsref/met_win_settimeout.asp)

- clearTimeout

  - [https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout](https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout)
  - [https://www.freecodecamp.org/news/javascript-settimeout-how-to-set-a-timer-in-javascript-or-sleep-for-n-seconds/](https://www.freecodecamp.org/news/javascript-settimeout-how-to-set-a-timer-in-javascript-or-sleep-for-n-seconds/)

- setInterval

  - [https://developer.mozilla.org/pt-BR/docs/Web/API/setInterval](https://developer.mozilla.org/pt-BR/docs/Web/API/setInterval)
  - [https://www.w3schools.com/jsref/met_win_setinterval.asp](https://www.w3schools.com/jsref/met_win_setinterval.asp)
  - [https://javascript.info/settimeout-setinterval](https://javascript.info/settimeout-setinterval)

- clearInterval

  - [https://developer.mozilla.org/en-US/docs/Web/API/clearInterval](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval)
  - [https://www.w3schools.com/jsref/met_win_clearinterval.asp](https://www.w3schools.com/jsref/met_win_clearinterval.asp)

- audio

  - [https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio)
  - [https://www.w3schools.com/jsref/dom_obj_audio.asp](https://www.w3schools.com/jsref/dom_obj_audio.asp)
  - [https://devpleno.com/audio-com-js-puro](https://devpleno.com/audio-com-js-puro)

- HTMLaudio

  - [https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/audio](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/audio)
  - [https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement)
