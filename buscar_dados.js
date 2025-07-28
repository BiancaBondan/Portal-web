const semAcento = s =>
  s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const normalizarBusca = s => semAcento(s).toLowerCase();

let dic_eqt = {};

fetch("bianca/dic_eqt.json")       
  .then(r => r.json())
  .then(data => {
    dic_eqt = data;

    const btnBuscar = document.getElementById("buscarDados");
    if (!btnBuscar) return;

    btnBuscar.addEventListener("click", () => {
      const queryRaw = document.getElementById("searchData").value.trim();
      const query    = normalizarBusca(queryRaw);
      const infoDiv  = document.getElementById("info");

      infoDiv.innerHTML = "";
      infoDiv.classList.add("hidden");

      if (query.length < 2) return;

      if (!dic_eqt[query]) {
        infoDiv.innerHTML = `<b>IP ${queryRaw} não encontrado.</b>`;
        infoDiv.classList.remove("hidden");
        return;
      }

      const info   = dic_eqt[query];
      const senha  = (info.Login_used || "").split("/")[1] || "";

      const html = `
        <button onclick="document.getElementById('info').classList.add('hidden')"
                class="close-button">X</button>

        <b>IP:</b> ${queryRaw}<br>
        <b>Hostname:</b> ${info.Hostname || ""}<br>
        <b>Device:</b> ${(info.Model || "")} ${(info.Device_Type || "")}<br>
        <b>Login usado:</b> ${info.Login_used || ""} 
        ${ senha ? `<button onclick="copiarSenha(${JSON.stringify(senha)})">Copiar senha</button>` : ""}<br>
        <b>Localidade:</b> ${(info.Localidade?.Estado || "")}  ${(info.Localidade?.Cidade || "")}<br>
        <b>${info.Tipo || ""}</b><br>
        <b>IPs Alternativos:</b> ${
          Array.isArray(info.Ips_Alternativos) && info.Ips_Alternativos.length
            ? info.Ips_Alternativos.join(", ")
            : "Nenhum"
        }
      `;

      infoDiv.innerHTML = html;
      infoDiv.classList.remove("hidden");
    });
  })
  .catch(err => console.error("Erro ao carregar dic_eqt.json:", err));

function copiarSenha(senha) {
  navigator.clipboard.writeText(senha)
    .then(() => {
      alert('Senha copiada!');
    })
    .catch(err => {
      console.error('Erro ao copiar a senha:', err);
      alert('Erro ao copiar a senha. Veja o console para detalhes.');
    });
}
