1.
https://github.com/luhbarbalho/my_first_steps.git

______________________________________________________________________________

2.
marialuiza@MacBook-Pro workspace % cd my_first_steps

marialuiza@MacBook-Pro my_first_steps % git init

hint: Using 'master' as the name for the initial branch. This default branch name

hint: is subject to change. To configure the initial branch name to use in all

hint: of your new repositories, which will suppress this warning, call:

hint:

hint: 	git config --global init.defaultBranch <name>

hint:

hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and

hint: 'development'. The just-created branch can be renamed via this command:

hint:

hint: 	git branch -m <name>

Initialized empty Git repository in /Users/marialuiza/workspace/my_first_steps/.git/

marialuiza@MacBook-Pro my_first_steps % git remote add origin git@github.com:luhbarbalho/my_first_steps.git

marialuiza@MacBook-Pro my_first_steps % git branch -M main

marialuiza@MacBook-Pro my_first_steps % git push -u origin main

error: src refspec main does not match any

error: failed to push some refs to 'github.com:luhbarbalho/my_first_steps.git'

marialuiza@MacBook-Pro my_first_steps % git add .

marialuiza@MacBook-Pro my_first_steps % git status

On branch main

No commits yet

nothing to commit (create/copy files and use "git add" to track)

marialuiza@MacBook-Pro my_first_steps % git push

fatal: The current branch main has no upstream branch.

To push the current branch and set the remote as upstream, use

git push --set-upstream origin main

marialuiza@MacBook-Pro my_first_steps % echo "# my_first_steps" >> README.md

marialuiza@MacBook-Pro my_first_steps % git status

On branch main

No commits yet

Untracked files:

(use "git add <file>..." to include in what will be committed)

README.md

nothing added to commit but untracked files present (use "git add" to track)

marialuiza@MacBook-Pro my_first_steps % git add .

marialuiza@MacBook-Pro my_first_steps % gis status

zsh: command not found: gis

marialuiza@MacBook-Pro my_first_steps % git status

On branch main

No commits yet

Changes to be committed:

(use "git rm --cached <file>..." to unstage)

new file:   README.md

marialuiza@MacBook-Pro my_first_steps % git commit -m "arquivo txt"

[main (root-commit) 70528fa] arquivo txt

1 file changed, 1 insertion(+)

create mode 100644 README.md

marialuiza@MacBook-Pro my_first_steps % git push

fatal: The current branch main has no upstream branch.

To push the current branch and set the remote as upstream, use

git push --set-upstream origin main

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

nothing to commit, working tree clean

____________________________________________________________________________

3.
marialuiza@MacBook-Pro my_first_steps % touch ola_mundo.txt

marialuiza@MacBook-Pro my_first_steps % nano ola_mundo.txt

marialuiza@MacBook-Pro my_first_steps % git add .

marialuiza@MacBook-Pro my_first_steps % git status

On branch main

Your branch is up to date with 'origin/main'.

Changes to be committed:

(use "git restore --staged <file>..." to unstage)

new file:   ola_mundo.txt

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

__________________________________________________________________________

4.
Criei o.gitignore, criei o arquivo txt que será ignorado e coloquei texto dentro dele. abri o .gitignore e coloquei o nome do arquivo a ser ignorado dentro dele como texto, salvei e assim ele não será adicionado ao repositório remoto.

texto colocado dentro do .gitignore:  serei_ignorado.txt