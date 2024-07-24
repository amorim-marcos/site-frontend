#!/bin/bash
cd /home/admin/html/frontend
# todo
# get env dynamically
echo $DEPLOYMENT_GROUP_NAME
git pull origin $DEPLOYMENT_GROUP_NAME
# git pull origin qas
rm -r node_modules/
rm -r .next/
# requires nvm
nvm use 16 &&
yarn install &&
yarn build &&
pm2 restart frontend --interpreter=/home/admin/.nvm/versions/node/v16.20.2/bin/node