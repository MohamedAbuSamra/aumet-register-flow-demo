/* ── js/templates/signup-templates.js ── */
/** Pixel-perfect HTML — rebuilt screen by screen. */

const iconUser = `<svg class="ca-ico" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" d="M12 12a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4Z"/><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" d="M4.5 20.2a7.5 7.5 0 0 1 15 0"/></svg>`;

const iconLock = `<svg class="ca-ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="5.2" y="10.5" width="13.6" height="10" rx="2.2" fill="none" stroke="currentColor" stroke-width="1.7"/><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" d="M8.2 10.5V7.8a3.8 3.8 0 0 1 7.6 0v2.7"/><circle cx="12" cy="15.4" r="1.15" fill="currentColor"/></svg>`;

const iconEyeOff = `<svg class="ca-ico ca-ico-eye" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" d="M3.5 3.5 20.5 20.5"/><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" d="M10.1 10.2a2.6 2.6 0 0 0 3.7 3.7"/><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" d="M6.7 6.9C4.7 8.2 3.2 10 2.4 12c1.7 4.2 5.4 7 9.6 7 1.7 0 3.3-.4 4.7-1.2"/><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" d="M14.1 5.4A10.4 10.4 0 0 1 12 5.1c-4.2 0-7.9 2.8-9.6 7a11.6 11.6 0 0 0 2.4 3.5"/></svg>`;

const iconGlobe = `<svg class="ca-ico ca-ico-globe" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.2" fill="none" stroke="currentColor" stroke-width="1.6"/><path fill="none" stroke="currentColor" stroke-width="1.6" d="M3.8 12h16.4M12 3.8c2.2 2.4 3.3 5.2 3.3 8.2S14.2 17.8 12 20.2C9.8 17.8 8.7 15 8.7 12S9.8 6.2 12 3.8Z"/></svg>`;

const iconBack = `<svg class="ca-ico ca-ico-back" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M15 5.5 8.5 12 15 18.5"/></svg>`;

const iconChevron = `<svg class="ca-ico ca-ico-chevron" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="m7 10 5 5 5-5"/></svg>`;

const egyptFlag = `<span class="ca-flag" aria-hidden="true"><span class="ca-flag-stripe red"></span><span class="ca-flag-stripe white"><span class="ca-flag-eagle"></span></span><span class="ca-flag-stripe black"></span></span>`;

const jordanFlag = `<span class="ca-flag ca-flag-jordan" aria-hidden="true"><span class="ca-flag-stripe black"></span><span class="ca-flag-stripe white"></span><span class="ca-flag-stripe green"></span><span class="ca-flag-triangle"></span></span>`;

function caHero(backGoto = "", { languageLabel = "العربية", showGlobe = true, languageSide = "right" } = {}) {
  const back = backGoto
    ? `<button type="button" class="ca-back" data-goto="${backGoto}" aria-label="Back">${iconBack}</button>`
    : "";
  const langInner = showGlobe
    ? `<span>${languageLabel}</span>${iconGlobe}`
    : `<span>${languageLabel}</span>`;
  const langClass = [
    "ca-lang",
    showGlobe ? "" : "ca-lang-text",
    languageSide === "left" ? "ca-lang-left" : "",
  ].filter(Boolean).join(" ");
  return `
    <div class="ca-hero">
      <img class="ca-hero-wave" src="scr/new-sign-up/header-wave.png" alt="" />
      <div class="ca-status">
        <span class="ca-time">9:41</span>
        <span class="ca-status-icons" aria-hidden="true">
          <svg viewBox="0 0 18 12"><rect x="0.5" y="7" width="3" height="4.5" rx="0.6" fill="currentColor"/><rect x="5" y="5" width="3" height="6.5" rx="0.6" fill="currentColor"/><rect x="9.5" y="2.5" width="3" height="9" rx="0.6" fill="currentColor"/><rect x="14" y="0.5" width="3" height="11" rx="0.6" fill="currentColor"/></svg>
          <svg viewBox="0 0 16 12"><path fill="currentColor" d="M8 3.2c1.9 0 3.6.7 4.9 1.9l-1.2 1.2A5.3 5.3 0 0 0 8 4.8c-1.4 0-2.7.5-3.7 1.5L3.1 5.1A7.2 7.2 0 0 1 8 3.2Zm0 3.2c1 0 1.9.4 2.6 1l-1.2 1.2A2.2 2.2 0 0 0 8 8c-.6 0-1.1.2-1.5.6L5.3 7.4A3.8 3.8 0 0 1 8 6.4Zm0 3.1a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Z"/></svg>
          <svg viewBox="0 0 25 12"><rect x="0.6" y="1.2" width="19.5" height="9.6" rx="2.2" fill="none" stroke="currentColor" stroke-width="1.3"/><rect x="2.2" y="2.8" width="15" height="6.4" rx="1.2" fill="currentColor"/><path fill="currentColor" d="M21.2 4.1h1.4a1.6 1.6 0 0 1 0 3.8h-1.4V4.1Z"/></svg>
        </span>
      </div>
      ${back}
      <button type="button" class="${langClass}" aria-label="${languageLabel}">
        ${langInner}
      </button>
      <img class="ca-logo" src="scr/new-sign-up/aumet-logo-white.png" alt="aumet" />
    </div>`;
}

const iconTabCheck = `<svg class="cp-tab-check" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="8" fill="currentColor"/><path fill="#fff" d="M6.7 10.6 4.4 8.3l.9-.9 1.4 1.4 3.2-3.2.9.9-4.1 4.1Z"/></svg>`;

const iconMore = `<svg class="cp-ico-more" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="5" r="1.6" fill="currentColor"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/><circle cx="12" cy="19" r="1.6" fill="currentColor"/></svg>`;

const iconClose = `<svg class="cp-ico-close" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M7 7l10 10M17 7 7 17"/></svg>`;

const iconEye = `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" d="M2.5 12s3.5-6.5 9.5-6.5S21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="2.6" fill="none" stroke="currentColor" stroke-width="1.7"/></svg>`;

const iconReplace = `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0 1 12.4-5.7L19 8.5"/><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" d="M19.5 4.5v4h-4"/><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" d="M19.5 12a7.5 7.5 0 0 1-12.4 5.7L5 15.5"/><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5v-4h4"/></svg>`;

const iconTrash = `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" d="M5 7.5h14M9.5 7.5V6a1.5 1.5 0 0 1 1.5-1.5h2A1.5 1.5 0 0 1 14.5 6v1.5M8 7.5l.7 11a1.5 1.5 0 0 0 1.5 1.4h4.6a1.5 1.5 0 0 0 1.5-1.4l.7-11"/></svg>`;

const iconDocMissing = `<svg viewBox="0 0 40 40" aria-hidden="true"><rect x="8" y="6" width="24" height="28" rx="3" fill="#fff7ed" stroke="#fb923c" stroke-width="1.5"/><path fill="#fb923c" d="M14 14h12v2H14zm0 5h12v2H14zm0 5h8v2h-8z"/></svg>`;

const iconAiCheck = `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="currentColor"/><path fill="#fff" d="M10.2 15.4 6.8 12l1.2-1.2 2.2 2.2 5-5 1.2 1.2-6.2 6.2Z"/></svg>`;

const iconAiFail = `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="currentColor"/><path fill="#fff" stroke="#fff" stroke-width="1.6" stroke-linecap="round" d="M8.5 8.5l7 7M15.5 8.5l-7 7"/></svg>`;

const iconSubmittedCheck = `<svg viewBox="0 0 72 72" aria-hidden="true"><circle cx="36" cy="36" r="28" fill="#04bca6"/><path fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M22 37.5 31.5 47 50 26"/></svg>`;

const docUpdateSheet = `
      <div class="cp-sheet" id="doc-update-sheet" hidden>
        <button type="button" class="cp-sheet-backdrop" data-sheet-close aria-label="Dismiss"></button>
        <div class="cp-sheet-panel" role="dialog" aria-modal="true" aria-labelledby="doc-update-title">
          <div class="cp-sheet-handle" aria-hidden="true"></div>
          <div class="cp-sheet-head">
            <button type="button" class="cp-sheet-close" data-sheet-close aria-label="Close">${iconClose}</button>
            <h2 id="doc-update-title">Update Document</h2>
            <span class="cp-sheet-head-spacer"></span>
          </div>
          <div class="cp-sheet-actions">
            <button type="button" class="cp-sheet-action" data-doc-action="view">
              <span class="cp-sheet-action-ico">${iconEye}</span>
              <span>View document</span>
            </button>
            <button type="button" class="cp-sheet-action" data-doc-action="replace">
              <span class="cp-sheet-action-ico">${iconReplace}</span>
              <span>Replace document</span>
            </button>
            <button type="button" class="cp-sheet-action is-danger" data-doc-action="delete">
              <span class="cp-sheet-action-ico">${iconTrash}</span>
              <span>Delete document</span>
            </button>
          </div>
        </div>
      </div>`;

