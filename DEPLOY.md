# 🚀 Deploy - Froener e Bulhões Advocacia

Este guia explica como fazer o deploy da aplicação para produção.

## 📋 Pré-requisitos

- Docker e Docker Compose instalados
- Acesso à VPS
- Domínio configurado (froeneradvocacia.com)
- Certificado SSL configurado

## 🛠️ Arquivos de Deploy

- `Dockerfile.prod` - Dockerfile otimizado para produção
- `docker-compose.prod.yml` - Composição para produção
- `deploy.sh` - Script automatizado de deploy
- `nginx-config.txt` - Configuração para adicionar no nginx

## 🚀 Como fazer o deploy

### 1. Upload dos arquivos

```bash
# Na sua máquina local, compacte o projeto
tar -czf froeneradvocacia.tar.gz --exclude=node_modules --exclude=dist .

# Envie para o servidor
scp froeneradvocacia.tar.gz astatonn@srv638341:~/projects/

# No servidor, extraia os arquivos
ssh astatonn@srv638341
cd ~/projects
tar -xzf froeneradvocacia.tar.gz
mv froeneradvocacia froener-advocacia
cd froener-advocacia
```

### 2. Execute o deploy

```bash
# Dar permissão de execução ao script
chmod +x deploy.sh

# Executar o deploy
./deploy.sh
```

### 3. Configurar Nginx

```bash
# Editar nginx.conf
sudo nano ~/configs/nginx.conf

# Adicionar a configuração do arquivo nginx-config.txt
# Salvar e sair

# Gerar certificado SSL
sudo certbot --nginx -d froeneradvocacia.com -d www.froeneradvocacia.com

# Recarregar nginx
sudo systemctl reload nginx
```

### 4. Finalizar configuração

```bash
# Editar docker-compose.prod.yml para remover porta externa
nano docker-compose.prod.yml

# Remover ou comentar a linha:
# ports:
#   - "8080:80"

# Restart do container
docker-compose -f docker-compose.prod.yml restart
```

## 🔧 Comandos Úteis

```bash
# Ver logs do container
docker logs froener-advocacia-prod

# Restart do serviço
docker-compose -f docker-compose.prod.yml restart

# Parar o serviço
docker-compose -f docker-compose.prod.yml down

# Rebuild e restart
docker-compose -f docker-compose.prod.yml up --build -d

# Verificar status
docker ps | grep froener

# Entrar no container
docker exec -it froener-advocacia-prod sh
```

## 📊 Monitoramento

```bash
# Ver uso de recursos
docker stats froener-advocacia-prod

# Ver logs em tempo real
docker logs -f froener-advocacia-prod

# Verificar saúde do container
docker inspect froener-advocacia-prod | grep -A 10 Health
```

## 🔒 Segurança

- ✅ Headers de segurança configurados
- ✅ HTTPS obrigatório
- ✅ Cache otimizado para arquivos estáticos
- ✅ Compressão gzip habilitada
- ✅ Limite de memória definido (64MB)

## 📝 Estrutura de Produção

```
├── Dockerfile.prod          # Build otimizado para produção
├── docker-compose.prod.yml  # Configuração de produção
├── deploy.sh               # Script de deploy automatizado
├── nginx-config.txt        # Configuração nginx
└── DEPLOY.md              # Este arquivo
```

## 🚨 Troubleshooting

### Container não inicia
```bash
docker logs froener-advocacia-prod
docker-compose -f docker-compose.prod.yml logs
```

### Aplicação não carrega
```bash
# Verificar se nginx está passando requisições
curl -H "Host: froeneradvocacia.com" http://localhost:80

# Verificar configuração nginx
sudo nginx -t
```

### SSL não funciona
```bash
# Verificar certificados
sudo certbot certificates

# Renovar se necessário
sudo certbot renew
```

## 📞 Contato

Em caso de problemas no deploy, verificar logs e documentação do Docker/Nginx.