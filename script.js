/* ===== DATA: [icon, title EN, title FIL, desc EN, desc FIL] ===== */
const ROLES = [
 ['server','Install & Maintain Operating Systems','Mag-install at Mag-maintain ng OS','Sets up Windows and Linux systems, applies updates and patches, and keeps them stable.','Nagse-set up ng Windows at Linux, naglalagay ng updates at patches, at nagpapanatiling matatag ang system.'],
 ['users','Manage User Accounts & Permissions','Pamahalaan ang Accounts at Permissions','Creates accounts, assigns groups and controls who can access files and services.','Gumagawa ng accounts, nagtatalaga ng groups, at kumokontrol kung sino ang may access sa files at services.'],
 ['chart','Monitor System Performance','Subaybayan ang Performance','Watches CPU, memory, disk and network usage to spot problems before users notice.','Binabantayan ang CPU, memory, disk at network para maagapan ang problema bago pa ito mapansin.'],
 ['database','Backup & Recovery','Backup at Recovery','Schedules backups and tests restores so data can come back after a failure.','Nag-iiskedyul ng backups at nagte-test ng restore para maibalik ang data kapag may pagkasira.'],
 ['tools','Troubleshoot Hardware & Software','Ayusin ang Hardware at Software','Finds the root cause of errors, crashes and slowdowns, then fixes them.','Hinahanap ang ugat ng errors, crashes at bagal, saka inaayos ito.'],
 ['shield','Security & Updates','Seguridad at Updates','Configures firewalls, applies security patches and protects systems from threats.','Nagko-configure ng firewall, naglalagay ng security patches, at pinoprotektahan ang system sa banta.']];
const SKILLS = [
 ['network','Networking','Networking','Technical','Teknikal','Understands IP addressing, DNS, DHCP and routing.','Nauunawaan ang IP addressing, DNS, DHCP at routing.'],
 ['server','Operating System Administration','OS Administration','Technical','Teknikal','Manages Linux and Windows servers confidently.','Marunong mamahala ng Linux at Windows servers.'],
 ['code','Scripting & Automation','Scripting at Automation','Technical','Teknikal','Uses Bash or PowerShell to automate repeated tasks.','Gumagamit ng Bash o PowerShell para i-automate ang paulit-ulit na gawain.'],
 ['shield','Security Basics','Batayan ng Seguridad','Technical','Teknikal','Applies least privilege, patching and safe configuration.','Naglalapat ng least privilege, patching at ligtas na configuration.'],
 ['tools','Problem-Solving','Paglutas ng Problema','Professional','Propesyonal','Breaks big problems into small steps and tests each one.','Hinahati ang malaking problema sa maliliit na hakbang at sinusubukan ang bawat isa.'],
 ['message','Communication','Komunikasyon','Professional','Propesyonal','Explains technical issues clearly to non-technical users.','Naipapaliwanag nang malinaw ang teknikal na isyu sa karaniwang user.'],
 ['clock','Time Management','Pamamahala ng Oras','Professional','Propesyonal','Prioritizes urgent incidents and planned maintenance.','Inuuna ang urgent na insidente at planadong maintenance.'],
 ['users','Teamwork','Pagtutulungan','Professional','Propesyonal','Works with developers, managers and support staff.','Katuwang ang developers, managers at support staff.']];
const TOOLS = [
 ['windows','Windows Server','Windows Server','Microsoft server OS for Active Directory, file sharing and enterprise services.','Server OS ng Microsoft para sa Active Directory, file sharing at enterprise services.'],
 ['server','Ubuntu Server','Ubuntu Server','Popular, free Linux server for web, database and cloud workloads.','Sikat at libreng Linux server para sa web, database at cloud.'],
 ['terminal','PowerShell','PowerShell','Command-line shell and scripting language for automating Windows tasks.','Command-line shell at scripting language para i-automate ang gawain sa Windows.'],
 ['key','SSH','SSH','Secure Shell: encrypted remote login to manage servers from anywhere.','Secure Shell: naka-encrypt na remote login para mapamahalaan ang servers kahit saan.'],
 ['layers','VirtualBox','VirtualBox','Runs virtual machines so you can practice safely on one computer.','Nagpapatakbo ng virtual machines para makapag-practice nang ligtas sa isang computer.'],
 ['chart','Nagios / Zabbix','Nagios / Zabbix','Monitoring tools that alert admins when a service or server goes down.','Monitoring tools na nag-aalerto sa admin kapag may service o server na bumagsak.']];

