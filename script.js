// Funcionalidades do portfólio

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const currentYear = document.getElementById('current-year');
const contactForm = document.querySelector('.contato-form');
const sectionLinks = document.querySelectorAll('.nav-links a');
const animatedElements = document.querySelectorAll('.projeto-card, .skill-item, .contato-item');

// Menu mobile
if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', String(!expanded));
    });
}

// Fechar menu ao clicar nos links
sectionLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks) {
            navLinks.classList.remove('active');
        }

        if (menuToggle) {
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

// Ano automático no rodapé
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// Scroll suave para âncoras internas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        if (!href || href === '#') {
            return;
        }

        const target = document.querySelector(href);

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Validação simples do formulário
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const inputs = contactForm.querySelectorAll('input, textarea');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#ff4d6d';
            } else {
                input.style.borderColor = '';
            }
        });

        if (isValid) {
            alert('Obrigado pela mensagem! Entrarei em contato em breve.');
            contactForm.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
}

// Animação ao entrar na tela
if ('IntersectionObserver' in window) {
    const observerOptions = {
        threshold: 0.12,
        rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Destacar item do menu conforme a seção
window.addEventListener('scroll', () => {
    let current = '';

    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    sectionLinks.forEach(link => {
        link.classList.remove('active');

        const href = link.getAttribute('href');
        if (href && href.replace('#', '') === current) {
            link.classList.add('active');
        }
    });
});

console.log('Portfólio carregado com sucesso! 🚀');