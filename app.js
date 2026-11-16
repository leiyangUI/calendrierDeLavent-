const DEMO_DAY = 5;
const timezone = 'Europe/Paris';

// Le prototype ne contient volontairement que les cinq surprises déjà ouvertes en mode démo.
const surprises = {
  1: { title: 'Le premier flocon', format: 'Petite histoire', body: 'Le premier jour de décembre, un flocon tout léger s’est posé sur le rebord de la fenêtre. Il brillait comme une minuscule étoile. Prends une grande respiration et imagine le vœu que tu aimerais lui confier.' },
  2: { title: 'Un merci qui réchauffe', format: 'Défi du jour', body: 'Aujourd’hui, choisis quelqu’un qui t’a aidé ou fait sourire. Dis-lui merci en lui racontant exactement ce que tu as aimé. Les petits mots gentils sont de vrais cadeaux.' },
  3: { title: 'La chasse aux étoiles', format: 'Mini-activité', body: 'Trouve trois choses autour de toi qui brillent ou qui ont une jolie couleur. Dessine-les, ou raconte à quelqu’un pourquoi tu les as choisies.' },
  4: { title: 'La chanson des lutins', format: 'Jeu', body: 'Invente une petite chanson de Noël avec les mots chaussette, étoile et chocolat. Tu peux la chanter tout doucement ou la faire écouter à quelqu’un.' },
  5: { title: 'Le chocolat chaud des fêtes', format: 'Recette', body: 'Pour deux tasses : fais chauffer 40 cl de lait sans le faire bouillir. Hors du feu, ajoute 80 g de chocolat cassé en morceaux et fouette jusqu’à ce qu’il soit bien fondu. Demande l’aide d’un adulte pour les étapes près du feu.' }
};

const $ = (selector) => document.querySelector(selector);
const homeView = $('#home-view');
const gridView = $('#grid-view');
const dayView = $('#day-view');
const drawer = $('#day-drawer');
const backdrop = $('#drawer-backdrop');
let selectedDay = DEMO_DAY;
let homeDay = DEMO_DAY;
let toastTimer;
let ignoreDrawerHandleClickUntil = 0;
const readDays = new Set(JSON.parse(localStorage.getItem('calendrier-jours-lus') || '[]'));