const ICONS = {
 server:'<rect x="4" y="3" width="16" height="7" rx="1"/><rect x="4" y="14" width="16" height="7" rx="1"/><path d="M8 6.5h.01M8 17.5h.01M12 6.5h5M12 17.5h5"/>',
 users:'<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
 chart:'<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-5 5"/><path d="M15 9h4v4"/>',
 database:'<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/>',
 tools:'<path d="m14.7 6.3 3 3M4 20l7.5-7.5M14 4.5a5 5 0 0 0 5.5 6.5L12 18.5 7.5 14l7.5-7.5A5 5 0 0 0 14 4.5Z"/>',
 shield:'<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
 network:'<rect x="9" y="3" width="6" height="5" rx="1"/><rect x="2" y="16" width="6" height="5" rx="1"/><rect x="16" y="16" width="6" height="5" rx="1"/><path d="M12 8v4M5 16v-4h14v4"/>',
 code:'<path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16"/>',
 message:'<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 windows:'<path d="M3 5.5 10.5 4v7H3zM12 3.7 21 2v9h-9zM3 13h7.5v7L3 18.5zM12 13h9v9l-9-1.7z"/>',
 terminal:'<path d="m4 17 6-6-6-6M12 19h8"/>',
 key:'<circle cx="8" cy="15" r="5"/><path d="m11.5 11.5 8-8L22 6l-2 2 2 2-3 3-2-2-2 2"/>',
 layers:'<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/>'
};

/* ===== FILIPINO DICTIONARY (English text is read from the HTML itself) ===== */
const FIL = {nav_home:'Tahanan',nav_roles:'Tungkulin',nav_skills:'Kasanayan',nav_tools:'Kagamitan',nav_term:'Terminal',nav_about:'Tungkol',
 hero_k:'Career Portfolio · Mga Pundasyon',hero_t:'Web-Based na Career Portfolio ng System Administrator',
 hero_p:'Ang System Administrator ang nagpapanatiling maayos ang takbo ng mga computer, server at network para makapagtrabaho ang lahat. Siya ang nag-i-install, nagse-secure, nagmo-monitor at nag-aayos ng mga sistemang inaasahan ng organisasyon araw-araw.',
 cta1:'Tuklasin ang karera',cta2:'Subukan ang terminal',roles_h:'Mga Tungkulin at Responsibilidad',skills_h:'Teknikal at Propesyonal na Kasanayan',
 tools_h:'Mga Kagamitan sa System Administration',term_h:'Subukan ang Linux Command Prompt',
 term_p:'Mag-type ng mga command tulad ng help, ls, whoami, neofetch o top. Pindutin ang ↑ para sa history at Tab para sa autocomplete.',
 about_h:'Tungkol sa Developer',about_prog:'Kurso / Programa: [Ilagay ang kurso mo]',
 about_p1:'Kumusta! Isa akong estudyanteng mahilig gumawa ng website at matuto kung paano gumagana ang mga computer at network sa likod ng screen.',
 about_p2:'Interesado ako sa IT industry dahil umaasa ang bawat organisasyon sa teknolohiya, at gusto kong maging isa sa mga nagpapanatili nitong maaasahan, ligtas at kapaki-pakinabang.',
 foot:'Portfolio ng Karera sa System Administration'};
const TYPED = {en:['Keeping systems alive.','Linux · Windows · Networks','Always learning.'],fil:['Pinapanatiling buhay ang systems.','Linux · Windows · Network','Laging nag-aaral.']};

const $ = s => document.querySelector(s);
let lang = 'en';