const aiSubmitSheets = `
      <div class="cp-sheet cp-sheet-ai" id="ai-verify-sheet" hidden>
        <button type="button" class="cp-sheet-backdrop" data-ai-close aria-label="Dismiss"></button>
        <div class="cp-sheet-panel" role="dialog" aria-modal="true" aria-labelledby="ai-verify-title">
          <div class="cp-sheet-handle" aria-hidden="true"></div>
          <div class="cp-sheet-head">
            <button type="button" class="cp-sheet-close" data-ai-close aria-label="Close">${iconClose}</button>
            <h2 id="ai-verify-title">AI Verification</h2>
            <span class="cp-sheet-head-spacer"></span>
          </div>
          <p class="cp-ai-sub">Verifying that each document is valid…</p>
          <ul class="cp-ai-list" id="ai-verify-list">
            <li class="cp-ai-row" data-ai-doc="license">
              <span class="cp-ai-name">Pharmacy license</span>
              <span class="cp-ai-status" data-ai-status>Waiting</span>
            </li>
            <li class="cp-ai-row" data-ai-doc="tax">
              <span class="cp-ai-name">Tax Card</span>
              <span class="cp-ai-status" data-ai-status>Waiting</span>
            </li>
            <li class="cp-ai-row" data-ai-doc="trade">
              <span class="cp-ai-name">Trade Registry</span>
              <span class="cp-ai-status" data-ai-status>Waiting</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="cp-sheet cp-sheet-submitted" id="profile-submitted-sheet" hidden>
        <button type="button" class="cp-sheet-backdrop" data-submitted-close aria-label="Dismiss"></button>
        <div class="cp-sheet-panel" role="dialog" aria-modal="true" aria-labelledby="profile-submitted-title">
          <div class="cp-sheet-handle" aria-hidden="true"></div>
          <div class="cp-sheet-head">
            <button type="button" class="cp-sheet-close" data-submitted-close aria-label="Close">${iconClose}</button>
            <h2 id="profile-submitted-title">Profile Submitted</h2>
            <span class="cp-sheet-head-spacer"></span>
          </div>
          <div class="cp-submitted-hero" aria-hidden="true">
            <div class="cp-submitted-mark">${iconSubmittedCheck}</div>
          </div>
          <p class="cp-submitted-copy">Your pharmacy profile has been submitted for verification. We'll notify you once it's reviewed.</p>
          <button type="button" class="ca-cta cp-cta" data-goto="home">Go to Home</button>
        </div>
      </div>

      <div class="cp-sheet cp-sheet-locked" id="account-locked-sheet" hidden>
        <button type="button" class="cp-sheet-backdrop" data-locked-close aria-label="Dismiss"></button>
        <div class="cp-sheet-panel" role="dialog" aria-modal="true" aria-labelledby="account-locked-title">
          <div class="cp-sheet-handle" aria-hidden="true"></div>
          <div class="cp-sheet-head">
            <button type="button" class="cp-sheet-close" data-locked-close aria-label="Close">${iconClose}</button>
            <h2 id="account-locked-title">We'll help you finish</h2>
            <span class="cp-sheet-head-spacer"></span>
          </div>
          <div class="cp-locked-hero" aria-hidden="true">
            <div class="cp-locked-mark">
              <svg viewBox="0 0 72 72" aria-hidden="true"><circle cx="36" cy="36" r="28" fill="#fff7ed"/><path fill="none" stroke="#ea580c" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" d="M28 34v-6a8 8 0 0 1 16 0v6"/><rect x="24" y="34" width="24" height="18" rx="4" fill="#ea580c"/><circle cx="36" cy="43" r="2.4" fill="#fff"/></svg>
            </div>
          </div>
          <p class="cp-submitted-copy">We couldn’t verify your documents after a few tries, so uploads are paused for safety. Our support team will contact you soon to help complete your pharmacy profile.</p>
          <button type="button" class="ca-cta cp-cta" data-locked-close>Got it</button>
        </div>
      </div>`;

const iconLocPin = `<svg class="cp-map-pin" viewBox="0 0 48 64" aria-hidden="true"><path fill="#04bca6" d="M24 0C12.4 0 3 9.4 3 21c0 14.6 17.4 37.2 18.2 38.2a3 3 0 0 0 4.6 0C26.6 58.2 45 35.6 45 21 45 9.4 35.6 0 24 0Z"/><circle cx="24" cy="21" r="11" fill="#fff"/><path fill="#04bca6" d="M18.5 18.5h3.2v-3.2h4.6v3.2H29.5v4.6h-3.2v3.2h-4.6v-3.2h-3.2z"/></svg>`;

const iconLocate = `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" stroke-width="1.8"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M12 3.5v2.2M12 18.3v2.2M3.5 12h2.2M18.3 12h2.2"/></svg>`;

const iconLocMark = `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.5c-3.9 0-7 3.1-7 7 0 5.2 6.2 12.2 6.5 12.5a.7.7 0 0 0 1 0C12.8 21.7 19 14.7 19 9.5c0-3.9-3.1-7-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/></svg>`;

function cpShell({ activeTab, backGoto, scrollClass = "", body, footer, overlay = "" }) {
  return `
    <div class="cp">
      <div class="cp-status">
        <span>9:41</span>
        <span class="home-status-icons" aria-hidden="true">
          <svg viewBox="0 0 18 12"><rect x="0.5" y="7" width="3" height="4.5" rx="0.6" fill="currentColor"/><rect x="5" y="5" width="3" height="6.5" rx="0.6" fill="currentColor"/><rect x="9.5" y="2.5" width="3" height="9" rx="0.6" fill="currentColor"/><rect x="14" y="0.5" width="3" height="11" rx="0.6" fill="currentColor"/></svg>
          <svg viewBox="0 0 16 12"><path fill="currentColor" d="M8 3.2c1.9 0 3.6.7 4.9 1.9l-1.2 1.2A5.3 5.3 0 0 0 8 4.8c-1.4 0-2.7.5-3.7 1.5L3.1 5.1A7.2 7.2 0 0 1 8 3.2Zm0 3.2c1 0 1.9.4 2.6 1l-1.2 1.2A2.2 2.2 0 0 0 8 8c-.6 0-1.1.2-1.5.6L5.3 7.4A3.8 3.8 0 0 1 8 6.4Zm0 3.1a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Z"/></svg>
          <svg viewBox="0 0 25 12"><rect x="0.6" y="1.2" width="19.5" height="9.6" rx="2.2" fill="none" stroke="currentColor" stroke-width="1.3"/><rect x="2.2" y="2.8" width="15" height="6.4" rx="1.2" fill="currentColor"/><path fill="currentColor" d="M21.2 4.1h1.4a1.6 1.6 0 0 1 0 3.8h-1.4V4.1Z"/></svg>
        </span>
      </div>

      <div class="cp-topbar">
        <button type="button" class="cp-back" data-goto="${backGoto}" aria-label="Back">${iconBack}</button>
        <h1>Complete Profile</h1>
        <span class="cp-topbar-spacer"></span>
      </div>

      ${profileTabs(activeTab)}

      <div class="cp-scroll ${scrollClass}">
        ${body}
      </div>

      <div class="cp-footer">
        ${footer}
      </div>

      ${overlay}
    </div>`;
}

function profileTabs(active = 1) {
  const steps = [
    { n: 1, label: "Information", id: "complete-info" },
    { n: 2, label: "Location", id: "complete-location" },
    { n: 3, label: "Documents", id: "complete-documents" },
  ];
  return `<div class="cp-tabs">${steps
    .map((s) => {
      const state = s.n === active ? "is-active" : s.n < active ? "is-done" : "";
      const label =
        s.n < active
          ? `${iconTabCheck}<span class="cp-tab-text">${s.n}.${s.label}</span>`
          : `<span class="cp-tab-text">${s.n}.${s.label}</span>`;
      return `<button type="button" class="cp-tab ${state}" data-goto="${s.id}">
        <span class="cp-tab-label">${label}</span>
        <span class="cp-tab-line"></span>
      </button>`;
    })
    .join("")}</div>`;
}

function cpDropdown(name, value, options, { multi = false, chips = [] } = {}) {
  const triggerInner = multi
    ? `<span class="cp-dropdown-chips">${chips
        .map(
          (c) =>
            `<span class="cp-chip" data-chip="${c}">${c} <button type="button" data-remove-chip="${c}" aria-label="Remove">×</button></span>`
        )
        .join("")}</span>`
    : `<span class="cp-dropdown-value">${value}</span>`;

  return `
    <div class="cp-dropdown${multi ? " is-multi" : ""}" data-dropdown="${name}"${multi ? ' data-multi="true"' : ""}>
      <button type="button" class="cp-select cp-dropdown-trigger" aria-haspopup="listbox" aria-expanded="false">
        ${triggerInner}
        ${iconChevron}
      </button>
      <div class="cp-dropdown-menu" role="listbox" hidden>
        ${options
          .map(
            (opt) =>
              `<button type="button" class="cp-dropdown-option${(!multi && opt === value) || (multi && chips.includes(opt)) ? " is-selected" : ""}" data-value="${opt}" role="option">${opt}</button>`
          )
          .join("")}
      </div>
    </div>`;
}

