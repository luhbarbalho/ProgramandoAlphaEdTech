<div display="flex">
    <img src="../../MODULO-04/assets/imgs/alpha-logo.png" width="40px" align="left"/>
    <h1>Módulo 01 - Parte 04</h1>
</div>

## Arquiteturas, XML e JSON
&nbsp;
### Exercícios:

1. Como funciona a arquitetura cliente-servidor? Qual a sua vantagem?

    - Arquitetura cliente-servidor ou modelo cliente-servidor é uma arquitetura na qual o processamento da informação é dividido em módulos ou processos distintos. Existe um processo que é responsável pela manutenção da informação (servidores) e outro responsável pela obtenção dos dados (os clientes).

    - Vantagens:
        - Como esse tipo de arquitetura permite que os papéis e responsabilidades de um sistema de computação possam ser distribuídos entre vários computadores independentes, isso proporciona maior facilidade de manutenção.
        - Todos os dados são armazenados nos servidores, que geralmente possuem controles de segurança muito maiores do que a maioria dos clientes. Os servidores podem controlar melhor o acesso a recursos, para garantir que apenas os clientes com credenciais válidas possam aceder e alterar os dados;
        - Como o armazenamento de dados é centralizado, as atualizações dos dados são muito mais fáceis de administrar em comparação com o paradigma P2P, onde atualizações de dados podem precisar ser distribuídos e aplicadas a cada nó na rede, o que consome tempo e é passível de erro, já que pode haver milhares ou mesmo milhões de nós;
        - Muitas tecnologias avançadas de cliente-servidor estão disponíveis e foram projetadas para garantir a segurança, facilidade de interface do usuário e facilidade de uso;
        - Funciona com vários clientes diferentes de capacidades diferentes.
    <br><br>

1.  No que consiste a camada de persistência da arquitetura de 3 camadas? Dê exemplo.

    - A camada de dados, chamada também de camada de banco de dados, camada de acesso a dados, camada de persistência ou back-end, é onde as informações processadas pelo aplicativo são armazenadas e gerenciadas.

    - Este pode ser um sistema de gerenciamento de banco de dados relacional, como por exemplo, PostgreSQL, MySQL, MariaDB, Oracle, DB2, Informix ou Microsoft SQL Server ou em um servidor de banco de dados como NoSQL, como Cassandra, CouchDB ou MongoDB. Uma alteração no banco de dados alteraria apenas as classes da camada de dados, mas o restante da arquitetura não seria afetado por essa alteração.
    <br><br>

1. Explique a vantagem do uso da arquitetura orientada a serviços (SOA).

    - A Arquitetura Orientada a Serviços é uma metodologia de arquitetura. A vantagem dessa arquitetura, é que cada serviço em uma SOA incorpora o código e as integrações de dados necessários para executar uma função de negócios completa e discreta (por exemplo, verificar o crédito de um cliente). As interfaces de serviço podem ser solicitadas com pouco ou nenhum conhecimento sobre como a integração está sendo implementada nos bastidores. Os serviços são publicados de forma a possibilitar que os desenvolvedores os encontrem rapidamente e os reutilizem para montar novos aplicativos.

    - Como exemplo, pode-se ter um serviço responsável por capturar pedidos de clientes, que publica um evento OrderCaptured; e um serviço separado responsável por rastrear quando o cliente é cobrado e o quanto é devido, que responde ao evento OrderCaptured. O primeiro serviço pode não precisar saber nada sobre cobrança, devido à separação de responsabilidades. E os dois serviços também não precisam saber um do outro, apenas sobre os eventos que estão acontecendo ao seu redor.

1. Onde e como são utilizados os microsserviços na computação?

    - Os microsserviços são componentes separados que trabalham juntos para realizar as mesmas tarefas. Essa abordagem de desenvolvimento de software valoriza a granularidade, a leveza e a capacidade de compartilhar processos semelhantes entre várias aplicações. Dado que a computação em nuvem, somada à automatização do processo de build e deploy, agiliza o processo de disponibilização de novas versões das aplicações em ambiente de produção, torna-se frustrante recompilar e executar exaustivos testes automatizados sobre aplicações muito grandes, o que atrasa o processo de colocar no ar uma nova versão de uma aplicação, especialmente se as alterações forem realizadas apenas em uma pequena parte do sistema. O uso dos microsserviços permite quebrar o problema, permitindo atualizar apenas as funcionalidades necessárias, sem precisar mexer no restante da aplicação.

    - Um modelo distribuído proporciona uma maior tolerância a falhas, minimizando o impacto negativo. Isso porque em uma aplicação única, uma falha em uma determinada funcionalidade pode acarretar a indisponibilidade de todo o sistema. No modelo de microsserviços, uma falha em uma determinada funcionalidade não implica na parada das outras funcionalidades disponíveis.

    - Também pode-se considerar que caso algum dos serviços apresente um gargalo devido a alto tráfego ou por algum outro motivo, ele, e somente ele, pode ser escalado, não é necessário escalar a aplicação inteira. Com o uso de serviços independentes e com baixo ou nenhum acoplamento, há a possibilidade de utilização das melhores linguagens e ferramentas para resolução de cada problema.

