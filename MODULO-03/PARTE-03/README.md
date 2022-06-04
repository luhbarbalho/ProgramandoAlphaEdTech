<div display="flex">
    <img src="../assets/alpha-logo.png" width="40px" align="left"/>
    <h1>Módulo 03 - Parte 03</h1>
</div>

&nbsp;
### Exercícios:

1. Qual a última versão do HTML?

    - HTML5

1. O que é uma ‘tag’ em HTML? Dê exemplo. 

    - As tags (em português “etiqueta") servem para informar ao navegador que tipo de estrutura está sendo construída, podendo representar títulos, parágrafos, imagens, links, entre outros.

    - Para criar uma tag deve-se definir um sinal de menor (<), o nome da tag e por fim um sinal de maior (>). Para fechar essa mesma tag, basta definir um sinal de menor (<), uma barra (/), o nome da tag e um sinal de maior (>).

    - Há dois tipos de tags, as que precisam de fechamento e as que se fecham sozinhas:
    ```
    exemplo de tags que precisam de fechamento:

    <strong></strong> ⇒ É usado para salientar algum elemento importante na página(semanticamente)
                        colocando-o em negrito
    ```
    ```
    No caso da tag que fecha sozinha, na tag de abertura, definir um sinal de menor (<) e após definir o nome
    da tag, nós já colocamos uma barra (/), e um sinal de maior (>) deixando claro seu fechamento.

    exemplo de tag se fecha sozinha:

    <img/> ⇒ É usada para colocar uma imagem à página (as imagens não estão impressas no html,
             e sim são trazidas através de um link).
    ```

1. O que é um ‘atributo’ em HTML? Dê exemplo.

    - Atributos HTML são palavras especiais usadas dentro da tag de abertura para controlar o comportamento do elemento. Com eles podemos identificar melhor um elemento, informar qual arquivo aquela tag deve utilizar, indicar o tipo de um campo de texto, etc…

    - Há dois tipos de atributos no HTML, os globais que são aceitos por todas as tags, como por exemplo: class, id, lang, style, e os específicos que somente algumas tags possuem, como src, href, label, placeholder etc…

1. O HTML é sensível ao caso (case sensitive)?

    - Não.

1. O que é o ‘DOM’ e qual a sua importância?

    - Quando uma página da Web é carregada, o navegador cria um Modelo de Objeto de Documento (DOM) da página.<br>
    O Javascript DOM (Document Object Model) é de grande importância, pois ele é uma plataforma e uma interface de linguagem neutra que possibilita que os desenvolvedores, através de programas e scripts, manipulem dinamicamente o conteúdo, estrutura e estilo dessa página.

1. O que é uma ‘URL’? Dê exemplo.

    - A sigla URL significa Uniform Resource Locator (Ou localizador uniforme de resources). E nada mais é do que o endereço de um determinado recurso exclusivo na Web. URLs podem ser por exemplo, página HTML, um documento CSS, uma imagem, etc.
    Uma URL pode ser digitada no local de endereço do browser, para "mandar" que ele mostra a página associada à URL.

    ```
        Ex:
        
        - https://www.google.com
        - https://github.com/luhbarbalho/
    ```

1. Qual a importância do atributo ‘charset’? 

    - É um atributo que serve para que na hora exibir uma página HTML corretamente, o navegador saiba qual conjunto de caracteres usar.
    ```
        Ex:
        
        <meta charset="UTF-8">
    ```

1. O que é o ‘UTF-8’? Qual a sua importância? 

    - UTF-8  (UTF-Formato de Transformação Unicode) é um sistema de codificação para Unicode.<br>
    Ele pode traduzir qualquer caractere Unicode para uma string binária exclusiva correspondente e também pode traduzir a string binária de volta para um caractere Unicode. UTF-8 é a maneira mais usada de representar texto Unicode em páginas Web. Mas é apenas uma das maneiras possíveis de codificar caracteres Unicode, existindo algumas outras.
    - De fato é o método mais popular e no momento importante pois pode armazenar de forma eficiente textos que contenham praticamente qualquer caractere em existência.

1. Qual a importância da programação HTML considerando-se a semântica nos arquivos criados? Dê 4 exemplos de elementos HTML que servem para definição de semântica.

    - O HTML criado de forma semântica torna as páginas da web mais informativas e adaptáveis, permitindo que os leitores de tela, mecanismos de pesquisa e outros dispositivos do usuário melhorem suas decisões sobre o contexto e o significado do conteúdo da web.

    ```
    Ex:
    1. <header></header> ⇒ Indica o cabeçalho da página
    
    2. <nav></nav> ⇒ Usada para agrupar links que formam um menu de navegação.
    
    3. <aside></aside> ⇒ Usada como um conteúdo adicional, sem importância para a compreensão de um artigo principal
                         da página, mas relacionado de alguma forma e pode ser inserido como uma seção ao lado.
                         
    4. <footer></footer> ⇒ É usado para indicar o rodapé da página.
    ```

1. Para que serve o atributo ‘lang’ colocado no elemento ‘html’? Altera o comportamento da página ao abri-la? Explique.

    - Esse atributo serve para identificar o idioma do conteúdo de texto na web e proporcionar uma boa acessibilidade também.<br>
    Ele não altera o conteúdo da página, mas essas informações ajudam os mecanismos de pesquisa a retornar resultados específicos do idioma e também são usadas por leitores de tela que alternam os perfis de idioma para fornecer o sotaque e a pronúncia corretos.

&nbsp;
---

### Referências básicas:

- **HTML Living Standard:**

    - https://html.spec.whatwg.org/multipage/