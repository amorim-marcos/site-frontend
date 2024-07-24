#!/bin/bash

APP_DIR="/home/admin/html/frontend"

cd $APP_DIR

# requires nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh"] && \. "$NVM_DIR/nvm.sh"

nvm install 16
nvm use 16

echo $DEPLOYMENT_GROUP_NAME
git pull origin $DEPLOYMENT_GROUP_NAME
# git pull origin qas
rm -r node_modules/
rm -r .next/

yarn install &&
yarn build &&
pm2 restart frontend --interpreter=$(nvm which 16)