/* 
   --------------------------------------------------
   PORTFOLIO SCRIPTS
   -------------------------------------------------- 
*/

document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initMenu();
    initMouseEffects();
    initLanguageSelector();
    initNavbarScroll();
    initTabs();
});

/* 
   --------------------------------------------------
   1. SCROLL REVEAL CONFIG
   -------------------------------------------------- 
*/
function initScrollReveal() {
    window.sr = ScrollReveal();

    sr.reveal('.header-presentacion', {
        duration: 3000,
        origin: 'bottom',
        distance: '-100px',
        delay: 2500
    });

    sr.reveal('.contenido-sobre-mi', {
        duration: 3000,
        origin: 'right',
        distance: '-50px',
        delay: 0.5
    });

    sr.reveal('.box', {
        duration: 3000,
        origin: 'top',
        distance: '-100px',
        delay: 0.5
    });

    sr.reveal('.contenido-formacion', {
        duration: 3000,
        origin: 'left',
        distance: '-50px',
        delay: 0.5
    });

    sr.reveal('.card-proyecto', {
        duration: 3000,
        origin: 'bottom',
        distance: '-100px',
        delay: 0.5
    });
}

/* 
   --------------------------------------------------
   2. MENU INTERACTION
   -------------------------------------------------- 
*/
function initMenu() {
    const splash = document.querySelector('.splash');
    const menu = document.querySelector('.menu');
    const toggle = document.querySelector('.toggle');

    // Splash Screen
    setTimeout(() => {
        splash.classList.add('display-none');
    }, 2000);

    // Toggle Menu
    toggle.onclick = () => {
        menu.classList.toggle('active');
    };

    // Close menu on click outside
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    });

    // Close responsive navbar on click
    const navbarLinks = document.querySelectorAll('.nav-item a');
    const navbarCollapse = document.getElementById('navbarTogglerDemo01');

    navbarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.getComputedStyle(navbarCollapse).display !== 'none' && window.innerWidth < 1210) {
                // Determine if it's actually collapsible via bootstrap's class
                if (navbarCollapse.classList.contains('show')) {
                    // Start bootstrap collapse toggle via simple button click simulation or class removal
                    document.querySelector('.navbar-toggler').click();
                }
            }
        });
    });
}

/* 
   --------------------------------------------------
   3. MOUSE EFFECTS (Interactive Buttons)
   -------------------------------------------------- 
*/
function initMouseEffects() {
    const buttons = document.querySelectorAll('.btn-contacto, .btn-sobremi, .footer');

    buttons.forEach(btn => {
        btn.onmousemove = function (e) {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            btn.style.setProperty('--x', x + 'px');
            btn.style.setProperty('--y', y + 'px');
        };
    });
}

/* 
   --------------------------------------------------
   4. LANGUAGE SELECTOR
   -------------------------------------------------- 
*/
function initLanguageSelector() {
    const langBtn = document.getElementById('language-toggle');

    // Check saved language or default to 'es'
    const currentLang = localStorage.getItem('selectedLang') || 'es';
    setLanguage(currentLang);

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const current = localStorage.getItem('selectedLang') || 'es';
            const nextLang = current === 'es' ? 'en' : 'es';
            setLanguage(nextLang);
        });
    }
}

function setLanguage(lang) {
    if (!translations[lang]) return;

    // Save preference
    localStorage.setItem('selectedLang', lang);

    // Update button text
    const langSpan = document.querySelector('.current-lang');
    if (langSpan) {
        langSpan.textContent = lang.toUpperCase();
    }

    // Update HTML content
    const elementsToTranslate = document.querySelectorAll('[data-lang]');
    elementsToTranslate.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Special case: update html lang attribute
    document.documentElement.lang = lang;

    // Special case: update resume link
    const resumeBtn = document.querySelector('.btn-resumen');
    if (resumeBtn) {
        if (lang === 'en') {
            resumeBtn.setAttribute('href', 'documentos/CV_Yago_Iglesias_Diaz_en.pdf');
        } else {
            resumeBtn.setAttribute('href', 'documentos/CV_Yago_Iglesias_Diaz.pdf');
        }
    }
}

/* 
   --------------------------------------------------
   5. NAVBAR SCROLL INTERACTION
   -------------------------------------------------- 
*/
function initNavbarScroll() {
    let lastScrollTop = 0;
    const navbar = document.getElementById('navbar');
    const sensitive = 5; // Minimum scroll necessary

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop < 0) scrollTop = 0; // Prevent negative scroll (mobile)

        // Shadow logic
        if (scrollTop > 0) {
            navbar.classList.add('nav-shadow');
        } else {
            navbar.classList.remove('nav-shadow');
        }

        // Hide/Show logic
        if (Math.abs(lastScrollTop - scrollTop) <= sensitive) return;

        if (scrollTop > lastScrollTop && scrollTop > navbar.offsetHeight) {
            // Scroll Down
            navbar.classList.add('nav-up');
        } else {
            // Scroll Up
            navbar.classList.remove('nav-up');
        }

        lastScrollTop = scrollTop;
    });
}

/* 
   --------------------------------------------------
   6. TABS SYSTEM
   -------------------------------------------------- 
*/
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and panels
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));

            // Add active class to clicked button
            btn.classList.add('active');

            // Show corresponding panel
            const tabId = btn.getAttribute('data-tab');
            const panel = document.getElementById(tabId);
            if (panel) {
                panel.classList.add('active');
            }
        });
    });
}