#! /bin/bash

echo Installing NODE..............
export NVM_DIR="$HOME/.nvm" && (
 git clone https://github.com/nvm-sh/nvm.git "$NVM_DIR"
 cd "$NVM_DIR"
 git checkout `git describe --abbrev=0 --tags --match "v[0-9]*" $(git rev-list --tags --max-count=1)`
) && \. "$NVM_DIR/nvm.sh"
echo ------------------ NODE DONE -------------------------

echo Installing NPM................
`nvm i 12`
echo ---------------- NPM INSTALLED -----------------------

echo Installing ANGLUAR................
`npm install -g @angular/cli`
echo -------------- ANGLUAR INSTALLED ---------------------

echo Making new ANGULAR..........
ng new data
echo -------------- NEW ANGLUAR DONE ----------------------

echo Going to NEW ANGLUAR and taking some data.........
cd data
mv node_modules ../FirstAngular/
echo ------------- DATA TAKEN AND MOVED -------------------

echo Installing ANGLUAR/MATERIAL...........
cd ../FirstAngular
ng add @angular/material
echo ------------ ANGULAR/MATERIAL ADDED ------------------

echo Deleting NEW ANGLUAR..........
cd ../
rm -rf data
echo ----------------- DELETING DONE ----------------------
