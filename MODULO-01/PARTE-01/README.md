<div display="flex">
    <img src="../../MODULO-04/assets/imgs/alpha-logo.png" width="40px" align="left"/>
    <h1>Módulo 01 - Parte 01</h1>
</div>

## TCP, UDP, ICMP, ping e traceroute/tracert
&nbsp;
### Exercícios:

1. Qual a finalidade do TCP?

    - O TCP é usado para organizar os dados de forma a garantir a transmissão segura e a integridade dos dados enviados na rede, independentemente da quantidade. Por esse motivo, ele é usado para transmitir dados de outros protocolos de nível superior que exigem que todos os dados cheguem seguramente.
    - Em uma comunicação TCP, os dois computadores começam estabelecendo uma conexão por meio de um processo automatizado chamado "handshake" (aperto de mãos). Somente depois que esse handshake for concluído, um computador transferirá pacotes de dados para o outro.
    - Além disso, as comunicações TCP indicam a ordem em que os pacotes de dados devem ser recebidos e confirmam se os pacotes chegaram como previsto. Se um pacote não chegar, devido, por exemplo, a um congestionamento nas redes intermediárias, o TCP exige que ele seja reenviado. As comunicações UDP não incluem nenhuma dessas funcionalidades.
    <br><br>

1. Como funciona o processo básico de transferência de dados no TCP?

    - O TCP é capaz de transferir um fluxo contínuo de octetos em cada direção entre seus usuários, empacotando um certo número de octetos em segmentos para transmissão através do sistema de internet. Em geral, os TCPs decidem quando bloquear e encaminhar dados conforme sua própria conveniência.
    - Às vezes, os usuários precisam ter certeza de que todos os dados que enviaram ao TCP foram transmitidos. Para isso é definida uma função push. Para garantir que os dados enviados a um TCP sejam realmente transmitidos, o usuário remetente indica que eles devem ser enviados para o usuário receptor. Um push faz com que os TCPs encaminhem prontamente e entreguem dados até aquele ponto ao receptor. O ponto de envio exato pode não ser visível para o usuário receptor.
    <br><br>

1. Como estão divididas as camadas do TCP? Explique cada uma delas.

    - Existem 4 camadas do TCP/IP, elas estão posicionadas conforme abaixo:
        - Camada de aplicação - A camada superior no modelo TCP/IP executa as funcionalidades das três camadas. Ele está no controle da conectividade node to node e dos requisitos de interface do usuário. Alguns dos protocolos encontrados nesta camada são os WWW, HTTP, SMTP, Telnet, FTP, SSH, NNTP, RDP, IRC, SNMP, POP3, IMAP, SIP, DNS, PING. <br>
        Quando a camada de aplicação deseja se comunicar com outra camada, ela encaminha os dados para a camada de transporte.

        - Camada de transporte - A principal responsabilidade desta camada é controlar a comunicação de dados sem erros de ponta a ponta. Além disso, a camada de transporte deve ser uma fonte confiável e deve ser capaz de controlar o fluxo de dados na comunicação. Existem dois protocolos principais dentro da camada de transporte, o TPC e o UDP.
        
        - Camada de Internet - A responsabilidade dos protocolos na camada Internet é a transmissão lógica dos dados para toda a rede de computadores. Ela envia os pacotes de dados de qualquer rede sem depender da rota que seguem. O IP (internet protocol) é o principal protocolo responsável por compartilhar os pacotes de dados do host para a fonte de destino, validando os endereços IP no cabeçalho. Ele  Fornece uma maneira para o TCP enviar e receber segmentos de comprimento variável de informações contidas em envelopes de datagrama.<br>
        O IP também lida com qualquer fragmentação ou remontagem dos segmentos TCP necessários para alcançar o transporte e entrega através de várias redes. O IP também traz informações sobre a precedência, classificação de segurança e compartimentação dos segmentos TCP, para que esta informação possa ser comunicada em qualquer das extremidades das várias redes.

        - Camada Rede deComunicação (Communication Network) - É camada inferior do modelo TCP/IP. O principal objetivo da camada de acesso à rede é verificar o endereçamento do hardware e os protocolos da camada de acesso à rede que permitem a transmissão física dos dados. Os protocolos nesta camada são Ethernet, Modem, PPP, FDDi.
    <br><br>

