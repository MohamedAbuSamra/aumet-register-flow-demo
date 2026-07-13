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
      </div>

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

export function profileTabs(active = 1) {
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

export const codeTemplates = {
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
    <div class="home">
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

        <button type="button" class="home-profile-card" data-goto="complete-info" data-demo="complete-profile">
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

  "complete-info": cpShell({
    activeTab: 1,
    backGoto: "home",
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
    overlay: docUpdateSheet,
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
};