/* ===== Cards + translator ===== */
document.querySelectorAll('[data-i18n]').forEach(e => e.dataset.en = e.textContent);
function card(ic, t, d, tag){ return `<article class="card reveal"><div class="ic" aria-hidden="true"><svg viewBox="0 0 24 24">${ICONS[ic]}</svg></div><h3>${t}</h3><p>${d}</p>${tag ? `<small>${tag}</small>` : ''}</article>`; }
function render(){
  const f = lang === 'fil';
  $('#rolesGrid').innerHTML = ROLES.map(r => card(r[0], r[f?2:1], r[f?4:3])).join('');
  $('#skillsGrid').innerHTML = SKILLS.map(s => card(s[0], s[f?2:1], s[f?6:5], s[f?4:3])).join('');
  $('#toolsGrid').innerHTML = TOOLS.map(t => card(t[0], t[f?2:1], t[f?4:3])).join('');
  document.querySelectorAll('[data-i18n]').forEach(e => e.textContent = f ? FIL[e.dataset.i18n] : e.dataset.en);
  document.documentElement.lang = lang;
  observe();
}
$('#lang').onchange = e => { lang = e.target.value; render(); typeIdx = 0; localStorage.setItem('lang', lang); };
const io = new IntersectionObserver(es => es.forEach(x => x.isIntersecting && x.target.classList.add('in')), {threshold:.15});
function observe(){ document.querySelectorAll('.reveal').forEach(e => io.observe(e)); }

/* ===== Nav ===== */
$('#burger').onclick = () => {
  const open = $('#menu').classList.toggle('open');
  $('#burger').setAttribute('aria-expanded', String(open));
};
document.querySelectorAll('#menu a').forEach(a => a.onclick = () => {
  $('#menu').classList.remove('open');
  $('#burger').setAttribute('aria-expanded', 'false');
});
const secs = [...document.querySelectorAll('section')];
addEventListener('scroll', () => {
  const y = scrollY + 120, cur = secs.filter(s => s.offsetTop <= y).pop();
  document.querySelectorAll('#menu a').forEach(a => a.classList.toggle('on', cur && a.hash === '#' + cur.id));
});

/* ===== Typing effect ===== */
let typeIdx = 0, ch = 0, del = false;
(function type(){
  const w = TYPED[lang][typeIdx % 3];
  ch += del ? -1 : 1;
  $('#typed').textContent = w.slice(0, ch);
  let wait = del ? 40 : 90;
  if (!del && ch === w.length){ del = true; wait = 1400; }
  else if (del && ch === 0){ del = false; typeIdx++; wait = 300; }
  setTimeout(type, wait);
})();

