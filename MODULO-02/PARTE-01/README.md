<div display="flex">
    <img src="../../MODULO-04/assets/imgs/alpha-logo.png" width="40px" align="left"/>
    <h1>Módulo 02 - Parte 01</h1>
</div>

## Controle de versão - Sistemas Centralizados e Sistemas Distribuídos

&nbsp;

### Exercícios

1. O que são Sistemas de Controle de Versão? Quais as suas vantagens?

    >É um sistema que registra alterações em um arquivo ou conjunto de arquivos ao longo do tempo para que o usuário possa manter e acessar versões específicas, mesmo após o código sofrer alterações.
    \
    \
    O Sistemas de Controle de Versão possui várias vantagens, como rastreabilidade, que fornece evidências a ordem de todas as revisões e alterações feitas ao longo do tempo por um ou por vários desenvolvedores, salvando no histórico do projeto. O controle de versão, permite que os membros da equipe trabalhem no mesmo documento simultaneamente, mas independentemente uns dos outros, capacitando a equipe a mesclar seu trabalho de forma autônoma.
    \
    \
    Ele também ajuda a reduzir a versões duplicadas ou desatualizadas que, por sua vez, reduzirá os erros que surgem de informações conflitantes. Permite ainda, que o gerenciamento seja feito mantendo uma perspectiva abrangente do desenvolvimento do projeto, pois ele informa o autor, a finalidade das mudanças, o andamento do cronograma, o impacto que as mudanças terão no objetivo de longo prazo do documento, ajuda a identificar problemas recorrentes que podem surgir de membros específicos da equipe.
    \
    \
    A capacidade de compartilhar código e rastrear trabalhos anteriores cria transparência e consistência. As equipes trabalham para simplificar processos complexos e, assim, criar maior escopo para automação e consistência. Com implementos inseridos de forma incremental por meio de versões atualizadas. Permite também que os problemas sejam detectados mais rapidamente, com pouco impacto para o usuário, caso o código seja revertido para uma versão anterior.

1. Explique, com as suas palavras, o que são Sistemas Centralizados de Controle de Versão.

    > Sistemas centralizados são sistemas que têm apenas um servidor que abarca todos os arquivos de controle de versão. Os usuários então têm acesso aos arquivos a partir desse servidor central. Ou seja, até certo ponto, os desenvolvedores e também os gerentes conseguem saber o que os outros estão fazendo no projeto.
    \
    \
    Não apenas tem vantagens esse tipo de sistema, por que caso o servidor der problema, por ser um único servidor, ninguém vai poder colaborar ou salvar as alterações de versão enquanto o problema persistir. Para piorar, caso o disco rígido do banco de dados central for corrompido, e backups não forem mantidos, tudo é perdido, ficando apenas salvo versões pontuais que desenvolvedores podem ter salvo em suas máquinas locais.

1. Explique, com as suas palavras, o que são Sistemas Distribuídos de Controle de Versão.

    > Os Sistemas Distribuídos de Controle de Versão são eficientes justamente onde os sistemas centralizados pecam.
    \
    \
    Nesse tipo de sistema os usuários podem não apenas usar a versão mais recente dos arquivos, como também duplicar o repositório completo, pois caso o banco de dados central seja corrompido, o usuário pode subir para o servidor o repositório que foi baixado mais recentemente e assim restaurá-lo.
    \
    \
    Cada vez que o repositório for clonado, é feito um backup completo do arquivo. Além disso, esse tipo de sistema permite que que várias pessoas colaborem de maneiras diferentes ao mesmo tempo pois cada um pode ter o repositório remotamente.

1. Instale em seu computador a ferramenta Git Bash.

    > Por ser um macbook, já tinha instalado o homebrew, do site: https://brew.sh.

    ```git
        Last login: Tue Apr 12 14:25:47 on ttys000
        marialuiza@MacBook-Pro ~ % git --version
        git version 2.33.1
        marialuiza@MacBook-Pro ~ % brew upgrade git
        Updating Homebrew...
        
        marialuiza@MacBook-Pro ~ % git --version
        git version 2.35.2
    ```

1. Crie o seu perfil de desenvolvedor na plataforma GitHub. Cole aqui o link para o seu perfil.

    > [https://github.com/luhbarbalho](https://github.com/luhbarbalho)

&nbsp;

---
### Referências básicas

- **Sistema de Controle de Versão**
  - [https://www.youtube.com/watch?v=8MsYOAnU1eY](https://www.youtube.com/watch?v=8MsYOAnU1eY)
  - [http://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Sobre-Controle-de-Vers%C3%A3o](http://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Sobre-Controle-de-Vers%C3%A3o)

- **Uma Breve História do Git**
  - [http://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Uma-Breve-Hist%C3%B3ria-do-Git](http://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Uma-Breve-Hist%C3%B3ria-do-Git)

- **O Básico do Git**
  - [http://git-scm.com/book/pt-br/v2/Come%C3%A7ando-O-B%C3%A1sico-do-Git](http://git-scm.com/book/pt-br/v2/Come%C3%A7ando-O-B%C3%A1sico-do-Git)

- **Instalação do Git Bash**
  - [https://git-scm.com/downloads](https://git-scm.com/downloads)

- **Criando sua conta no GitHub**
  - [https://github.com/signup](https://github.com/signup)
