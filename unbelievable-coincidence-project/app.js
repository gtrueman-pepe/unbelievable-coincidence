const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const state = {
  current: Number(localStorage.getItem('pc:lastChapter') || 1),
  part: 'all',
  mode: 'all',
  query: ''
};

const els = {
  sidebar: $('#sidebar'), chapterList: $('#chapterList'), search: $('#searchInput'), resultCount: $('#resultCount'),
  home: $('#homeView'), chapter: $('#chapterView'), theme: $('#themeBtn'), menu: $('#menuBtn'),
  kicker: $('#chapterKicker'), title: $('#chapterTitle'), setting: $('#chapterSetting'), tags: $('#chapterTags'),
  orientation: $('#orientationText'), narrative: $('#narrativeText'), characters: $('#charactersList'), quoteBox: $('#chapterQuote'), quoteText: $('#quoteText'), quoteAttribution: $('#quoteAttribution'),
  notes: $('#notesField'), save: $('#saveStatus'), bookmark: $('#bookmarkBtn'), prev: $('#prevBtn'), next: $('#nextBtn'),
  toast: $('#toast'), bookmarkCount: $('#bookmarkCount'), continueTitle: $('#continueTitle'), continueSummary: $('#continueSummary')
};

const key = (name, n='') => `pc:${name}${n ? ':'+n : ''}`;
const bookmarks = () => JSON.parse(localStorage.getItem(key('bookmarks')) || '[]');
const recent = () => JSON.parse(localStorage.getItem(key('recent')) || '[]');

