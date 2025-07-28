document.getElementById('deviceForm')
  .addEventListener('submit', async (e) => {
    e.preventDefault();              

    const dados = {
      ip:     document.getElementById('ip').value.trim(),
      estado: document.getElementById('estado').value.trim(),
      cidade: document.getElementById('cidade').value.trim(),
      tipo:   document.getElementById('tipo').value.trim(),
    };

    const msgEl = document.getElementById('formMessage');
    msgEl.className = 'message'; 

    try {
      const resp = await fetch('/backups/api/adicionar_dispositivo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados),
      });

      if (!resp.ok) {
        const texto = await resp.text();
        msgEl.textContent = `Erro HTTP ${resp.status}: ${texto}`;
        msgEl.classList.add('erro');
        return;
      }

      const json = await resp.json();
      msgEl.textContent = json.msg || (json.ok ? 'Dispositivo salvo!' : 'Erro ao salvar');

      if (json.ok) {
        msgEl.classList.add('sucesso');
      } else if (json.msg?.toLowerCase().includes('salvo para outra avaliação')) {
        msgEl.classList.add('revisao');
      } else {
        msgEl.classList.add('erro');
      }

    } catch (err) {
      console.error('Falha na requisição:', err);
      msgEl.textContent = 'Falha na requisição';
      msgEl.className = 'message erro';
    }
});
