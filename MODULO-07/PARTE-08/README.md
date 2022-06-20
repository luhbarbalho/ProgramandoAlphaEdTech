<div display="flex">
    <img src="../assets/imgs/alpha-logo.png" width="40px" align="left"/>
    <h1>Módulo 07 - Parte 08</h1>
</div>

## objetos em JavaScript, notação de ponto e cochetes, conversão string/object, erros de parsing

&nbsp;

### Exercícios

1. Crie uma página web que peça ao usuário que preencha 5 dados de usuário (‘Nome’, ’Data de Nascimento’, ’Peso’, ’Altura’ e ‘Gênero’) por meio de um formulário, sendo armazenado em um objeto JavaScript ‘user’ após clique de um botão, de forma que:

1. O campo do ‘Nome’ é do tipo string e será armazenado no formato string;
    1. A ‘Data de Nascimento’ deve ser inserida pelo usuário através de 3 campos (‘dia’, ‘mês’ e ‘ano’) de forma que a seleção de não pode ser de data inexistente ou superior à data atual, sendo armazenada no formato Date;
    1. O ‘Peso’ e ‘Altura’ embora seja inserido no formato string deve ser armazenado no formato numérico, de forma que o peso (kg) é numérico de ponto flutuante e a altura (cm) em um numérico inteiro;
    1. O ‘Gênero’ deve ser capturado por meio de um campo do tipo select e armazenado em formato string;
    1. O objeto Javascript deve conter os seguintes atributos:
        1. name: que armazenará o nome do usuário (formato string);
        1. birthDate: que armazenará a data de nascimento (formato Date);
        1. weight: que armazenará o peso em quilogramas (formato numérico float);
        1. height: que armazenará a altura em centímetros (formato numérico int);
        1. gender: que armazenará o gênero (formato string).

1. Estenda o exercício anterior agora ‘capturando’ e ‘emitindo’ erros (‘throw’), de forma que:

    1. Emitir erro de `Field “name” is invalid!` se o nome estiver sem valor preenchido ou tenha tamanho inferior a 5 caracteres;
    1. Emitir erro `Field “birthDate” is invalid!` se a data de nascimento for superior a data atual ou se a data for impossível (inválida);
    1. Emitir erro `Field “weight” is invalid!`, se não for do tipo numérico;
    1. Emitir erro `Field “height” is invalid!`, se não for do tipo numérico e não for inteiro;
    1. Emitir erro `Field “gender” is invalid!`, caso não seja um dos gêneros possíveis determinados por você no formulário.

1. Estenda o exercício 1 e exiba o resultado após o clique no botão:

    1. Se houver erro, mostre o erro ‘capturado’ no formulário;
    1. Se não houver erro:
        1. mostre os dados com um label e valor a cada linha;
        1. mostre o resultado do objeto em formato string (JSON.stringify);
        1. mostre no console o objeto resultante.

1. Crie uma página web que possua um formulário com 2 campos, um do tipo textarea e um botão, de forma que:

    1. A área de texto deve permitir ao usuário inserir um texto que posteriormente será convertido em um objeto;
    1. Ao clicar no botão deverá:
        1. Exibir um erro caso não seja possível converter o texto em um objeto JavaScript (JSON.parse), capturando o erro por meio da estrutura ‘try...catch’;
        1. Caso seja possível a conversão:
            1. Exibir uma mensagem ‘Parsable JSON string!’;
            1. Mostrar no console o objeto.

1. Crie um objeto sem atributos ‘{}’ e adicione um atributo “Um atributo com espaços” com valor numérico 1, e exiba no console, de duas formas:

    1. Utilizando colchetes;
    1. Sem utilizar colchetes.

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
