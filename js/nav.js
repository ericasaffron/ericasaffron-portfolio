// nav.js — accessible mobile menu toggle
(function () {
  var toggle = document.getElementById('navToggle');
  var links  = document.getElementById('navLinks');
  var nav    = document.querySelector('.nav');
  if (!toggle || !links) return;

  function setHamburger(open) {
    links.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');

    var spans = toggle.querySelectorAll('span');
    if (open) {
      spans[0].style.transform = 'translateY(7px) rotate(45deg)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  }

  function closeMenu() {
    setHamburger(false);
  }

  function updateNavMode() {
    if (!nav) return;
    nav.classList.toggle('nav--compact', window.scrollY > 32);
  }

  toggle.type = 'button';
  toggle.setAttribute('aria-controls', 'navLinks');
  toggle.setAttribute('aria-haspopup', 'true');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation menu');

  toggle.addEventListener('click', function (event) {
    event.stopPropagation();
    var open = toggle.getAttribute('aria-expanded') === 'true';
    setHamburger(!open);
  });

  links.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', function (event) {
    if (!toggle.contains(event.target) && !links.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && links.classList.contains('open')) {
      closeMenu();
      toggle.focus();
    }
  });

  window.addEventListener('scroll', updateNavMode, { passive: true });
  window.addEventListener('resize', updateNavMode);
  updateNavMode();
})();
