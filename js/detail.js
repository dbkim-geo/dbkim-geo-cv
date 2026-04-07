// ============================================================
//  DETAIL.JS  — detail.html 렌더링
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const type = params.get('type');
  const id   = params.get('id');

  document.getElementById('nav-logo').textContent =
    SITE_DATA.profile.nameEn || SITE_DATA.profile.name;

  if (!type || !id) { showNotFound(); return; }

  const item = findItem(type, id);
  if (!item) { showNotFound(); return; }

  renderDetail(type, item);
  initNav();
});

// ── 아이템 탐색 ───────────────────────────────────────────────
function findItem(type, id) {
  if (type === 'project') {
    return SITE_DATA.projects.find(p => p.id === id) ?? null;
  }
  const pub = SITE_DATA.publications;
  const keys = ['international_journals','domestic_journals',
                 'international_conferences','domestic_conferences',
                 'patents','software'];
  for (const key of keys) {
    const found = (pub[key] ?? []).find(i => i.id === id);
    if (found) return found;
  }
  return null;
}

// ── 메인 렌더 ─────────────────────────────────────────────────
function renderDetail(type, item) {
  if (type === 'project') { renderProject(item); return; }

  const catMap = {
    international_journals:    { label: '국외 논문 (SCI/SCIE)',  fn: renderJournal },
    domestic_journals:         { label: '국내 논문 (KCI)',        fn: renderJournal },
    international_conferences: { label: '국외 학술대회 발표',     fn: renderConference },
    domestic_conferences:      { label: '국내 학술대회 발표',     fn: renderConference },
    patents:                   { label: '특허',                   fn: renderPatent },
    software:                  { label: '소프트웨어 저작권',      fn: renderSoftware },
  };

  // Find which category this item belongs to
  for (const [key, cfg] of Object.entries(catMap)) {
    const list = SITE_DATA.publications[key] ?? [];
    if (list.find(i => i.id === item.id)) {
      setTitle(cfg.label, item.title);
      cfg.fn(item, cfg.label);
      return;
    }
  }
}

// ── 제목 설정 ─────────────────────────────────────────────────
function setTitle(categoryLabel, itemTitle) {
  document.title = `${itemTitle} — ${SITE_DATA.profile.nameEn || SITE_DATA.profile.name}`;

  document.getElementById('detail-type-badge').textContent = categoryLabel;
  document.getElementById('detail-title').textContent = itemTitle;
}

