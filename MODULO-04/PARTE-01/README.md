<div display="flex">
    <img src="../assets/imgs/alpha-logo.png" width="40px" align="left"/>
    <h1>Módulo 04 - Parte 01</h1>
</div>

&nbsp;
### Exercícios:

1. O que é e para que serve o “Cascading Style Sheets”?
    - O seletor é primeira parte de uma regra CSS, ele define o elemento ao qual o conjunto de regras se aplicará.

1. Como é a sintaxe utilizada pelo CSS?
    - A sintaxe é formada por um seletor, uma declaração entre chaves, propriedades e valores.

    ```
    Por exemplo:

    h1 {
    color: purple;
    }

    * Nesse exemplo: h1 = seletor, {color: purple;} = declaração, color = propriedade e purple = valor.
    ```

1. Crie uma página HTML que utilize a estilização CSS nas suas 3 (três) formas básicas, isto é “inline CSS”, “internal CSS” e “external CSS”.  Mostre o código publicado no Github ou JSFiddle com o resultado obtido. <br><br>

3. Qual a ordem de prioridade de estilos CSS na atribuição de estilos em elementos HTML?
    - Entre inline CSS, internal CSS e external CSS, a prioridade é menor no CSS externo, depois vem o CSS interno e o de maior prioridade é o CSS inline.

1. A atribuição posterior a um elemento ao qual foi feita uma atribuição anterior, torna inválida  a atribuição anteriormente realizada? Explique.
    - Caso essa atribuição seja feita ao mesmo elemento de forma especifica, sim, a atribuição anterior se torna inválida, visto que a que vier por último no CSS externo, é a que será realizada, caso seja feita outra atribuição no CSS interno, essa será a que vai ficar, e ainda caso seja colocada outra atribuição ao CSS inline, será essa que permanecerá.

&nbsp;
---

### Referências básicas:

- **Seletores em CSS**
    - [https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors)
    - [https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)
    - [https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
    - [https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
    - [https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators)