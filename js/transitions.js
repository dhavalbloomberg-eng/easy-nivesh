/**
 * Soft page transitions + data-refreshed stamp.
 */
(function () {
  document.documentElement.classList.add('js');
  window.addEventListener('pageshow', function () {
    document.body.classList.add('page-ready');
  });
  if (document.readyState !== 'loading') {
    document.body.classList.add('page-ready');
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      document.body.classList.add('page-ready');
    });
  }

  async function stampData() {
    let targets = document.querySelectorAll('[data-stamp]');
    if (!targets.length) {
      const el = document.createElement('p');
      el.className = 'data-stamp';
      el.setAttribute('data-stamp', '');
      el.textContent = 'Checking data\u2026';
      const main = document.querySelector('main') || document.body;
      main.appendChild(el);
      targets = document.querySelectorAll('[data-stamp]');
    }
    try {
      const r = await fetch('data/ipo.json', { cache: 'no-cache' });
      if (r.ok) {
        const j = await r.json();
        targets.forEach(function (el) {
          el.textContent = 'Data as of ' + (j.updated || '—');
        });
        return;
      }
    } catch (e) {}
    try {
      const r = await fetch('data/gold.json', { cache: 'no-cache' });
      if (r.ok) {
        const j = await r.json();
        targets.forEach(function (el) {
          el.textContent = 'Data as of ' + (j.updated || '—');
        });
      }
    } catch (e) {}
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', stampData);
  } else {
    stampData();
  }
})();
