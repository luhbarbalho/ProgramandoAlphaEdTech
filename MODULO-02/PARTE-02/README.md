<div display="flex">
    <img src="../../MODULO-04/assets/imgs/alpha-logo.png" width="40px" align="left"/>
    <h1>Módulo 02 - Parte 01</h1>
</div>

## Controle de Versão - Primeiros passos com Git

&nbsp;

### Exercícios

1. Após criado a sua conta no GitHub, crie um repositório remoto público chamado “my_first_steps” e cole o link aqui

    > [https://github.com/luhbarbalho/my_first_steps.git](https://github.com/luhbarbalho/my_first_steps.git)
    \
    Nesse momento eu já mudei o nome do repo para ProgramandoAlphaEdTech

1. Crie um diretório em sua máquina e o vincule ao seu repositório remoto “my_first_steps” utilizando os comandos git necessários para a realização desta tarefa. Cole aqui a cadeia de comandos que você utilizou para a realização desta tarefa.

    ```git
        marialuiza@MacBook-Pro workspace % cd my_first_steps
        marialuiza@MacBook-Pro my_first_steps % git init

        hint: Using 'master' as the name for the initial branch. This default branch name
        hint: is subject to change. To configure the initial branch name to use in all
        hint: of your new repositories, which will suppress this warning, call:
        hint: git config --global init.defaultBranch <name>
        hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
        hint: 'development'. The just-created branch can be renamed via this command:
        hint: git branch -m <name>
        Initialized empty Git repository in /Users/marialuiza/workspace/my_first_steps/.git/

        marialuiza@MacBook-Pro my_first_steps % git remote add origin git@github.com:luhbarbalho/my_first_steps.git
        marialuiza@MacBook-Pro my_first_steps % git branch -M main
        marialuiza@MacBook-Pro my_first_steps % git push -u origin main
        marialuiza@MacBook-Pro my_first_steps % git add .
        marialuiza@MacBook-Pro my_first_steps % git status
        On branch main
        No commits yet
        nothing to commit (create/copy files and use "git add" to track)

        marialuiza@MacBook-Pro my_first_steps % echo "# my_first_steps" >> README.md

        marialuiza@MacBook-Pro my_first_steps % git status
        On branch main
        No commits yet
        Untracked files:
        (use "git add <file>..." to include in what will be committed)
        README.md
        nothing added to commit but untracked files present (use "git add" to track)

        marialuiza@MacBook-Pro my_first_steps % git add .
        marialuiza@MacBook-Pro my_first_steps % git commit -m "arquivo txt"
        [main (root-commit) 70528fa] arquivo txt
        1 file changed, 1 insertion(+)
        create mode 100644 README.md
        
        marialuiza@MacBook-Pro my_first_steps % git push --set-upstream origin main
        Enumerating objects: 3, done.
        Counting objects: 100% (3/3), done.
        Writing objects: 100% (3/3), 228 bytes | 228.00 KiB/s, done.
        Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
        To github.com:luhbarbalho/my_first_steps.git
        * [new branch]      main -> main
        branch 'main' set up to track 'origin/main'.
        
        marialuiza@MacBook-Pro my_first_steps % git status
        On branch main
        Your branch is up to date with 'origin/main'.
        nothing to commit, working
    ```

1. Dentro do diretório em sua máquina, crie um arquivo chamado “ola_mundo.txt”, adicione algum texto da sua preferência e adicione-o ao seu repositório remoto utilizando os comandos git necessários para a realização desta tarefa. Cole aqui a cadeia de comandos que você utilizou para a realização desta tarefa.

    ```git
        marialuiza@MacBook-Pro my_first_steps % touch ola_mundo.txt
        marialuiza@MacBook-Pro my_first_steps % nano ola_mundo.txt
        marialuiza@MacBook-Pro my_first_steps % git add .

        marialuiza@MacBook-Pro my_first_steps % git commit -m "add arquivo txt"
        [main 40d3fd1] add arquivo txt
        1 file changed, 10 insertions(+)
        create mode 100644 ola_mundo.txt
        
        marialuiza@MacBook-Pro my_first_steps % git push
        Enumerating objects: 4, done.
        Counting objects: 100% (4/4), done.
        Delta compression using up to 4 threads
        Compressing objects: 100% (3/3), done.
        Writing objects: 100% (3/3), 476 bytes | 476.00 KiB/s, done.
        Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
        To github.com:luhbarbalho/my_first_steps.git
        70528fa..40d3fd1  main -> main

        marialuiza@MacBook-Pro my_first_steps % git status
        On branch main
        Your branch is up to date with 'origin/main'.
        nothing to commit, working tree clean
    ```

1. Se não existir em seu diretório, adicione ao seu diretório um arquivo com o nome de “.gitignore”. Em seguida, crie um arquivo chamado “serei_ignorado.txt” e adicione algum texto dentro dele. Adicione a instrução ao arquivo “.gitignore” para que as alterações realizadas no arquivo “serei_ignorado.txt” não seja controlado pelo git. Cole aqui o conteúdo que você utilizou no “.gitignore” para realizar esta tarefa.

    > Criei o.gitignore, criei o arquivo txt "serei_ignorado.txt" que será ignorado e coloquei um texto dentro dele.
    \
    Abri o .gitignore e coloquei o nome do arquivo "serei_ignorado.txt" dentro dele como texto, salvei e assim ele não será adicionado ao repositório remoto.

1. Dentro do seu diretório local, crie um arquivo chamado “README.md” e edite-o contendo todas as respostas aos enunciados das questões anteriores. Adicione-o ao seu repositório remoto utilizando os comandos git necessários para a realização desta tarefa. Cole aqui a cadeia de comandos que você utilizou para a realização desta tarefa.

    > Aqui eu copiei e colei as respostas dentro do arquivo, salvei e dei exit adicionei ao repositório remoto como abaixo, tudo pelo terminal.

    ```git
        marialuiza@MacBook-Pro my_first_steps % git add .
        marialuiza@MacBook-Pro my_first_steps % git commit -m "changes in README"
        [main 8350341] changes in README
        1 file changed, 196 insertions(+), 1 deletion(-)
        rewrite README.md (100%)
        
        marialuiza@MacBook-Pro my_first_steps % git push
        Enumerating objects: 5, done.
        Counting objects: 100% (5/5), done.
        Delta compression using up to 4 threads
        Compressing objects: 100% (3/3), done.
        Writing objects: 100% (3/3), 1.59 KiB | 1.59 MiB/s, done.
        Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
        To github.com:luhbarbalho/my_first_steps.git
        46dd404..8350341  main -> main
    ```

&nbsp;

---

### Referências básicas:

- **git – guia prático**
  - [https://rogerdudler.github.io/git-guide/index.pt_BR.html](https://rogerdudler.github.io/git-guide/index.pt_BR.html)
  - [https://www.youtube.com/watch?v=DqTITcMq68k](https://www.youtube.com/watch?v=DqTITcMq68k)
  - [https://www.youtube.com/watch?v=UBAX-13g8OM](https://www.youtube.com/watch?v=UBAX-13g8OM)

- **.gitignore**
  - [https://git-scm.com/docs/gitignore](https://git-scm.com/docs/gitignore)

- **README**
  - [https://github.com/othneildrew/Best-README-Template](https://github.com/othneildrew/Best-README-Template)