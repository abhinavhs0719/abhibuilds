/* ============================================================
   ABHIBUILDS — UNIFIED JAVASCRIPT
   Nav + Mission + Build Log + Content Hub + Scroll Reveal
   ============================================================ */

/* ─────────────────────────────────────────────
   SOCIAL URL PLACEHOLDERS — Paste your links here
   ───────────────────────────────────────────── */
const SOCIAL_URLS = {
  linkedin:   '#',   // e.g. 'https://linkedin.com/in/abhibuilds'
  github:     '#',   // e.g. 'https://github.com/abhibuilds'
  youtube:    '#',   // e.g. 'https://youtube.com/@abhibuilds'
};

// Apply social URLs to all relevant elements
document.addEventListener('DOMContentLoaded', () => {
  const linkedInEls = ['heroLinkedIn', 'contactLinkedIn', 'footerLinkedIn', 'footerLinkedIn2'];
  const gitHubEls   = ['heroGitHub', 'contactGitHub', 'footerGitHub', 'footerGitHub2'];
  const youTubeEls  = ['heroYouTube', 'contactYouTube', 'footerYouTube', 'footerYouTube2'];
  const project1Els = { live: 'project1Live', github: 'project1GitHub' };
  const project2Els = { live: 'project2Live', github: 'project2GitHub' };

  linkedInEls.forEach(id => { const el = document.getElementById(id); if (el && SOCIAL_URLS.linkedin !== '#') el.href = SOCIAL_URLS.linkedin; });
  gitHubEls.forEach(id   => { const el = document.getElementById(id); if (el && SOCIAL_URLS.github   !== '#') el.href = SOCIAL_URLS.github; });
  youTubeEls.forEach(id  => { const el = document.getElementById(id); if (el && SOCIAL_URLS.youtube  !== '#') el.href = SOCIAL_URLS.youtube; });

  // Project links
  if (SOCIAL_URLS.github !== '#') {
    const p1g = document.getElementById(project1Els.github);
    const p2g = document.getElementById(project2Els.github);
    if (p1g) p1g.href = SOCIAL_URLS.github;
    if (p2g) p2g.href = SOCIAL_URLS.github;
  }
});

/* ─────────────────────────────────────────────
   NAVIGATION
   ───────────────────────────────────────────── */
(function initNav() {
  const nav = document.getElementById('mainNav');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (!nav || !hamburger || !mobileMenu) return;

  // Scroll behavior
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
})();

/* ─────────────────────────────────────────────
   ACTIVE NAV LINK ON SCROLL
   ───────────────────────────────────────────── */
(function initActiveNav() {
  const sections = ['home', 'about', 'mission', 'buildlog', 'projects', 'stack', 'content', 'contact'];
  const navLinks = document.querySelectorAll('.nav-link');

  function setActiveLink() {
    let current = '';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) current = id;
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (current && href === '#' + current) link.classList.add('active');
      if (!current && href === '#') link.classList.add('active');
    });
  }

  window.addEventListener('scroll', setActiveLink, { passive: true });
  setActiveLink();
})();

/* ─────────────────────────────────────────────
   UTILITY: HTML Escape
   ───────────────────────────────────────────── */