/* ===== Linux terminal simulator ===== */
const user = 'ivy', host = 'ubuntu-server';
let cwd = '~', hist = [], hi = 0;
const FS = {'~':['Documents','Downloads','portfolio','notes.txt','backup.sh'],'~/portfolio':['index.html','css','js','images'],'~/Documents':['network-plan.pdf','server-checklist.md']};
const FILES = {'notes.txt':'Check logs daily.\nBackup before updating.\nNever run unknown scripts as root.','backup.sh':'#!/bin/bash\ntar -czf /backup/home-$(date +%F).tar.gz /home/ivy\necho "Backup complete"'};
const up = () => Math.floor((Date.now() - T0) / 60000) + 12;
const T0 = Date.now();
const CMDS = {
 help: () => 'Available commands:\n help  ls  cd  pwd  cat  whoami  hostname  date  uname -a  neofetch\n ip a  ping  df -h  free -m  top  uptime  ps  systemctl status ssh\n sudo apt update  useradd  chmod  echo  history  roles  skills  tools  clear',
 ls: a => (FS[cwd] || []).join('  ') || '',
 pwd: () => cwd === '~' ? '/home/ivy' : '/home/ivy/' + cwd.slice(2),
 cd: a => { const t = !a[0] || a[0] === '~' ? '~' : a[0] === '..' ? '~' : (a[0].startsWith('~') ? a[0] : cwd + '/' + a[0]); if (FS[t]) { cwd = t; ps(); return ''; } return `bash: cd: ${a[0]}: No such file or directory`; },
 cat: a => FILES[a[0]] || `cat: ${a[0] || ''}: No such file or directory`,
 whoami: () => 'ivy', hostname: () => host,
 date: () => new Date().toString(),
 uname: () => 'Linux ubuntu-server 6.8.0-45-generic #45-Ubuntu SMP x86_64 GNU/Linux',
 uptime: () => ` up ${up()} min,  1 user,  load average: 0.12, 0.09, 0.05`,
 neofetch: () => `   .-/+oossssoo+/-.      ${user}@${host}\n :+ssssssssssssssssss+:   ----------------\n-+ssssssssssssssssssyy+-  OS: Ubuntu 24.04 LTS\n:ssssssssssssssssssssyyss: Kernel: 6.8.0-generic\n+sssssssssssssssssyyyyyss+ Uptime: ${up()} mins\n:ssssssssssssssssyyyyyyyss Shell: bash 5.2\n-+ssssssssssssssyyyyyyyy+- CPU: Virtual Core @ 2.4GHz\n  .-/+oossssoo+/-.        Memory: 612MiB / 2048MiB`,
 ip: () => '1: lo: <LOOPBACK,UP> mtu 65536\n    inet 127.0.0.1/8 scope host lo\n2: enp0s3: <BROADCAST,MULTICAST,UP> mtu 1500\n    inet 192.168.1.10/24 brd 192.168.1.255 scope global enp0s3',
 ping: a => { const h = a[0] || 'localhost'; return `PING ${h} (192.168.1.1) 56(84) bytes of data.\n64 bytes from ${h}: icmp_seq=1 ttl=64 time=0.41 ms\n64 bytes from ${h}: icmp_seq=2 ttl=64 time=0.38 ms\n64 bytes from ${h}: icmp_seq=3 ttl=64 time=0.40 ms\n--- ${h} ping statistics ---\n3 packets transmitted, 3 received, 0% packet loss`; },
 df: () => 'Filesystem      Size  Used Avail Use% Mounted on\n/dev/sda1        20G  6.2G   13G  33% /\ntmpfs           1.0G     0  1.0G   0% /dev/shm',
 free: () => '              total   used   free  shared  buff/cache  available\nMem:           2048    612    904       8         532       1340\nSwap:          1024      0   1024',
 top: () => `top - up ${up()} min,  1 user,  load average: 0.12, 0.09, 0.05\nTasks: 98 total,   1 running\n  PID USER   %CPU %MEM COMMAND\n  812 root    1.3  2.1 sshd\n 1024 www     0.7  3.4 nginx\n 1432 mysql   0.5  8.9 mysqld\n 2210 ivy     0.1  0.4 bash`,
 ps: () => '  PID TTY          TIME CMD\n 2210 pts/0    00:00:00 bash\n 2399 pts/0    00:00:00 ps',
 systemctl: a => a[0] === 'status' ? `● ${a[1] || 'ssh'}.service - OpenBSD Secure Shell server\n   Loaded: loaded (/lib/systemd/system/ssh.service; enabled)\n   Active: active (running) since today` : 'Usage: systemctl status <service>',
 sudo: a => a.join(' ') === 'apt update' ? 'Hit:1 http://archive.ubuntu.com/ubuntu noble InRelease\nGet:2 http://security.ubuntu.com noble-security InRelease [126 kB]\nReading package lists... Done\n12 packages can be upgraded.' : 'sudo: command simulated. Try: sudo apt update',
 useradd: a => a[0] ? `User '${a[0]}' created. (simulation)` : 'Usage: useradd <username>',
 chmod: a => a.length > 1 ? `mode of '${a[1]}' changed to ${a[0]}` : 'Usage: chmod 755 file',
 echo: a => a.join(' '),
 history: () => hist.map((h, i) => ` ${i + 1}  ${h}`).join('\n'),
 roles: () => ROLES.map(r => '• ' + r[1]).join('\n'),
 skills: () => SKILLS.map(r => '• ' + r[1] + ' (' + r[3] + ')').join('\n'),
 tools: () => TOOLS.map(r => '• ' + r[1]).join('\n'),
 clear: () => { $('#out').textContent = ''; return null; }
};
function ps(){ $('#ps').textContent = `${user}@${host}:${cwd}$`; }
function print(t){ const o = $('#out'); o.append(t + '\n'); o.scrollTop = o.scrollHeight; }
function run(line){
  print(`${user}@${host}:${cwd}$ ${line}`);
  const [c, ...a] = line.trim().split(/\s+/);
  if (!c) return;
  hist.push(line); hi = hist.length;
  const r = CMDS[c] ? CMDS[c](a) : `${c}: command not found. Type 'help'.`;
  if (r !== null && r !== '') print(r);
}
$('#cmd').addEventListener('keydown', e => {
  const i = e.target;
  if (e.key === 'Enter'){ run(i.value); i.value = ''; }
  else if (e.key === 'ArrowUp'){ e.preventDefault(); if (hi > 0) i.value = hist[--hi]; }
  else if (e.key === 'ArrowDown'){ e.preventDefault(); i.value = hi < hist.length - 1 ? hist[++hi] : (hi = hist.length, ''); }
  else if (e.key === 'Tab'){ e.preventDefault(); const m = Object.keys(CMDS).filter(k => k.startsWith(i.value)); if (m.length === 1) i.value = m[0] + ' '; }
});
$('#term').onclick = () => $('#cmd').focus();
$('#chips').innerHTML = ['help','ls','whoami','neofetch','top','ip a','df -h','roles'].map(c => `<button>${c}</button>`).join('');
$('#chips').onclick = e => e.target.tagName === 'BUTTON' && run(e.target.textContent);
ps(); print('Welcome to Ubuntu 24.04 LTS (simulated). Type "help" to begin.\n');

