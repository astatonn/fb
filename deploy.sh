#!/bin/bash

# Script de deploy para produção
# Froener e Bulhões Advocacia

set -e

echo "🚀 Iniciando deploy do Froener e Bulhões Advocacia..."

# Verificar se estamos no diretório correto
if [ ! -f "package.json" ]; then
    echo "❌ Erro: Não foi encontrado package.json. Execute este script na raiz do projeto."
    exit 1
fi

# Limpar builds anteriores
echo "🧹 Limpando builds anteriores..."
rm -rf dist/

# Construir imagem de produção
echo "🔨 Construindo imagem Docker para produção..."
docker build -f Dockerfile.prod -t froener-advocacia:latest .

# Parar container anterior se existir
echo "⏹️ Parando container anterior..."
docker-compose -f docker-compose.prod.yml down || true

# Subir novo container
echo "🚀 Subindo novo container..."
docker-compose -f docker-compose.prod.yml up -d

# Aguardar container inicializar
echo "⏳ Aguardando container inicializar..."
sleep 10

# Verificar se o container está rodando
if docker ps | grep -q "froener-advocacia-prod"; then
    echo "✅ Container está rodando!"
    
    # Testar se a aplicação está respondendo
    if curl -f http://localhost:8080 > /dev/null 2>&1; then
        echo "✅ Aplicação está respondendo!"
        echo ""
        echo "🎉 Deploy realizado com sucesso!"
        echo "📱 Aplicação disponível temporariamente em: http://localhost:8080"
        echo ""
        echo "📝 Próximos passos:"
        echo "1. Testar a aplicação em http://localhost:8080"
        echo "2. Se tudo estiver ok, adicionar configuração no nginx.conf"
        echo "3. Renovar certificado SSL se necessário"
        echo "4. Alterar porta no docker-compose.prod.yml para não expor externamente"
    else
        echo "❌ Erro: Aplicação não está respondendo"
        docker logs froener-advocacia-prod
        exit 1
    fi
else
    echo "❌ Erro: Container não está rodando"
    docker-compose -f docker-compose.prod.yml logs
    exit 1
fi

echo ""
echo "🔧 Comandos úteis:"
echo "  Ver logs: docker logs froener-advocacia-prod"
echo "  Parar: docker-compose -f docker-compose.prod.yml down"
echo "  Restart: docker-compose -f docker-compose.prod.yml restart"