function parisDate() {
  return new Intl.DateTimeFormat('en-CA', { timeZone: timezone, year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
}

function canOpen(day) {
  return Number.isInteger(day) && day >= 1 && day <= DEMO_DAY && Boolean(surprises[day]);
}

function dateLabel(day) {
  return new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', timeZone: timezone }).format(new Date(`2026-12-${String(day).padStart(2, '0')}T12:00:00+01:00`));
}

function renderGrid(target) {
  target.replaceChildren();
  for (let day = 1; day <= 24; day += 1) {
    const available = canOpen(day);
    const isToday = day === DEMO_DAY;
    const tile = document.createElement('button');
    tile.className = `day-tile ${isToday ? 'today' : available ? 'open' : 'locked'}`;
    tile.type = 'button';
    tile.disabled = !available;
    tile.setAttribute('aria-label', isToday ? `Jour ${day}, aujourd’hui` : available ? `Jour ${day}, passé et ${readDays.has(day) ? 'lu' : 'consultable'}` : `Jour ${day}, verrouillé, bientôt disponible`);
    const icon = isToday ? '✦' : available
      ? `<span class="status-icon"><img src="lock-open-green.svg" alt="">${readDays.has(day) ? '<span class="read-indicator">✓</span>' : ''}</span>`
      : '<span class="status-icon"><img src="lock-closed-red.svg" alt=""></span>';
    tile.innerHTML = `<span class="tile-number">${day}</span><span class="tile-icon" aria-hidden="true">${icon}</span>`;
    if (available) tile.addEventListener('click', () => openDay(day, target === $('#full-grid')));
    target.append(tile);
  }
}

function updateHomeCard(day) {
  homeDay = day;
  const surprise = surprises[day];
  const isToday = day === DEMO_DAY;
  $('#home-day-label').innerHTML = `<span></span>${isToday ? 'AUJOURD’HUI' : `JOUR ${day}`} · ${dateLabel(day).toUpperCase()}`;
  $('#home-day-title').textContent = isToday ? 'Ton cadeau du jour t’attend !' : surprise.title;
  $('#home-day-summary').textContent = isToday
    ? 'Une petite pause pour sourire, rêver ou faire quelque chose de chouette.'
    : `${surprise.format} · ${surprise.body.slice(0, 105)}${surprise.body.length > 105 ? '…' : ''}`;
}

function showView(name) {
  homeView.classList.toggle('hidden', name !== 'home');
  gridView.classList.toggle('hidden', name !== 'grid');
  dayView.classList.toggle('hidden', name !== 'day');
  document.querySelectorAll('.tab-link').forEach((button) => {
    const active = button.dataset.view === name || (button.dataset.view === 'grid' && name === 'day');
    button.classList.toggle('active', active);
    if (active) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openDay(day, useDrawer = false) {
  if (!canOpen(day)) return;
  selectedDay = day;
  if (useDrawer) {
    setDrawerExpanded(false);
    $('#drawer-date').textContent = `JOUR ${day} · ${dateLabel(day)}`;
    $('#drawer-title').textContent = surprises[day].title;
    $('#drawer-body').textContent = surprises[day].body;
    drawer.classList.remove('hidden');
    backdrop.classList.remove('hidden');
    $('#close-drawer').focus();
    return;
  }
  const surprise = surprises[day];
  const shareHash = `#jour-${day}`;
  if (location.hash !== shareHash) history.replaceState(null, '', `${location.pathname}${location.search}${shareHash}`);
  readDays.add(day);
  localStorage.setItem('calendrier-jours-lus', JSON.stringify([...readDays]));
  $('#day-content').innerHTML = `<span class="detail-day-number">${day}</span><p class="format-label">${surprise.format} · ${dateLabel(day)}</p><h1>${surprise.title}</h1><div class="body-copy"><p>${surprise.body}</p></div><span class="read-mark"><span aria-hidden="true">✓</span> Surprise découverte</span>`;
  $('#day-count').textContent = `${day} / 24`;
  $('#previous-day').disabled = day <= 1;
  $('#next-day').disabled = day >= DEMO_DAY;
  renderGrid($('#home-grid'));
  renderGrid($('#full-grid'));
  showView('day');
}

function closeDrawer() {
  setDrawerExpanded(false);
  drawer.classList.add('hidden');
  backdrop.classList.add('hidden');
}

function setDrawerExpanded(expanded) {
  drawer.classList.toggle('expanded', expanded);
  const handle = $('#drawer-handle');
  handle.setAttribute('aria-expanded', String(expanded));
  handle.setAttribute('aria-label', expanded ? 'Réduire le tiroir' : 'Développer le tiroir');
}

function notify(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}

function moveToDay(day, onOpen) {
  if (day < 1) {
    notify('Tu es déjà au premier jour.');
    return;
  }
  if (day > 24) {
    notify('Tu es déjà au dernier jour.');
    return;
  }
  if (!canOpen(day)) {
    notify(`Le jour ${day} est encore verrouillé.`);
    return;
  }
  onOpen(day);
}

function changeHomeDay(delta) {
  moveToDay(homeDay + delta, updateHomeCard);
}

function changeSelectedDay(delta, inDrawer = false) {
  moveToDay(selectedDay + delta, (day) => openDay(day, inDrawer));
}

function bindTouchGestures(element, handlers) {
  let start = null;
  element.addEventListener('touchstart', (event) => {
    if (event.touches.length !== 1) {
      start = null;
      return;
    }
    start = { x: event.touches[0].clientX, y: event.touches[0].clientY };
  }, { passive: true });
  element.addEventListener('touchend', (event) => {
    if (!start || event.changedTouches.length !== 1) return;
    const dx = event.changedTouches[0].clientX - start.x;
    const dy = event.changedTouches[0].clientY - start.y;
    start = null;
    const horizontal = Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.25;
    const vertical = Math.abs(dy) > 45 && Math.abs(dy) > Math.abs(dx) * 1.25;
    if (horizontal) {
      event.preventDefault();
      (dx < 0 ? handlers.left : handlers.right)?.();
    } else if (vertical) {
      (dy < 0 ? handlers.up : handlers.down)?.();
    }
  }, { passive: false });
  element.addEventListener('touchcancel', () => { start = null; }, { passive: true });
}

document.querySelectorAll('[data-view]').forEach((button) => button.addEventListener('click', () => {
  closeDrawer();
  const view = button.dataset.view;
  if (view === 'home') updateHomeCard(DEMO_DAY);
  showView(view);
}));
$('#open-today').addEventListener('click', () => openDay(homeDay));
$('#close-drawer').addEventListener('click', closeDrawer);
backdrop.addEventListener('click', closeDrawer);
$('#drawer-handle').addEventListener('click', () => {
  if (Date.now() < ignoreDrawerHandleClickUntil) return;
  setDrawerExpanded(!drawer.classList.contains('expanded'));
});
$('#drawer-full').addEventListener('click', () => { closeDrawer(); openDay(selectedDay); });
$('#drawer-prev').addEventListener('click', () => changeSelectedDay(-1, true));
$('#drawer-next').addEventListener('click', () => changeSelectedDay(1, true));
$('#previous-day').addEventListener('click', () => changeSelectedDay(-1));
$('#next-day').addEventListener('click', () => changeSelectedDay(1));
$('#share-button').addEventListener('click', async () => {
  const shareUrl = `${location.origin}${location.pathname}#jour-${selectedDay}`;
  try {
    if (navigator.share) await navigator.share({ title: surprises[selectedDay].title, url: shareUrl });
    else if (navigator.clipboard) { await navigator.clipboard.writeText(shareUrl); notify('Le lien de cette surprise est copié !'); }
    else notify(shareUrl);
  } catch (error) {
    if (error.name !== 'AbortError') notify('Le partage n’a pas pu être ouvert.');
  }
});

function openHashDay() {
  const match = location.hash.match(/^#jour-(\d+)$/);
  if (match) {
    const day = Number(match[1]);
    if (canOpen(day)) openDay(day);
    else {
      showView('home');
      notify(`Le jour ${day} est encore verrouillé.`);
    }
  } else {
    updateHomeCard(DEMO_DAY);
    showView('home');
  }
}

renderGrid($('#home-grid'));
renderGrid($('#full-grid'));
bindTouchGestures($('#today-card'), { left: () => changeHomeDay(1), right: () => changeHomeDay(-1) });
bindTouchGestures($('#day-content'), { left: () => changeSelectedDay(1), right: () => changeSelectedDay(-1) });
bindTouchGestures(drawer, { left: () => changeSelectedDay(1, true), right: () => changeSelectedDay(-1, true) });
bindTouchGestures($('#drawer-handle'), {
  up: () => {
    ignoreDrawerHandleClickUntil = Date.now() + 450;
    setDrawerExpanded(true);
  },
  down: () => {
    ignoreDrawerHandleClickUntil = Date.now() + 450;
    if (drawer.classList.contains('expanded')) setDrawerExpanded(false);
    else closeDrawer();
  }
});
updateHomeCard(DEMO_DAY);
// La date de Paris est calculée pour aligner le prototype sur le fuseau choisi.
document.body.dataset.timezoneDate = parisDate();
openHashDay();
window.addEventListener('hashchange', openHashDay);
