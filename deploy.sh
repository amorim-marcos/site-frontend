#!/bin/bash
cd /home/admin/html/frontend
# todo
# get env dynamically
echo $DEPLOYMENT_GROUP_NAME
git pull origin $DEPLOYMENT_GROUP_NAME
# git pull origin qas
yarn install &&
yarn build &&
pm2 restart frontend