function escapeHtml(str='') { return str.replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function highlight(text, q) {
  if (!q) return escapeHtml(text);
  const safe = escapeHtml(text);
  const pattern = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return safe.replace(new RegExp(`(${pattern})`, 'ig'), '<mark>$1</mark>');
}
function searchBlob(c) { return [c.number,c.title,c.partTitle,c.setting,c.summary,c.tags.join(' '),c.orientation,c.narrative,...c.characters.flatMap(x => [x.name,x.profile])].join(' ').toLowerCase(); }

function filteredChapters() {
  let items = window.CHAPTERS;
  if (state.part !== 'all') items = items.filter(c => String(c.part) === state.part);
  if (state.mode === 'bookmarks') { const b = bookmarks(); items = items.filter(c => b.includes(c.number)); }
  if (state.mode === 'recent') { const order = recent(); items = order.map(n => items.find(c => c.number === n)).filter(Boolean); }
  if (state.query.trim()) {
    const terms = state.query.toLowerCase().trim().split(/\s+/);
    items = items.filter(c => terms.every(t => searchBlob(c).includes(t)));
  }
  return items;
}

function renderList() {
  const items = filteredChapters();
  els.resultCount.textContent = `${items.length} chapter${items.length === 1 ? '' : 's'}${state.query ? ' matching “'+state.query+'”' : ''}`;

  const grouped = [1,2,3].map(part => ({
    part,
    title: window.CHAPTERS.find(c => c.part === part)?.partTitle || '',
    chapters: items.filter(c => c.part === part)
  })).filter(group => group.chapters.length);

  els.chapterList.innerHTML = grouped.map(group => {
    const heading = `<div class="part-list-heading"><strong>Part ${group.part} – ${escapeHtml(group.title)}</strong><span>${group.chapters.length} chapter${group.chapters.length === 1 ? '' : 's'}</span></div>`;
    const chapterLinks = group.chapters.map(c => {
      let snippet = c.summary;
      if (state.query) {
        const blobSections = [c.summary,c.orientation,c.narrative,...c.characters.flatMap(x => [x.name,x.profile])];
        snippet = blobSections.find(section => section.toLowerCase().includes(state.query.toLowerCase().split(' ')[0])) || c.summary;
      }
      return `<button class="chapter-link ${state.current===c.number?'active':''}" data-chapter="${c.number}">
        <span class="chapter-number">${String(c.number).padStart(2,'0')}</span>
        <span><strong>${highlight(c.title,state.query)}</strong>${state.query?`<div class="match-snippet">${highlight(snippet.slice(0,140),state.query)}</div>`:''}</span>
      </button>`;
    }).join('');
    return `<section class="part-list-group" aria-label="Part ${group.part}: ${escapeHtml(group.title)}">${heading}${chapterLinks}</section>`;
  }).join('') || '<p class="result-count">No chapters found. Try a broader search.</p>';

  $$('.chapter-link').forEach(b => b.addEventListener('click', () => openChapter(Number(b.dataset.chapter))));
  updateBookmarkCount();
}
function updateRecent(n) {
  const list = recent().filter(x => x !== n);
  list.unshift(n);
  localStorage.setItem(key('recent'), JSON.stringify(list.slice(0,12)));
}

function openChapter(n, push=true) {
  const c = window.CHAPTERS.find(x => x.number === n);
  if (!c) return;
  state.current = n;
  localStorage.setItem(key('lastChapter'), String(n));
  updateRecent(n);
  els.home.classList.add('hidden');
  els.chapter.classList.remove('hidden');
  els.kicker.textContent = `Chapter ${c.number} · Part ${['','I','II','III'][c.part]} — ${c.partTitle}`;
  els.title.textContent = c.title;
  els.setting.textContent = c.setting;
  els.tags.innerHTML = c.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('');
  els.orientation.textContent = c.orientation;
  els.narrative.textContent = c.narrative;
  if (c.characters.length) {
    els.characters.innerHTML = c.characters.map(person => `<article class="character-card"><h3>${escapeHtml(person.name)}</h3><p>${escapeHtml(person.profile)}</p></article>`).join('');
  } else {
    els.characters.innerHTML = '<p class="no-first-appearances">No principal character is introduced for the first time in this chapter.</p>';
  }
  if (c.quote?.text) {
    els.quoteText.textContent = `“${c.quote.text}”`;
    els.quoteAttribution.textContent = c.quote.attribution || '';
    els.quoteBox.classList.remove('hidden');
  } else {
    els.quoteText.textContent = '';
    els.quoteAttribution.textContent = '';
    els.quoteBox.classList.add('hidden');
  }
  els.notes.value = localStorage.getItem(key('notes',n)) || '';
  updateBookmarkButton();
  setNavButton(els.prev, window.CHAPTERS.find(x => x.number === n-1), 'Previous');
  setNavButton(els.next, window.CHAPTERS.find(x => x.number === n+1), 'Next');
  renderList();
  updateHomeContinue();
  if (push) history.pushState({chapter:n},'',`#chapter-${n}`);
  window.scrollTo({top:0,behavior:'instant'});
  if (window.innerWidth <= 700) els.sidebar.classList.remove('open');
}

function setNavButton(el, chapter, label) {
  if (!chapter) { el.hidden = true; return; }
  el.hidden = false;
  el.innerHTML = `<small>${label} · Chapter ${chapter.number}</small><strong>${escapeHtml(chapter.title)}</strong>`;
  el.onclick = () => openChapter(chapter.number);
}

function showHome(push=true) {
  els.chapter.classList.add('hidden');
  els.home.classList.remove('hidden');
  if (push) history.pushState({},'',location.pathname);
  window.scrollTo({top:0,behavior:'instant'});
}

function toggleBookmark() {
  let b = bookmarks();
  b = b.includes(state.current) ? b.filter(n => n !== state.current) : [...b,state.current];
  localStorage.setItem(key('bookmarks'), JSON.stringify(b));
  updateBookmarkButton(); renderList();
  toast(b.includes(state.current) ? 'Chapter bookmarked' : 'Bookmark removed');
}
function updateBookmarkButton() {
  const on = bookmarks().includes(state.current);
  els.bookmark.textContent = on ? '★' : '☆';
  els.bookmark.setAttribute('aria-label', on ? 'Remove bookmark' : 'Bookmark chapter');
}
function updateBookmarkCount() { els.bookmarkCount.textContent = bookmarks().length; }
function updateHomeContinue() {
  const c = window.CHAPTERS.find(x => x.number === state.current) || window.CHAPTERS[0];
  els.continueTitle.textContent = `Chapter ${c.number}`;
  els.continueSummary.textContent = c.title;
}
function toast(msg) {
  els.toast.textContent = msg; els.toast.classList.add('show');
  clearTimeout(window.__toast); window.__toast = setTimeout(() => els.toast.classList.remove('show'),1800);
}

els.search.addEventListener('input', e => { state.query = e.target.value; state.mode='all'; renderList(); });
els.menu.addEventListener('click', () => els.sidebar.classList.toggle('open'));
els.theme.addEventListener('click', () => {
  const dark = document.documentElement.dataset.theme === 'dark';
  document.documentElement.dataset.theme = dark ? '' : 'dark';
  localStorage.setItem(key('theme'), dark ? 'light' : 'dark');
});
els.bookmark.addEventListener('click', toggleBookmark);
els.notes.addEventListener('input', () => {
  localStorage.setItem(key('notes',state.current), els.notes.value);
  els.save.textContent = 'Saved'; clearTimeout(window.__save); window.__save=setTimeout(()=>els.save.textContent='',1000);
});
$('#shareBtn').addEventListener('click', async () => {
  const url = `${location.origin}${location.pathname}#chapter-${state.current}`;
  try { await navigator.clipboard.writeText(url); toast('Chapter link copied'); }
  catch { toast('Copy unavailable in this browser'); }
});
$('#backHome').addEventListener('click', () => showHome());
$('#continueBtn').addEventListener('click', () => openChapter(state.current));
$('#browseBtn').addEventListener('click', () => { if (window.innerWidth <= 700) els.sidebar.classList.add('open'); else els.search.focus(); });
$('#bookmarksBtn').addEventListener('click', () => { state.mode='bookmarks'; state.query=''; els.search.value=''; renderList(); });
$('#recentBtn').addEventListener('click', () => { state.mode='recent'; state.query=''; els.search.value=''; renderList(); });
$$('.filter').forEach(btn => btn.addEventListener('click', () => {
  $$('.filter').forEach(b => b.classList.remove('active')); btn.classList.add('active');
  state.part = btn.dataset.part; state.mode='all'; renderList();
}));
$$('[data-open-part]').forEach(btn => btn.addEventListener('click', () => {
  state.part = btn.dataset.openPart; state.mode='all';
  $$('.filter').forEach(b => b.classList.toggle('active', b.dataset.part===state.part));
  renderList(); if (window.innerWidth <=700) els.sidebar.classList.add('open'); else els.search.focus();
}));
document.addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase()==='k') { e.preventDefault(); els.search.focus(); if (window.innerWidth<=700) els.sidebar.classList.add('open'); }
  if (e.key==='Escape') els.sidebar.classList.remove('open');
});
window.addEventListener('popstate', () => {
  const m = location.hash.match(/chapter-(\d+)/); if (m) openChapter(Number(m[1]),false); else showHome(false);
});

(function init(){
  if (localStorage.getItem(key('theme'))==='dark') document.documentElement.dataset.theme='dark';
  renderList(); updateHomeContinue();
  const m = location.hash.match(/chapter-(\d+)/); if (m) openChapter(Number(m[1]),false);
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(()=>{});
})();