const codeTemplates = {
  landing: `
    <div class="ca ca-landing" data-landing-carousel>
      <img class="ca-landing-shot is-active" src="scr/onboarding/onboard-1.png" alt="Your Pharmacy’s Order Anywhere, Anytime" data-slide="0" />
      <img class="ca-landing-shot" src="scr/onboarding/onboard-2.png" alt="One Stop Shop" data-slide="1" hidden />
      <img class="ca-landing-shot" src="scr/onboarding/onboard-3.png" alt="Compare Products & Discover Hot Offers" data-slide="2" hidden />

      <button type="button" class="ca-landing-hit ca-landing-hit-register" data-goto="create-account" aria-label="Register as Pharmacy"></button>
      <button type="button" class="ca-landing-hit ca-landing-hit-login" data-goto="login" aria-label="Log In"></button>
      <button type="button" class="ca-landing-hit ca-landing-hit-help" aria-label="Need Help?"></button>

      <div class="ca-landing-swipe" data-landing-swipe aria-hidden="true"></div>

      <div class="ca-landing-dot-hits" role="tablist" aria-label="Onboarding slides">
        <button type="button" class="is-active" data-landing-dot="0" aria-label="Slide 1"></button>
        <button type="button" data-landing-dot="1" aria-label="Slide 2"></button>
        <button type="button" data-landing-dot="2" aria-label="Slide 3"></button>
      </div>
    </div>`,

  "create-account": `
    <div class="ca">
      ${caHero("landing")}

      <div class="ca-body">
        <h1 class="ca-title">Create New Account</h1>
        <p class="ca-sub">Start now, complete your pharmacy profile later</p>

        <label class="ca-field ca-f1">
          ${iconUser}
          <input type="text" placeholder="Full Name" autocomplete="name" />
        </label>

        <label class="ca-field ca-field-phone ca-f2">
          <button type="button" class="ca-cc" aria-label="Country code">
            ${egyptFlag}
            <span class="ca-cc-code">+20</span>
            ${iconChevron}
          </button>
          <span class="ca-cc-divider" aria-hidden="true"></span>
          <input type="tel" placeholder="Phone number" autocomplete="tel" />
        </label>

        <label class="ca-field ca-f3">
          ${iconLock}
          <input type="password" placeholder="Password" autocomplete="new-password" />
          <button type="button" class="ca-eye" aria-label="Show password">${iconEyeOff}</button>
        </label>

        <label class="ca-terms">
          <input type="checkbox" checked />
          <span class="ca-check" aria-hidden="true"></span>
          <span class="ca-terms-text">I agree to the <a href="#">Terms of Service &amp; Privacy Policy</a></span>
        </label>

        <button type="button" class="ca-cta" data-goto="verify-otp">Create Account</button>

        <p class="ca-login">Already have an account ? <a href="#" data-goto="login">Log in</a></p>
      </div>

      <div class="ca-home-indicator" aria-hidden="true"></div>
    </div>`,

  login: `
    <div class="ca ca-login-screen">
      ${caHero("landing", { languageLabel: "Language", showGlobe: false })}

      <div class="ca-body">
        <h1 class="ca-title">Log In</h1>

        <button type="button" class="ca-country-chip" aria-label="Country">
          ${jordanFlag}
          ${iconChevron}
        </button>

        <label class="ca-field ca-login-id">
          <input type="text" placeholder="Email address or Mobile number" autocomplete="username" />
        </label>

        <label class="ca-field ca-login-pass">
          <input type="password" placeholder="Password" autocomplete="current-password" />
          <button type="button" class="ca-eye" aria-label="Show password">${iconEyeOff}</button>
        </label>

        <a href="#" class="ca-forgot">Forgot password?</a>

        <button type="button" class="ca-cta ca-cta-disabled" disabled>Log In</button>

        <p class="ca-login">Don't have an account? <a href="#" data-goto="create-account">Register now</a></p>

        <button type="button" class="ca-need-help">Need Help?</button>
      </div>

      <div class="ca-home-indicator" aria-hidden="true"></div>
    </div>`,

  "verify-otp": `
    <div class="otp">
      <div class="otp-topbar">
        <button type="button" class="otp-back" data-goto="create-account" aria-label="Back">${iconBack}</button>
        <h1 class="otp-title">Verify Phone Number</h1>
        <button type="button" class="otp-skip" data-goto="home">Skip</button>
      </div>

        <p class="otp-sent">A code has been sent to <strong>780605399</strong> <a href="#" class="otp-edit" data-goto="create-account">Edit</a></p>

      <div class="otp-boxes" role="group" aria-label="Verification code">
        <input class="otp-box" type="text" inputmode="numeric" maxlength="1" aria-label="Digit 1" />
        <input class="otp-box" type="text" inputmode="numeric" maxlength="1" aria-label="Digit 2" />
        <input class="otp-box" type="text" inputmode="numeric" maxlength="1" aria-label="Digit 3" />
        <input class="otp-box" type="text" inputmode="numeric" maxlength="1" aria-label="Digit 4" />
        <input class="otp-box" type="text" inputmode="numeric" maxlength="1" aria-label="Digit 5" />
        <input class="otp-box" type="text" inputmode="numeric" maxlength="1" aria-label="Digit 6" />
      </div>

      <p class="otp-missed">Didn't get the code?</p>
      <p class="otp-timer">resend code in 24 secs</p>

      <div class="otp-divider"></div>

      <button type="button" class="otp-support">
        <span class="otp-support-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.3 2 11.6c0 2.9 1.4 5.5 3.6 7.3V22l3.3-1.8c.9.3 1.9.4 3.1.4 5.5 0 10-4.3 10-9.6S17.5 2 12 2Zm5.4 13.7c-.2.7-1.3 1.2-1.8 1.3-.5.1-1.1.1-1.8-.1-.4-.2-.9-.3-1.6-.6-2.8-1.2-4.6-4-4.8-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.1c.2-.2.5-.2.7-.2h.5c.2 0 .4 0 .6.5.2.5.7 1.8.8 1.9.1.2.1.3 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.7 1.2 1.6 1.9 1.1.9 2 1.2 2.3 1.3.3.1.5.1.7-.1l.8-1.1c.2-.2.3-.2.6-.1.2.1 1.6.8 1.9.9.3.1.5.2.6.3.1.2.1 1-.1 1.7Z"/></svg>
        </span>
        Call Support
      </button>
    </div>`,

  home: `
    <div class="home is-catalog-locked">
      <div class="home-scroll">
        <div class="home-status">
          <span>9:41</span>
          <span class="home-status-icons" aria-hidden="true">
            <svg viewBox="0 0 18 12"><rect x="0.5" y="7" width="3" height="4.5" rx="0.6" fill="currentColor"/><rect x="5" y="5" width="3" height="6.5" rx="0.6" fill="currentColor"/><rect x="9.5" y="2.5" width="3" height="9" rx="0.6" fill="currentColor"/><rect x="14" y="0.5" width="3" height="11" rx="0.6" fill="currentColor"/></svg>
            <svg viewBox="0 0 16 12"><path fill="currentColor" d="M8 3.2c1.9 0 3.6.7 4.9 1.9l-1.2 1.2A5.3 5.3 0 0 0 8 4.8c-1.4 0-2.7.5-3.7 1.5L3.1 5.1A7.2 7.2 0 0 1 8 3.2Zm0 3.2c1 0 1.9.4 2.6 1l-1.2 1.2A2.2 2.2 0 0 0 8 8c-.6 0-1.1.2-1.5.6L5.3 7.4A3.8 3.8 0 0 1 8 6.4Zm0 3.1a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Z"/></svg>
            <svg viewBox="0 0 25 12"><rect x="0.6" y="1.2" width="19.5" height="9.6" rx="2.2" fill="none" stroke="currentColor" stroke-width="1.3"/><rect x="2.2" y="2.8" width="15" height="6.4" rx="1.2" fill="currentColor"/><path fill="currentColor" d="M21.2 4.1h1.4a1.6 1.6 0 0 1 0 3.8h-1.4V4.1Z"/></svg>
          </span>
        </div>

        <header class="home-header">
          <button type="button" class="home-wallet" data-demo="wallet">
            <span class="home-wallet-ico" aria-hidden="true">💳</span>
            <span>$ 12,879</span>
          </button>
          <label class="home-search">
            <span class="home-search-ico" aria-hidden="true">🔍</span>
            <input type="search" placeholder="Search by product/active ingredient" />
          </label>
          <button type="button" class="home-cart" data-demo="cart" aria-label="Cart">
            <span aria-hidden="true">🛍️</span>
            <span class="home-cart-badge">3</span>
          </button>
        </header>

        <button type="button" class="home-profile-card" data-goto="my-pharmacy" data-demo="complete-profile">
          <div class="home-profile-top">
            <div>
              <strong>Complete your profile</strong>
              <span>1/3 steps completed</span>
            </div>
            <span class="home-profile-continue">Continue ›</span>
          </div>
          <div class="home-profile-bar"><i style="width:33%"></i></div>
        </button>

        <button type="button" class="home-banner" data-demo="pulse-banner">
          <img src="scr/new-sign-up/home-assets/banner.png" alt="Pulse promo" />
        </button>

        <p class="home-lock-note">Complete your pharmacy profile to unlock prices, brands, and supplier details.</p>

        <section class="home-section">
          <div class="home-section-head">
            <h2>P2P Products</h2>
            <button type="button" class="home-view-all" data-demo="p2p-all">View All ›</button>
          </div>
          <div class="home-hscroll">
            <button type="button" class="home-product-card" data-demo="product-brufen-1">
              <span class="home-disc">-31%</span>
              <img src="scr/new-sign-up/home-assets/product-brufen.png" alt="" />
              <strong>Brufen Retard 800 Mg 20 Film Coated Tables</strong>
              <span class="home-fast">Fast Delivery</span>
              <div class="home-price-row">
                <span class="home-price">EGP 20</span>
                <span class="home-was">EGP 50</span>
                <span class="home-add">+</span>
              </div>
            </button>
            <button type="button" class="home-product-card" data-demo="product-brufen-2">
              <span class="home-disc">-31%</span>
              <img src="scr/new-sign-up/home-assets/product-brufen.png" alt="" />
              <strong>Brufen Retard 800 Mg 20 Film Coated Tables</strong>
              <span class="home-fast">Fast Delivery</span>
              <div class="home-price-row">
                <span class="home-price">EGP 20</span>
                <span class="home-was">EGP 50</span>
                <span class="home-add">+</span>
              </div>
            </button>
            <button type="button" class="home-product-card" data-demo="product-brufen-3">
              <span class="home-disc">-25%</span>
              <img src="scr/new-sign-up/home-assets/product-brufen.png" alt="" />
              <strong>Brufen Retard 800 Mg 20 Film Coated Tables</strong>
              <span class="home-fast">Fast Delivery</span>
              <div class="home-price-row">
                <span class="home-price">EGP 24</span>
                <span class="home-was">EGP 50</span>
                <span class="home-add">+</span>
              </div>
            </button>
          </div>
        </section>

        <section class="home-section">
          <div class="home-section-head">
            <h2>Trending Brands</h2>
            <button type="button" class="home-view-all" data-demo="brands-all">View All ›</button>
          </div>
          <div class="home-hscroll home-brands">
            <button type="button" class="home-brand" data-demo="brand-mustela"><img src="scr/new-sign-up/home-assets/brand-1.png" alt="" /><span>Mustela</span></button>
            <button type="button" class="home-brand" data-demo="brand-cerelac"><img src="scr/new-sign-up/home-assets/brand-2.png" alt="" /><span>Nestle Cerelac</span></button>
            <button type="button" class="home-brand" data-demo="brand-cetaphil"><img src="scr/new-sign-up/home-assets/brand-3.png" alt="" /><span>Cetaphil</span></button>
            <button type="button" class="home-brand" data-demo="brand-colgate"><img src="scr/new-sign-up/home-assets/brand-4.png" alt="" /><span>Colgate</span></button>
          </div>
        </section>

        <section class="home-section">
          <div class="home-section-head">
            <h2>Trending Categories</h2>
            <button type="button" class="home-view-all" data-demo="cats-all">View All ›</button>
          </div>
          <div class="home-hscroll home-cats">
            <button type="button" class="home-cat" data-demo="cat-skin"><img src="scr/new-sign-up/home-assets/cat-1.png" alt="" /><span>Skin Care</span></button>
            <button type="button" class="home-cat" data-demo="cat-hair"><img src="scr/new-sign-up/home-assets/cat-2.png" alt="" /><span>Hair Care</span></button>
            <button type="button" class="home-cat" data-demo="cat-devices"><img src="scr/new-sign-up/home-assets/cat-3.png" alt="" /><span>Medical Devices</span></button>
            <button type="button" class="home-cat" data-demo="cat-diapers"><img src="scr/new-sign-up/home-assets/cat-4.png" alt="" /><span>Baby Diapers</span></button>
          </div>
        </section>

        <section class="home-section home-offers">
          <div class="home-offer-tabs">
            <button type="button" class="is-active" data-demo="tab-b2b">Distributors B2B</button>
            <button type="button" data-demo="tab-p2p">Pharmacy P2P</button>
          </div>
          <button type="button" class="home-offer-row" data-demo="offer-1">
            <span class="home-offer-thumb">
              <span class="home-disc sm">15%</span>
              <img src="scr/new-sign-up/home-assets/product-brufen.png" alt="" />
            </span>
            <span class="home-offer-meta">
              <span class="home-offer-tags"><i>🔥 300 Orders</i><i>🪙 3434 Points</i></span>
              <strong>Brufen Retard 800 Mg 20 Film Coated Tables</strong>
              <em>PharmaCare</em>
              <span class="home-price-row">
                <span class="home-price">EGP 6820</span>
                <span class="home-was">EGP 50</span>
              </span>
            </span>
            <span class="home-add">+</span>
          </button>
          <button type="button" class="home-offer-row" data-demo="offer-2">
            <span class="home-offer-thumb">
              <span class="home-disc sm">12%</span>
              <img src="scr/new-sign-up/home-assets/product-brufen.png" alt="" />
            </span>
            <span class="home-offer-meta">
              <span class="home-offer-tags"><i>🔥 180 Orders</i><i>🪙 2100 Points</i></span>
              <strong>Brufen Retard 800 Mg 20 Film Coated Tables</strong>
              <em>PharmaCare</em>
              <span class="home-price-row">
                <span class="home-price">EGP 5400</span>
                <span class="home-was">EGP 50</span>
              </span>
            </span>
            <span class="home-add">+</span>
          </button>
        </section>
      </div>

      <nav class="home-tabbar" aria-label="Main">
        <button type="button" class="home-tab is-active" data-demo="tab-home">
          <span class="home-tab-ico" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z"/></svg>
          </span>
          <span class="home-tab-label">Home</span>
        </button>
        <button type="button" class="home-tab" data-demo="tab-suppliers">
          <span class="home-tab-ico" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M4 10h16v10H4V10Zm2-3 2-3h8l2 3H6Z"/><path fill="none" stroke="currentColor" stroke-width="1.8" d="M4 10h16"/><path fill="none" stroke="currentColor" stroke-width="1.6" d="M8 14h3M13 14h3"/></svg>
          </span>
          <span class="home-tab-label">Suppliers</span>
        </button>
        <button type="button" class="home-tab home-tab-pulse" data-demo="tab-pulse">
          <span class="home-pulse-btn" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="M3 12h3.2l2-5 3.2 10 2.4-7H21"/></svg>
            <span class="home-pulse-badge">2</span>
          </span>
          <span class="home-tab-label">Pulse</span>
        </button>
        <button type="button" class="home-tab" data-demo="tab-orders">
          <span class="home-tab-ico" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M7 3.5h8l3 3V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z"/><path fill="none" stroke="currentColor" stroke-width="1.6" d="M9 11h6M9 14.5h6"/><circle cx="9.5" cy="18" r="2.2" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
          </span>
          <span class="home-tab-label">Orders</span>
        </button>
        <button type="button" class="home-tab" data-demo="tab-more">
          <span class="home-tab-ico" aria-hidden="true">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.2" fill="none" stroke="currentColor" stroke-width="1.8"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M8.5 9.5h7M8.5 12h7M8.5 14.5h7"/></svg>
          </span>
          <span class="home-tab-label">More</span>
        </button>
      </nav>
    </div>`,

  "my-pharmacy": `
    <div class="mp">
      <div class="mp-hero">
        <div class="mp-status">
          <span>9:41</span>
          <span class="home-status-icons" aria-hidden="true">
            <svg viewBox="0 0 18 12"><rect x="0.5" y="7" width="3" height="4.5" rx="0.6" fill="currentColor"/><rect x="5" y="5" width="3" height="6.5" rx="0.6" fill="currentColor"/><rect x="9.5" y="2.5" width="3" height="9" rx="0.6" fill="currentColor"/><rect x="14" y="0.5" width="3" height="11" rx="0.6" fill="currentColor"/></svg>
            <svg viewBox="0 0 16 12"><path fill="currentColor" d="M8 3.2c1.9 0 3.6.7 4.9 1.9l-1.2 1.2A5.3 5.3 0 0 0 8 4.8c-1.4 0-2.7.5-3.7 1.5L3.1 5.1A7.2 7.2 0 0 1 8 3.2Zm0 3.2c1 0 1.9.4 2.6 1l-1.2 1.2A2.2 2.2 0 0 0 8 8c-.6 0-1.1.2-1.5.6L5.3 7.4A3.8 3.8 0 0 1 8 6.4Zm0 3.1a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Z"/></svg>
            <svg viewBox="0 0 25 12"><rect x="0.6" y="1.2" width="19.5" height="9.6" rx="2.2" fill="none" stroke="currentColor" stroke-width="1.3"/><rect x="2.2" y="2.8" width="15" height="6.4" rx="1.2" fill="currentColor"/><path fill="currentColor" d="M21.2 4.1h1.4a1.6 1.6 0 0 1 0 3.8h-1.4V4.1Z"/></svg>
          </span>
        </div>
        <div class="mp-topbar">
          <button type="button" class="mp-back" data-goto="home" aria-label="Back">${iconBack}</button>
          <h1>My Pharmacy</h1>
          <span class="mp-topbar-spacer"></span>
        </div>

        <div class="mp-pharmacy-card">
          <div class="mp-pharm-ico" aria-hidden="true">
            <svg viewBox="0 0 32 32"><rect x="6" y="12" width="20" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M10 12V9a6 6 0 0 1 12 0v3"/><circle cx="16" cy="19" r="3.2" fill="none" stroke="currentColor" stroke-width="1.6"/><path fill="none" stroke="currentColor" stroke-width="1.6" d="M16 17.2v3.6M14.2 19h3.6"/></svg>
          </div>
          <div class="mp-pharm-meta">
            <strong>Pharmacy Name</strong>
            <span><svg class="mp-pin" viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 1.5a4.5 4.5 0 0 0-4.5 4.5c0 3.2 4 8 4.2 8.3a.4.4 0 0 0 .6 0C8.5 14 12.5 9.2 12.5 6A4.5 4.5 0 0 0 8 1.5Zm0 6.2A1.7 1.7 0 1 1 8 4.3a1.7 1.7 0 0 1 0 3.4Z"/></svg> Cairo, Nasr City</span>
          </div>
          <span class="mp-badge is-incomplete">Incomplete</span>
        </div>
      </div>

      <div class="mp-body">
        <button type="button" class="mp-progress" data-goto="complete-location">
          <div class="mp-ring" style="--p:31" aria-hidden="true"><span>31%</span></div>
          <div class="mp-progress-copy">
            <strong>Complete pharmacy profile</strong>
            <span>31% completed · 2 step left</span>
          </div>
          <span class="mp-continue">Continue ›</span>
        </button>

        <div class="mp-list">
          <button type="button" class="mp-row" data-goto="complete-info">
            <div class="mp-row-ico is-teal" aria-hidden="true">
              <svg viewBox="0 0 24 24"><rect x="4" y="9" width="16" height="11" rx="1.6" fill="none" stroke="currentColor" stroke-width="1.7"/><path fill="none" stroke="currentColor" stroke-width="1.7" d="M8 9V7a4 4 0 0 1 8 0v2"/><circle cx="12" cy="14.5" r="2.2" fill="none" stroke="currentColor" stroke-width="1.5"/><path fill="none" stroke="currentColor" stroke-width="1.5" d="M12 13.2v2.6M10.7 14.5h2.6"/></svg>
            </div>
            <div class="mp-row-meta">
              <strong>Pharmacy information</strong>
              <span>Basic, legal and contact details</span>
            </div>
            <span class="mp-status is-done">${iconTabCheck}<em>Done</em></span>
            <span class="mp-chevron" aria-hidden="true">${iconChevron}</span>
          </button>

          <button type="button" class="mp-row" data-goto="complete-location">
            <div class="mp-row-ico is-orange" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.7" d="M12 3.5a5.5 5.5 0 0 0-5.5 5.5c0 4 5 10 5.2 10.3a.4.4 0 0 0 .6 0C12.5 19 17.5 13 17.5 9A5.5 5.5 0 0 0 12 3.5Z"/><circle cx="12" cy="9" r="2.1" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
            </div>
            <div class="mp-row-meta">
              <strong>Location &amp; Address</strong>
              <span>GPS location and address details</span>
            </div>
            <span class="mp-status is-pending"><svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6.2" fill="none" stroke="currentColor" stroke-width="1.5"/><path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" d="M8 4.8V8l2.2 1.4"/></svg><em>Pending</em></span>
            <span class="mp-chevron" aria-hidden="true">${iconChevron}</span>
          </button>

          <button type="button" class="mp-row" data-goto="complete-documents">
            <div class="mp-row-ico is-orange" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" d="M7 3.5h7.5L18.5 7.5V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z"/><path fill="none" stroke="currentColor" stroke-width="1.5" d="M9 11h6M9 14.5h6"/></svg>
            </div>
            <div class="mp-row-meta">
              <strong>Documents</strong>
              <span>License, tax card, trade registry</span>
            </div>
            <span class="mp-status is-pending"><svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6.2" fill="none" stroke="currentColor" stroke-width="1.5"/><path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" d="M8 4.8V8l2.2 1.4"/></svg><em>Pending</em></span>
            <span class="mp-chevron" aria-hidden="true">${iconChevron}</span>
          </button>
        </div>
      </div>
    </div>`,

  "complete-info": cpShell({
    activeTab: 1,
    backGoto: "my-pharmacy",
    body: `
        <h2 class="cp-section">Pharmacy Information</h2>

        <button type="button" class="cp-upload" data-demo="upload-logo">
          <span class="cp-upload-ico" aria-hidden="true">
            <svg viewBox="0 0 24 24"><rect x="3.5" y="5.5" width="17" height="13" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="9" cy="10.5" r="1.6" fill="currentColor"/><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" d="m6.5 16.5 3.2-3.4 2.4 2.3 3-3.4 3.4 4.5"/></svg>
          </span>
          <span>Upload Photo or File</span>
        </button>

        <label class="cp-field">
          <span>Pharmacy Name <em>*</em></span>
          <input type="text" value="Omar Pharmacy" />
        </label>

        <label class="cp-field">
          <span>Pharmacy Legal Name <em>*</em></span>
          <input type="text" value="Omar Pharmacy" />
        </label>

        <label class="cp-field">
          <span>Phone Number <em>*</em></span>
          <div class="cp-phone">
            <div class="cp-dropdown cp-cc-dropdown" data-dropdown="country-code">
              <button type="button" class="ca-cc cp-dropdown-trigger" aria-label="Country code" aria-haspopup="listbox" aria-expanded="false">
                <span class="cp-cc-flag">${egyptFlag}</span>
                <span class="cp-dropdown-value ca-cc-code" data-code="+20">+20</span>
                ${iconChevron}
              </button>
              <div class="cp-dropdown-menu" role="listbox" hidden>
                <button type="button" class="cp-dropdown-option is-selected" data-value="+20" data-flag="eg" role="option">${egyptFlag} Egypt (+20)</button>
                <button type="button" class="cp-dropdown-option" data-value="+962" data-flag="jo" role="option">${jordanFlag} Jordan (+962)</button>
              </div>
            </div>
            <span class="ca-cc-divider" aria-hidden="true"></span>
            <input type="tel" placeholder="Phone number" />
          </div>
        </label>

        <label class="cp-field">
          <span>Email Address <em>*</em></span>
          <input type="email" value="Omarmohamed12@gmail.com" />
        </label>

        <h2 class="cp-section">Business Details (Optional)</h2>

        <label class="cp-field">
          <span>Pharmacy Type</span>
          ${cpDropdown("pharmacy-type", "Individual", ["Individual", "Chain", "Hospital", "Clinic"])}
        </label>

        <label class="cp-field">
          <span>Trade License Number</span>
          <input type="text" value="23245" />
        </label>

        <label class="cp-field">
          <span>Preferred Distributors</span>
          ${cpDropdown("distributors", "", ["Eva Pharam", "Ibn Sina", "Pharma Care", "Med Pharma"], {
            multi: true,
            chips: ["Eva Pharam"],
          })}
        </label>`,
    footer: `<button type="button" class="ca-cta cp-cta" data-goto="complete-location">Save &amp; Continue</button>`,
  }),

  "complete-location": cpShell({
    activeTab: 2,
    backGoto: "complete-info",
    scrollClass: "cp-scroll-map",
    body: `
        <h2 class="cp-section">Pharmacy Location</h2>
        <div class="cp-map">
          <img class="cp-map-photo" src="scr/new-sign-up/home-assets/map-full.png" alt="Pharmacy location map" />
          <button type="button" class="cp-map-locate" aria-label="Locate me">${iconLocate}</button>
        </div>`,
    footer: `<button type="button" class="ca-cta cp-cta" data-goto="complete-location-details">Confirm location</button>`,
  }),

  "complete-location-details": cpShell({
    activeTab: 2,
    backGoto: "complete-location",
    body: `
        <h2 class="cp-section">Location Details</h2>

        <div class="cp-mini-map" aria-hidden="true">
          <img class="cp-map-photo" src="scr/new-sign-up/home-assets/map-mini.png" alt="" />
        </div>

        <label class="cp-field">
          <span>Address Location <em>*</em></span>
          <div class="cp-address">
            <span class="cp-address-ico">${iconLocMark}</span>
            <span class="cp-address-text">Al Hesseneya</span>
            <button type="button" class="cp-address-change" data-goto="complete-location">Change</button>
          </div>
        </label>

        <label class="cp-field">
          <span>Street <em>*</em></span>
          <input type="text" placeholder="Enter street name" />
        </label>

        <label class="cp-field">
          <span>Building</span>
          <input type="text" placeholder="Enter building number/name" />
        </label>

        <div class="cp-row">
          <label class="cp-field">
            <span>District <em>*</em></span>
            <input type="text" placeholder="Enter District" />
          </label>
          <label class="cp-field">
            <span>Area <em>*</em></span>
            <input type="text" placeholder="Enter Area" />
          </label>
        </div>

        <label class="cp-field">
          <span>Special Landmarks</span>
          <input type="text" placeholder="E.g., Next to the main hospital, second floor" />
        </label>`,
    footer: `<button type="button" class="ca-cta cp-cta" data-goto="complete-documents">Save &amp; Continue</button>`,
  }),

  "complete-documents": cpShell({
    activeTab: 3,
    backGoto: "complete-location-details",
    body: `
        <h2 class="cp-section">Pharmacy Documents</h2>

        <div class="cp-doc is-uploaded" data-doc="license" data-open-doc-sheet role="button" tabindex="0">
          <div class="cp-doc-thumb cp-doc-thumb-license" aria-hidden="true"></div>
          <div class="cp-doc-meta">
            <strong>Pharmacy license</strong>
            <span>license.pdf</span>
          </div>
          <span class="cp-doc-badge is-ok">Uploaded ✓</span>
          <span class="cp-doc-more" aria-hidden="true">${iconMore}</span>
        </div>

        <div class="cp-doc is-uploaded" data-doc="tax" data-open-doc-sheet role="button" tabindex="0">
          <div class="cp-doc-thumb cp-doc-thumb-tax" aria-hidden="true"></div>
          <div class="cp-doc-meta">
            <strong>Tax Card</strong>
            <span>Tax Card.png</span>
          </div>
          <span class="cp-doc-badge is-ok">Uploaded ✓</span>
          <span class="cp-doc-more" aria-hidden="true">${iconMore}</span>
        </div>

        <div class="cp-doc is-uploaded" data-doc="trade" data-open-doc-sheet role="button" tabindex="0">
          <div class="cp-doc-thumb cp-doc-thumb-license" aria-hidden="true"></div>
          <div class="cp-doc-meta">
            <strong>Trade Registry</strong>
            <span>trade-registry.pdf</span>
          </div>
          <span class="cp-doc-badge is-ok">Uploaded ✓</span>
          <span class="cp-doc-more" aria-hidden="true">${iconMore}</span>
        </div>
        <p class="cp-doc-banner" id="cp-doc-banner" hidden></p>`,
    footer: `<button type="button" class="ca-cta cp-cta" data-ai-verify>Complete Profile</button>`,
    overlay: `${docUpdateSheet}${aiSubmitSheets}`,
  }),
};