1. Acesse um serviço de web service e exiba o conteúdo. Este conteúdo é em qual formato (XML/JSON)?

    - O conteúdo abaixo está em JSON, retirado do webservice https://api.mercadolibre.com/items/MLB2133426138:
    ```
        {
        "id": "MLB2133426138",
        "site_id": "MLB",
        "title": "Ventilador De Parede Ventisol Monta Fácil Turbo Preto Com 6 Pás, 51 cm De Diâmetro 127 v",
        "subtitle": null,
        "seller_id": 207695713,
        "category_id": "MLB1645",
        "official_store_id": 3330,
        "price": 237.91,
        "base_price": 237.91,
        "original_price": 279.9,
        "currency_id": "BRL",
        "initial_quantity": 544,
        "available_quantity": 250,
        "sold_quantity": 250,
        "sale_terms": [],
        "buying_mode": "buy_it_now",
        "listing_type_id": "gold_pro",
        "start_time": "2022-01-06T12:18:30.000Z",
        "stop_time": "2042-01-01T04:00:00.000Z",
        "condition": "new",
        "permalink": "https://produto.mercadolivre.com.br/MLB-2133426138-ventilador-de-parede-ventisol-monta-facil-turbo-preto-com-6-pas-51cm-de-dimetro-127v-_JM",
        "thumbnail_id": "801552-MLA48708433047_122021",
        "thumbnail": "http://http2.mlstatic.com/D_801552-MLA48708433047_122021-I.jpg",
        "secure_thumbnail": "https://http2.mlstatic.com/D_801552-MLA48708433047_122021-I.jpg",
        "pictures": [],
        "video_id": null,
        "descriptions": [
        ],
        "accepts_mercadopago": true,
        "non_mercado_pago_payment_methods": [
        ],
        "shipping": {},
        "international_delivery_mode": "none",
        "seller_address": {},
        "seller_contact": null,
        "location": {
        },
        "coverage_areas": [
        ],
        "attributes": [],
        "warnings": [
        ],
        "listing_source": "",
        "variations": [
        ],
        "status": "active",
        "sub_status": [
        ],
        "tags": [],
        "warranty": "Garantia do vendedor: 12 meses",
        "catalog_product_id": "MLB18607536",
        "domain_id": "MLB-FANS",
        "parent_item_id": null,
        "differential_pricing": null,
        "deal_ids": [
        ],
        "automatic_relist": false,
        "date_created": "2022-01-06T12:18:30.000Z",
        "last_updated": "2022-04-13T17:46:37.000Z",
        "health": null,
        "catalog_listing": true,
        "channels": []
        }
    ```


&nbsp;
---

### Referências básicas:

- **Arquitetura cliente servidor**
    - https://pt.wikipedia.org/wiki/Modelo_cliente%E2%80%93servidor
    - https://www.youtube.com/watch?v=SEC-tbKa1KQ

- **Arquitetura de 3 camadas**
    - https://pt.wikipedia.org/wiki/Modelo_em_tr%C3%AAs_camadas
    - https://www.ibm.com/support/knowledgecenter/ptbr/SS7K4U_9.0.5/com.ibm.websphere.zseries.doc/ae/covr_3- tier.html

- **Arquitetura orientada a serviços (SOA)**
    - https://www.redhat.com/pt-br/topics/cloud-native-apps/what-is-service-oriented-architecture

- **Arquitetura de microsserviços**
    - https://www.redhat.com/pt-br/topics/microservices
    - https://docs.microsoft.com/pt-br/azure/architecture/guide/architecture-styles/microservices

- **Web Services**
    - https://www.devmedia.com.br/web-services/2873
    - Exemplo: https://portal.tcu.gov.br/webservices-tcu/
    - https://dados-abertos.apps.tcu.gov.br/api/acordao/recupera-acordaos?inicio=001&quantidade=2

- **XML**
    - https://www.w3.org/XML/

- **JSON**
    - https://www.json.org/json-en.html