/* ===== Photo frame tilt ===== */
const tilt = $('#tilt');
tilt.onmousemove = e => { const r = tilt.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; tilt.style.transform = `rotateY(${x * 18}deg) rotateX(${-y * 18}deg)`; };
tilt.onmouseleave = () => tilt.style.transform = '';

/* ===== Ambient fireflies and subtle cursor sparkles ===== */
const canvas = $('#fairy'), context = canvas.getContext('2d');
let canvasWidth, canvasHeight;
const fireflies = [];
const sparkles = [];
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
function resizeCanvas(){
  canvasWidth = canvas.width = innerWidth;
  canvasHeight = canvas.height = innerHeight;
}
resizeCanvas();
addEventListener('resize', resizeCanvas);
for (let i = 0; i < 32; i++) {
  fireflies.push({
    x: Math.random() * innerWidth,
    y: Math.random() * innerHeight,
    radius: Math.random() * 2 + 1,
    drift: Math.random() * 6
  });
}
if (!reducedMotion) {
  addEventListener('pointermove', e => {
    for (let i = 0; i < 2; i++) {
      sparkles.push({
        x: e.clientX,
        y: e.clientY,
        vx: (Math.random() - .5) * 2,
        vy: Math.random() * 1.5,
        life: 1
      });
    }
  });
  (function animateAmbientEffects(){
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    fireflies.forEach(f => {
      f.y -= .18;
      f.x += Math.sin(f.drift += .018) * .28;
      if (f.y < -8) { f.y = canvasHeight + 8; f.x = Math.random() * canvasWidth; }
      const glow = context.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.radius * 5);
      glow.addColorStop(0, 'rgba(255, 225, 139, .5)');
      glow.addColorStop(1, 'rgba(255, 220, 120, 0)');
      context.fillStyle = glow;
      context.beginPath();
      context.arc(f.x, f.y, f.radius * 5, 0, Math.PI * 2);
      context.fill();
    });
    for (let i = sparkles.length - 1; i >= 0; i--) {
      const sparkle = sparkles[i];
      sparkle.life -= .025;
      if (sparkle.life <= 0) { sparkles.splice(i, 1); continue; }
      sparkle.x += sparkle.vx;
      sparkle.y += sparkle.vy;
      context.fillStyle = `rgba(177, 113, 54, ${sparkle.life})`;
      context.font = `${8 + sparkle.life * 8}px serif`;
      context.fillText('✦', sparkle.x, sparkle.y);
    }
    requestAnimationFrame(animateAmbientEffects);
  })();
}

lang = localStorage.getItem('lang') || 'en'; $('#lang').value = lang; render();
