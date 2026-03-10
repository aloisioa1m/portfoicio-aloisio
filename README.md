<<<<<<< HEAD
# Portfólio Web Profissional

Um portfólio web moderno e responsivo desenvolvido com HTML5, CSS3 e JavaScript puro. Design profissional com paleta de cores roxo, preto e verde fluorescente.

## 🎨 Características

### Design Moderno e Profissional
- **Paleta de Cores Premium**: Roxo vibrante (#7C3AED), Preto profundo (#0F0F0F) e Verde fluorescente (#00FF41)
- **Animações Fluidas**: Transições suaves e efeitos de hover elegantes
- **Responsivo**: Totalmente adaptado para dispositivos móveis, tablets e desktops
- **Acessibilidade**: Implementação de ARIA labels e semântica HTML5

### Seções Principais
1. **Navegação Fixa**: Menu sticky com links para todas as seções
2. **Hero Section**: Apresentação impactante com imagem de perfil animada
3. **Sobre Mim**: Descrição profissional e grid de habilidades técnicas
4. **Projetos**: Galeria de 3 projetos com tags e links
5. **Contato**: Formulário de contato e links sociais
6. **Footer**: Informações de copyright

### Efeitos Visuais
- Gradientes sofisticados
- Efeitos de glow nos elementos interativos
- Animações de flutuação na imagem de perfil
- Shimmer effect nos cards de projetos
- Transições suaves em todos os elementos

## 📁 Estrutura do Projeto

```
portfolio-melhorado/
├── index.html          # Arquivo HTML principal
├── style.css           # Estilos CSS com variáveis de cores
├── script.js           # Funcionalidades JavaScript
├── README.md           # Este arquivo
└── assets/
    └── images/         # Pasta para imagens (favicon, etc)
```

## 🚀 Como Usar

### 1. Clonar ou Baixar o Projeto
```bash
# Se usando git
git clone <url-do-repositorio>

# Ou extrair o arquivo ZIP
unzip portfolio-melhorado.zip
```

### 2. Abrir no Navegador
- Simplesmente abra o arquivo `index.html` em seu navegador
- Ou use um servidor local (recomendado):

```bash
# Usando Python 3
python -m http.server 8000

# Usando Node.js (com http-server)
npx http-server

# Usando Live Server no VS Code
# Instale a extensão "Live Server" e clique com botão direito em index.html
```

### 3. Personalizar o Conteúdo

#### Editar Informações Pessoais
Abra `index.html` e substitua:
- `[Seu Nome]` - Seu nome completo
- `seu.email@exemplo.com` - Seu email
- `(11) 99999-9999` - Seu telefone
- `Sua Cidade, Estado` - Sua localização

#### Editar Projetos
Localize a seção de projetos e modifique:
- Títulos dos projetos
- Descrições
- Tags de tecnologias
- Links para os projetos

#### Adicionar Foto de Perfil
1. Coloque sua foto em `assets/images/`
2. No `index.html`, substitua o ícone por uma tag `<img>`:
```html
<div class="image-placeholder">
    <img src="assets/images/seu-foto.jpg" alt="Sua Foto de Perfil">
</div>
```

## 🎨 Paleta de Cores

| Cor | Código | Uso |
|-----|--------|-----|
| Roxo Vibrante | #7C3AED | Cor primária, botões, gradientes |
| Roxo Escuro | #5B21B6 | Cor secundária, gradientes |
| Verde Fluorescente | #00FF41 | Acentos, efeitos de glow |
| Preto Profundo | #0F0F0F | Texto principal, backgrounds |
| Cinza Claro | #F5F5F5 | Backgrounds secundários |

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints em:
- **Desktop**: 1200px+
- **Tablet**: 768px - 992px
- **Mobile**: Até 768px

## ✨ Funcionalidades JavaScript

- **Menu Mobile**: Toggle do menu em dispositivos pequenos
- **Scroll Suave**: Navegação suave entre seções
- **Validação de Formulário**: Validação básica do formulário de contato
- **Animações ao Scroll**: Elementos aparecem com animação ao entrar em viewport
- **Efeito de Digitação**: Título do hero com efeito de digitação
- **Links Ativos**: Destaque do link de navegação baseado na seção atual

## 🔧 Personalização Avançada

### Mudar Cores
Edite as variáveis CSS em `style.css`:
```css
:root {
    --primary-color: #7C3AED;           /* Roxo vibrante */
    --secondary-color: #5B21B6;         /* Roxo mais escuro */
    --accent-color: #00FF41;            /* Verde fluorescente */
    /* ... outras cores ... */
}
```

### Adicionar Novas Seções
1. Crie uma nova `<section>` no HTML
2. Adicione os estilos correspondentes no CSS
3. Atualize o menu de navegação

### Integrar Formulário Real
Para enviar emails, você pode usar:
- **Formspree**: https://formspree.io/
- **EmailJS**: https://www.emailjs.com/
- **Seu próprio backend**: Node.js, Python, etc.

## 💻 Principais Comandos Git/GitHub

### Configuração Inicial
```bash
# Configurar nome e email global
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"

# Verificar configurações
git config --list
```

### Clonar Repositório
```bash
# Clonar um repositório
git clone https://github.com/usuario/repositorio.git

# Clonar em um diretório específico
git clone https://github.com/usuario/repositorio.git meu-projeto
```

### Inicializar Novo Repositório
```bash
# Inicializar repositório local
git init

# Adicionar repositório remoto
git remote add origin https://github.com/usuario/repositorio.git
```

### Trabalhar com Alterações
```bash
# Ver status dos arquivos
git status

# Adicionar arquivo específico
git add arquivo.txt

# Adicionar todos os arquivos modificados
git add .

# Remover arquivo do staging
git reset arquivo.txt

# Ver diferenças entre arquivos
git diff

# Ver diferenças no staging
git diff --staged
```

### Commits
```bash
# Criar commit com mensagem
git commit -m "Descrição das mudanças"

# Commitar diretamente sem add (apenas arquivos rastreados)
git commit -am "Descrição das mudanças"

# Corrigir último commit
git commit --amend -m "Nova mensagem"

# Ver histórico de commits
git log

# Ver últimos N commits
git log -n 5

# Ver commits em formato resumido
git log --oneline
```

### Push e Pull
```bash
# Enviar commits para repositório remoto
git push origin main

# Enviar para branch específico
git push origin nome-branch

# Puxar atualizações do repositório remoto
git pull origin main

# Puxar sem fazer merge (apenas atualiza histórico)
git fetch origin
```

### Branches
```bash
# Listar branches locais
git branch

# Listar todos os branches (local e remoto)
git branch -a

# Criar novo branch
git branch nome-nova-branch

# Mudar para outro branch
git checkout nome-branch

# Criar e mudar para novo branch
git checkout -b nome-nova-branch

# Deletar branch local
git branch -d nome-branch

# Deletar branch forçado
git branch -D nome-branch

# Deletar branch remoto
git push origin --delete nome-branch

# Renomear branch
git branch -m nome-antigo nome-novo
```

### Merge e Rebase
```bash
# Fazer merge de um branch para o atual
git merge nome-branch

# Fazer rebase (reorganizar commits)
git rebase nome-branch

# Abortar merge em conflito
git merge --abort

# Abortar rebase em conflito
git rebase --abort
```

### Reverter Mudanças
```bash
# Descartar mudanças em arquivo específico
git checkout -- arquivo.txt

# Descartar todas as mudanças do working directory
git reset --hard

# Desfazer último commit (mantém alterações)
git reset --soft HEAD~1

# Desfazer último commit (descarta alterações)
git reset --hard HEAD~1

# Reverter commit específico
git revert hash-do-commit
```

### Stash (Guardar Mudanças Temporárias)
```bash
# Guardar mudanças temporárias
git stash

# Listar stashes salvos
git stash list

# Recuperar último stash
git stash pop

# Recuperar stash específico
git stash apply stash@{0}

# Deletar stash
git stash drop stash@{0}
```

### Tags
```bash
# Criar tag
git tag v1.0.0

# Criar tag com mensagem
git tag -a v1.0.0 -m "Versão 1.0.0"

# Listar tags
git tag

# Enviar tag para repositório
git push origin v1.0.0

# Enviar todas as tags
git push origin --tags

# Deletar tag local
git tag -d v1.0.0

# Deletar tag remota
git push origin --delete v1.0.0
```

### Informações e Ajuda
```bash
# Ver histórico de um arquivo
git log arquivo.txt

# Ver quem modificou cada linha
git blame arquivo.txt

# Ver ajuda de um comando
git help commit

# Mostrar conteúdo de um commit específico
git show hash-do-commit
=======
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
>>>>>>> eccd2feab080c5faa58ac358e067509df45504c5
```

---

<<<<<<< HEAD
## 🌐 Deploy

### Opções de Hospedagem Gratuita
- **GitHub Pages**: Hospede diretamente do repositório GitHub
- **Netlify**: Drag and drop deployment
- **Vercel**: Deploy automático com Git
- **Firebase Hosting**: Hospedagem rápida do Google

### Deploy no GitHub Pages
```bash
# 1. Crie um repositório chamado username.github.io
# 2. Faça push dos arquivos
git push origin main

# 3. Acesse https://username.github.io
```

## 📞 Contato e Suporte

Para dúvidas ou sugestões sobre o portfólio, entre em contato através dos links sociais na seção de contato.

## 📄 Licença

Este projeto é livre para uso pessoal e comercial. Sinta-se à vontade para modificar e adaptar conforme necessário.

---

**Desenvolvido com ❤️ para profissionais que desejam um portfólio moderno e profissional.**
=======
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
>>>>>>> eccd2feab080c5faa58ac358e067509df45504c5
