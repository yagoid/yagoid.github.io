/*
   ========================================================================
   PORTFOLIO — main.js
   v3.2026 · Brutalist-Mono
   ========================================================================
*/

document.addEventListener('DOMContentLoaded', () => {
    initSplash();
    initLanguageSelector();
    initNavbar();
    initActiveNav();
    initTabs();
    initScrollProgress();
    initCopyEmail();
    initCustomCursor();
    initScrollReveal();
});

/* ────────────────────────────────────────────────────────────
   SPLASH
   ──────────────────────────────────────────────────────────── */
function initSplash() {
    const splash = document.getElementById('splash');
    const logoPath = document.querySelector('.logo-path');

    if (logoPath) {
        const len = logoPath.getTotalLength();
        logoPath.style.strokeDasharray = len;
        logoPath.style.strokeDashoffset = len;
        // Force reflow before animating
        logoPath.getBoundingClientRect();
        logoPath.style.animation = 'drawLogo 1.6s cubic-bezier(0.65, 0, 0.35, 1) forwards';
    }

    setTimeout(() => {
        if (!splash) return;
        splash.classList.add('hidden');
    }, 1700);
}

/* ────────────────────────────────────────────────────────────
   LANGUAGE
   ──────────────────────────────────────────────────────────── */
function initLanguageSelector() {
    const langBtn = document.getElementById('language-toggle');
    const saved = localStorage.getItem('selectedLang') || 'es';
    setLanguage(saved);

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const current = localStorage.getItem('selectedLang') || 'es';
            setLanguage(current === 'es' ? 'en' : 'es');
        });
    }
}

function setLanguage(lang) {
    if (typeof translations === 'undefined' || !translations[lang]) return;
    localStorage.setItem('selectedLang', lang);

    const langSpan = document.querySelector('.current-lang');
    if (langSpan) langSpan.textContent = lang.toUpperCase();

    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.documentElement.lang = lang;

    const resumeBtn = document.querySelector('.nav-resume');
    if (resumeBtn) {
        const file = lang === 'en' ? 'CV_Yago_Iglesias_Diaz_en.pdf' : 'CV_Yago_Iglesias_Diaz.pdf';
        resumeBtn.setAttribute('href', `documentos/${file}`);
    }
}

/* ────────────────────────────────────────────────────────────
   NAVBAR (scroll behavior + mobile toggle)
   ──────────────────────────────────────────────────────────── */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const toggle = document.getElementById('nav-toggle');
    const links = document.getElementById('nav-links');

    let lastScroll = 0;
    const sensitivity = 6;

    window.addEventListener('scroll', () => {
        const y = Math.max(0, window.pageYOffset || document.documentElement.scrollTop);

        if (y > 4) navbar.classList.add('nav-scrolled');
        else navbar.classList.remove('nav-scrolled');

        if (Math.abs(lastScroll - y) <= sensitivity) return;

        if (y > lastScroll && y > navbar.offsetHeight) {
            navbar.classList.add('nav-up');
        } else {
            navbar.classList.remove('nav-up');
        }
        lastScroll = y;
    }, { passive: true });

    // Mobile toggle
    if (toggle && links) {
        toggle.addEventListener('click', () => {
            const open = links.classList.toggle('open');
            toggle.setAttribute('aria-expanded', open);
        });

        // Close on link click
        links.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                if (links.classList.contains('open')) {
                    links.classList.remove('open');
                    toggle.setAttribute('aria-expanded', 'false');
                }
            });
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!links.contains(e.target) && !toggle.contains(e.target) && links.classList.contains('open')) {
                links.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

/* ────────────────────────────────────────────────────────────
   ACTIVE NAV (IntersectionObserver)
   ──────────────────────────────────────────────────────────── */
function initActiveNav() {
    const sections = document.querySelectorAll('main section[id]');
    const links = document.querySelectorAll('.nav-link[data-section]');
    if (!sections.length || !links.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                links.forEach(l => {
                    l.classList.toggle('is-active', l.getAttribute('data-section') === id);
                });
            }
        });
    }, {
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0
    });

    sections.forEach(s => observer.observe(s));
}

/* ────────────────────────────────────────────────────────────
   TABS
   ──────────────────────────────────────────────────────────── */
function initTabs() {
    const btns = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.tab-panel');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            const panel = document.getElementById(btn.getAttribute('data-tab'));
            if (panel) panel.classList.add('active');
        });
    });
}

/* ────────────────────────────────────────────────────────────
   SCROLL PROGRESS BAR
   ──────────────────────────────────────────────────────────── */
function initScrollProgress() {
    const bar = document.querySelector('.scroll-progress');
    if (!bar) return;

    let ticking = false;
    const update = () => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
        bar.style.width = pct + '%';
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(update);
            ticking = true;
        }
    }, { passive: true });
}

/* ────────────────────────────────────────────────────────────
   COPY EMAIL
   ──────────────────────────────────────────────────────────── */
function initCopyEmail() {
    const btn = document.getElementById('mail-copy');
    if (!btn) return;
    const email = 'yago.igle@gmail.com';

    btn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(email);
        } catch {
            // Fallback: invisible textarea
            const ta = document.createElement('textarea');
            ta.value = email;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            ta.remove();
        }

        const lang = localStorage.getItem('selectedLang') || 'es';
        const T = (typeof translations !== 'undefined' && translations[lang]) || {};
        const labelOk = T.copied || '[ copied ✓ ]';
        const labelDefault = T.copy_email || '[ copy ]';

        btn.textContent = labelOk;
        btn.classList.add('copied');

        setTimeout(() => {
            btn.textContent = labelDefault;
            btn.classList.remove('copied');
        }, 1800);
    });
}

/* ────────────────────────────────────────────────────────────
   CUSTOM CURSOR
   ──────────────────────────────────────────────────────────── */
function initCustomCursor() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const dot = document.querySelector('.cursor-dot');
    if (!dot) return;

    let x = 0, y = 0, tx = 0, ty = 0;

    document.addEventListener('mousemove', (e) => {
        tx = e.clientX;
        ty = e.clientY;
    });

    const tick = () => {
        x += (tx - x) * 0.3;
        y += (ty - y) * 0.3;
        dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
        requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    const interactive = 'a, button, .tab-btn, .repo-card, .term-card, .proj-card, [data-tab]';
    document.body.addEventListener('mouseover', (e) => {
        if (e.target.closest(interactive)) document.body.classList.add('cursor-active');
    });
    document.body.addEventListener('mouseout', (e) => {
        if (e.target.closest(interactive)) document.body.classList.remove('cursor-active');
    });
}

/* ────────────────────────────────────────────────────────────
   SCROLL REVEAL (refined, ScrollReveal-based)
   ──────────────────────────────────────────────────────────── */
function initScrollReveal() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (typeof ScrollReveal === 'undefined') return;

    const sr = ScrollReveal({
        distance: '24px',
        duration: 900,
        easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
        opacity: 0,
        reset: false,
        viewFactor: 0.15
    });

    sr.reveal('.section-head', { origin: 'top', delay: 0 });
    sr.reveal('.about-photo', { origin: 'left', delay: 100 });
    sr.reveal('.about-content', { origin: 'right', delay: 150 });
    sr.reveal('.tabs-nav', { origin: 'top' });
    sr.reveal('.proj-card', { origin: 'bottom', interval: 150 });
    sr.reveal('.repo-card', { origin: 'bottom', interval: 80 });
    sr.reveal('.contact-block', { origin: 'bottom' });
}