function escHtml(str) {
  if (!str) return '';
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

/* ─────────────────────────────────────────────
   MISSION DATA (inline fallback)
   ───────────────────────────────────────────── */
const MISSION_DATA = {
  cards: [
    {
      type: "Current Focus",
      title: "Web Development",
      body: "Learning frontend and backend fundamentals while building real projects from scratch.",
      featured: true
    },
    {
      type: "Current Learning",
      title: "Node.js & Backend Development",
      body: "Understanding servers, APIs, routing, middleware, databases, and how modern web applications work."
    },
    {
      type: "Current Project",
      title: "abhibuilds.com",
      body: "Building my personal website publicly while documenting every lesson, challenge, and improvement."
    },
    {
      type: "Content Engine",
      title: "YouTube + LinkedIn",
      body: "Sharing tutorials, lessons, mistakes, and progress to build accountability and communication skills."
    },
    {
      type: "Long-Term Goal",
      title: "Developer + Builder",
      body: "Become someone who can build products, automate workflows, communicate ideas, and solve real problems."
    }
  ]
};

/* ─────────────────────────────────────────────
   BUILD LOG DATA (inline fallback)
   ───────────────────────────────────────────── */
const BUILDLOG_DATA = {
  entries: [
    {
      date: "Jun 2026",
      title: "Built and launched abhibuilds.com",
      description: "Designed and coded my first personal portfolio website from scratch while learning web development publicly.",
      category: "Milestone",
      link: null
    },
    {
      date: "Jun 2026",
      title: "Published Intermediate HTML tutorial",
      description: "Created and uploaded a YouTube tutorial covering nested lists, attributes, anchor tags, image tags, and HTML boilerplate.",
      category: "Content",
      link: null
    },
    {
      date: "Jun 2026",
      title: "Reached 1,800+ impressions on LinkedIn",
      description: "My HTML learning post became my highest-performing LinkedIn post and validated the build-in-public approach.",
      category: "Content",
      link: null
    },
    {
      date: "Jun 2026",
      title: "Published HTML Basics Explained Simply",
      description: "Uploaded a beginner-friendly HTML tutorial on YouTube as part of my public learning journey.",
      category: "Content",
      link: null
    },
    {
      date: "Jun 2026",
      title: "Published first web development video",
      description: "Shared my first YouTube video documenting 30 days of learning web development.",
      category: "Milestone",
      link: null
    },
    {
      date: "Jun 2026",
      title: "Started building in public",
      description: "Committed to documenting projects, lessons, mistakes, and progress through LinkedIn and YouTube.",
      category: "Milestone",
      link: null
    }
  ]
};

/* ─────────────────────────────────────────────
   RENDER: Mission Cards
   ───────────────────────────────────────────── */
function renderMissionCards(data) {
  const grid = document.getElementById('missionGrid');
  if (!grid) return;

  const cards = data.cards || [];

  if (cards.length === 0) {
    grid.innerHTML = '<div class="buildlog-empty">No mission cards yet.</div>';
    return;
  }

  grid.innerHTML = cards.map(card => `
    <div class="mission-card${card.featured ? ' mission-card--featured' : ''}">
      <div class="mission-card-type">
        <span class="mission-card-type-dot"></span>
        ${escHtml(card.type)}
      </div>
      <h3 class="mission-card-title">${escHtml(card.title)}</h3>
      <p class="mission-card-body">${escHtml(card.body)}</p>
    </div>
  `).join('');

  // Stagger reveal
  grid.querySelectorAll('.mission-card').forEach((card, i) => {
    card.classList.add('reveal-up');
    card.style.transitionDelay = `${i * 0.08}s`;
  });

  // Re-initialize scroll reveal for new elements
  setTimeout(initScrollReveal, 100);
}

/* ─────────────────────────────────────────────
   RENDER: Build Log
   ───────────────────────────────────────────── */
function renderBuildLog(data, filterCategory) {
  const timeline = document.getElementById('buildlogTimeline');
  if (!timeline) return;

  const entries = data.entries || [];

  if (entries.length === 0) {
    timeline.innerHTML = '<div class="buildlog-empty">No entries yet. Check back soon.</div>';
    return;
  }

  timeline.innerHTML = entries.map(entry => {
    const hidden = filterCategory !== 'all' && entry.category !== filterCategory;
    return `
      <div class="log-entry log-entry--${escHtml(entry.category)}${hidden ? ' is-hidden' : ''}" data-category="${escHtml(entry.category)}">
        <div class="log-entry-meta">
          <span class="log-date">${escHtml(entry.date)}</span>
          <span class="log-category log-category--${escHtml(entry.category)}">${escHtml(entry.category)}</span>
        </div>
        <h3 class="log-title">${escHtml(entry.title)}</h3>
        <p class="log-desc">${escHtml(entry.description)}</p>
        ${entry.link ? `
          <a href="${escHtml(entry.link)}" class="log-link" target="_blank" rel="noopener">
            View it
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
            </svg>
          </a>
        ` : ''}
      </div>
    `;
  }).join('');
}

/* ─────────────────────────────────────────────
   BUILD LOG: Category Filters
   ───────────────────────────────────────────── */
function initBuildLogFilters() {
  const filters = document.getElementById('buildlogFilters');
  if (!filters) return;

  filters.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    filters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('filter-btn--active'));
    btn.classList.add('filter-btn--active');

    const category = btn.dataset.category;

   const entries = document.querySelectorAll('.log-entry');

let visibleCount = 0;

entries.forEach(entry => {
  if (category === 'all' || entry.dataset.category === category) {
    entry.classList.remove('is-hidden');
    visibleCount++;
  } else {
    entry.classList.add('is-hidden');
  }
});

let emptyState = document.querySelector('.buildlog-empty-state');

if (emptyState) emptyState.remove();

if (visibleCount === 0) {
  const timeline = document.getElementById('buildlogTimeline');

  let message = `
    <h3>Updates Coming Soon</h3>
    <p>New entries will appear here shortly.</p>
  `;

  if (category === 'Learning') {
    message = `
      <h3>Learning Logs Coming Soon</h3>
      <p>Currently learning Node.js, Express.js, backend development, and deeper JavaScript concepts.</p>
    `;
  }

  if (category === 'Building') {
    message = `
      <h3>Building Updates Coming Soon</h3>
      <p>Active projects are being documented and will be added here soon.</p>
    `;
  }

  timeline.insertAdjacentHTML(
    'beforeend',
    `<div class="buildlog-empty-state">${message}</div>`
  );
}
  });
}

