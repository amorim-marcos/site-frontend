#!/bin/bash

APP_DIR="/home/admin/html/frontend"

cd $APP_DIR

node -v

# installs nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

nvm -v
nvm install 16
nvm use 16
node -v 


echo $DEPLOYMENT_GROUP_NAME
git pull origin $DEPLOYMENT_GROUP_NAME
# git pull origin qas
# rm -r node_modules/
# rm -r .next/

yarn install &&
yarn build &&
pm2 restart frontend --interpreter=$(nvm which 16)