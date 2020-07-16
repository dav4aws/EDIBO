#! /bin/bash

#echo Installing NODE................
#export NVM_DIR="$HOME/.nvm" && (
# git clone https://github.com/nvm-sh/nvm.git "$NVM_DIR"
# cd "$NVM_DIR"
# git checkout `git describe --abbrev=0 --tags --match "v[0-9]*" $(git rev-list --tags --max-count=1)`
#) && \. "$NVM_DIR/nvm.sh"
#echo ----------------------- DONE -------------------------
#echo Installing NPM................
#`nvm i 12`
#echo ----------------------- DONE -------------------------
#echo Installing................
#`npm install -g @angular/cli`
#echo ----------------------- DONE -------------------------

ng new data


cd data
mv node_modules ../FirstAngular/
echo ----------------------- DONE -------------------------
ng add @angular/material
echo ----------------------- DONE -------------------------
rmdir data
echo ----------------------- DONE -------------------------