/* ─────────────────────────────────────────────
   CONTENT HUB: YouTube Data (REAL content)
   ───────────────────────────────────────────── */
const YT_DATA = [
  {
    id: "yt-001",
    title: "30 Days Into Learning Web Development",
    description: "Sharing what I learned in my first 30 days of learning web development — the wins, the struggles, and what I'd do differently.",
    thumbnail: "image/thumbnail2.png",
    url: "https://youtu.be/kswfWJxz89w?si=FElBAv4TfBiIzNk3",
    published: "Jun 2026",
    tags: ["Web Dev", "Journey"]
  },

  {
    id: "yt-002",
    title: "HTML Basics Explained Simply for Beginners",
    description: "A beginner-friendly breakdown of HTML fundamentals — tags, elements, attributes, and how to structure your first webpage.",
    thumbnail: "image/HTML FOR BEGINNERS.png",
    url: "https://youtu.be/R3_kBOSMTMU?si=4ZFfzgCq27e7Fbof",
    published: "Jun 2026",
    tags: ["HTML", "Tutorial"]
  },

  {
    id: "yt-003",
    title: "Learn Intermediate HTML by Building Projects",
    description: "Level up your HTML with nested lists, attributes, anchor tags, image tags, and the HTML boilerplate — all by building real projects.",
    thumbnail: "image/Vid 3 thumbnail.png",
    url: "https://youtu.be/Y75WJ9pgg74?si=2kcoych00Umq2FwV",
    published: "Jun 2026",
    tags: ["HTML", "Projects"]
  }
];

/* ─────────────────────────────────────────────
   CONTENT HUB: LinkedIn Data (REAL topics)
   ───────────────────────────────────────────── */
const LI_DATA = [
  {
    id: "li-001",
    title: "The Moment HTML Finally Made Sense",
    summary: "For weeks, HTML felt like random tags to memorize. Then one simple realization changed how I understood web development completely.",
    url: "https://www.linkedin.com/posts/abhinavhs0719_for-a-while-html-felt-like-a-bunch-of-random-activity-7466492506449268738-9L4e?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGjzL1oBCKL3C7piQmJsZU_1QIPY-ZNRnYs",
    published: "Jun 2026",
    tags: ["HTML", "Learning"]
  },
  {
    id: "li-002",
    title: "AI Didn't Make Learning Easier. It Exposed My Gaps.",
    summary: "I thought AI would speed up my coding journey. Instead, it showed me the difference between getting answers and actually understanding.",
    url: "https://www.linkedin.com/posts/abhinavhs0719_a-strange-thing-happened-when-i-started-using-activity-7472274623053590528-pohc?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGjzL1oBCKL3C7piQmJsZU_1QIPY-ZNRnYs",
    published: "Jun 2026",
    tags: ["AI", "Web Dev"]
  },
  {
    id: "li-003",
    title: "The Beginner Feeling Nobody Talks About",
    summary: "Learning HTML wasn't about building impressive websites. It was about experiencing those small moments when confusion finally turns into clarity.",
    url: "https://www.linkedin.com/posts/abhinavhs0719_when-i-first-started-learning-html-i-thought-activity-7465726554250223617-1SpF?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGjzL1oBCKL3C7piQmJsZU_1QIPY-ZNRnYs",
    published: "Jun 2026",
    tags: ["Build in Public", "Growth"]
  }
];

/* ─────────────────────────────────────────────
   RENDER: YouTube Cards
   ───────────────────────────────────────────── */
function renderYouTube(data) {
  const grid = document.getElementById('youtubeGrid');
  const empty = document.getElementById('yt-empty');
  if (!grid) return;

  if (!data || !data.length) {
    grid.innerHTML = '';
    if (empty) empty.classList.remove('is-hidden');
    return;
  }

  if (empty) empty.classList.add('is-hidden');

  grid.innerHTML = data.map(v => `
    <a href="${escHtml(v.url)}" target="_blank" rel="noopener" class="content-card" data-type="youtube" aria-label="Watch: ${escHtml(v.title)}">
      <div class="content-thumb">
  <img
    src="${v.thumbnail}"
    alt="${escHtml(v.title)}"
    class="content-thumb-image"
  >

  <div class="content-play-btn" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3"/>
    </svg>
  </div>
</div>
      <div class="content-card-body">
        <div class="content-card-meta">
          <span class="content-source content-source--yt">YouTube</span>
          <span class="content-date">${escHtml(v.published)}</span>
        </div>
        <h3 class="content-card-title">${escHtml(v.title)}</h3>
        <p class="content-card-desc">${escHtml(v.description)}</p>
        <span class="content-card-link">
          Watch on YouTube
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
        </span>
      </div>
    </a>
  `).join('');
}

