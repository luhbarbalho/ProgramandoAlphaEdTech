<div display="flex">
    <img src="../assets/alpha-logo.png" width="40px" align="left"/>
    <h1>Módulo 03 - Parte 08</h1>
</div>

## Linguagem de notação HTML
&nbsp;
### Exercícios:

1. Elabore uma página que utilize o elemento ‘iframe’ para abrir conteúdo de outra página criada por você. Demonstre o código e funcionamento.
    ```
        <iframe id="outra-pagina"
            title="Inline Pagina"
            width="560"
            scrolling="auto"
            src="./outra-pagina.html">
        </iframe>
    ```

    - Esse iframe na minha opinião foi o mais simples, com poucas propriedades.
    -O id serve para podermos estilizar no css, acima está a estilização, bem simples, apenas alterando a aparência da borda;
    - O title, serve como um título para os leitores do próprio navegador, facilitando a acessibilidade;
    - O width, que determina a largura, poderia também ser colocado no css, porém pode ser especificado já no elemento HTML;
    - O scrolling é uma propriedade que permite que escolhemos entre "auto"(para apenas mostrar a rolagem apenas se o conteúdo da página for maior que as dimensões do iframe), "yes"(sempre mostrar a rolagem) e "no"(nunca mostrar a rolagem);
    - O src onde colocaremos o próprio link da página que queremos mostrar.

1. Elabore uma página que utilize o elemento ‘iframe’ para abrir conteúdo de outra página que esteja em outro servidor na internet. Demonstre o código e funcionamento.

    ```
        <div class="mapouter">
            <div class="gmap_canvas">
                <iframe class="gmap_iframe"
                    width="1500px"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?width=670&amp;height=350&amp;hl=en&amp;q=shopping riomar, recife, brasil&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
            </div>
        </div>
    ```

    - Esse iframe é concedido pelo próprio site do google maps, onde o usuário pode colocar o endereço desejado, largura e altura, o tipo de imagem, se satélite, ruas ou outros tipos, e se quer que tenha zoom ou não. Outras configurações também são fornecidas.


1. Elabore uma página que exiba o conteúdo de um ‘iframe’ do Youtube. Demonstre o código e funcionamento.

    ```
        <iframe width="560"
            src="[https://www.youtube.com/embed/wx-h9X0Dp-E](https://www.youtube.com/embed/wx-h9X0Dp-E)"
            title="YouTube video player"
            allow="accelerometer;
                autoplay;
                clipboard-write;
                encrypted-media;
                gyroscope;
                picture-in-picture"
                allowfullscreen>
        </iframe>
    ```

    - Esse iframe do youtube, pode ser pego no próprio site, indo no video desejado, clicando em "partilhar"(share) e na opção de "incorporar" (embed), copiar o código fornecido, e colar no código HTML.
    - Por ser uma caixa que permite passar o vídeo no próprio site, ele fornece a propriedade allow, que permite que o usuário acelere, toque automaticamente, permita tela inteira e outras propriedades fixas do youtube.<br><br><br>

[pagina com requisitos das questões 1, 2 e 3](./index.html)

&nbsp;
---

### Referências básicas:

- Iframe:

    - https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/iframe