1. Para que serve o “host” e “port” no TCP?

    - Uma porta (ou port) é um software de aplicação específica ou processo específico servindo de ponto final de comunicações em um sistema operacional hospedeiro (host) de um computador. As portas são numeradas e usadas como padrões globais para identificar processos específicos ou tipos de serviços na rede. <br>
    Assim como quando se envia uma encomenda para um destinatário, a pessoa escolhe de onde seria enviado e para onde chegaria, as portas TCP permitem a comunicação padronizada entre os dispositivos. Um dispositivo pode receber informações de muitos processos e serviços diferentes, e em qual porta a informação flui ajuda a mantê-la organizada.

    - Segundo a terminologia TCP/IP, um host é simplesmente um computador que está executando o TCP/IP. Para que um TCP/IP em rede de longa distância (WAN) funcione eficientemente como uma coleção de redes, os roteadores que passam pacotes de dados entre redes não sabem a localização exata de um host para o qual um pacote de informações é destinado. Os roteadores só sabem de qual rede o host é membro e usam as informações armazenadas em sua tabela de rotas para determinar como levar o pacote à rede do host de destino. Depois que o pacote é entregue à rede do destino, o pacote é entregue ao host apropriado.
    <br><br>
    
1. Quais são as portas utilizadas normalmente para envio (SMTP) e recebimento de e-mails (POP3 e IMAP) padrões utilizados na internet?

    - Os protocolos utilizados atualmente para envio e recebimento de emails são SMTP, IMAP e POP3. Cada servidor possui uma porta específica, dependendo do tipo de conexão.

    - A porta SMTP (Simple Mail Transporte Protocol) é utilizada para o envio de emails. As outras portas POP3 (Post Office Protocol) e IMAP (Internet Message Access Protocol) são usadas para o recebimento e sincronização das mensagens. As portas SMTP, IMAP e POp3 são as mais utilizadas em toda a internet.

    - O cliente pode fazer a escolha entre IMAP e POP3, no entanto, eles possuem uma diferença. O POP3 baixa as mensagens e as apaga do servidor, podendo ser usada a porta POP3 110 em conexões sem criptografia e a porta POP 993 para conexões seguras, criptografadas com TLS/SSL.

    - Em contrapartida, o IMAP sempre mantem cópia das mensagens no servidor. Podendo se utilizar a porta IMAP 143 para conexões sem criptografia enquanto a porta IMAP 993 normalmente é usada pra conexões seguras com criptografia TLS/SSL.
    <br><br>
    
1. Qual a relação do TCP com outros protocolos de comunicação como FTP, HTTP e HTTPS? Explique cada um destes outros protocolos.

    - O protocolo de transferência de arquivos ou FTP (file transfer protocol), é um protocolo de rede padrão que existe há décadas e é usado para a transferência de arquivos confidenciais entre um cliente e um servidor em uma rede de computadores. Ele pode ser usado para trocar e manipular arquivos em uma rede baseada em TCP/IP, como a Internet. Esse protocolo funciona com dois tipos de conexão: a do cliente (computador que faz o pedido de conexão) e do servidor (computador que recebe o pedido de conexão e fornece o arquivo ou documento solicitado pelo cliente). Usando o FTP, as credenciais do usuário são enviadas como texto simples e os arquivos não são criptografados quando são transferidos. Com ambos os canais não criptografados, o FTP deixa os dados vulneráveis a serem interceptados e aproveitados.

    - No caso de HTTP/HTTPS, antes que um cliente e um servidor possam trocar uma solicitação/resposta HTTP/HTTPS, eles devem primeiro estabelecer uma conexão TCP. Portanto, o HTTP/HTTPS depende do padrão TCP para realizar seu trabalho com sucesso.

    - HTTP - O protocolo HTTP (Protocolo de Transferência de Hipertexto) é usado para navegação em sites da internet. Esse protocolo continua sendo um dos principais meios de uso da Internet e fornece aos usuários uma maneira de interagir com recursos da Web, como arquivos HTML, transmitindo mensagens de hipertexto entre clientes (como um navegador da Web como o Chrome) e um servidor. O navegador envia um pedido de acesso a uma página, e o servidor retorna uma resposta de permissão de acesso. Junto com ela são enviados também os arquivos da página que o usuário deseja acessar.

    - O HTTPS (Protocolo de Transferência de Hipertexto Seguro) funciona exatamente como o HTTP, porém, existe uma camada de proteção a mais. Isso significa que os sites que utilizam esse protocolo são de acesso seguro.
    <br><br>

