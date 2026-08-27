/**
 * main.js — Capa interactiva del sitio de curso JavaScript
 * --------------------------------------------------------
 * Todo vanilla JS, sin dependencias externas.
 * Organizado en funciones/modulos claros, ejecutado al DOMContentLoaded.
 */

// ============================================================
// 0. UTILIDADES GENERALES
// ============================================================

const debounce = (fn, ms = 200) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
};

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const HEADER_OFFSET = 80;

// ============================================================
// 1. ALTERNAR TEMA CLARO / OSCURO
// ============================================================

const initThemeToggle = () => {
  const toggleBtn = $('#themeToggle');
  const html = document.documentElement;

  if (!toggleBtn) return;

  const applyTheme = (theme) => {
    html.setAttribute('data-theme', theme);
    toggleBtn.setAttribute(
      'aria-label',
      theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro',
    );
  };

  const getInitialTheme = () => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  };

  const initialTheme = getInitialTheme();
  applyTheme(initialTheme);

  toggleBtn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
};

// ============================================================
// 2. MENU HAMBURGUESA
// ============================================================

const initHamburgerMenu = () => {
  const hamburger = $('#hamburger');
  const navLinks = $('#navLinks');

  if (!hamburger || !navLinks) return;

  const closeMenu = () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    navLinks.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  const openMenu = () => {
    hamburger.classList.add('active');
    navLinks.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    navLinks.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const toggleMenu = () => {
    const isOpen = navLinks.classList.contains('active');
    isOpen ? closeMenu() : openMenu();
  };

  navLinks.setAttribute('aria-hidden', 'true');
  hamburger.addEventListener('click', toggleMenu);

  $$('a', navLinks).forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (e) => {
    if (
      navLinks.classList.contains('active') &&
      !navLinks.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      closeMenu();
      hamburger.focus();
    }
  });

  const onResize = debounce(() => {
    if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
      closeMenu();
    }
  }, 150);
  window.addEventListener('resize', onResize);
};

// ============================================================
// 3. BOTON "VOLVER ARRIBA"
// ============================================================

const initScrollToTop = () => {
  let btn = $('#scrollTop');

  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'scrollTop';
    btn.className = 'scroll-top';
    btn.setAttribute('aria-label', 'Volver arriba');
    btn.innerHTML = '&#8679;';
    document.body.appendChild(btn);
  }

  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', toggleVisibility, { passive: true });
  toggleVisibility();

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};

// ============================================================
// 4. BARRA DE PROGRESO DE LECTURA
// ============================================================

const initReadingProgress = () => {
  const progressBar = $('.progress-bar');

  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }

    document.documentElement.style.setProperty('--scroll-progress', `${progress}%`);
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
};

// ============================================================
// 5. LESSON HEADINGS
// ============================================================

const initLessonHeadings = () => {
  const lessonHeaders = $$('.lesson-header');

  if (!lessonHeaders.length) return;

  lessonHeaders.forEach((header) => {
    const content = header.nextElementSibling;
    if (content) {
      content.classList.add('lesson-content');
    }
  });
};

// ============================================================
// 6. SCROLL SUAVE PARA ENLACES DE ANCLA
// ============================================================

const initSmoothScrollLinks = () => {
  $$('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const target = $(targetId);
      if (!target) return;

      e.preventDefault();

      const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });
      history.pushState(null, '', targetId);
    });
  });
};

// ============================================================
// 7. ANIMACIONES AL DESPLAZAR (IntersectionObserver)
// ============================================================

const initScrollAnimations = () => {
  const animatedElements = $$('.animate-on-scroll');

  if (!animatedElements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    },
  );

  animatedElements.forEach((el) => observer.observe(el));
};

// ============================================================
// 8. RESALTADO DE NAVEGACION ACTIVA
// ============================================================

const initActiveNavigation = () => {
  const sections = $$('section[id]');
  const navLinks = $$('.nav-links a[href^="#"], .nav-links a');

  if (!sections.length || !navLinks.length) return;

  const linkMap = new Map();
  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      linkMap.set(href, link);
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = `#${entry.target.id}`;
          navLinks.forEach((l) => l.classList.remove('active'));
          const activeLink = linkMap.get(id);
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: `-${HEADER_OFFSET}px 0px -40% 0px`,
    },
  );

  sections.forEach((section) => observer.observe(section));
};

// ============================================================
// 9. BOTON DE COPIAR EN BLOQUES DE CODIGO
// ============================================================

