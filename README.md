$ git status
On branch master
Your branch and 'origin/master' have diverged,
and have 1 and 1 different commits each, respectively.
    (use "git pull" to merge the remote branch into yours)

You have unmerged paths.
    (fix conflicts and run "git commit")

Unmerged paths:
    (use "git add <file>..." to mark resolution)

                both modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")

$ git diff README.md
<<<<<<< HEAD
This is the content of the README file on the master branch.
=======
This is the content of the README file on the feature branch.
>>>>>>> feature

$ nano README.md
# README

This is the content of the README file.

$ git add README.md
$ git commit -m "Resolved merge conflict"
$ git push origin master