// ── 유틸 ─────────────────────────────────────────────────────
function esc(s) {
  return String(s ?? '')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function highlightAuthor(authors) {
  const escaped = esc(authors);
  return escaped
    .replace(/김동범/g,    '<strong style="text-decoration:underline;color:var(--txt-1)">김동범</strong>')
    .replace(/Dongbeom Kim/g, '<strong style="text-decoration:underline;color:var(--txt-1)">Dongbeom Kim</strong>');
}

function renderInfoCard(rows) {
  return `<div class="detail-info-card">
    ${rows.filter(r => r.val).map(r => `
      <div class="detail-info-row">
        <span class="detail-info-label">${esc(r.label)}</span>
        <span class="detail-info-val">${r.html ? r.val : esc(r.val)}</span>
      </div>`).join('')}
  </div>`;
}

function renderKeywords(keywords) {
  if (!keywords?.length) return '';
  return `<div class="detail-kw-list">
    ${keywords.map(k => `<span class="detail-kw">${esc(k)}</span>`).join('')}
  </div>`;
}

function renderBadgesMeta(badges) {
  return `<div class="detail-meta-row">${badges.filter(Boolean).join('')}</div>`;
}

function badge(text, cls = '') {
  return `<span class="pub-badge ${cls}">${esc(text)}</span>`;
}

function externalLink(url, label = '원문 보기') {
  if (!url) return '';
  return `<a href="${esc(url)}" target="_blank" rel="noopener" class="btn-primary" style="margin-top:1rem;text-decoration:none;display:inline-flex">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
    ${label}
  </a>`;
}

// ── 논문 (국내/국외 저널) ────────────────────────────────────
function renderJournal(item, catLabel) {
  const badges = [
    item.year ? badge(item.year, 'year') : '',
    item.quartile ? badge(item.quartile, item.quartile.toLowerCase()) : '',
    item.impact_factor ? badge(`IF: ${item.impact_factor}`, 'q2') : '',
    item.status === 'published' ? badge('Published', 'registered') : badge(item.status ?? '', 'applied'),
  ];

  document.getElementById('detail-meta-row').innerHTML = renderBadgesMeta(badges);

  const venue = [item.journal, item.volume, item.number, item.pages].filter(Boolean).join(', ');

  document.getElementById('detail-main').innerHTML = `
    ${item.abstract ? `<div class="detail-section">
      <div class="detail-section-title">초록 (Abstract)</div>
      <p>${esc(item.abstract)}</p>
    </div>` : ''}
    ${item.keywords?.length ? `<div class="detail-section">
      <div class="detail-section-title">키워드</div>
      ${renderKeywords(item.keywords)}
    </div>` : ''}
    ${externalLink(item.url || (item.doi ? `https://doi.org/${item.doi}` : ''), '원문 보기 (DOI)')}
  `;

  document.getElementById('detail-sidebar-content').innerHTML =
    renderInfoCard([
      { label: '저자',       val: highlightAuthor(item.authors), html: true },
      { label: '게재지',     val: item.journal },
      { label: '권호',       val: [item.volume, item.number].filter(Boolean).join(', ') },
      { label: '페이지',     val: item.pages },
      { label: '연도',       val: item.year },
      { label: 'DOI',        val: item.doi ? `<a href="https://doi.org/${item.doi}" target="_blank" style="color:var(--accent)">${esc(item.doi)}</a>` : '', html: true },
      { label: 'Impact Factor', val: item.impact_factor },
    ]);
}

// ── 학술대회 발표 ─────────────────────────────────────────────
function renderConference(item, catLabel) {
  const badges = [
    item.year ? badge(item.year, 'year') : '',
    item.presentation === 'oral' ? badge('Oral Presentation', 'oral') : '',
    item.presentation === 'poster' ? badge('Poster Presentation', 'poster') : '',
  ];

  document.getElementById('detail-meta-row').innerHTML = renderBadgesMeta(badges);

  document.getElementById('detail-main').innerHTML = `
    ${item.abstract ? `<div class="detail-section">
      <div class="detail-section-title">초록 (Abstract)</div>
      <p>${esc(item.abstract)}</p>
    </div>` : ''}
    ${item.keywords?.length ? `<div class="detail-section">
      <div class="detail-section-title">키워드</div>
      ${renderKeywords(item.keywords)}
    </div>` : ''}
    ${externalLink(item.url, '자료 보기')}
  `;

  document.getElementById('detail-sidebar-content').innerHTML =
    renderInfoCard([
      { label: '저자',     val: item.authors },
      { label: '학술대회', val: item.conference },
      { label: '개최지',   val: item.location },
      { label: '연도/월',  val: [item.year, item.month].filter(Boolean).join(' ') },
      { label: '페이지',   val: item.pages },
      { label: '발표형태', val: item.presentation === 'oral' ? '구두 발표 (Oral)' : item.presentation === 'poster' ? '포스터 발표 (Poster)' : item.presentation },
    ]);
}

// ── 특허 ─────────────────────────────────────────────────────
function renderPatent(item, catLabel) {
  const badges = [
    item.status === '등록' ? badge('등록', 'registered') : badge('출원', 'applied'),
    badge(item.country ?? 'KR', 'year'),
    item.filing_date ? badge(item.filing_date.slice(0,4), 'year') : '',
  ];

  document.getElementById('detail-meta-row').innerHTML = renderBadgesMeta(badges);

  document.getElementById('detail-main').innerHTML = `
    ${item.abstract ? `<div class="detail-section">
      <div class="detail-section-title">발명의 요약</div>
      <p>${esc(item.abstract)}</p>
    </div>` : ''}
    ${externalLink(item.url, '특허 검색')}
  `;

  document.getElementById('detail-sidebar-content').innerHTML =
    renderInfoCard([
      { label: '발명자',   val: item.authors ?? item.inventors },
      { label: '출원인',   val: item.assignee },
      { label: '출원번호', val: item.number },
      { label: '출원일',   val: item.filing_date },
      { label: '등록일',   val: item.registration_date },
      { label: '상태',     val: item.status },
      { label: '국가',     val: item.country },
    ]);
}

// ── 소프트웨어 ────────────────────────────────────────────────
function renderSoftware(item, catLabel) {
  const badges = [
    item.registration_date ? badge(item.registration_date.slice(0,4), 'year') : '',
    badge('소프트웨어 저작권', 'registered'),
  ];

  document.getElementById('detail-meta-row').innerHTML = renderBadgesMeta(badges);

  document.getElementById('detail-main').innerHTML = `
    ${item.description ? `<div class="detail-section">
      <div class="detail-section-title">소프트웨어 설명</div>
      <p>${esc(item.description)}</p>
    </div>` : ''}
    ${item.tech_stack?.length ? `<div class="detail-section">
      <div class="detail-section-title">기술 스택</div>
      <div class="detail-kw-list">
        ${item.tech_stack.map(t => `<span class="detail-kw">${esc(t)}</span>`).join('')}
      </div>
    </div>` : ''}
    ${externalLink(item.url, '소프트웨어 보기')}
  `;

  document.getElementById('detail-sidebar-content').innerHTML =
    renderInfoCard([
      { label: '개발자',   val: item.authors },
      { label: '개발 기관', val: item.organization },
      { label: '등록번호', val: item.registration_number },
      { label: '등록일',   val: item.registration_date },
    ]);
}

// ── 프로젝트 ─────────────────────────────────────────────────
function renderProject(item) {
  document.title = `${item.title} — ${SITE_DATA.profile.nameEn || SITE_DATA.profile.name}`;
  document.getElementById('detail-type-badge').textContent = '참여 프로젝트';
  document.getElementById('detail-title').textContent = item.title;

  const badges = [
    badge(item.period, 'year'),
    item.role ? badge(item.role, 'oral') : '',
  ];
  document.getElementById('detail-meta-row').innerHTML = renderBadgesMeta(badges);

  document.getElementById('detail-main').innerHTML = `
    <div class="detail-section">
      <div class="detail-section-title">프로젝트 개요</div>
      <p>${esc(item.description)}</p>
    </div>
    ${item.outcomes?.length ? `<div class="detail-section">
      <div class="detail-section-title">주요 성과</div>
      <ul style="padding-left:1.25rem;color:var(--txt-2);font-size:.95rem;line-height:1.9;list-style:disc">
        ${item.outcomes.map(o => `<li>${esc(o)}</li>`).join('')}
      </ul>
    </div>` : ''}
    ${item.tech_stack?.length ? `<div class="detail-section">
      <div class="detail-section-title">활용 기술</div>
      <div class="detail-kw-list">
        ${item.tech_stack.map(t => `<span class="detail-kw">${esc(t)}</span>`).join('')}
      </div>
    </div>` : ''}
  `;

  document.getElementById('detail-sidebar-content').innerHTML =
    renderInfoCard([
      { label: '주관 기관', val: item.organization },
      { label: '지원 기관', val: item.funding },
      { label: '수행 기간', val: item.period },
      { label: '역할',      val: item.role },
      { label: '예산',      val: item.budget },
    ]);
}

// ── Not Found ─────────────────────────────────────────────────
function showNotFound() {
  document.getElementById('detail-content').innerHTML = `
    <div class="detail-not-found">
      <div style="font-size:3rem">🔍</div>
      <h2>항목을 찾을 수 없습니다</h2>
      <p>요청한 페이지가 존재하지 않거나 데이터가 없습니다.</p>
      <a href="index.html" class="btn-primary" style="margin-top:1rem;text-decoration:none;display:inline-flex">
        홈으로 돌아가기
      </a>
    </div>`;
}

// ── 네비게이션 ───────────────────────────────────────────────
function initNav() {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });

  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.addEventListener('click', e => {
    if (e.target.tagName === 'A') links.classList.remove('open');
  });
}
