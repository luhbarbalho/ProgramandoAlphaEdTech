<div display="flex">
    <img src="../../MODULO-04/assets/imgs/alpha-logo.png" width="40px" align="left"/>
    <h1>Módulo 02 - Parte 01</h1>
</div>

## Atividades para fazer no github PRAGA (dentro da "organização" Bug Hunters no github criada pelo João Saraceni)

&nbsp;

### Exercícios

1. Clonar o repositório

    ```git
      Last login: Tue Apr 13 14:25:47 on ttys000
      marialuiza@MacBook-Pro ~ % git clone git@github.com:luhbarbalho/chore-add-Luiza-File.git

      marialuiza@MacBook-Pro workspace % ls
      Driven-Projects             chore-add-Luiza-File
      Portifolio                  my_first_steps
      Project-Netflix-DIO         project-flexbox-dio-master
      calculadora
    ```

1. Abrir nova branch pelo terminal

    ```git
      marialuiza@MacBook-Pro workspace % cd chore-add-Luiza-File
      (entrar na pasta clonada que tem as pastas onde é para fazer o exercício)

      marialuiza@MacBook-Pro chore-add-Luiza-File % git branch
      (comando que mostra em que branche você está)

      * main      → (isso informa que você está no branch main clonado)

      marialuiza@MacBook-Pro chore-add-Luiza-File % git checkout -b chore_Luiza
      (comando que cria a branch "chore_Luiza")

      * Switched to a new branch 'chore_Luiza'      → isso informa que você está no novo branch criado
    ```

1. Fazer alterações (adicionar uma pasta students)

    ```git
      marialuiza@MacBook-Pro chore-add-Luiza-File % ls 
      README.md   classes   students
      (para saber o que tem na branch)

      marialuiza@MacBook-Pro chore-add-Luiza-File % cd students
      (entrar na pasta students onde é para fazer o exercício)

      marialuiza@MacBook-Pro students % touch LuizaBarbalho.txt
      (comando para criar um arquivo txt)

      marialuiza@MacBook-Pro students % nano LuizaBarbalho.txt
      (comando para fazer alterações, escrever algo no arquivo txt)
    ```

1. stage

    ```git
      marialuiza@MacBook-Pro students % git add --all
      (comando para adicionar ao stage todas as criações e alterações)
    ```

1. commit

    ```git
      marialuiza@MacBook-Pro students % git commit -m "chore: add LuizaBarbalho.txt"
      (comando para commitar as coisas criadas na branch)

      [chore_Luiza 767d440] chore: add LuizaBarbalho.txt
      1 file changed, 1 insertion(+)
      create mode 100644 students/LuizaBarbalho.txt
    ```

1. push

    ```git
      marialuiza@MacBook-Pro students % git push origin chore_Luiza
      (comando para fazer o push para o repositório remoto, lembrar ainda está na branch criada e não na main.)
      
      Enumerating objects: 6, done.
      Counting objects: 100% (6/6), done.
      Delta compression using up to 4 threads
      Compressing objects: 100% (4/4), done.
      Writing objects: 100% (4/4), 494 bytes | 494.00 KiB/s, done.
      Total 4 (delta 2), reused 0 (delta 0), pack-reused 0
      remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
      remote:
        
        Create a pull request for 'chore_Luiza' on GitHub by visiting:
        https://github.com/luhbarbalho/chore-add-Luiza-File/pull/new/chore_Luiza
        or github.com:luhbarbalho/chore-add-Luiza-File.git 
        * [new branch]          chore_Luiza
        
        (aqui ele lembra de ir criar o pull request no github)
    ```
  
1. PR

    > A partir daqui é só ir no github, lá terá uma msg perguntando "compare and pull request”   →   clicar para solicitar
    \
    \
    Depois vai para uma outra página onde ele pergunta pela confirmação da criação do pull request, aqui pode deixar um comentário e também pode mudar o título do pull request, caso não coloque nada, ele vai com o título da mensagem do commit.
    \
    \
    Confirmar a Pull Request.

1. Code review (pedir alguém da turma)

    > O PR está configurado para que o merge só aconteça quando algum membro aprove a mudança.

1. Merge

    > Quando a mudança for aprovada por um membro, o próprio github vai perguntar se quer dar um merge na branch para que ela seja incorporada na main. Caso queira, Confirmar.

1. Deletar branch remota

    > Assim que der o merge ele vai perguntar se quer deletar a branch remota (que está no seu perfil do github), pode confirmar ou rejeitar a pergunta.

1. deletar branch local

    > Ir para a pasta local onde se encontra a pasta que quer deletar:

    ```git
      marialuiza@MacBook-Pro workspace % ls
      Driven-Projects             chore-add-Luiza-File
      Portifolio                  my_first_steps
      Project-Netflix-DIO         project-flexbox-dio-master
      calculadora
      
      marialuiza@MacBook-Pro workspace % rm -r chore-add-Luiza-File
      (comando que remove pastas que tem coisas dentro, sempre colocar o nome da pasta que você quer deletar!)
      
      (Ele vai perguntar se vc quer deletar cada pasta, responder: y(yes) ou n(no))
      
      override r--r--r--  marialuiza/staff for chore-add-Luiza-File/.git/objects/pack/pack-d62d411c04b931fedee99f0846463571323ab92e.pack? y
      
      override r--r--r--  marialuiza/staff for chore-add-Luiza-File/.git/objects/pack/pack-d62d411c04b931fedee99f0846463571323ab92e.idx? y
      
      override r--r--r--  marialuiza/staff for chore-add-Luiza-File/.git/objects/44/8902b260d908f8fa8b01671e18090971b9bfc7? y
      
      override r--r--r--  marialuiza/staff for chore-add-Luiza-File/.git/objects/36/dbe230f3029cdc63c32ed91364c18768bdd78f? y
      
      override r--r--r--  marialuiza/staff for chore-add-Luiza-File/.git/objects/de/0ef7b907ef72007d7c12f2b03155ac15f80678? y
      
      override r--r--r--  marialuiza/staff for chore-add-Luiza-File/.git/objects/76/7d4402bafb347924d2a8c25eb6af520e9b8661? y
      
      marialuiza@MacBook-Pro workspace % ls
      Driven-Projects               Portifolio
      my_first_steps                Project-Netflix-DIO
      project-flexbox-dio-master    calculadora
      
      (A pasta foi deletada)
    ```
  
1. Pull na main

    > Para pegar o código atualizado, pode dar um git pull na main branch.

&nbsp;

---

### Referências básicas

- **Do Git Clone ao Pull Request**

  - [https://blog.da2k.com.br/2015/02/04/git-e-github-do-clone-ao-pull-request/](https://blog.da2k.com.br/2015/02/04/git-e-github-do-clone-ao-pull-request/)
