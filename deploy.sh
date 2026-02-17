#!/bin/bash
set -e

echo "=== Deploy Frontend: $DEPLOYMENT_GROUP_NAME ==="

# Carrega NVM (já instalado)
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

# Usa Node 16
nvm use 16

# Vai para a pasta
cd /home/admin/html/frontend

echo "Node version: $(node -v)"

# Atualiza código
git pull origin "$DEPLOYMENT_GROUP_NAME"

# Instala dependências e builda
echo "=== Instalando dependências e buildando ==="
yarn install
yarn build

echo "=== Reiniciando PM2 frontend ==="
pm2 startOrReload ecosystem.frontend.config.js --update-env

echo "=== Deploy concluído ==="
pm2 list