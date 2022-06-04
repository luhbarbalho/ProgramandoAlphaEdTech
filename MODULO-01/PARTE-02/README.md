<div display="flex">
    <img src="../../MODULO-04/assets/imgs/alpha-logo.png" width="40px" align="left"/>
    <h1>Módulo 01 - Parte 02</h1>
</div>

## IP (v4 e v6), NAT e whois
&nbsp;
### Exercícios:

1. Como é formado o endereço IP no formato ipv4?

    - O IPv4 é a primeira versão de IP que surgiu no mercado, nos anos 80, e ainda é o Protocolo de Internet mais utilizado nos dias de hoje.

    - A atribuição de endereços IP deve seguir a topologia da rede e não geografia ou fronteiras nacionais. Eles são alocados por uma autoridade central de numeração chamada Internet Assigned Numbers Authority (IANA), usando políticas desenvolvidas pela comunidade que são projetadas para garantir que a distribuição seja justa e equitativa, globalmente exclusivos quando necessário e tenham um grande espaço de endereço reservado para uso por dispositivos não visíveis fora de suas próprias redes.

    - No geral, um endereço IPv4 é composto por quatro conjuntos de números, de 0 a 255, que são separados por pontos. O IPv4 utiliza um endereço de 32 bits capaz de fornecer cerca de 4,3 bilhões de endereços únicos, porém, com a popularização da internet e dos dispositivos móveis, IPv4 passou a não dar conta da quantidade de endereços IP necessários.

    - O tamanho de uma alocação a um IR em particular está baseado na taxa de ocupação do espaço utilizado anteriormente por seus clientes. O objetivo é evitar a existência de grandes blocos que não sejam designados aos usuários finais.

    - Os endereços IP de 4 octetos foram originalmente divididos em três classes, A, B e C. Cada classe de endereço especifica um número de bits para seu prefixo de rede e número de host:
        - Os endereços de classe A usam apenas o primeiro byte (octeto) para especificar o prefixo da rede, deixando 3 bytes para definir os números de host individuais.
        - Os endereços de classe B usam os primeiros 2 bytes para especificar o prefixo da rede, deixando 2 bytes para definir os endereços de host.
        - Os endereços de classe C usam os primeiros 3 bytes para especificar o prefixo da rede, deixando apenas o último byte para identificar os hosts.
    <br><br>

1. Como é formado o endereço IP no formato ipv6?

    - O IPv6 é a versão mais recente de protocolo IP, apresentado ao mercado na década de 90. O IPv6 tem uma capacidade para criar 1.028 vezes mais endereços IP do que o IPv4.

    - Todos os endereços IPv6 têm 128 bits, escritos como 8 seções de 16 bits cada. Eles são expressos em representação hexadecimal, portanto, as seções variam de 0 a FFFF. As seções são delimitadas por dois pontos(:), e os zeros à esquerda em cada seção podem ser omitidos. Se duas ou mais seções consecutivas tiverem todos zeros, elas podem ser reduzidas a dois pontos duplos.
    
    - Endereços IPv6 têm o seguinte formato: aaaa:aaaa:aaaa:aaaa:aaaa:aaaa:aaaa:aaaa<br><br>
    Cada “aaaa” é um valor hexadecimal de 16 bits e cada “a” é um valor hexadecimal de 4 bits. ex: 3FFE:0000:0000:0001:0200:F8FF:FE75:50DF,  e pode-se omitir os zeros à esquerda de cada grupo de 16 bits, dessa forma: 3FFE::1:200:F8FF:FE75:50DF.
    <br><br>

1. Acesse um domínio, informe o endereço acessado e qual o seu endereço ipv4.

    > www.notion.com - IP: 104.18.11.147
    <br><br>

1. Quais os endereços IP da sua rede privada e qual o endereço IP público de sua rede no momento? Exiba o endereço IP de todos os dispositivos conectados, do seu roteador e obtido para o uso da internet. 

    ```
        IPv4 (Privado) - 192.168.0.57
        IPv6 - 2804:14d:5492:8f78::b07a
        Público - 191.187.140.226
        Roteador - 192.168.0.1

        Endereços conectados:

        ? (169.254.14.39) at fc:b3:bc:c8:19:c3 on en3 [ethernet]
        ? (192.168.0.1) at cc:75:e2:d7:fb:df on en3 ifscope [ethernet]
        ? (192.168.0.155) at fc:b3:bc:c8:19:c3 on en3 ifscope [ethernet]
        ? (224.0.0.251) at 1:0:5e:0:0:fb on en3 ifscope permanent [ethernet]
        ? (239.255.255.250) at 1:0:5e:7f:ff:fa on en3 ifscope permanent [ethernet]
    ```

1. Descubra e exiba o endereço da sua placa de rede utilizada para acessar a internet, o gateway e o DNS utilizado.

    ```
        IPv4 (Privado) - 192.168.0.57
        Servidor DNS primário (IPv4):181.213.132.2
        Endereço do gateway padrão da WAN (IPv4):191.187.140.1
    ```