/* ── js/config/scopes.js ── */
/**
 * Epics = top-level demo cases.
 * Add a new entry here when you start a new flow (Pulse, Login, etc.).
 */
const EPICS = {
  register: {
    id: "register",
    label: "Register",
    chipClass: "chip-register",
    description: "Pharmacy registration & complete profile",
  },
};

/** @deprecated use EPICS — kept as alias during rename */
const SCOPES = EPICS;


/* ── js/data/signup-screens.js ── */
/** Sign-up / onboarding screens — pixel-perfect HTML. */
const signupScreens = [
  {
    id: "landing",
    label: "Landing",
    scope: "signup",
    group: "Start",
  },
  {
    id: "create-account",
    label: "Create account",
    scope: "signup",
    group: "Account",
  },
  {
    id: "verify-otp",
    label: "Verify phone",
    scope: "signup",
    group: "Account",
  },
  {
    id: "home",
    label: "Home",
    scope: "signup",
    group: "App",
  },
  {
    id: "my-pharmacy",
    label: "My Pharmacy",
    short: "My Pharmacy",
    scope: "signup",
    group: "Complete profile",
  },
  {
    id: "complete-info",
    label: "Profile · Information",
    scope: "signup",
    group: "Complete profile",
  },
  {
    id: "complete-location",
    label: "Location",
    short: "Location",
    scope: "signup",
    group: "Complete profile",
  },
  {
    id: "complete-location-details",
    label: "Location · Address",
    short: "Location · Address",
    scope: "signup",
    group: "Complete profile",
  },
  {
    id: "complete-documents",
    label: "Documents",
    short: "Documents",
    scope: "signup",
    group: "Complete profile",
  },
];