1. Qual a finalidade do UDP?

    - O UDP é um método padronizado de transferência de dados entre dois computadores de uma rede. Em comparação com outros protocolos, o UDP realiza este processo de forma simples: envia pacotes (unidades de transmissão de dados) diretamente para um computador de destino, sem estabelecer uma conexão antes, indicando a ordem desses pacotes ou verificando se eles chegaram como previsto. O UDP é mais rápido, mas menos confiável que o TCP.

    - As comunicações UDP não passam pelo mesmo processo que o TCP. Em vez disso, um computador pode simplesmente começar a enviar dados para o outro sem esperar resposta. Como o UDP não exige a verificação se os dados chegaram corretamente, ele é capaz de transferir dados muito mais rapidamente do que o TCP. No entanto, essa velocidade cria alguns dilemas. Se um datagrama UDP se perder em trânsito, ele não será reenviado.
    <br><br>

1. O que é o ICMP e qual a sua relação com o UDP?

    - O Protocolo de Mensagens de Controle da Internet, ou ICMP (Internet Control Message Protocol), tem uma função totalmente diferente do TCP e do UDP. Ao contrário desses tipos, o ICMP não é um protocolo de pacote de dados tradicional. ICMP é um tipo especial de pacote usado para comunicação entre dispositivos, transportando tudo, desde instruções de redirecionamento até carimbos de data e hora para sincronização entre dispositivos.

    - O que o ICMP é provavelmente mais conhecido, no entanto, são as solicitações de eco. Onde um dispositivo envia um pacote ICMP para outro, dizendo ao destinatário para enviar uma resposta confirmando que recebeu a solicitação. O destinatário então responde com um novo pacote ICMP, a resposta de eco, confirmando a solicitação. Por isso, o protocolo ICMP é usado pelos roteadores para assinalar um erro, chamado de Delivery Problem (Problema de Entrega).
    <br><br>

1. Utilize a ferramenta “ping” de seu sistema operacional para identificar o endereço IP de um domínio da internet e exiba o seu resultado.

    ```
        marialuiza@MacBook-Pro ~ % ping www.notion.com
        PING www.notion.com (104.18.10.147): 56 data bytes
        64 bytes from 104.18.10.147: icmp_seq=0 ttl=54 time=66.677 ms
        64 bytes from 104.18.10.147: icmp_seq=1 ttl=54 time=64.957 ms
        64 bytes from 104.18.10.147: icmp_seq=2 ttl=54 time=59.515 ms
        64 bytes from 104.18.10.147: icmp_seq=3 ttl=54 time=60.714 ms
        64 bytes from 104.18.10.147: icmp_seq=4 ttl=54 time=61.256 ms
        64 bytes from 104.18.10.147: icmp_seq=5 ttl=54 time=59.965 ms
        64 bytes from 104.18.10.147: icmp_seq=6 ttl=54 time=61.119 ms
        64 bytes from 104.18.10.147: icmp_seq=7 ttl=54 time=59.489 ms
        64 bytes from 104.18.10.147: icmp_seq=8 ttl=54 time=61.953 ms
        64 bytes from 104.18.10.147: icmp_seq=9 ttl=54 time=59.848 ms
        64 bytes from 104.18.10.147: icmp_seq=10 ttl=54 time=61.799 ms
        64 bytes from 104.18.10.147: icmp_seq=11 ttl=54 time=60.577 ms
        64 bytes from 104.18.10.147: icmp_seq=12 ttl=54 time=60.837 ms
        64 bytes from 104.18.10.147: icmp_seq=13 ttl=54 time=59.132 ms
        64 bytes from 104.18.10.147: icmp_seq=14 ttl=54 time=60.236 ms
        64 bytes from 104.18.10.147: icmp_seq=15 ttl=54 time=61.128 ms
        64 bytes from 104.18.10.147: icmp_seq=16 ttl=54 time=59.410 ms
        64 bytes from 104.18.10.147: icmp_seq=17 ttl=54 time=58.846 ms
        64 bytes from 104.18.10.147: icmp_seq=18 ttl=54 time=60.395 ms
        64 bytes from 104.18.10.147: icmp_seq=19 ttl=54 time=62.877 ms
        64 bytes from 104.18.10.147: icmp_seq=20 ttl=54 time=60.376 ms
        64 bytes from 104.18.10.147: icmp_seq=21 ttl=54 time=60.745 ms
        64 bytes from 104.18.10.147: icmp_seq=22 ttl=54 time=61.824 ms
        64 bytes from 104.18.10.147: icmp_seq=23 ttl=54 time=59.714 ms
        64 bytes from 104.18.10.147: icmp_seq=24 ttl=54 time=64.543 ms
    ```

