# Git Commands

## Configuration

git --version
Shows the installed Git version.

git config --global user.name "Name"
Sets the Git username.

git config --global user.email "email"
Sets the Git email.

git config --list
Shows Git configuration settings.

## Repository

git init
Initializes a new Git repository.

git clone <url>
Clones a remote repository to the local machine.

git status
Shows the current state of the repository.


## Staging and Commit

git add <file>
Adds a specific file to the staging area.

git add .
Adds all changed files to the staging area.

git commit -m "message"
Creates a commit with the staged changes.

git commit -am "message"
Stages modified tracked files and creates a commit.


## Branches

git branch
Lists local branches.

git branch -a
Lists local and remote branches.

git branch <name>
Creates a new branch.

git branch -d <name>
Deletes a local branch.

git branch -m <name>
Renames the current branch.

git switch <branch>
Switches to an existing branch.

git switch -c <branch>
Creates a new branch and switches to it.


## Remote Repository

git remote -v
Shows the connected remote repositories.

git remote add origin <url>
Connects the local repository to a remote repository.

git remote set-url origin <url>
Changes the remote repository URL.

git remote remove origin
Removes the remote repository.


## Push

git push
Uploads local commits to the remote repository.

git push -u origin <branch>
Pushes a branch and sets its upstream branch.

git push origin <branch>
Pushes a specific branch to the remote repository.

git push origin --delete <branch>
Deletes a remote branch.

git push --force-with-lease
Force pushes changes while checking for unexpected remote changes.


## Pull and Fetch

git pull
Downloads and integrates changes from the remote repository.

git pull origin <branch>
Pulls changes from a specific remote branch.

git fetch
Downloads remote changes without merging them.

git fetch --all
Fetches changes from all remote repositories.


## Merge

git merge <branch>
Merges another branch into the current branch.

git merge --abort
Cancels an ongoing merge.


## Stash

git stash
Temporarily saves uncommitted changes.

git stash list
Shows all saved stashes.

git stash pop
Applies the latest stash and removes it.

git stash apply
Applies the latest stash without removing it.

git stash drop
Deletes a specific stash.

git stash clear
Deletes all saved stashes.


## Undo Changes

git restore <file>
Discards unstaged changes in a file.

git restore --staged <file>
Removes a file from staging while keeping its changes.

git reset --soft HEAD~1
Removes the last commit and keeps changes staged.

git reset --mixed HEAD~1
Removes the last commit and unstages the changes.

git reset --hard HEAD~1
Removes the last commit and discards the changes.

git revert <commit>
Creates a new commit that undoes a previous commit.


## History

git log
Shows the complete commit history.

git log --oneline
Shows a compact commit history.

git log --oneline --graph --all
Shows the commit history as a branch graph.

git show <commit>
Shows details and changes of a specific commit.

git reflog
Shows previous HEAD movements and helps recover lost commits.


## Compare Changes

git diff
Shows unstaged changes.

git diff --staged
Shows staged changes.

git diff <branch1> <branch2>
Compares two branches.


## Rebase

git rebase <branch>
Reapplies commits on top of another branch.

git rebase --continue
Continues a rebase after resolving conflicts.

git rebase --abort
Cancels an ongoing rebase.


## Cherry Pick

git cherry-pick <commit>
Applies a specific commit to the current branch.


## Tags

git tag
Lists all tags.

git tag <name>
Creates a tag.

git tag -a <name> -m "message"
Creates an annotated tag.

git push origin <tag>
Pushes a tag to the remote repository.

git push origin --tags
Pushes all tags to the remote repository.


## Git Ignore

.gitignore
Specifies files and folders that Git should not track.

Common entries:

node_modules/
.env
dist/
build/
*.log


## Common Workflow

git clone <url>
Clones an existing repository.

git pull
Gets the latest changes.

git switch -c feature-name
Creates and switches to a new feature branch.

git add .
Stages all changes.

git commit -m "message"
Creates a commit.

git push -u origin feature-name
Pushes the feature branch to GitHub.

git switch main
Switches back to the main branch.

git pull
Updates the main branch.


## Most Important Commands

git clone
Clones a repository.

git init
Creates a Git repository.

git status
Checks repository status.

git add .
Stages changes.

git commit -m "message"
Creates a commit.

git push
Uploads commits.

git pull
Downloads and integrates changes.

git fetch
Downloads remote changes without merging.

git branch
Manages branches.

git switch
Switches branches.

git merge
Merges branches.

git stash
Temporarily saves changes.

git restore
Restores or unstages changes.

git reset
Moves the branch to another commit.

git revert
Undoes a commit safely.

git log
Shows commit history.

git diff
Shows changes.

git rebase
Reapplies commits on another base.

git cherry-pick
Applies a specific commit.

git reflog
Helps recover lost commits.