const initCodeCopyButtons = () => {
  const codeBlocks = $$('.code-block');

  if (!codeBlocks.length) return;

  codeBlocks.forEach((block) => {
    if (block.querySelector('.copy-btn')) return;

    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.setAttribute('aria-label', 'Copiar codigo al portapapeles');
    btn.textContent = 'Copiar';
    block.style.position = 'relative';
    block.appendChild(btn);

    btn.addEventListener('click', async () => {
      const code = $('code', block) || $('pre', block);
      if (!code) return;

      try {
        await navigator.clipboard.writeText(code.textContent);
        btn.textContent = 'Copiado!';
        btn.classList.add('copied');

        setTimeout(() => {
          btn.textContent = 'Copiar';
          btn.classList.remove('copied');
        }, 2000);
      } catch {
        btn.textContent = 'Error';
        setTimeout(() => {
          btn.textContent = 'Copiar';
        }, 2000);
      }
    });
  });
};

// ============================================================
// 10. VALIDACION DE FORMULARIO
// ============================================================

const initFormValidation = () => {
  const form = $('#demoForm');
  if (!form) return;

  const showError = (field, message) => {
    field.classList.add('error');
    let errorEl = field.parentElement?.querySelector('.error-message');
    if (!errorEl) {
      errorEl = document.createElement('span');
      errorEl.className = 'error-message';
      errorEl.setAttribute('role', 'alert');
      field.parentElement?.appendChild(errorEl);
    }
    errorEl.textContent = message;
  };

  const clearError = (field) => {
    field.classList.remove('error');
    const errorEl = field.parentElement?.querySelector('.error-message');
    if (errorEl) errorEl.textContent = '';
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateField = (field) => {
    const { name, value, type } = field;

    switch (name) {
      case 'nombre':
        if (!value.trim()) { showError(field, 'El nombre es obligatorio.'); return false; }
        if (value.trim().length < 2) { showError(field, 'Minimo 2 caracteres.'); return false; }
        break;
      case 'email':
        if (!value.trim()) { showError(field, 'El email es obligatorio.'); return false; }
        if (!isValidEmail(value.trim())) { showError(field, 'Email no valido.'); return false; }
        break;
      case 'mensaje':
        if (!value.trim()) { showError(field, 'El mensaje es obligatorio.'); return false; }
        break;
      case 'privacidad':
        if (type === 'checkbox' && !field.checked) { showError(field, 'Debes aceptar la politica.'); return false; }
        break;
    }

    clearError(field);
    return true;
  };

  $$('input, textarea', form).forEach((field) => {
    field.addEventListener('input', () => clearError(field));
    field.addEventListener('change', () => clearError(field));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fields = $$('input, textarea', form);
    let isValid = true;

    fields.forEach((field) => {
      if (!validateField(field)) isValid = false;
    });

    if (isValid) {
      const successMsg = document.createElement('div');
      successMsg.className = 'form-success';
      successMsg.setAttribute('role', 'status');
      successMsg.innerHTML = `
        <h3>Mensaje enviado con exito!</h3>
        <p>Gracias por tu mensaje. Te responderemos pronto.</p>
      `;
      form.reset();
      form.style.display = 'none';
      form.parentElement?.appendChild(successMsg);
    } else {
      const firstError = $('.error', form);
      if (firstError) firstError.focus();
    }
  });
};

// ============================================================
// 11. TABLA DE CONTENIDOS — SCROLL SUAVE
// ============================================================

const initTOCSmoothScroll = () => {
  $$('.toc-item a').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const target = $(href);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });
      history.pushState(null, '', href);
    });
  });
};

// ============================================================
// 12. NAVEGACION POR TECLADO
// ============================================================

