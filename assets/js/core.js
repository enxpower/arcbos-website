(function () {
  async function includePartials() {
    const nodes = document.querySelectorAll('[data-include]');
    const tasks = Array.from(nodes).map(async (el) => {
      const url = el.getAttribute('data-include');
      if (!url) return;
      try {
        const res = await fetch(url, { cache: 'no-cache' });
        if (!res.ok) throw new Error('Fetch failed');
        el.innerHTML = await res.text();
      } catch (e) {
        el.innerHTML = '';
      }
    });
    await Promise.all(tasks);
    setYear();
  }

  function setYear() {
    const yearEl = document.getElementById('footer-year');
    if (yearEl) yearEl.textContent = `© ${new Date().getFullYear()}`;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', includePartials);
  } else {
    includePartials();
  }
})();