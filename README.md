# Principais Comandos do GitHub

Guia rápido com os comandos mais utilizados no Git e GitHub para controle de versão.

---

## 🔧 Configuração Inicial

### Configurar nome e email
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"
```

### Verificar configurações
```bash
git config --list
```

---

## 📁 Comandos Básicos

### Inicializar um repositório
```bash
git init
```

### Clonar um repositório
```bash
git clone https://github.com/usuario/repositorio.git
```

### Ver status do repositório
```bash
git status
```

### Ver histórico de commits
```bash
git log
```

---

## 💾 Salvar Alterações

### Adicionar arquivo específico
```bash
git add nome-arquivo.txt
```

### Adicionar todos os arquivos modificados
```bash
git add .
```

### Remover arquivo do staging
```bash
git reset HEAD nome-arquivo.txt
```

### Criar um commit (salvar alterações)
```bash
git commit -m "Descrição das alterações"
```

---

## 🌲 Branches (Ramificações)

### Ver todas as branches
```bash
git branch
```

### Criar nova branch
```bash
git branch nome-da-branch
```

### Mudar para outra branch
```bash
git checkout nome-da-branch
```

### Criar e mudar para nova branch
```bash
git checkout -b nome-da-branch
```

### Deletar uma branch
```bash
git branch -d nome-da-branch
```

---

## 🔄 Sincronizando com Repositório Remoto

### Ver repositórios remotos
```bash
git remote -v
```

### Adicionar repositório remoto
```bash
git remote add origin https://github.com/usuario/repositorio.git
```

### Enviar commits para o servidor (push)
```bash
git push origin nome-da-branch
```

### Enviar branch main/master
```bash
git push origin main
```

### Baixar alterações (pull)
```bash
git pull origin nome-da-branch
```

### Buscar alterações sem mesclar (fetch)
```bash
git fetch origin
```

---

## 🔀 Mesclando Alterações

### Mesclar branch na branch atual
```bash
git merge nome-da-branch
```

### Desfazer merge
```bash
git merge --abort
```

---

## ⏮️ Desfazendo Alterações

### Descartar alterações locais em um arquivo
```bash
git checkout -- nome-arquivo.txt
```

### Reverter para commit anterior
```bash
git revert ID-do-commit
```

### Resetar para commit anterior (cuidado!)
```bash
git reset --hard ID-do-commit
```

---

## 📊 Visualizando Diferenças

### Ver diferenças antes de commit
```bash
git diff
```

### Ver diferenças de um arquivo específico
```bash
git diff nome-arquivo.txt
```

### Ver diferenças entre branches
```bash
git diff branch1 branch2
```

---

## 🏷️ Tags (Versões)

### Criar uma tag
```bash
git tag v1.0.0
```

### Enviar tag para repositório
```bash
git push origin v1.0.0
```

### Ver todas as tags
```bash
git tag
```

---

## 📝 Dicas Úteis

### Fazer commit com múltiplas linhas
```bash
git commit -m "Título principal

Descrição detalhada das alterações
- Ponto 1
- Ponto 2"
```

### Ver commits de forma visual
```bash
git log --oneline --graph --all
```

### Editar último commit
```bash
git commit --amend -m "Nova mensagem"
```

### Ver quem modificou cada linha
```bash
git blame nome-arquivo.txt
```

---

## 🚀 Fluxo de Trabalho Típico

1. **Criar ou clonar repositório**
   ```bash
   git clone https://github.com/usuario/repo.git
   cd repo
   ```

2. **Criar nova branch**
   ```bash
   git checkout -b minha-feature
   ```

3. **Fazer alterações e commits**
   ```bash
   git add .
   git commit -m "Adiciona nova funcionalidade"
   ```

4. **Enviar para repositório**
   ```bash
   git push origin minha-feature
   ```

5. **Criar Pull Request no GitHub**
   - Ir ao repositório no GitHub
   - Clicar em "Pull requests"
   - Clicar em "New pull request"

6. **Mesclar na branch principal**
   ```bash
   git checkout main
   git pull origin main
   git merge minha-feature
   git push origin main
   ```

---

## 📚 Recursos Adicionais

- [Documentação Oficial Git](https://git-scm.com/doc)
- [GitHub Help](https://docs.github.com)
- [Git Cheat Sheet](https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf)

---

**Criado em:** 19 de Janeiro de 2026