const initKeyboardNavigation = () => {
  const navLinks = $('#navLinks');
  const hamburger = $('#hamburger');

  const trapFocus = (container) => {
    const focusable = $$(
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      container,
    );
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    document.addEventListener('keydown', (e) => {
      if (!navLinks?.classList.contains('active')) return;
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  };

  if (navLinks) trapFocus(navLinks);
};

// ============================================================
// 13. SCROLL SPY PARA TABLA DE CONTENIDOS
// ============================================================

const initTOCScrollSpy = () => {
  const tocItems = $$('.toc-item');
  const sections = $$('section[id], .module[id], [id]');

  if (!tocItems.length) return;

  const tocMap = new Map();
  tocItems.forEach((item) => {
    const link = $('a', item);
    if (!link) return;
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      tocMap.set(href.substring(1), item);
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          tocItems.forEach((item) => item.classList.remove('active'));
          const tocItem = tocMap.get(entry.target.id);
          if (tocItem) tocItem.classList.add('active');
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: `-${HEADER_OFFSET}px 0px -60% 0px`,
    },
  );

  const observedIds = new Set();
  sections.forEach((section) => {
    if (section.id && tocMap.has(section.id) && !observedIds.has(section.id)) {
      observer.observe(section);
      observedIds.add(section.id);
    }
  });
};

// ============================================================
// 14. MANEJO DE RESPONSIVE
// ============================================================

const initResponsive = () => {
  const navLinks = $('#navLinks');
  const hamburger = $('#hamburger');

  const handleResize = debounce(() => {
    if (window.innerWidth > 768) {
      if (navLinks?.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger?.classList.remove('active');
        hamburger?.setAttribute('aria-expanded', 'false');
        navLinks?.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    }
  }, 150);

  window.addEventListener('resize', handleResize);
};

// ============================================================
// 15-16. COURSE PROGRESS (localStorage)
// ============================================================

const COURSE_PROGRESS_KEY = 'js-course-progress';
const COURSE_STATE_KEY = 'js-course-state';

const getCourseProgress = () => {
  try {
    const raw = localStorage.getItem(COURSE_PROGRESS_KEY);
    return raw ? JSON.parse(raw) : { modules: {} };
  } catch { return { modules: {} }; }
};

const saveCourseProgress = (progress) => {
  try { localStorage.setItem(COURSE_PROGRESS_KEY, JSON.stringify(progress)); } catch {}
};

const getCourseState = () => {
  try {
    const raw = localStorage.getItem(COURSE_STATE_KEY);
    return raw ? JSON.parse(raw) : { currentModule: 1, started: false };
  } catch { return { currentModule: 1, started: false }; }
};

const saveCourseState = (state) => {
  try { localStorage.setItem(COURSE_STATE_KEY, JSON.stringify(state)); } catch {}
};

// ============================================================
// 17. COURSE PLAYER — Sequential Module Display
// ============================================================

const initCoursePlayer = () => {
  const state = getCourseState();
  const allModules = $$('.module[id]');
  if (!allModules.length) return;

  if (state.started) {
    enterCourseMode(state.currentModule);
  }

  $$('a[href="#modulo-1"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      enterCourseMode(1);
    });
  });

  $$('.module-start-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.module-card');
      if (!card) return;
      const num = parseInt(card.id.replace('module-card-', ''), 10);
      enterCourseMode(num);
    });
  });
};

const enterCourseMode = (moduleNum) => {
  const state = getCourseState();
  state.started = true;
  state.currentModule = moduleNum;
  saveCourseState(state);

  document.body.classList.add('course-mode');

  $$('.module[id]').forEach(mod => mod.classList.remove('active-module'));
  const target = $(`#modulo-${moduleNum}`);
  if (target) {
    target.classList.add('active-module');
    setTimeout(() => {
      const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    }, 100);
  }

  $$('.module-start-btn').forEach(btn => {
    const card = btn.closest('.module-card');
    if (!card) return;
    const num = parseInt(card.id.replace('module-card-', ''), 10);
    const progress = getCourseProgress();
    const modData = progress.modules[`modulo-${num}`];
    if (num < moduleNum || (modData && modData.completed)) {
      btn.textContent = 'Completado';
      btn.classList.remove('btn-primary');
      btn.classList.add('btn-ghost');
    } else if (num === moduleNum) {
      btn.textContent = 'Continuar';
    } else {
      btn.textContent = 'Iniciar';
      btn.classList.remove('btn-ghost');
      btn.classList.add('btn-primary');
    }
  });
};

const exitCourseMode = () => {
  document.body.classList.remove('course-mode');
  $$('.module[id]').forEach(mod => mod.classList.remove('active-module'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// ============================================================
// 18. MODULE NEXT BUTTONS
// ============================================================

const initModuleNextButtons = () => {
  $$('.module-next-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const nextNum = parseInt(btn.getAttribute('data-next'), 10);
      if (nextNum && nextNum <= 10) {
        enterCourseMode(nextNum);
      } else {
        exitCourseMode();
        const completeEl = $('.course-complete');
        if (completeEl) {
          document.body.classList.add('course-mode');
          completeEl.style.display = 'block';
        }
      }
    });
  });

  $$('.module-back-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      exitCourseMode();
    });
  });
};

// ============================================================
// 19. LESSON COMPLETION TOGGLE
// ============================================================