/* ── js/data/login-screens.js ── */
/** Login screens */
const loginScreens = [
  {
    id: "login",
    label: "Log in",
    scope: "login",
    group: "Account",
  },
];


/* ── js/components/shell.js ── */
/** App shell markup — sidebar + phone stage */
function renderShell() {
  return `
  <div class="app">
    <aside class="sidebar" id="sidebar">
      <div class="panel-stack">
        <div class="panel-view active" id="panelMenu">
          <div class="panel-top">
            <h2>Aumet</h2>
            <p class="panel-sub">Mobile flow demo</p>
          </div>

          <div class="panel-section">
            <span class="section-label">Epic</span>
            <div class="chip-row" id="epicChips">
              <button type="button" class="chip chip-register active" data-epic="register">Register</button>
            </div>
          </div>

          <button type="button" class="steps-entry" id="openSteps">
            <span class="steps-entry-label">Browse steps</span>
            <span class="chip chip-count" id="stepCount">0</span>
            <span class="steps-entry-chevron">›</span>
          </button>

          <div class="nav-row menu-nav-row">
            <button class="btn-prev" id="prevBtn" type="button" aria-label="Previous" disabled>‹</button>
            <button class="btn-next" id="nextBtn" type="button" aria-label="Next" disabled>›</button>
          </div>

          <div class="scope-hint" id="scopeHint">Pharmacy registration &amp; complete profile</div>
        </div>

        <div class="panel-view" id="panelSteps">
          <div class="panel-top">
            <button type="button" class="panel-back" id="backToMenu">‹ Back</button>
            <div class="steps-head-meta">
              <div class="steps-head-row">
                <span class="chip chip-scope chip-register" id="stepsEpicChip">Register</span>
                <span class="flow-progress" id="flowProgress">0 / 0</span>
              </div>
              <div class="progress-track"><div class="progress-fill" id="progressFill"></div></div>
            </div>
          </div>
          <div class="steps-scroll-panel">
            <ul class="steps-list" id="stepsList"></ul>
            <div class="steps-empty" id="stepsEmpty">
              <span class="chip chip-muted">Empty</span>
              <p>No steps yet. Send your first screen to begin.</p>
            </div>
          </div>
          <div class="panel-steps-foot">
            <div class="nav-row">
              <button class="btn-prev" id="prevBtnSteps" type="button" aria-label="Previous" disabled>‹</button>
              <button class="btn-next" id="nextBtnSteps" type="button" aria-label="Next" disabled>›</button>
            </div>
          </div>
        </div>
      </div>
    </aside>

    <main class="stage">
      <div class="stage-inner">
        <div class="phone-column" id="phoneColumn">
          <div class="phone-unit">
            <div class="phone-scaler" id="phoneScaler">
              <div class="phone">
                <div class="phone-screen" id="phoneScreen">
                  <div class="screen active" data-screen="empty" data-flow="current">
                    <div class="screen-code">
                      <div class="v2-pending">
                        <p class="v2-pending-label">Ready</p>
                        <p class="v2-pending-hint">Send your first screen to start</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="phone-btn"></div>
              </div>
            </div>
            <div class="phone-controls" id="demoBar">
              <button type="button" id="btnPlay" class="demo-btn" title="Play" aria-pressed="false">▶</button>
              <button type="button" id="btnPause" class="demo-btn active" title="Pause" aria-pressed="true">⏸</button>
              <select id="autoplaySpeed" class="demo-speed" title="Slide speed">
                <option value="3" selected>3s</option>
                <option value="5">5s</option>
                <option value="8">8s</option>
              </select>
              <span class="demo-sep" aria-hidden="true"></span>
              <button type="button" class="demo-btn demo-ai-pass active" data-ai-outcome="pass" title="AI verify: Pass" aria-pressed="true">✓</button>
              <button type="button" class="demo-btn demo-ai-fail" data-ai-outcome="fail" title="AI verify: Fail" aria-pressed="false">✕</button>
            </div>
          </div>
        </div>
        <div class="scope-empty-phone" id="scopeEmptyPhone" hidden>
          <p>Coming soon</p>
        </div>
      </div>
    </main>
  </div>`;
}


/* ── js/app.js ── */





const EPIC_SCREENS = {
  register: signupScreens,
};

const state = {
  epic: "register",
  viewMode: "code",
  current: 0,
  isPlaying: false,
  autoplayTimer: null,
  aiOutcome: "pass",
  aiRunning: false,
  profileComplete: false,
  verifyFailCount: 0,
  accountLocked: false,
};

const MAX_VERIFY_FAILS = 2;

let els = {};

function activeFlow() {
  return EPIC_SCREENS[state.epic] || [];
}

