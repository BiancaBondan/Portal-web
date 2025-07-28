#  Web Portal for Network Devices
 -This portal provides authenticated access (via LDAP) for network analysts and support teams to manage, search, and analyze backup data from over 2,000 devices.

## Project Structure
📁 backup/  
├── app.wsgi
├── app.py
├──📁exemplo de pasta dos estados.php  # Diretório com estrutura por estado > cidade > dispositivos
│   ├── index.php
│   └── 📁listar cidades.php 
│        ├── index.php
│        └── 📁listar dispositivos.php 
│             ├── index.php
│             └── arquivos_backup.conf             
├──📁 assets/ # Arquivos estáticos (CSS e JS)
│   📁 css/
│   └── style.css          
│   📁 java/
│   ├── buscar_dados.js
│   ├── buscar_arquivo.js        
│   ├── adicionar_dispositivo.js    
│   ├── analise_backup.js 
│   ├── _app.js          
│   └── backup_now.js
├──📁 pages/# Páginas HTML do frontend
│   ├── buscar_dados.html
│   ├── buscar_arquivo.html       
│   ├── adicionar_ip.html 
│   ├── analise_backup.html
│   └── backup_now.html
├──📁 scripts/  # Scripts Python usados por trás do portal   
│   ├── dicionario.py   ---> script que descobre login, tipo de conexão, porta, hostname, vendor,  modelo, serial number
│   └── backup_cron.py  ---> script de backup que roda no cron, faz e gera os arquivos de backup .conf (FOrtinet cisco, mikroti, Alcatel, Datacom, Huawei, Aruba)
                             analise_backup.py # Runs via cron; analyzes backup files from each device, updating anallise_backup.json every time it runs. Its function:
                             Compares the backup files (chronological order), forming groups whose backup files have remained the same. Records this period in the JSON file. Keeps only the newest .conf file in this group. Deletes the other files that were the same.                                   Records lines removed and added in relation to the previous group's backup file.
├──📁 bianca
│   ├── dicionario_(client name).json
│   └── analisa_backup.json
└──📁 
│   ├── logs_adicionar_dispositivo.txt
│   ├── logs_dicionario.txt
│   ├── logs_timeout.txt
│   └── logs_analise_backup.txt

