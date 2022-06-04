<div display="flex">
    <img src="../assets/alpha-logo.png" width="40px" align="left"/>
    <h1>Módulo 03 - Parte 04</h1>
</div>

&nbsp;
### Exercícios:

1. Responda quais são as diferenças entre os elementos ‘div’ e ‘span’ na construção de páginas HTML.
    - O elemento div (divisão) é um elemento em bloco genérico, usado com mais frequência para dividir o conteúdo da página em blocos. Um elemento de bloco é um elemento de página que inicia uma nova linha e tem uma largura igual à página inteira ou ao container pai. <br>
    As divs são usadas frequentemente para agrupar parágrafos, imagens, títulos e links relacionados. Usar divs dessa maneira facilita a identificação de diferentes seções de uma página e a aplicação de estilos a elas com CSS.
    - O elemento span é um elemento inline genérico, normalmente usado para aplicar estilo a uma parte do conteúdo inline. Um elemento span não inicia uma nova linha e só ocupa tanto espaço na página quanto seu conteúdo. As tags span são usadas em pequenos segmentos de texto, links, imagens e outros elementos HTML que aparecem alinhados com o conteúdo ao redor.
<br><br>

1. Elabore um formulário com o uso do elemento ‘label’ que seja ‘clicável’ para o controle de elemento de entrada do tipo ‘ratio button’, isto é, ao clicar no ‘label’ o ‘ratio button’ também é selecionado.

    > [pagina com requisitos](./index.html)
<br><br>

1. Por que não se aconselha o uso indiscriminado de elementos ‘div’? Explique quais seriam as alternativas para reduzir o uso destes elementos.
    - Conforme dito anteriormente div é muito útil para estilizar e estruturar páginas da web. Ou seja, pode ser tentador usar uma tag Div sempre para adicionar um novo elemento de página. Porém, é recomendado limitar seu uso o máximo possível, pois como div é um  elemento genérico, ele não transmite significado sobre o conteúdo ou finalidade da tag.<br>
    Logo, deve se dar preferência ao elemento semântico, cujas tags comunicam o significado do elemento. A maioria dos elementos HTML são semânticos naturalmente.

    ```
    ex de elementos HTML semânticos muito usados:
    
    <p>
    
    <img>
    
    <h1> a <h6>
    
    <button>
    ```

    - Elementos semânticos tornam mais fácil para rastreadores de mecanismos de pesquisa, tecnologias assistivas como leitores de tela e desenvolvedores da Web interpretarem e darem muito mais sentido à página Web. <br>
    Então precisa-se saber bem qual a necessidade e qual o tipo de conteúdo que se quer colocar na página, utilizando mais elementos semânticos quando possível.

&nbsp;
---

### Referências básicas:

- Elemento ‘div’:

    - https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/div
    - https://medium.com/@zac_heisey/7-alternatives-to-the-div-html-tag-7c888c7b5036
    
- Elemento ‘span’:

    - https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/span
    - https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLSpanElement
    
- Atributo ‘id’: 

    - https://developer.mozilla.org/pt-BR/docs/Web/HTML/Global_attributes/id
    - https://developer.mozilla.org/pt-BR/docs/Web/API/Element/id
    
- Atributo ‘class’: 

    - https://developer.mozilla.org/pt-BR/docs/Web/HTML/Global_attributes/class
    
- Trabalhando com formulários: 

    - https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/Forms/Meu_primeiro_formulario_HTML
    - https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/Forms/How_to_structure_an_HTML_form
    - https://alistapart.com/article/sensibleforms/#
    - https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/input
    - https://www.youtube.com/watch?v=MKSQYsLLFEo