function shortStepName(s) {
  return (s.short || s.label.split("—")[0].trim())
    .replace(/\s*\([^)]*\)\s*/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function mountScreens() {
  const phoneScreen = els.phoneScreen;
  phoneScreen.innerHTML = "";

  const all = [
    ...signupScreens.map((s) => ({ ...s, flow: "register" })),
    ...loginScreens.map((s) => ({ ...s, flow: "login" })),
  ];

  if (!all.length) {
    phoneScreen.innerHTML = `
      <div class="screen active" data-screen="empty" data-flow="register">
        <div class="screen-code">
          <div class="v2-pending">
            <p class="v2-pending-label">Ready</p>
            <p class="v2-pending-hint">Send your first screen to start</p>
          </div>
        </div>
      </div>`;
    return;
  }

  all.forEach((s, i) => {
    const el = document.createElement("div");
    el.className = "screen" + (i === 0 ? " active" : "");
    el.dataset.screen = s.id;
    el.dataset.flow = s.flow;
    const photo = s.photo
      ? `<div class="screen-photo"><img src="${s.photo}" alt="${s.label}" /></div>`
      : "";
    el.innerHTML = `${photo}<div class="screen-code">${codeTemplates[s.id] || ""}</div>`;
    phoneScreen.appendChild(el);
  });
}

function showPanel(name) {
  els.panelMenu.classList.toggle("active", name === "menu");
  els.panelSteps.classList.toggle("active", name === "steps");
}

function updateChips() {
  document.querySelectorAll("#demoBar [data-ai-outcome]").forEach((btn) => {
    const on = btn.dataset.aiOutcome === state.aiOutcome;
    btn.classList.toggle("active", on);
    btn.setAttribute("aria-pressed", String(on));
  });

  const epic = EPICS[state.epic];
  els.epicChips?.querySelectorAll("[data-epic]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.epic === state.epic);
  });
  if (els.stepsEpicChip && epic) {
    els.stepsEpicChip.textContent = epic.label;
    els.stepsEpicChip.className = `chip chip-scope ${epic.chipClass || ""}`;
  }

  const flow = activeFlow();
  if (els.stepCount) els.stepCount.textContent = String(flow.length);
  if (els.scopeHint) {
    els.scopeHint.textContent = flow.length
      ? (epic?.description || "")
      : "No steps yet — ready for your first screen";
  }

  const empty = !flow.length;
  if (els.scopeEmptyPhone) els.scopeEmptyPhone.hidden = !empty;
  if (els.phoneColumn) els.phoneColumn.hidden = empty;
}

function setEpic(epicId) {
  if (!EPICS[epicId] || state.epic === epicId) return;
  state.epic = epicId;
  state.current = 0;
  updateChips();
  goTo(0);
  fitPhone();
}

function renderStepsList() {
  const flow = activeFlow();
  els.stepsEmpty.hidden = flow.length > 0;
  els.stepsList.hidden = flow.length === 0;

  if (!flow.length) {
    els.stepsList.innerHTML = "";
    return;
  }

  let html = "";
  let lastGroup = "";
  flow.forEach((s, i) => {
    const group = s.group || "Steps";
    if (group !== lastGroup) {
      html += `<li class="step-group"><span class="chip chip-group">${group}</span></li>`;
      lastGroup = group;
    }
    html += `<li><button type="button" data-i="${i}" class="${i === state.current ? "active" : ""}"><span class="step-n">${i + 1}</span><span class="step-name">${shortStepName(s)}</span></button></li>`;
  });
  els.stepsList.innerHTML = html;
  els.stepsList.querySelectorAll("button").forEach((b) =>
    b.addEventListener("click", () => goTo(Number(b.dataset.i)))
  );
}

function updatePlayState() {
  if (!els.btnPlay || !els.btnPause) return;
  els.btnPlay.classList.toggle("active", state.isPlaying);
  els.btnPlay.setAttribute("aria-pressed", String(state.isPlaying));
  els.btnPause.classList.toggle("active", !state.isPlaying);
  els.btnPause.setAttribute("aria-pressed", String(!state.isPlaying));
}

function playDemo() {
  state.isPlaying = true;
  setupAutoplay();
  updatePlayState();
}

function pauseDemo() {
  state.isPlaying = false;
  clearInterval(state.autoplayTimer);
  updatePlayState();
}

function setupAutoplay() {
  clearInterval(state.autoplayTimer);
  if (!state.isPlaying || !activeFlow().length) return;
  const sec = Number(els.autoplaySpeed.value);
  state.autoplayTimer = setInterval(() => {
    const flow = activeFlow();
    if (state.current < flow.length - 1) goTo(state.current + 1);
    else goTo(0);
  }, sec * 1000);
}

function bindGoto() {
  document.querySelectorAll("[data-goto]").forEach((el) => {
    el.onclick = (e) => {
      e.preventDefault();
      goToId(el.dataset.goto);
    };
  });
  bindOtpInputs();
  bindHomeDemo();
  bindCpDropdowns();
  bindAiVerify();
  bindLandingCarousel();
}

function bindLandingCarousel() {
  const root = document.querySelector(".screen.active [data-landing-carousel]");
  if (!root) return;

  const shots = [...root.querySelectorAll(".ca-landing-shot")];
  const dots = [...root.querySelectorAll("[data-landing-dot]")];
  const swipe = root.querySelector("[data-landing-swipe]");
  if (!shots.length) return;

  let index = Math.max(
    0,
    shots.findIndex((s) => s.classList.contains("is-active"))
  );

  const show = (next) => {
    index = ((next % shots.length) + shots.length) % shots.length;
    shots.forEach((shot, i) => {
      const on = i === index;
      shot.classList.toggle("is-active", on);
      shot.hidden = !on;
    });
    dots.forEach((dot, i) => dot.classList.toggle("is-active", i === index));
  };

  dots.forEach((dot) => {
    dot.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      show(Number(dot.dataset.landingDot));
    };
  });

  const bindSwipe = (el) => {
    if (!el) return;
    let startX = 0;
    let tracking = false;
    el.ontouchstart = (e) => {
      tracking = true;
      startX = e.changedTouches[0].clientX;
    };
    el.ontouchend = (e) => {
      if (!tracking) return;
      tracking = false;
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) < 36) return;
      show(index + (dx < 0 ? 1 : -1));
    };
    el.onmousedown = (e) => {
      tracking = true;
      startX = e.clientX;
    };
    el.onmouseup = (e) => {
      if (!tracking) return;
      tracking = false;
      const dx = e.clientX - startX;
      if (Math.abs(dx) < 36) return;
      show(index + (dx < 0 ? 1 : -1));
    };
  };

  bindSwipe(swipe);
  show(index);
}

function closeAllCpMenus(except) {
  document.querySelectorAll(".screen.active .cp-dropdown.is-open").forEach((el) => {
    if (el === except) return;
    el.classList.remove("is-open");
    const trigger = el.querySelector(".cp-dropdown-trigger");
    const menu = el.querySelector(".cp-dropdown-menu");
    if (trigger) trigger.setAttribute("aria-expanded", "false");
    if (menu) menu.hidden = true;
  });
}

function closeDocSheet() {
  const sheet = document.querySelector(".screen.active #doc-update-sheet");
  if (!sheet) return;
  sheet.classList.remove("is-open");
  sheet.hidden = true;
  sheet.dataset.doc = "";
}

function openDocSheet(docId) {
  if (state.accountLocked) return;
  const sheet = document.querySelector(".screen.active #doc-update-sheet");
  if (!sheet) return;
  closeAllCpMenus();
  sheet.dataset.doc = docId || "";
  sheet.hidden = false;
  requestAnimationFrame(() => sheet.classList.add("is-open"));
}

function bindCpDropdowns() {
  const root = document.querySelector(".screen.active .cp");
  if (!root) return;

  root.querySelectorAll(".cp-dropdown").forEach((dd) => {
    const trigger = dd.querySelector(".cp-dropdown-trigger");
    const menu = dd.querySelector(".cp-dropdown-menu");
    if (!trigger || !menu) return;

    trigger.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const open = !dd.classList.contains("is-open");
      closeAllCpMenus();
      if (!open) return;
      dd.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
      menu.hidden = false;
    };

    menu.querySelectorAll(".cp-dropdown-option").forEach((opt) => {
      opt.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const value = opt.dataset.value;

        if (dd.dataset.multi === "true") {
          const chipsWrap = dd.querySelector(".cp-dropdown-chips");
          let selected = [...chipsWrap.querySelectorAll("[data-chip]")].map((c) => c.dataset.chip);
          if (selected.includes(value)) {
            selected = selected.filter((v) => v !== value);
          } else {
            selected.push(value);
          }
          chipsWrap.innerHTML = selected
            .map(
              (c) =>
                `<span class="cp-chip" data-chip="${c}">${c} <button type="button" data-remove-chip="${c}" aria-label="Remove">×</button></span>`
            )
            .join("");
          menu.querySelectorAll(".cp-dropdown-option").forEach((o) => {
            o.classList.toggle("is-selected", selected.includes(o.dataset.value));
          });
          bindChipRemoves(dd);
          return;
        }

        const valueEl = dd.querySelector(".cp-dropdown-value");
        if (valueEl) valueEl.textContent = value;
        if (dd.classList.contains("cp-cc-dropdown")) {
          const flagHost = dd.querySelector(".cp-cc-flag");
          const srcFlag = opt.querySelector(".ca-flag");
          if (flagHost && srcFlag) flagHost.innerHTML = srcFlag.outerHTML;
        }
        menu.querySelectorAll(".cp-dropdown-option").forEach((o) => o.classList.remove("is-selected"));
        opt.classList.add("is-selected");
        closeAllCpMenus();
      };
    });

    bindChipRemoves(dd);
  });

  bindDocSheet(root);

  if (!root.dataset.cpMenusBound) {
    root.dataset.cpMenusBound = "1";
    root.addEventListener("click", () => closeAllCpMenus());
  }
}