1. Para que serve o NAT? Explique.

    - O NAT (network address translation) é um protocolo aplicado na camada de rede e tem como função fazer a tradução dos endereços IP e Portas TCP da rede local para o mundo (Internet). Quando pacote deixa a rede local, ele passa por uma caixa NAT que converte o IP de origem interno ao IP público.
    <br><br>

1. Utilize a ferramenta WHOIS para obter as informações de um domínio.

    ```
        Domain Name: [GLOBO.COM](http://globo.com/)
        Registry Domain ID: 2822135_DOMAIN_COM-VRSN
        Registrar WHOIS Server: [whois.1api.net](http://whois.1api.net/)
        Registrar URL: [http://www.1api.net](http://www.1api.net/)
        Updated Date: 2018-05-23T16:27:41Z
        Creation Date: 1998-12-21T05:00:00Z
        Registrar Registration Expiration Date: 2025-12-21T05:00:00Z
        Registrar: 1API GmbH
        Registrar IANA ID: 1387
        Registrar Abuse Contact Email: [abuse@1api.net](mailto:abuse@1api.net)
        Registrar Abuse Contact Phone: +49.68949396x850
        Domain Status: clientDeleteProhibited - [http://www.icann.org/epp#clientDeleteProhibited](http://www.icann.org/epp#clientDeleteProhibited)
        Domain Status: clientTransferProhibited - [http://www.icann.org/epp#clientTransferProhibited](http://www.icann.org/epp#clientTransferProhibited)
        Registry Registrant ID:
        Registrant Name: Globo Comunicacao e Participacoes S/A
        Registrant Organization: 27.865.757/0001-02
        Registrant Street: Rua Lopes Quintas
        303
        Registrant City: Rio de Janeiro
        Registrant State/Province: RJ
        Registrant Postal Code: 22460-010
        Registrant Country: BR
        Registrant Phone: +55.2125402000
        Registrant Phone Ext:
        Registrant Fax:
        Registrant Fax Ext:
        Registrant Email: [dns-admin@corp.globo.com](mailto:dns-admin@corp.globo.com)
        Registry Admin ID:
        Admin Name: Globo Comunicacao e Participacoes S.A.
        Admin Organization:
        Admin Street: Av das Americas
        700
        Admin City: Rio de Janeiro
        Admin State/Province: RJ
        Admin Postal Code: 22640100
        Admin Country: BR
        Admin Phone: +55.2125402000
        Admin Phone Ext:
        Admin Fax:
        Admin Fax Ext:
        Admin Email: [dns-admin@corp.globo.com](mailto:dns-admin@corp.globo.com)
        Registry Tech ID:
        Tech Name: Globo Comunicacao e Participacoes S.A.
        Tech Organization:
        Tech Street: Av das Americas
        700
        Tech City: Rio de Janeiro
        Tech State/Province: RJ
        Tech Postal Code: 22640100
        Tech Country: BR
        Tech Phone: +55.2125402000
        Tech Phone Ext:
        Tech Fax:
        Tech Fax Ext:
        Tech Email: [dns-tech@corp.globo.com](mailto:dns-tech@corp.globo.com)
        Name Server: [ns01.globo.com](http://ns01.globo.com/) 131.0.24.26 2804:0294:0100:0803:0131:0000:0024:0026
        Name Server: [ns02.globo.com](http://ns02.globo.com/) 186.192.89.18
        Name Server: [ns03.globo.com](http://ns03.globo.com/) 186.192.89.5 2804:0294:4000:8001:0000:0000:0000:0005
        Name Server: [ns04.globo.com](http://ns04.globo.com/) 177.53.95.213 2804:0294:8000:0200:0177:0053:0095:0213
        DNSSEC: unsigned
        URL of the ICANN WHOIS Data Problem Reporting System:
        [http://wdprs.internic.net/](http://wdprs.internic.net/)

        Last update of WHOIS database: 2022-04-11T13:42:41Z <<<
    ```

&nbsp;
---

### Referências básicas:

- **Internet Protocol (IP)**
    - Ipv4
        - https://www.lacnic.net/820/3/lacnic/2-enderecos-ipv4
    - Ipv6
        - https://www.lacnic.net/3067/3/lacnic/implementa-ipv6
        - https://anchor.fm/camada8/episodes/Rumo-ao-IPv6-Brasil-ei20ng/a-a2u7kts
        - https://www.youtube.com/watch?v=dkVHgQDRLxE

- **Endereços IP públicos e privados**
    - https://pt.wikipedia.org/wiki/Rede_privada

- **NAT**
    - https://tools.ietf.org/html/rfc2663

- **Whois**
    - Whois
        - https://registro.br/tecnologia/ferramentas/whois/
        
    - Windows
        - https://docs.microsoft.com/en-us/sysinternals/downloads/whois
        
    - Linux:
        - https://www.linuxforce.com.br/comandos-linux/comandos-linux-comando-whois/
        
    - Mac
        - Abrir o console e digitar “whois” seguido do domínio a ser pesquisado