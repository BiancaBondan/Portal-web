let dic_eqt = {};  

function normalizarNome(str) {
  return str
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, '_')  
    .replace(/[^\w\-]/g, '');
}

function normalizarBusca(str) {
  return str
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function normalizarHostname(str) {
  return str
    .replace(/:/g, '')         
    .replace(/-/g, '_')       
    .replace(/_{2,}/g, '_');   
}


fetch("/backups/bianca/dic_eqt.json")
  .then(r => r.json())
  .then(data => {
    dic_eqt = data;

    function ligarBusca() {
      const campo   = document.getElementById("search");
      const results = document.getElementById("results");
      if (!campo || !results || campo.dataset.ready) return;
      campo.dataset.ready = "1";

      campo.addEventListener("input", e => {
        const q = normalizarBusca(e.target.value);
        results.innerHTML = "";
        if (q.length < 2) return;

        for (const [ip, info] of Object.entries(dic_eqt)) {
          const hostname = info.Hostname || "";
          const estado   = (info.Localidade?.Estado || "").toUpperCase();
          const cidade   = info.Localidade?.Cidade  || "";

          const hostnameBusca = normalizarBusca(hostname);
          const hostnameCaminho = normalizarHostname(hostname);

          if (
            ip.includes(q) ||
            hostnameBusca.includes(q) ||
            normalizarBusca(cidade).includes(q) ||
            normalizarBusca(estado).includes(q)
          ) {
            const pasta = `/backups/${estado}/${normalizarNome(cidade)}/${hostnameCaminho}/`;

            const item  = document.createElement("div");
            item.className = "item";
            item.innerHTML = `
              <span style="margin-right:10px">
                ${hostname} - ${ip} (${cidade}, ${estado})
              </span>
              <button class="abrir-pasta">Abrir pasta</button>
            `;
            item.querySelector("button").onclick = () => window.open(pasta, "_blank");
            results.appendChild(item);
          }
        }
      });
    }

    ligarBusca();                                                 
    new MutationObserver(ligarBusca)
      .observe(document.getElementById("content"), { childList: true });
  })
  .catch(err => console.error("Falha ao carregar dic_eqt.json:", err));







//let dic_eqt = {};  

function loadPage(page) {
  const content = document.getElementById("content");
  if (!content) return;

  fetch(`/backups/pages/${page}.html`)
    .then(res => {
      if (!res.ok) throw new Error("Erro ao carregar a página");
      return res.text();
    })
    .then(html => {
      content.innerHTML = html;
    })
    .catch(err => {
      content.innerHTML = `<p style="color:red;">Erro ao carregar: ${err.message}</p>`;
    });
}

function normalizarNome(str) {
  return str
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, '_')  
    .replace(/[^\w\-]/g, '');
}

function normalizarBusca(str) {
  return str
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function normalizarHostname(str) {
  return str
    .replace(/:/g, '')         
    .replace(/-/g, '_')       
    .replace(/_{2,}/g, '_');   
}


fetch("/backups/bianca/dic_eqt.json")
  .then(r => r.json())
  .then(data => {
    dic_eqt = data;

    function ligarBusca() {
      const campo   = document.getElementById("search");
      const results = document.getElementById("results");
      if (!campo || !results || campo.dataset.ready) return;
      campo.dataset.ready = "1";

      campo.addEventListener("input", e => {
        const q = normalizarBusca(e.target.value);
        results.innerHTML = "";
        if (q.length < 2) return;

        for (const [ip, info] of Object.entries(dic_eqt)) {
          const hostname = info.Hostname || "";
          const estado   = (info.Localidade?.Estado || "").toUpperCase();
          const cidade   = info.Localidade?.Cidade  || "";

          const hostnameBusca = normalizarBusca(hostname);
          const hostnameCaminho = normalizarHostname(hostname);

          if (
            ip.includes(q) ||
            hostnameBusca.includes(q) ||
            normalizarBusca(cidade).includes(q) ||
            normalizarBusca(estado).includes(q)
          ) {
            const pasta = `/backups/${estado}/${normalizarNome(cidade)}/${hostnameCaminho}/`;

            const item  = document.createElement("div");
            item.className = "item";
            item.innerHTML = `
              <span style="margin-right:10px">
                ${hostname} - ${ip} (${cidade}, ${estado})
              </span>
              <button class="abrir-pasta">Abrir pasta</button>
            `;
            item.querySelector("button").onclick = () => window.open(pasta, "_blank");
            results.appendChild(item);
          }
        }
      });
    }

    ligarBusca();                                                 
    new MutationObserver(ligarBusca)
      .observe(document.getElementById("content"), { childList: true });
  })
  .catch(err => console.error("Falha ao carregar dic_eqt.json:", err));



//----------------------------------------
//let dic_eqt = {};  

function normalizarNome(str) {
  return str
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, '_')  
    .replace(/[^\w\-]/g, '');
}

function normalizarBusca(str) {
  return str
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function normalizarHostname(str) {
  return str
    .replace(/:/g, '')         
    .replace(/-/g, '_')       
    .replace(/_{2,}/g, '_');   
}


fetch("/backups/bianca/dic_eqt.json")
  .then(r => r.json())
  .then(data => {
    dic_eqt = data;

    function ligarBusca() {
      const campo   = document.getElementById("search");
      const results = document.getElementById("results");
      if (!campo || !results || campo.dataset.ready) return;
      campo.dataset.ready = "1";

      campo.addEventListener("input", e => {
        const q = normalizarBusca(e.target.value);
        results.innerHTML = "";
        if (q.length < 2) return;

        for (const [ip, info] of Object.entries(dic_eqt)) {
          const hostname = info.Hostname || "";
          const estado   = (info.Localidade?.Estado || "").toUpperCase();
          const cidade   = info.Localidade?.Cidade  || "";

          const hostnameBusca = normalizarBusca(hostname);
          const hostnameCaminho = normalizarHostname(hostname);

          if (
            ip.includes(q) ||
            hostnameBusca.includes(q) ||
            normalizarBusca(cidade).includes(q) ||
            normalizarBusca(estado).includes(q)
          ) {
            const pasta = `/backups/${estado}/${normalizarNome(cidade)}/${hostnameCaminho}/`;

            const item  = document.createElement("div");
            item.className = "item";
            item.innerHTML = `
              <span style="margin-right:10px">
                ${hostname} - ${ip} (${cidade}, ${estado})
              </span>
              <button class="abrir-pasta">Abrir pasta</button>
            `;
            item.querySelector("button").onclick = () => window.open(pasta, "_blank");
            results.appendChild(item);
          }
        }
      });
    }

    ligarBusca();                                                 
    new MutationObserver(ligarBusca)
      .observe(document.getElementById("content"), { childList: true });
  })
  .catch(err => console.error("Falha ao carregar dic_eqt.json:", err));