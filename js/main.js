// ============================================================
//  MAIN.JS  — index.html 렌더링 & 인터랙션
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  renderProfile();
  renderStats();
  renderEducation();
  renderCareer();
  renderPublications();
  renderProjects();
  renderSkills();
  renderContact();
  initNav();
  initScrollAnimations();
  initSkillBars();
});

// ── 헬퍼 ─────────────────────────────────────────────────────
function esc(str) {
  return String(str ?? '')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// 저자 문자열에서 본인 이름을 bold + underline 처리
function highlightAuthor(authors) {
  const escaped = esc(authors);
  return escaped
    .replace(/김동범/g,    '<strong style="text-decoration:underline;color:var(--txt-1)">김동범</strong>')
    .replace(/Dongbeom Kim/g, '<strong style="text-decoration:underline;color:var(--txt-1)">Dongbeom Kim</strong>');
}

// 연도 내림차순 정렬
function sortByYearDesc(items) {
  return [...items].sort((a, b) => {
    const ya = parseInt(a.year ?? a.filing_date ?? a.registration_date ?? 0);
    const yb = parseInt(b.year ?? b.filing_date ?? b.registration_date ?? 0);
    return yb - ya;
  });
}
function svgArrow() {
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`;
}
function svgChevronRight(size=16) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`;
}
function svgChevronLeft(size=16) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`;
}

// ── 프로필 렌더 ───────────────────────────────────────────────
function renderProfile() {
  const p = SITE_DATA.profile;

  document.title = `${p.name} (${p.nameEn}) — Portfolio`;

  // Logo
  document.getElementById('nav-logo').textContent = p.nameEn || p.name;

  // Hero
  const photoEl = document.getElementById('hero-photo');
  if (p.profileImage) {
    photoEl.innerHTML = `<img src="${esc(p.profileImage)}" alt="${esc(p.name)}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;" onerror="this.parentNode.innerHTML='<span style=\\"font-size:4rem\\">👤</span>'">`;
  } else {
    photoEl.innerHTML = `<span style="font-size:4rem">👤</span>`;
  }

  document.getElementById('hero-name').innerHTML =
    `${esc(p.name)}<span class="en">${esc(p.nameEn)}</span>`;

  document.getElementById('hero-title').textContent =
    [p.title, p.department, p.affiliation].filter(Boolean).join(' · ');

  document.getElementById('hero-bio').textContent = p.bio;

  const tagsEl = document.getElementById('hero-tags');
  tagsEl.innerHTML = p.research_interests
    .map(t => `<span class="hero-tag">${esc(t)}</span>`).join('');

  // Social links
  const socialEl = document.getElementById('hero-social');
  const socials = [
    { key: 'github',        icon: githubIcon(),  label: 'GitHub' },
    { key: 'linkedin',      icon: linkedinIcon(), label: 'LinkedIn' },
    { key: 'googleScholar', icon: scholarIcon(),  label: 'Google Scholar' },
    { key: 'researchGate',  icon: rgIcon(),       label: 'ResearchGate' },
  ];
  socialEl.innerHTML = socials
    .filter(s => p[s.key])
    .map(s => `<a href="${esc(p[s.key])}" target="_blank" rel="noopener" title="${s.label}">${s.icon}</a>`)
    .join('');

  // Contact section
  document.getElementById('contact-email-link').href = `mailto:${esc(p.email)}`;
  document.getElementById('contact-email-link').textContent = p.email;
}

// ── 통계 ─────────────────────────────────────────────────────
function renderStats() {
  const pub = SITE_DATA.publications;
  const stats = [
    { num: pub.international_journals.length, label: '국외 논문' },
    { num: pub.domestic_journals.length,      label: '국내 논문' },
    { num: pub.international_conferences.length + pub.domestic_conferences.length, label: '학술대회 발표' },
    { num: pub.patents.length,   label: '특허' },
    { num: pub.software.length,  label: '소프트웨어' },
    { num: SITE_DATA.projects.length, label: '참여 프로젝트' },
  ];
  document.getElementById('stats-grid').innerHTML = stats
    .map(s => `<div class="stat-item fade-up">
      <span class="stat-num">${s.num}</span>
      <span class="stat-label">${esc(s.label)}</span>
    </div>`).join('');
}

// ── 학력 ─────────────────────────────────────────────────────
function renderEducation() {
  const items = SITE_DATA.education;
  const el = document.getElementById('education-timeline');
  el.innerHTML = items.map(e => `
    <div class="tl-item fade-up">
      <div class="tl-dot"><div class="tl-dot-inner"></div></div>
      <div class="tl-content">
        <div class="tl-period">${esc(e.period)}</div>
        <span class="tl-badge">${esc(e.degree)}</span>
        <div class="tl-main">${esc(e.school)}</div>
        <div class="tl-sub">${esc(e.department)}${e.major ? ' · ' + esc(e.major) : ''}</div>
        ${e.thesis ? `<div class="tl-thesis"><strong>논문:</strong> ${esc(e.thesis)}</div>` : ''}
        ${e.advisor ? `<div class="tl-thesis"><strong>지도교수:</strong> ${esc(e.advisor)}</div>` : ''}
      </div>
    </div>`).join('');
}

// ── 경력 ─────────────────────────────────────────────────────
function renderCareer() {
  const items = SITE_DATA.career;
  const el = document.getElementById('career-timeline');
  el.innerHTML = items.map(c => `
    <div class="tl-item fade-up">
      <div class="tl-dot"><div class="tl-dot-inner"></div></div>
      <div class="tl-content">
        <div class="tl-period">${esc(c.period)}</div>
        <div class="tl-main">${esc(c.position)}</div>
        <div class="tl-sub">${esc(c.organization)}${c.department ? ' · ' + esc(c.department) : ''}</div>
        ${c.description ? `<div class="tl-desc">${esc(c.description)}</div>` : ''}
      </div>
    </div>`).join('');
}

// ── 실적 ─────────────────────────────────────────────────────
const PUB_CATEGORIES = [
  { key: 'international_journals',   label: '국외 논문',     short: 'SCI/SCIE' },
  { key: 'domestic_journals',        label: '국내 논문',     short: 'KCI' },
  { key: 'international_conferences',label: '국외 학술대회', short: 'Conf.' },
  { key: 'domestic_conferences',     label: '국내 학술대회', short: 'Conf.' },
  { key: 'patents',                  label: '특허',          short: '' },
  { key: 'software',                 label: '소프트웨어',    short: '' },
];

function renderPublications() {
  const pub = SITE_DATA.publications;

  // Tabs
  const tabsEl = document.getElementById('pub-tabs');
  tabsEl.innerHTML = PUB_CATEGORIES.map((cat, i) => {
    const count = pub[cat.key]?.length ?? 0;
    return `<button class="pub-tab${i===0?' active':''}" data-cat="${cat.key}">
      ${esc(cat.label)} <span class="count">${count}</span>
    </button>`;
  }).join('');

  // Lists
  const listsEl = document.getElementById('pub-lists');
  listsEl.innerHTML = PUB_CATEGORIES.map((cat, i) => {
    const items = pub[cat.key] ?? [];
    return `<div class="pub-list${i===0?'':' hidden'}" id="pub-list-${cat.key}">
      ${items.length === 0
        ? `<div class="pub-empty">등록된 항목이 없습니다.</div>`
        : sortByYearDesc(items).map((item, idx) => renderPubCard(item, cat.key, idx)).join('')}
    </div>`;
  }).join('');

  // Tab click
  tabsEl.addEventListener('click', e => {
    const btn = e.target.closest('.pub-tab');
    if (!btn) return;
    tabsEl.querySelectorAll('.pub-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    listsEl.querySelectorAll('.pub-list').forEach(l => l.classList.add('hidden'));
    document.getElementById(`pub-list-${btn.dataset.cat}`).classList.remove('hidden');
  });
}

function renderPubCard(item, cat, idx) {
  const type = cat;
  const url = `detail.html?type=${type}&id=${esc(item.id)}`;
  let venue = '', badges = '';

  if (cat === 'international_journals' || cat === 'domestic_journals') {
    venue = [item.journal, item.volume, item.number, item.pages].filter(Boolean).join(', ');
    if (item.quartile) badges += `<span class="pub-badge ${item.quartile.toLowerCase()}">${esc(item.quartile)}</span>`;
  } else if (cat === 'international_conferences' || cat === 'domestic_conferences') {
    venue = [item.conference, item.location, item.month].filter(Boolean).join(' · ');
    if (item.presentation === 'oral') badges += `<span class="pub-badge oral">Oral</span>`;
    if (item.presentation === 'poster') badges += `<span class="pub-badge poster">Poster</span>`;
  } else if (cat === 'patents') {
    venue = [item.assignee, item.number].filter(Boolean).join(' · ');
    if (item.status === '등록') badges += `<span class="pub-badge registered">등록</span>`;
    if (item.status === '출원') badges += `<span class="pub-badge applied">출원</span>`;
  } else if (cat === 'software') {
    venue = [item.organization, item.registration_number].filter(Boolean).join(' · ');
  }

  return `<a class="pub-card fade-up" href="${url}">
    <div class="pub-num">${idx + 1}</div>
    <div class="pub-body">
      <div class="pub-title">${esc(item.title)}</div>
      <div class="pub-authors">${highlightAuthor(item.authors)}</div>
      ${venue ? `<div class="pub-venue">${esc(venue)}</div>` : ''}
      <div class="pub-meta">
        <span class="pub-badge year">${item.year ?? (item.filing_date?.slice(0,4) ?? '') ?? (item.registration_date?.slice(0,4) ?? '')}</span>
        ${badges}
      </div>
    </div>
    <div class="pub-arrow">${svgChevronRight(18)}</div>
  </a>`;
}

// ── 프로젝트 ─────────────────────────────────────────────────
function renderProjects() {
  const el = document.getElementById('projects-grid');
  el.innerHTML = SITE_DATA.projects.map(p => `
    <a class="proj-card fade-up" href="detail.html?type=project&id=${esc(p.id)}">
      <div class="proj-header">
        <div class="proj-icon">📁</div>
        <div style="flex:1;min-width:0">
          <div class="proj-period">${esc(p.period)}</div>
          <span class="proj-role-badge">${esc(p.role)}</span>
        </div>
      </div>
      <div class="proj-title">${esc(p.title)}</div>
      ${p.title_en ? `<div style="font-size:.82rem;color:var(--txt-3)">${esc(p.title_en)}</div>` : ''}
      <div class="proj-org">${esc(p.organization)}${p.funding && p.funding !== p.organization ? ' · ' + esc(p.funding) : ''}</div>
      <div class="proj-desc">${esc(p.description)}</div>
      <div class="proj-tags">
        ${p.tags.map(t => `<span class="proj-tag">${esc(t)}</span>`).join('')}
      </div>
      <div class="proj-footer">
        자세히 보기 ${svgChevronRight(14)}
      </div>
    </a>`).join('');
}

// ── 기술 ─────────────────────────────────────────────────────
function renderSkills() {
  const s = SITE_DATA.skills;
  const el = document.getElementById('skills-layout');

  const renderGroup = (title, icon, items) => {
    if (!items?.length) return '';
    return `<div class="skill-group">
      <div class="skill-group-title">${icon} ${title}</div>
      ${items.map(item => {
        const pct = Math.round((item.level / 5) * 100);
        return `<div class="skill-item">
          <div class="skill-name-row">
            <span class="skill-name">${esc(item.name)}</span>
            <span class="skill-pct">${pct}%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-fill" style="--target:${pct/100}" data-pct="${pct}"></div>
          </div>
        </div>`;
      }).join('')}
    </div>`;
  };

  el.innerHTML = [
    renderGroup('프로그래밍 언어', '💻', s.programming),
    renderGroup('프레임워크 / 라이브러리', '⚙️', s.frameworks),
    renderGroup('도구 / 플랫폼', '🛠', s.tools),
  ].filter(Boolean).join('');

  // Domains
  if (s.domains?.length) {
    el.innerHTML += `<div class="skill-group">
      <div class="skill-group-title">🎯 전문 분야</div>
      <div class="domain-tags">
        ${s.domains.map(d => `<span class="domain-tag">${esc(d)}</span>`).join('')}
      </div>
    </div>`;
  }
}

function initSkillBars() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-fill').forEach(bar => {
          bar.classList.add('animated');
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const skillSection = document.getElementById('skills');
  if (skillSection) observer.observe(skillSection);
}

// ── 연락처 ───────────────────────────────────────────────────
function renderContact() {
  const p = SITE_DATA.profile;
  const emailEl = document.getElementById('contact-email-link');
  if (emailEl) {
    emailEl.href = `mailto:${p.email}`;
    emailEl.textContent = p.email;
  }
  const githubEl = document.getElementById('contact-github-link');
  if (githubEl && p.github) {
    githubEl.href = p.github;
    githubEl.textContent = p.github.replace('https://', '');
  } else if (githubEl) {
    githubEl.closest('.contact-link')?.remove();
  }
  document.getElementById('footer-year').textContent = new Date().getFullYear();
  document.getElementById('footer-name').textContent = `${p.nameEn || p.name}`;
}

// ── 네비게이션 ───────────────────────────────────────────────
function initNav() {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');

  // Scroll shadow
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
    highlightActiveSection();
  }, { passive: true });

  // Mobile toggle
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });
  links.addEventListener('click', e => {
    if (e.target.tagName === 'A') links.classList.remove('open');
  });
}

function highlightActiveSection() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
}

// ── 스크롤 애니메이션 ─────────────────────────────────────────
function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Re-observe dynamically added elements
  const mutObs = new MutationObserver(() => {
    document.querySelectorAll('.fade-up:not(.visible)').forEach(el => observer.observe(el));
  });
  mutObs.observe(document.body, { childList: true, subtree: true });
}

// ── 아이콘 SVG ───────────────────────────────────────────────
function githubIcon() {
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>`;
}
function linkedinIcon() {
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`;
}
function scholarIcon() {
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 100 14 7 7 0 000-14z"/></svg>`;
}
function rgIcon() {
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><text y="18" font-size="14" font-weight="bold" font-family="serif">RG</text></svg>`;
}