1. Utilize a ferramenta “traceroute” (ou “tracert”) para diagnosticar a rota de acesso a um domínio e exiba o seu resultado.

    ```
        marialuiza@MacBook-Pro ~ % traceroute www.notion.com
        traceroute: Warning: www.notion.com has multiple addresses; using 104.18.10.147
        traceroute to www.notion.com (104.18.10.147), 64 hops max, 52 byte packets
        1  192.168.0.1 (192.168.0.1)  4.615 ms  5.054 ms  4.162 ms
        2  10.11.0.1 (10.11.0.1)  15.233 ms  18.556 ms  15.169 ms
        3  badf800c.virtua.com.br (186.223.128.12)  17.067 ms  20.750 ms  17.324 ms
        4  embratel-t0-0-0-1-uacc02.rce.embratel.net.br (201.45.35.33)  31.341 ms  31.025 ms
        embratel-t0-2-0-2-uacc02.fla.embratel.net.br (200.172.151.21)  28.594 ms
        5  ebt-plag-21-core01.fla.embratel.net.br (200.244.211.234)  75.887 ms
        200.244.74.4 (200.244.74.4)  61.234 ms  63.645 ms
        6  ebt-b8501-tcore01.rjo.embratel.net.br (200.244.211.235)  84.579 ms  80.003 ms  80.215 ms
        7  ebt-h0-1-0-0-agg03.rjo.embratel.net.br (200.244.18.8)  80.082 ms
        200.244.75.11 (200.244.75.11)  65.659 ms  70.685 ms
        8  peer-b61-agg03.rjo.embratel.net.br (200.255.177.54)  79.619 ms  83.405 ms
        200.244.75.10 (200.244.75.10)  88.203 ms
        9  200.244.75.11 (200.244.75.11)  79.803 ms
        104.18.10.147 (104.18.10.147)  77.078 ms  79.407 ms
    ```
    
&nbsp;
---

### Referências básicas:

- **Transmission Control Protocol (TCP)**
    - https://datatracker.ietf.org/doc/html/rfc793
    - https://www.meridianoutpost.com/resources/articles/well-known-tcpip-ports.php

- **User Datagram Protocol (UDP)**
    - https://datatracker.ietf.org/doc/html/rfc768

- **Internet Control Message Protocol (ICMP)**
    - https://datatracker.ietf.org/doc/html/rfc792
    - https://hub.packtpub.com/understanding-network-port-numbers-tcp-udp-and-icmp-on-an-operating-system/

- **Ping**
    - https://man.cx/ping(1)
    
- **Traceroute**
    - https://www.ibm.com/docs/en/aix/7.2?topic=t-traceroute-command
    - https://support.microsoft.com/en-us/topic/how-to-use-tracert-to-troubleshoot-tcp-ip-problems-in-windows-e643d72b-2f4f-cdd6-09a0-fd2989c7ca8e