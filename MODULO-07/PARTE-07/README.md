<div display="flex">
    <img src="../assets/imgs/alpha-logo.png" width="40px" align="left"/>
    <h1>Módulo 07 - Parte 07</h1>
</div>

## onChange/change event, keyup/keydown, textarea e scrollTop

&nbsp;

### Exercícios

1. Crie uma página web que possua um elemento HTML select que possa selecionar uma lista de carros esportivos, considerando:

    1. Identificar a mudança de carro selecionado e alterar a imagem associada;
    1. Exibir as informações referentes a este carro (dados do carro como nome, fabricante,
velocidade máxima, 0-100km e outras informações que julgar pertinente);
    1. A página web deve ser bem construída visualmente.

1. Crie uma página web que contenha um formulário que contenha um campo do tipo CEP (input type text), considerando:

    1. Capturar o evento de input para não permitir ao usuário a inserção de um caractere que não seja numérico;
    1. Ao digitar o CEP, capturar o evento de keyup para poder preencher o campo até o limite de tamanho de um CEP não permitindo mais números do que o permitido e adicionando, se necessário o ‘hífen’ natural de um CEP, isto é, a medida que o usuário digita um número, o campo de CEP deve conter o valor do CEP (incluindo o hífen).
    1. Se o usuário apertar a tecla ‘backspace’ (keydown) ele deve apagar o último número inserido.

1. Crie uma página web que possua dois campos, um do tipo textarea, outro do tipo text e um botão de enviar, considerando:

    1. A página deve simular um chat, onde possibilite o envio de uma mensagem de forma que a mensagem digitada no campo do tipo text, ao clicar no botão enviar, deve aparecer no campo do tipo textarea (sem apagar o conteúdo do campo textarea adicionando uma linha a mais a cada inserção);
    1. O campo textarea deve ter uma largura e altura definida de forma a exibir aproximadamente as últimas 10 linhas e, caso possua mais linhas apareça uma barra de scroll para visualizar todas as mensagens que excedam este limite;
    1. Se o usuário digitar a mensagem e apertar a tecla ‘enter’, a mensagem deve ser enviada como se o usuário tivesse apertado o botão enviar;
    1. O campo textarea deve receber as mensagens e automaticamente fazer um scroll até a última mensagem permitindo que a última mensagem seja sempre visualizada (utilizar o scrollTop para isso);
    1. Adicionar um botão para poder ‘limpar’ o conteúdo do campo textarea que ao ser clicado apague o conteúdo do campo textarea.

&nbsp;

---

### Referências básicas

- change event
  - <https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event>
  - <https://www.javascripttutorial.net/javascript-dom/javascript-change-event>
- onChange event
  - <https://developer.mozilla.org/pt-BR/docs/Web/API/GlobalEventHandlers/onChange>
  - <https://www.w3schools.com/tags/ev_onchange.asp>
- keyup event
  - <https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event>
- keydown event
  - <https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event>
- input event
  - <https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event>
- HTML textarea
  - <https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/textarea>
  - <https://www.w3schools.com/tags/tag_textarea.asp>
- scrollTop
  - <https://developer.mozilla.org/pt-BR/docs/Web/API/Element/scrollTop>
  - <https://stackoverflow.com/questions/11715646/scroll-automatically-to-the-bottom-of-the-page>
