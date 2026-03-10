// Funcionalidades interativas do portfólio

<<<<<<< HEAD
=======
// Função auxiliar para rastrear eventos no Google Analytics
function trackEvent(eventName, eventParams = {}) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventParams);
    }
}

// Dados dos projetos
const projectsData = {
    meteorologia: {
        title: 'Monitoramento Meteorológico',
        image: 'assents/images/2.png',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'API Weather'],
        description: 'Aplicação completa para monitoramento de condições climáticas em tempo real com dashboard interativo. Fornece dados precisos de temperatura, umidade, velocidade do vento e previsão meteorológica para os próximos dias.',
        workflow: 'A aplicação utiliza a API Weather para obter dados em tempo real, processa as informações e as exibe em um dashboard interativo com gráficos e visualizações. Os usuários podem buscar por diferentes locais e salvar seus favoritos.',
        link: '#'
    },
    reembolso: {
        title: 'Sistema de Reembolso',
        image: 'assents/images/2.png',
        tags: ['React', 'Node.js', 'MongoDB'],
        description: 'Sistema intuitivo para gerenciar reembolsos com interface amigável. Permite rastrear solicitações de reembolso, aprovar ou rejeitar pedidos e gerar relatórios detalhados.',
        workflow: 'O sistema integra front-end React com back-end Node.js, armazenando dados em MongoDB. Os usuários podem enviar solicitações de reembolso que são processadas por um fluxo de aprovação automatizado.',
        link: '#'
    },
    restaurante: {
        title: 'API de Restaurante',
        image: 'assents/images/2.png',
        tags: ['Node.js', 'Express', 'PostgreSQL'],
        description: 'API robusta para gerenciar pedidos de mesas em um restaurante. Permite criar, atualizar e deletar pedidos, além de gerenciar mesas e status de atendimento.',
        workflow: 'Desenvolvida com Express.js e PostgreSQL, a API fornece endpoints RESTful para todas as operações de um restaurante. Inclui autenticação, validação de dados e logging de operações.',
        link: '#'
    }
};

>>>>>>> eccd2feab080c5faa58ac358e067509df45504c5
// Menu mobile toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
<<<<<<< HEAD
=======
        // Rastrear clique na navegação
        trackEvent('nav_click', {
            'destination': link.getAttribute('href')
        });
>>>>>>> eccd2feab080c5faa58ac358e067509df45504c5
    });
});

// Atualizar ano no footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Animação de scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
<<<<<<< HEAD
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
=======
        const href = this.getAttribute('href');
        if (href !== '#' && !this.classList.contains('projeto-card')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                // Rastrear navegação
                trackEvent('section_navigation', {
                    'section': href
                });
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
>>>>>>> eccd2feab080c5faa58ac358e067509df45504c5
        }
    });
});

<<<<<<< HEAD
// Efeito de parallax no hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
    }
=======
// Rastrear cliques em botões principais
document.querySelectorAll('.btn-primary, .btn-secondary, .btn-tertiary').forEach(btn => {
    btn.addEventListener('click', () => {
        trackEvent('cta_click', {
            'button_type': btn.className,
            'button_text': btn.textContent.trim()
        });
    });
>>>>>>> eccd2feab080c5faa58ac358e067509df45504c5
});

// Validação simples do formulário de contato
const contactForm = document.querySelector('.contato-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validação básica
        const inputs = contactForm.querySelectorAll('input, textarea');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#FF6584';
            } else {
                input.style.borderColor = '';
            }
        });
        
        if (isValid) {
<<<<<<< HEAD
            // Aqui você pode adicionar lógica para enviar o formulário
=======
            // Rastrear envio de formulário
            trackEvent('form_submission', {
                'form_type': 'contact_form',
                'status': 'success'
            });
>>>>>>> eccd2feab080c5faa58ac358e067509df45504c5
            alert('Obrigado pela mensagem! Entraremos em contato em breve.');
            contactForm.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
}

