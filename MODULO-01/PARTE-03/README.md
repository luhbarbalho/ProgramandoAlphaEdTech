<div display="flex">
    <img src="../../MODULO-04/assets/imgs/alpha-logo.png" width="40px" align="left"/>
    <h1>Módulo 01 - Parte 03</h1>
</div>

## DNS e registro de domínio .br

&nbsp;

### Exercícios

1. O que é um “domain name space” e qual a sua importância na internet?

    - Domain name space (DNS) ou sistema de nomes de domínios, contém o registro de todos os domínios da internet. A sua função não é hospedar sites ou aplicações, a única função de um servidor DNS é a tradução de domínios para endereços de IP, para permitir que as requisições cheguem aos locais corretos.

    - Os servidores DNS são de muita importância no funcionamento da internet, e caso encontrem problemas, tanto de performance quanto de segurança, a internet pode ficar lenta para carregar sites ou nos mandar o usuário para sites errados ou comprometidos, facilitando a aplicação de golpes e roubos de informações sensíveis. Sendo assim, escolher um servidor DNS bom é uma decisão importante <br><br>

1. Quem administra o “name space” brasileiro (“.br”)?

    - O responsável por registrar e pela manutenção dos nomes de domínios que usam o .br. é o Registro.br, esse, é um departamento do Núcleo de Informação e Coordenação do Ponto BR (NIC.br), que foi criado para implementar as decisões e os projetos do Comitê Gestor da Internet no Brasil - CGI.br, que é o responsável por coordenar e integrar as iniciativas e serviços da Internet no País.
    <br><br>

1. O que são os “resources records” e para que servem? Dê exemplos

    - Os RRs são os blocos de construção básicos das informações de nome de host e IP e são usados para resolver todas as consultas de DNS. O nome do domínio identifica um node. Cada node possui um conjunto de informações de recursos, que podem estar vazios ou não. O conjunto de informações de recursos associado a um nome específico é composto de registros de recursos (RRs - Resource Records) separados.

    - O nome do proprietário é muitas vezes implícito, em vez de fazer parte integrante do RR. Por exemplo, muitos servidores formam internamente estruturas em formato de árvore ou hash, para o espaço do nome e encadeiam as RRs dos nodes.

    - As partes RR restantes são o cabeçalho fixo (tipo, classe, TTL) que é constante para todos os RRs, e uma parte variável (RDATA) que atende às necessidades do recurso que está sendo descrito.

    ```git
        Ex:

        XX.LCS.MIT.EDU.         IN      A       10.0.0.44
                                CH      A       MIT.EDU. 2420


        Este exemplo mostra dois endereços para XX.LCS.MIT.EDU, cada um com uma classe diferente.
    ```

1. Para que servem os “aliases” e “canonical names”? Dê exemplo de uso.

    - Em sistemas existentes, hosts e outros recursos geralmente têm vários nomes que identificam o mesmo recurso. (Do mesmo jeito que no correio, muitas organizações fornecem diversos nomes diferentes, mas que vão para a mesma caixa de correio.) A maioria desses sistemas tem uma noção de que um dos conjuntos equivalente de nomes é o nome canônico ou primário e todos os outros são aliases.Por exemplo, os nomes C.ISI.EDU e USC-ISIC.ARPA ambos identificam o mesmo host.
    - Suponha que um servidor de nomes esteja processando uma consulta para USC-ISIC.ARPA, solicitando informações do tipo A e tenha os seguintes registros de recursos:

    ```git
        USC-ISIC.ARPA       IN      CNAME       C.ISI.EDU
        C.ISI.EDU           IN        A         10.0.0.52
        
        
        Ambos os RRs seriam retornados na resposta à consulta do tipo A, enquanto uma consulta do tipo
        CNAME (Canonical Name) ou * deve retornar apenas o CNAME.
    ```

1. Quais são os servidores DNS utilizados pelo seu roteador de internet (ou computador)?

    ```git
        Servidores DNS
        181.213.132.2
        181.213.132.3
        2804:14d:1:0:181:213:132:2
        2804:14d:1:0:181:213:132:3
    ```

1. Para que serve a ferramenta ‘nslookup’. Demonstre o seu funcionamento.

    - nslookup é o nome de um programa que permite que um administrador de servidor de Internet ou qualquer usuário de computador insira um nome de host (por exemplo, "whatis.com") e descubra o endereço IP ou registro do sistema de nomes de domínio (DNS) correspondente. nslookup é usado para solucionar problemas de conexões de servidor ou por motivos de segurança. Esses motivos incluem proteção contra ataques de phishing, nos quais um nome de domínio é alterado - por exemplo, substituindo o numeral 1 por um l minúsculo - para fazer um site hostil parecer amigável e familiar (joes1owerprices.com vs. joeslowerprices.com). também ajuda a impedir o envenenamento de cache, no qual os dados são distribuídos para resolvedores de cache, se passando por um servidor de origem confiável.

    ```git
        % nslookup www.youtube.com
        Server:  2804:14d:1:0:181:213:132:2
        Address: 2804:14d:1:0:181:213:132:2#53
        Non-authoritative answer:
        www.youtube.com canonical name = youtube-ui.l.google.com.
        Name: youtube-ui.l.google.com
        Address: 142.250.79.46
        Name: youtube-ui.l.google.com
        Address: 142.250.218.142
        Name: youtube-ui.l.google.com
        Address: 142.250.218.46
        Name: youtube-ui.l.google.com
        Address: 142.251.132.78
        Name: youtube-ui.l.google.com
        Address: 142.250.79.238
        Name: youtube-ui.l.google.com
        Address: 142.250.78.238
        Name: youtube-ui.l.google.com
        Address: 142.250.79.14
        Name: youtube-ui.l.google.com
        Address: 142.251.129.78
        Name: youtube-ui.l.google.com
        Address: 142.250.78.206
        Name: youtube-ui.l.google.com
        Address: 142.250.218.110
    ```

&nbsp;

---
### Referências básicas

- **Domain Name System (DNS)**
  - [https://datatracker.ietf.org/doc/html/rfc1034](https://datatracker.ietf.org/doc/html/rfc1034)
  - [https://datatracker.ietf.org/doc/html/rfc1035](https://datatracker.ietf.org/doc/html/rfc1035)
  - [https://www.youtube.com/watch?v=epWv0-eqRMw](https://www.youtube.com/watch?v=epWv0-eqRMw)

- **Servidores DNS públicos**
  - [https://canaltech.com.br/internet/veja-como-escolher-o-melhor-servidor-dns-para-acelerar-sua-navegacao/](https://canaltech.com.br/internet/veja-como-escolher-o-melhor-servidor-dns-para-acelerar-sua-navegacao/)

- **Registro de domínio .br**
  - [https://www.youtube.com/watch?v=gZRYDxWuYpk](https://www.youtube.com/watch?v=gZRYDxWuYpk)

- **nslookup**
  - [https://man.cx/nslookup](https://man.cx/nslookup)
  - [https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/nslookup](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/nslookup)