function bindDocSheet(root) {
  const sheet = root.querySelector("#doc-update-sheet");
  if (!sheet) return;

  let fileInput = root.querySelector("#cp-doc-file-input");
  if (!fileInput) {
    fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.id = "cp-doc-file-input";
    fileInput.accept = "image/*,.pdf,.doc,.docx,.png,.jpg,.jpeg";
    fileInput.hidden = true;
    root.appendChild(fileInput);
  }

  let pendingDocRow = null;

  const pickFileFor = (row) => {
    pendingDocRow = row;
    fileInput.value = "";
    fileInput.click();
  };

  const missingBadgeHtml =
    `<span class="cp-doc-badge is-missing-badge"><svg class="cp-doc-badge-ico" viewBox="0 0 16 16" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" d="M8 2.2 14.2 13.4H1.8L8 2.2Z"/><path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" d="M8 6.2v3.2M8 11.4h.01"/></svg>Missing</span>`;

  const markDocUploaded = (row, file) => {
    if (!row || !file) return;
    const name = file.name || "document.pdf";
    row.classList.remove("is-missing", "is-failed");
    row.classList.add("is-uploaded");
    row.setAttribute("data-open-doc-sheet", "");
    row.setAttribute("role", "button");
    row.setAttribute("tabindex", "0");
    row.querySelector(".cp-doc-error")?.remove();

    const meta = row.querySelector(".cp-doc-meta");
    if (meta) {
      meta.querySelector(".cp-doc-badge")?.remove();
      let fileEl = meta.querySelector("span:not(.cp-doc-badge)");
      if (!fileEl) {
        fileEl = document.createElement("span");
        meta.appendChild(fileEl);
      }
      fileEl.textContent = name;
    }

    let badge = row.querySelector(":scope > .cp-doc-badge");
    if (!badge) {
      badge = document.createElement("span");
      const uploadOrMore = row.querySelector(".cp-doc-upload-btn, .cp-doc-more");
      if (uploadOrMore) row.insertBefore(badge, uploadOrMore);
      else row.appendChild(badge);
    }
    badge.className = "cp-doc-badge is-ok";
    badge.textContent = "Uploaded ✓";

    const thumb = row.querySelector(".cp-doc-thumb");
    if (thumb) {
      thumb.className = "cp-doc-thumb";
      if (file.type && file.type.startsWith("image/")) {
        const url = URL.createObjectURL(file);
        thumb.innerHTML = `<img src="${url}" alt="" />`;
        thumb.classList.add("cp-doc-thumb-preview");
      } else {
        thumb.className = "cp-doc-thumb cp-doc-thumb-license";
        thumb.innerHTML = "";
      }
    }

    const uploadBtn = row.querySelector(".cp-doc-upload-btn");
    if (uploadBtn) {
      uploadBtn.outerHTML = `<span class="cp-doc-more" aria-hidden="true"><svg class="cp-ico-more" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="5" r="1.6" fill="currentColor"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/><circle cx="12" cy="19" r="1.6" fill="currentColor"/></svg></span>`;
    }

    row.onclick = (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      openDocSheet(row.dataset.doc);
    };

    updateDocsCta(root);
  };

  fileInput.onchange = () => {
    const file = fileInput.files && fileInput.files[0];
    if (file && pendingDocRow) markDocUploaded(pendingDocRow, file);
    pendingDocRow = null;
  };

  root.querySelectorAll("[data-open-doc-sheet]").forEach((doc) => {
    doc.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      openDocSheet(doc.dataset.doc);
    };
  });

  root.querySelectorAll(".cp-doc-upload-btn").forEach((btn) => {
    btn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const row = btn.closest(".cp-doc");
      if (!row) return;
      pickFileFor(row);
    };
  });

  sheet.querySelectorAll("[data-sheet-close]").forEach((el) => {
    el.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeDocSheet();
    };
  });

  sheet.querySelectorAll("[data-doc-action]").forEach((action) => {
    action.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const kind = action.dataset.docAction;
      const docId = sheet.dataset.doc;
      const row = root.querySelector(`.cp-doc[data-doc="${docId}"]`);

      if (kind === "replace" && row) {
        closeDocSheet();
        pickFileFor(row);
        return;
      }

      if (kind === "delete" && row) {
        row.classList.remove("is-uploaded", "is-failed");
        row.classList.add("is-missing");
        row.removeAttribute("data-open-doc-sheet");
        row.removeAttribute("role");
        row.removeAttribute("tabindex");
        row.onclick = null;
        row.querySelector(".cp-doc-error")?.remove();
        row.querySelectorAll(".cp-doc-badge").forEach((el) => el.remove());
        const meta = row.querySelector(".cp-doc-meta");
        meta?.querySelectorAll("span:not(.cp-doc-badge)").forEach((el) => el.remove());
        if (meta) meta.insertAdjacentHTML("beforeend", missingBadgeHtml);
        const thumb = row.querySelector(".cp-doc-thumb");
        if (thumb) {
          thumb.className = "cp-doc-thumb cp-doc-thumb-missing";
          thumb.innerHTML =
            '<svg viewBox="0 0 40 40" aria-hidden="true"><rect x="8" y="6" width="24" height="28" rx="3" fill="#fff7ed" stroke="#fb923c" stroke-width="1.5"/><path fill="#fb923c" d="M14 14h12v2H14zm0 5h12v2H14zm0 5h8v2h-8z"/></svg>';
        }
        const more = row.querySelector(".cp-doc-more");
        if (more) {
          more.outerHTML = `<button type="button" class="cp-doc-upload-btn">Upload</button>`;
        }
        updateDocsCta(root);
        bindDocSheet(root);
      }

      closeDocSheet();
    };
  });
}

const AI_DOC_META = [
  { id: "license", label: "Pharmacy license", failReason: "This document is not valid. Please upload the correct Pharmacy license." },
  { id: "tax", label: "Tax Card", failReason: "This document is not valid. Please upload the correct Tax Card." },
  { id: "trade", label: "Trade Registry", failReason: "This document is not valid. Please upload the correct Trade Registry." },
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function updateDocsCta(root) {
  const cta = root.querySelector("[data-ai-verify]");
  if (!cta) return;
  if (state.accountLocked) {
    cta.textContent = "Support will contact you";
    cta.disabled = true;
    cta.classList.add("is-muted");
    return;
  }
  cta.disabled = false;
  cta.classList.remove("is-muted");
  const hasFailed = root.querySelector(".cp-doc.is-failed");
  cta.textContent = hasFailed ? "Fix & resubmit" : "Complete Profile";
}

function setDocBanner(root, text, locked = false) {
  const banner = root.querySelector("#cp-doc-banner");
  if (!banner) return;
  if (!text) {
    banner.hidden = true;
    banner.textContent = "";
    banner.classList.remove("is-locked");
    return;
  }
  banner.hidden = false;
  banner.textContent = text;
  banner.classList.toggle("is-locked", locked);
}

function lockAccount(docsRoot) {
  state.accountLocked = true;
  const root =
    docsRoot ||
    document.querySelector('.screen[data-screen="complete-documents"] .cp') ||
    document.querySelector(".screen.active .cp");
  if (root) {
    root.classList.add("is-account-locked");
    setDocBanner(
      root,
      "Uploads paused. Our support team will contact you soon to help finish verification.",
      true
    );
    updateDocsCta(root);
    closeDocSheet();
    openSheet(root.querySelector("#account-locked-sheet"));
  }
}

function applyAccountLockUI() {
  const root = document.querySelector('.screen[data-screen="complete-documents"] .cp');
  if (!root || !state.accountLocked) return;
  root.classList.add("is-account-locked");
  setDocBanner(
    root,
    "Uploads paused. Our support team will contact you soon to help finish verification.",
    true
  );
  updateDocsCta(root);
}

function openSheet(sheet) {
  if (!sheet) return;
  sheet.hidden = false;
  requestAnimationFrame(() => sheet.classList.add("is-open"));
}

function closeSheet(sheet) {
  if (!sheet) return;
  sheet.classList.remove("is-open");
  sheet.hidden = true;
}

function markDocFailed(row, reason) {
  if (!row) return;
  row.classList.add("is-failed");
  row.classList.remove("is-missing");
  const badge = row.querySelector(".cp-doc-badge");
  if (badge) {
    badge.className = "cp-doc-badge is-fail";
    badge.textContent = "Failed ✕";
  }
  row.querySelector(".cp-doc-error")?.remove();
  const err = document.createElement("p");
  err.className = "cp-doc-error";
  err.textContent = reason;
  row.insertAdjacentElement("afterend", err);
}

function clearDocFailures(root) {
  root.querySelectorAll(".cp-doc-error").forEach((el) => el.remove());
  root.querySelectorAll(".cp-doc.is-failed").forEach((row) => {
    row.classList.remove("is-failed");
    if (row.classList.contains("is-uploaded")) {
      const badge = row.querySelector(".cp-doc-badge");
      if (badge) {
        badge.className = "cp-doc-badge is-ok";
        badge.textContent = "Uploaded ✓";
      }
    }
  });
  setDocBanner(root, "");
  updateDocsCta(root);
}

function setAiRowStatus(list, docId, status) {
  const row = list.querySelector(`[data-ai-doc="${docId}"]`);
  if (!row) return;
  row.classList.remove("is-checking", "is-pass", "is-fail");
  const statusEl = row.querySelector("[data-ai-status]");
  if (status === "checking") {
    row.classList.add("is-checking");
    statusEl.innerHTML = `<span class="cp-ai-spinner"></span> Checking…`;
  } else if (status === "pass") {
    row.classList.add("is-pass");
    statusEl.innerHTML = `<span class="cp-ai-ico is-pass" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor"/><path fill="#fff" d="M10.2 15.4 6.8 12l1.2-1.2 2.2 2.2 5-5 1.2 1.2-6.2 6.2Z"/></svg></span> Passed`;
  } else if (status === "fail") {
    row.classList.add("is-fail");
    statusEl.innerHTML = `<span class="cp-ai-ico is-fail" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor"/><path fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" d="M8.5 8.5l7 7M15.5 8.5l-7 7"/></svg></span> Failed`;
  } else {
    statusEl.textContent = "Waiting";
  }
}

async function runAiVerification(root) {
  if (state.aiRunning || state.accountLocked) return;
  const verifySheet = root.querySelector("#ai-verify-sheet");
  const submittedSheet = root.querySelector("#profile-submitted-sheet");
  const lockedSheet = root.querySelector("#account-locked-sheet");
  const list = root.querySelector("#ai-verify-list");
  if (!verifySheet || !list) return;

  const docsRoot =
    document.querySelector('.screen[data-screen="complete-documents"] .cp') || root;

  const docs = AI_DOC_META.map((meta) => ({
    ...meta,
    row: docsRoot.querySelector(`.cp-doc[data-doc="${meta.id}"]`),
  }));

  const missing = docs.filter((d) => !d.row || !d.row.classList.contains("is-uploaded"));
  if (missing.length) {
    goToId("complete-documents");
    requestAnimationFrame(() => {
      const activeDocs = document.querySelector(".screen.active .cp") || docsRoot;
      setDocBanner(activeDocs, "Upload all documents before completing your profile.");
      missing.forEach((d) => d.row?.classList.add("is-highlight"));
      setTimeout(() => activeDocs.querySelectorAll(".is-highlight").forEach((el) => el.classList.remove("is-highlight")), 1200);
    });
    return;
  }

  state.aiRunning = true;
  clearDocFailures(docsRoot);
  closeDocSheet();
  closeSheet(submittedSheet);
  closeSheet(lockedSheet);
  AI_DOC_META.forEach((d) => setAiRowStatus(list, d.id, "waiting"));
  openSheet(verifySheet);

  const failIds = state.aiOutcome === "fail" ? new Set(["tax"]) : new Set();
  const failed = [];

  for (const doc of docs) {
    setAiRowStatus(list, doc.id, "checking");
    await sleep(900);
    if (failIds.has(doc.id)) {
      setAiRowStatus(list, doc.id, "fail");
      failed.push(doc);
    } else {
      setAiRowStatus(list, doc.id, "pass");
    }
  }

  await sleep(650);

  if (failed.length) {
    closeSheet(verifySheet);
    state.verifyFailCount += 1;
    failed.forEach((doc) => markDocFailed(doc.row, doc.failReason));
    state.aiRunning = false;
    goToId("complete-documents");

    if (state.verifyFailCount > MAX_VERIFY_FAILS) {
      requestAnimationFrame(() => {
        const activeDocs =
          document.querySelector(".screen.active .cp") ||
          document.querySelector('.screen[data-screen="complete-documents"] .cp') ||
          docsRoot;
        lockAccount(activeDocs);
      });
      return;
    }

    const activeDocs =
      document.querySelector(".screen.active .cp") ||
      document.querySelector('.screen[data-screen="complete-documents"] .cp') ||
      docsRoot;
    if (state.verifyFailCount === 2) {
      setDocBanner(
        activeDocs,
        "Some documents are not valid. Replace them and resubmit before your account is locked."
      );
    } else {
      setDocBanner(
        activeDocs,
        "Some documents are not valid. Replace them with the correct files and resubmit."
      );
    }
    updateDocsCta(activeDocs);
    return;
  }

  closeSheet(verifySheet);
  openSheet(submittedSheet);
  state.profileComplete = true;
  state.verifyFailCount = 0;
  syncHomeCatalogLock();
  state.aiRunning = false;
}

function syncHomeCatalogLock() {
  const home = document.querySelector('.screen[data-screen="home"] .home');
  if (!home) return;
  home.classList.toggle("is-catalog-locked", !state.profileComplete);
}

function bindHomeCatalogLock() {
  const home = document.querySelector(".screen.active .home");
  if (!home) return;
  syncHomeCatalogLock();
  if (!home.classList.contains("is-catalog-locked")) return;

  home.querySelectorAll(".home-product-card, .home-brand, .home-offer-row").forEach((el) => {
    el.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      goToId("my-pharmacy");
    };
  });
}

