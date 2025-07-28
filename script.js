function loadPage(page) {
  fetch(`pages/${page}.html`)
    .then(r => r.text())
    .then(html => {
      const content = document.getElementById('content');
      content.innerHTML = html;

      const existing = document.querySelector(`script[data-page="${page}"]`);
      if (existing) existing.remove();        

      const s = document.createElement('script');
      s.dataset.page = page;
      s.src = `assets/js/${page}.js?v=${Date.now()}`;  
      document.body.appendChild(s);
    })
    .catch(err => console.error('Erro ao carregar página:', err));
}
