export function buscarAnalise() {
  const ip = document.getElementById("ipInput").value.trim();
  const res = document.getElementById("resultado");
  const botao = document.querySelector(".action-button");

  if (!ip) {
    res.textContent = "Por favor, digite um IP.";
    res.classList.remove("hidden");
    return;
  }

  botao.disabled = true;
  botao.textContent = "Buscando...";

  fetch(`/backups/bianca/analise_backup.json?ip=${encodeURIComponent(ip)}`)
    .then(r => {
      if (!r.ok) throw new Error("Não encontrado");
      return r.json();
    })
    .then(data => {
      const { caminho, blocos } = data;
      if (!blocos || blocos.length === 0) {
        res.innerHTML = `Nenhum backup encontrado para o IP <strong>${ip}</strong>.`;
      } else {
        let html = `<h3 style="margin-bottom:10px;">${ip} – ${caminho}</h3>`;
        blocos.forEach(b => {
          html += `<div class="diff-bloco">`;
          html += `<strong>${b.from} – ${b.to}</strong><br>`;

          if (b.novas_linhas && b.novas_linhas.length > 0) {
            html += `<pre class="diff-linhas">`;
            b.novas_linhas.forEach(linha => {
              if (linha.startsWith("+")) {
                html += `<span class="linha-add">${linha}</span>\n`;
              } else if (linha.startsWith("-")) {
                html += `<span class="linha-del">${linha}</span>\n`;
              } else {
                html += `${linha}\n`;
              }
            });
            html += `</pre>`;
          } else {
            html += `<em>sem diferenças visíveis</em>`;
          }

          html += `</div>`;
        });
        res.innerHTML = html;
      }
      res.classList.remove("hidden");
    })
    .catch(err => {
      res.innerHTML = `Erro ao buscar análise para <strong>${ip}</strong>.`;
      res.classList.remove("hidden");
    })
    .finally(() => {
      botao.disabled = false;
      botao.textContent = "Buscar";
    });
}