/* ─────────────────────────────────────────────
   RENDER: LinkedIn Cards
   ───────────────────────────────────────────── */
function renderLinkedIn(data) {
  const grid = document.getElementById('linkedinGrid');
  const empty = document.getElementById('li-empty');
  if (!grid) return;

  if (!data || !data.length) {
    grid.innerHTML = '';
    if (empty) empty.classList.remove('is-hidden');
    return;
  }

  if (empty) empty.classList.add('is-hidden');

  grid.innerHTML = data.map(p => `
    <a href="${escHtml(p.url)}" target="_blank" rel="noopener" class="content-card" data-type="linkedin" aria-label="Read: ${escHtml(p.title)}">
      <div class="content-card-body">
        <div class="content-card-meta">
          <span class="content-source content-source--li">LinkedIn</span>
          <span class="content-date">${escHtml(p.published)}</span>
        </div>
        <h3 class="content-card-title">${escHtml(p.title)}</h3>
        <p class="content-card-desc">${escHtml(p.summary)}</p>
        <span class="content-card-link">
          Read on LinkedIn
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
        </span>
      </div>
    </a>
  `).join('');
}

/* ─────────────────────────────────────────────
   CONTENT HUB: Tabs + Search
   ───────────────────────────────────────────── */
function initContentHub() {
  const tabs = document.querySelectorAll('.content-tab');
  const panels = document.querySelectorAll('.content-panel');
  const searchInput = document.getElementById('contentSearch');

  // Tab switching
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      tabs.forEach(t => {
        t.classList.remove('content-tab--active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('content-tab--active');
      tab.setAttribute('aria-selected', 'true');

      panels.forEach(p => {
        if (p.id === 'panel-' + target) {
          p.classList.remove('is-hidden');
        } else {
          p.classList.add('is-hidden');
        }
      });

      // Re-apply search filter on tab switch
      if (searchInput) applyContentSearch(searchInput.value);
    });
  });

  // Search input
  let debounceTimer;
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => applyContentSearch(searchInput.value), 200);
    });
  }
}

function applyContentSearch(query) {
  query = (query || '').toLowerCase().trim();

  const activeTab = document.querySelector('.content-tab--active')?.dataset.tab || 'youtube';

  // Filter YouTube
  if (activeTab === 'all' || activeTab === 'youtube') {
    const filteredYT = YT_DATA.filter(v =>
      !query ||
      v.title.toLowerCase().includes(query) ||
      v.description.toLowerCase().includes(query) ||
      v.tags.some(t => t.toLowerCase().includes(query))
    );
    renderYouTube(filteredYT);
  }

  // Filter LinkedIn
  if (activeTab === 'all' || activeTab === 'linkedin') {
    const filteredLI = LI_DATA.filter(p =>
      !query ||
      p.title.toLowerCase().includes(query) ||
      p.summary.toLowerCase().includes(query) ||
      p.tags.some(t => t.toLowerCase().includes(query))
    );
    renderLinkedIn(filteredLI);
  }
}

/* ─────────────────────────────────────────────
   SCROLL REVEAL (IntersectionObserver)
   ───────────────────────────────────────────── */
function initScrollReveal() {
  const revealTargets = document.querySelectorAll('.reveal-up:not(.is-visible), .reveal-right:not(.is-visible)');

  if (!revealTargets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal-up, .reveal-right'));
        const idx = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = `${idx * 0.07}s`;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealTargets.forEach(el => observer.observe(el));
}

/* ─────────────────────────────────────────────
   DATA LOADING: Try fetch JSON, fall back to inline
   ───────────────────────────────────────────── */
async function loadData() {
  let missionData = MISSION_DATA;
  let buildlogData = BUILDLOG_DATA;

  try {
    const [missionRes, buildlogRes] = await Promise.all([
      fetch('mission.json'),
      fetch('buildlog.json')
    ]);
    if (missionRes.ok) missionData = await missionRes.json();
    if (buildlogRes.ok) buildlogData = await buildlogRes.json();
  } catch (e) {
    // Use inline fallbacks
  }

  renderMissionCards(missionData);
  renderBuildLog(buildlogData, 'all');
  initBuildLogFilters();
  renderYouTube(YT_DATA);
  renderLinkedIn(LI_DATA);
  initContentHub();
  initScrollReveal();
}

/* ─────────────────────────────────────────────
   INITIALIZE
   ───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  loadData();
});