// Efeito de observação para animações ao scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animação
<<<<<<< HEAD
document.querySelectorAll('.projeto-card, .skill-item, .contato-item').forEach(el => {
=======
document.querySelectorAll('.skill-card, .projeto-card, .contact-item').forEach(el => {
>>>>>>> eccd2feab080c5faa58ac358e067509df45504c5
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

<<<<<<< HEAD
=======
// Sistema de abas para skills
const tabButtons = document.querySelectorAll('.tab-btn');
const skillCards = document.querySelectorAll('.skill-card');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active de todos os botões
        tabButtons.forEach(btn => btn.classList.remove('active'));
        
        // Remove display de todos os cards
        skillCards.forEach(card => card.classList.remove('active'));
        
        // Adiciona active ao botão clicado
        button.classList.add('active');
        
        // Mostra cards da categoria selecionada
        const category = button.getAttribute('data-tab');
        const categoryCards = document.querySelectorAll(`.skill-card[data-category="${category}"]`);
        categoryCards.forEach(card => card.classList.add('active'));
    });
});

// Inicializar primeira aba (frontend)
if (tabButtons.length > 0) {
    tabButtons[0].classList.add('active');
    const frontendCards = document.querySelectorAll('.skill-card[data-category="frontend"]');
    frontendCards.forEach(card => card.classList.add('active'));
}

// Efeito de digitação no título hero
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const originalText = heroTitle.textContent;
    heroTitle.textContent = '';
    let index = 0;
    
    const typeWriter = () => {
        if (index < originalText.length) {
            heroTitle.textContent += originalText.charAt(index);
            index++;
            setTimeout(typeWriter, 80);
        }
    };
    
    // Iniciar animação após 500ms
    setTimeout(typeWriter, 500);
}

>>>>>>> eccd2feab080c5faa58ac358e067509df45504c5
// Adicionar classe ativa ao link de navegação baseado no scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

<<<<<<< HEAD
// Efeito de digitação no título hero (opcional)
const titleElement = document.querySelector('.hero h1');
if (titleElement) {
    const originalText = titleElement.textContent;
    titleElement.textContent = '';
    let index = 0;
    
    const typeWriter = () => {
        if (index < originalText.length) {
            titleElement.textContent += originalText.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    };
    
    // Iniciar animação após 500ms
    setTimeout(typeWriter, 500);
}

// Detectar tema do sistema
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Usuário prefere modo escuro - você pode adicionar lógica aqui
=======
// Modal de Projetos
const modal = document.getElementById('projeto-modal');
const modalClose = document.querySelector('.modal-close');
const projectCards = document.querySelectorAll('.projeto-card[data-projeto]');

// Abrir modal ao clicar em um projeto
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-projeto');
        const projectData = projectsData[projectId];
        
        if (projectData) {
            // Preencher dados do modal
            document.getElementById('modal-project-title').textContent = projectData.title;
            document.getElementById('modal-project-image').src = projectData.image;
            document.getElementById('modal-project-description').textContent = projectData.description;
            document.getElementById('modal-project-workflow').textContent = projectData.workflow;
            document.getElementById('modal-project-link').href = projectData.link;
            
            // Preencher tags
            const tagsContainer = document.getElementById('modal-project-tags');
            tagsContainer.innerHTML = '';
            projectData.tags.forEach(tag => {
                const tagElement = document.createElement('span');
                tagElement.className = 'tag';
                tagElement.textContent = tag;
                tagsContainer.appendChild(tagElement);
            });
            
            // Mostrar modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Fechar modal ao clicar no botão de fechar
modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Fechar modal ao clicar fora do conteúdo
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Fechar modal ao pressionar ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Detectar tema do sistema
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
>>>>>>> eccd2feab080c5faa58ac358e067509df45504c5
    console.log('Modo escuro detectado');
}

// Log de inicialização
console.log('Portfólio carregado com sucesso! 🚀');