const updateModuleProgressInCard = (moduleNum) => {
  const moduleId = `modulo-${moduleNum}`;
  const card = $(`#module-card-${moduleNum}`);
  if (!card) return;

  const progress = getCourseProgress();
  const modData = progress.modules[moduleId];
  if (!modData) return;

  const modEl = $(`#${moduleId}`);
  if (!modEl) return;

  const totalLessons = $$('.lesson', modEl).length || 1;
  const completed = (modData.completedLessons || []).filter(Boolean).length;
  const pct = Math.round((completed / totalLessons) * 100);

  const bar = $('.progress-fill', card);
  if (bar) bar.style.width = `${pct}%`;

  const status = $('.module-status', card);
  if (status) {
    status.className = 'module-status';
    if (pct >= 100) {
      status.classList.add('completed');
      status.textContent = 'Completado';
      modData.completed = true;
      saveCourseProgress(progress);
    } else if (pct > 0 || modData.started) {
      status.classList.add('in-progress');
      status.textContent = `${pct}%`;
    } else {
      status.classList.add('not-started');
      status.textContent = 'No iniciado';
    }
  }

  const modHeader = $(`.module-progress-label`, $(`#${moduleId}`));
  if (modHeader) modHeader.textContent = `Modulo ${moduleNum} — ${completed}/${totalLessons} lecciones`;
};

const initLessonCompletion = () => {
  $$('.lesson-complete-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const checkbox = $('.lesson-complete-checkbox', btn);
      if (!checkbox) return;

      const lessonId = checkbox.getAttribute('data-lesson') || '';
      const lessonArticle = btn.closest('.lesson');
      if (!lessonArticle) return;

      const moduleSection = lessonArticle.closest('.module[id]');
      if (!moduleSection) return;

      const moduleId = moduleSection.id;
      const moduleNum = parseInt(moduleId.replace('modulo-', ''), 10);
      const progress = getCourseProgress();

      if (!progress.modules[moduleId]) {
        progress.modules[moduleId] = { started: true, completedLessons: [] };
      }

      const modData = progress.modules[moduleId];
      const isCompleted = btn.classList.contains('completed');

      if (!isCompleted) {
        btn.classList.add('completed');
        checkbox.classList.add('completed');
        lessonArticle.classList.add('completed');
        const title = $('h3', lessonArticle);
        if (title) title.style.textDecoration = 'line-through';
        if (!modData.completedLessons.includes(lessonId)) {
          modData.completedLessons.push(lessonId);
        }
      } else {
        btn.classList.remove('completed');
        checkbox.classList.remove('completed');
        lessonArticle.classList.remove('completed');
        const title = $('h3', lessonArticle);
        if (title) title.style.textDecoration = '';
        modData.completedLessons = modData.completedLessons.filter(id => id !== lessonId);
      }

      modData.started = true;
      saveCourseProgress(progress);
      updateModuleProgressInCard(moduleNum);
    });
  });
};

// ============================================================
// 20. RESTORE COMPLETED STATE ON LOAD
// ============================================================

const initRestoreProgress = () => {
  const progress = getCourseProgress();
  Object.keys(progress.modules).forEach(moduleId => {
    const modData = progress.modules[moduleId];
    if (!modData || !modData.completedLessons) return;
    const modEl = $(`#${moduleId}`);
    if (!modEl) return;

    modData.completedLessons.forEach(lessonId => {
      if (!lessonId) return;
      const checkbox = $(`span[data-lesson="${lessonId}"]`, modEl);
      if (checkbox) {
        const btn = checkbox.closest('.lesson-complete-btn');
        if (btn) btn.classList.add('completed');
        checkbox.classList.add('completed');
      }
      const lessonArticle = $(`#${lessonId}`, modEl);
      if (lessonArticle) {
        lessonArticle.classList.add('completed');
        const title = $('h3', lessonArticle);
        if (title) title.style.textDecoration = 'line-through';
      }
    });

    const num = parseInt(moduleId.replace('modulo-', ''), 10);
    updateModuleProgressInCard(num);
  });
};

// ============================================================
// INICIALIZACION PRINCIPAL
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initHamburgerMenu();
  initScrollToTop();
  initReadingProgress();
  initLessonHeadings();
  initSmoothScrollLinks();
  initScrollAnimations();
  initActiveNavigation();
  initCodeCopyButtons();
  initFormValidation();
  initTOCSmoothScroll();
  initKeyboardNavigation();
  initTOCScrollSpy();
  initResponsive();

  initRestoreProgress();
  initLessonCompletion();
  initCoursePlayer();
  initModuleNextButtons();
});