function bindAiVerify() {
  const root = document.querySelector(".screen.active .cp");
  if (!root) return;

  applyAccountLockUI();

  root.querySelectorAll("[data-ai-verify]").forEach((btn) => {
    btn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (state.accountLocked) {
        openSheet(root.querySelector("#account-locked-sheet"));
        return;
      }
      runAiVerification(root);
    };
  });

  root.querySelectorAll("[data-ai-close]").forEach((el) => {
    el.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (state.aiRunning) return;
      closeSheet(root.querySelector("#ai-verify-sheet"));
    };
  });

  root.querySelectorAll("[data-submitted-close]").forEach((el) => {
    el.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeSheet(root.querySelector("#profile-submitted-sheet"));
    };
  });

  root.querySelectorAll("[data-locked-close]").forEach((el) => {
    el.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeSheet(root.querySelector("#account-locked-sheet"));
    };
  });

  updateDocsCta(root);
}

function bindChipRemoves(dd) {
  dd.querySelectorAll("[data-remove-chip]").forEach((btn) => {
    btn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const chip = btn.closest("[data-chip]");
      const value = btn.dataset.removeChip;
      if (chip) chip.remove();
      dd.querySelectorAll(".cp-dropdown-option").forEach((o) => {
        if (o.dataset.value === value) o.classList.remove("is-selected");
      });
    };
  });
}

function bindHomeDemo() {
  const root = document.querySelector(".screen.active .home");
  if (!root) return;

  root.querySelectorAll("[data-demo]").forEach((el) => {
    el.addEventListener("click", (e) => {
      if (el.dataset.goto) return;
      e.preventDefault();
      root.querySelectorAll(".is-selected").forEach((n) => n.classList.remove("is-selected"));
      el.classList.add("is-selected");
    });
  });

  root.querySelectorAll(".home-offer-tabs button").forEach((btn) => {
    btn.addEventListener("click", () => {
      root.querySelectorAll(".home-offer-tabs button").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
    });
  });
}

function bindOtpInputs() {
  const boxes = [...document.querySelectorAll(".screen.active .otp-box")];
  if (!boxes.length) return;
  boxes.forEach((box, i) => {
    box.oninput = () => {
      box.value = box.value.replace(/\D/g, "").slice(0, 1);
      if (box.value && i < boxes.length - 1) boxes[i + 1].focus();
      const code = boxes.map((b) => b.value).join("");
      if (code.length === boxes.length) goToId("home");
    };
    box.onkeydown = (e) => {
      if (e.key === "Backspace" && !box.value && i > 0) boxes[i - 1].focus();
    };
  });
}

function goTo(index) {
  const flow = activeFlow();
  if (!flow.length) {
    state.current = 0;
    if (els.flowProgress) els.flowProgress.textContent = "0 / 0";
    if (els.progressFill) els.progressFill.style.width = "0%";
    if (els.prevBtn) els.prevBtn.disabled = true;
    if (els.nextBtn) els.nextBtn.disabled = true;
    if (els.prevBtnSteps) els.prevBtnSteps.disabled = true;
    if (els.nextBtnSteps) els.nextBtnSteps.disabled = true;
    renderStepsList();
    return;
  }

  state.current = Math.max(0, Math.min(flow.length - 1, index));
  state.aiRunning = false;
  const step = flow[state.current];

  document.querySelectorAll(".screen").forEach((el) => {
    el.classList.toggle("active", el.dataset.flow === state.epic && el.dataset.screen === step.id);
  });

  if (els.flowProgress) els.flowProgress.textContent = `${state.current + 1} / ${flow.length}`;
  if (els.progressFill) els.progressFill.style.width = `${((state.current + 1) / flow.length) * 100}%`;
  if (els.prevBtn) els.prevBtn.disabled = state.current === 0;
  if (els.nextBtn) els.nextBtn.disabled = state.current === flow.length - 1;
  if (els.prevBtnSteps) els.prevBtnSteps.disabled = state.current === 0;
  if (els.nextBtnSteps) els.nextBtnSteps.disabled = state.current === flow.length - 1;
  renderStepsList();

  try {
    bindGoto();
  } catch (err) {
    console.error("bindGoto failed", err);
  }

  if (step.id === "home") {
    try {
      bindHomeCatalogLock();
    } catch (err) {
      console.error("bindHomeCatalogLock failed", err);
    }
  }

  if (els.panelSteps?.classList.contains("active")) {
    const activeBtn = els.stepsList?.querySelector("button.active");
    if (activeBtn) activeBtn.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

  requestAnimationFrame(fitPhone);
}

function goToId(id) {
  const inEpic = activeFlow().findIndex((s) => s.id === id);
  if (inEpic >= 0) {
    goTo(inEpic);
    return;
  }

  // Linked screens outside the active epic step list (e.g. Log in from landing)
  const el = document.querySelector(`.screen[data-screen="${id}"]`);
  if (el) {
    document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
    el.classList.add("active");
  }
}

function fitPhone() {
  const stage = document.querySelector(".stage");
  const column = els.phoneColumn;
  if (!stage || !column || column.hidden) return;
  document.documentElement.style.setProperty("--phone-scale", "1");
  const margin = 16;
  const scale = Math.min(
    (stage.clientWidth - margin) / column.offsetWidth,
    (stage.clientHeight - margin) / column.offsetHeight
  );
  document.documentElement.style.setProperty("--phone-scale", Math.max(0.55, scale));
}

function bindEvents() {
  els.openSteps.addEventListener("click", () => showPanel("steps"));
  els.backToMenu.addEventListener("click", () => showPanel("menu"));

  els.epicChips?.querySelectorAll("[data-epic]").forEach((btn) => {
    btn.addEventListener("click", () => setEpic(btn.dataset.epic));
  });

  document.querySelectorAll("#demoBar [data-ai-outcome]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.aiOutcome = btn.dataset.aiOutcome;
      updateChips();
    });
  });

  els.btnPlay.addEventListener("click", playDemo);
  els.btnPause.addEventListener("click", pauseDemo);
  els.autoplaySpeed.addEventListener("change", setupAutoplay);

  els.prevBtn?.addEventListener("click", () => goTo(state.current - 1));
  els.nextBtn?.addEventListener("click", () => goTo(state.current + 1));
  els.prevBtnSteps?.addEventListener("click", () => goTo(state.current - 1));
  els.nextBtnSteps?.addEventListener("click", () => goTo(state.current + 1));

  document.addEventListener("keydown", (e) => {
    const tag = document.activeElement?.tagName;
    const typing =
      /^(INPUT|TEXTAREA|SELECT)$/.test(tag || "") ||
      document.activeElement?.isContentEditable;
    if (!typing) {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goTo(state.current + 1);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goTo(state.current - 1);
      }
    }
    if (e.key === " " && !typing) {
      e.preventDefault();
      if (state.isPlaying) pauseDemo();
      else playDemo();
    }
  });

  window.addEventListener("resize", fitPhone);
}

function cacheElements() {
  els = {
    panelMenu: document.getElementById("panelMenu"),
    panelSteps: document.getElementById("panelSteps"),
    epicChips: document.getElementById("epicChips"),
    stepsEpicChip: document.getElementById("stepsEpicChip"),
    scopeHint: document.getElementById("scopeHint"),
    openSteps: document.getElementById("openSteps"),
    stepCount: document.getElementById("stepCount"),
    stepsList: document.getElementById("stepsList"),
    stepsEmpty: document.getElementById("stepsEmpty"),
    flowProgress: document.getElementById("flowProgress"),
    progressFill: document.getElementById("progressFill"),
    phoneScreen: document.getElementById("phoneScreen"),
    phoneColumn: document.getElementById("phoneColumn"),
    phoneScaler: document.getElementById("phoneScaler"),
    scopeEmptyPhone: document.getElementById("scopeEmptyPhone"),
    demoBar: document.getElementById("demoBar"),
    btnPlay: document.getElementById("btnPlay"),
    btnPause: document.getElementById("btnPause"),
    autoplaySpeed: document.getElementById("autoplaySpeed"),
    prevBtn: document.getElementById("prevBtn"),
    nextBtn: document.getElementById("nextBtn"),
    prevBtnSteps: document.getElementById("prevBtnSteps"),
    nextBtnSteps: document.getElementById("nextBtnSteps"),
    backToMenu: document.getElementById("backToMenu"),
  };
}

function init() {
  document.getElementById("app").innerHTML = renderShell();
  cacheElements();
  mountScreens();
  bindEvents();

  document.documentElement.classList.add("view-code");
  document.documentElement.classList.remove("view-photo", "mode-ai");
  updateChips();
  goTo(0);
  fitPhone();
  updatePlayState();
}

init();
