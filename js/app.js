import { renderShell } from "./components/shell.js";
import { SCOPES } from "./config/scopes.js";
import { signupScreens } from "./data/signup-screens.js";
import { loginScreens } from "./data/login-screens.js";
import { aiScreens, buildAiDemoFlow } from "./data/ai-screens.js";
import { codeTemplates } from "./templates/signup-templates.js";
import { buildAiTemplates } from "./templates/ai-templates.js";

const aiTemplates = buildAiTemplates();

const state = {
  scope: "signup",
  mainMode: "ai",
  viewMode: "photo",
  current: 0,
  isPlaying: false,
  autoplayTimer: null,
  aiSimResult: "pass",
};

let els = {};

function activeFlow() {
  if (state.scope === "login") return loginScreens;
  if (state.mainMode === "ai") return buildAiDemoFlow(state.aiSimResult);
  return signupScreens;
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

  signupScreens.forEach((s, i) => {
    const el = document.createElement("div");
    el.className = "screen" + (i === 0 ? " active" : "");
    el.dataset.screen = s.id;
    el.dataset.flow = "current";
    el.innerHTML = `
      <div class="screen-photo"><img src="${s.photo}" alt="${s.label}" loading="lazy"${s.photoFit ? ` class="fit-${s.photoFit}"` : ""} /></div>
      <div class="screen-code">${codeTemplates[s.id] || ""}</div>`;
    phoneScreen.appendChild(el);
  });

  aiScreens.forEach((s) => {
    const el = document.createElement("div");
    el.className = "screen";
    el.dataset.screen = s.id;
    el.dataset.flow = "ai";
    el.innerHTML = `<div class="screen-code">${aiTemplates[s.id]}</div>`;
    phoneScreen.appendChild(el);
  });
}

function showPanel(name) {
  els.panelMenu.classList.toggle("active", name === "menu");
  els.panelSteps.classList.toggle("active", name === "steps");
}

function updateChips() {
  els.scopeChips.querySelectorAll(".chip").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.scope === state.scope);
  });

  const isPhoto = state.scope === "signup" && state.mainMode === "current" && state.viewMode === "photo";
  const isEdit = state.scope === "signup" && state.mainMode === "current" && state.viewMode === "code";
  const isAi = state.scope === "signup" && state.mainMode === "ai";

  els.viewSection.hidden = state.scope === "login";
  els.viewChips.querySelectorAll(".chip").forEach((btn) => {
    if (btn.dataset.flow === "ai") btn.classList.toggle("active", isAi);
    else if (btn.dataset.view === "photo") btn.classList.toggle("active", isPhoto);
    else if (btn.dataset.view === "code") btn.classList.toggle("active", isEdit);
  });

  els.stepsScopeChip.textContent = SCOPES[state.scope]?.label || state.scope;
  els.stepsScopeChip.className = `chip chip-scope chip-${state.scope}`;

  const flow = activeFlow();
  els.stepCount.textContent = String(flow.length);
  els.scopeHint.textContent = state.scope === "login"
    ? SCOPES.login.description
    : isAi
      ? (state.aiSimResult === "pass"
        ? "AI demo · Pass — verified & ready to go"
        : "AI demo · Fail — documents rejected & blocked")
      : "Current app sign up";

  const empty = state.scope === "login" && !loginScreens.length;
  els.scopeEmptyPhone.hidden = !empty;
  els.phoneColumn.hidden = empty;
}

function setScope(scope) {
  if (state.scope === scope) return;
  state.scope = scope;
  state.current = 0;
  if (scope === "login") {
    state.mainMode = "current";
    state.viewMode = "photo";
  }
  applyDocumentMode();
  updateChips();
  goTo(0);
  fitPhone();
}

function setMainMode(mode, resetStep = false) {
  const changed = state.mainMode !== mode;
  state.mainMode = mode;
  if (resetStep || changed) state.current = 0;
  applyDocumentMode();
  updateChips();
  updateAiResultButtons();
  goTo(state.current);
  fitPhone();
}

function setView(mode) {
  state.viewMode = mode;
  document.documentElement.classList.toggle("view-photo", mode === "photo");
  document.documentElement.classList.toggle("view-code", mode === "code");
  updateChips();
}

function applyDocumentMode() {
  document.documentElement.classList.toggle("mode-ai", state.mainMode === "ai" && state.scope === "signup");
  document.documentElement.classList.toggle("mode-current", state.mainMode === "current" || state.scope === "login");
  document.documentElement.classList.toggle("mode-login", state.scope === "login");
  if (state.scope === "login") {
    document.documentElement.classList.remove("mode-ai");
  }
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
    const group = s.group || s.phase || "Steps";
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

function updateAiResultButtons() {
  if (!els.aiResultToggle) return;
  els.aiResultToggle.querySelectorAll(".demo-result-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.result === state.aiSimResult);
  });
}

function setAiSimResult(result) {
  if (state.aiSimResult === result) return;
  state.aiSimResult = result;
  updateAiResultButtons();
  if (state.mainMode === "ai" && state.scope === "signup") {
    updateChips();
    goToId("ai-upload");
    return;
  }
  updateChips();
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
      if (el.id === "btnSubmitAi") {
        goToId("ai-processing");
        runAiProcessing();
        return;
      }
      goToId(el.dataset.goto);
      if (el.dataset.goto === "ai-processing") runAiProcessing();
    };
  });
  const mockTax = document.getElementById("mockUploadTax");
  if (mockTax) {
    mockTax.onclick = (e) => {
      e.preventDefault();
      const slot = document.getElementById("taxSlot");
      if (slot) {
        slot.classList.add("uploaded");
        slot.classList.remove("error");
        slot.innerHTML = `<div class="slot-icon">✓</div><div class="slot-body"><h4>Tax Card</h4><p>tax_card.pdf · 640 KB</p><button class="slot-action">Replace file</button></div>`;
      }
    };
  }
}

function runAiProcessing() {
  const rows = document.querySelectorAll("#aiSteps .ai-step-row");
  if (!rows.length) return;
  rows.forEach((r) => { r.classList.remove("active", "done"); });
  let i = 0;
  const tick = () => {
    if (i > 0) rows[i - 1].classList.replace("active", "done");
    if (i < rows.length) {
      rows[i].classList.add("active");
      i++;
      setTimeout(tick, 900);
    } else {
      const pass = state.aiSimResult === "pass";
      setTimeout(() => goToId(pass ? "ai-approved" : "ai-failed"), 600);
    }
  };
  setTimeout(tick, 400);
}

function goTo(index) {
  const flow = activeFlow();
  if (!flow.length) {
    state.current = 0;
    els.flowProgress.textContent = "0 / 0";
    els.progressFill.style.width = "0%";
    renderStepsList();
    return;
  }

  state.current = Math.max(0, Math.min(flow.length - 1, index));
  const step = flow[state.current];

  document.querySelectorAll(".screen").forEach((el) => {
    const inFlow = state.scope === "login"
      ? false
      : el.dataset.flow === (state.mainMode === "ai" ? "ai" : "current");
    el.classList.toggle("active", inFlow && el.dataset.screen === step.id);
  });

  els.flowProgress.textContent = `${state.current + 1} / ${flow.length}`;
  els.progressFill.style.width = `${((state.current + 1) / flow.length) * 100}%`;
  els.prevBtn.disabled = state.current === 0;
  els.nextBtn.disabled = state.current === flow.length - 1;
  renderStepsList();
  bindGoto();

  const activeBtn = els.stepsList.querySelector("button.active");
  if (activeBtn) activeBtn.scrollIntoView({ block: "nearest", behavior: "smooth" });

  if (state.mainMode === "current" && step.id === "loading") setTimeout(() => goTo(state.current + 1), 2000);
  if (state.mainMode === "ai" && step.id === "ai-loading") setTimeout(() => goTo(state.current + 1), 2000);
  requestAnimationFrame(fitPhone);
}

function goToId(id) {
  const flow = activeFlow();
  const idx = flow.findIndex((s) => s.id === id);
  if (idx >= 0) goTo(idx);
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

  els.scopeChips.querySelectorAll(".chip").forEach((btn) => {
    btn.addEventListener("click", () => setScope(btn.dataset.scope));
  });

  els.viewChips.querySelectorAll("[data-view]").forEach((btn) => {
    btn.addEventListener("click", () => {
      setMainMode("current", false);
      setView(btn.dataset.view);
      showPanel("menu");
    });
  });

  els.viewChips.querySelector("[data-flow='ai']").addEventListener("click", () => {
    setScope("signup");
    setMainMode("ai", true);
    showPanel("menu");
  });

  els.btnPlay.addEventListener("click", playDemo);
  els.btnPause.addEventListener("click", pauseDemo);
  els.autoplaySpeed.addEventListener("change", setupAutoplay);

  els.aiResultToggle?.querySelectorAll(".demo-result-btn").forEach((btn) => {
    btn.addEventListener("click", () => setAiSimResult(btn.dataset.result));
  });

  els.prevBtn.addEventListener("click", () => goTo(state.current - 1));
  els.nextBtn.addEventListener("click", () => goTo(state.current + 1));

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") goTo(state.current + 1);
    if (e.key === "ArrowLeft") goTo(state.current - 1);
    if (e.key === " " && !/^(INPUT|SELECT|TEXTAREA)$/.test(document.activeElement?.tagName)) {
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
    scopeChips: document.getElementById("scopeChips"),
    viewChips: document.getElementById("viewChips"),
    viewSection: document.getElementById("viewSection"),
    scopeHint: document.getElementById("scopeHint"),
    openSteps: document.getElementById("openSteps"),
    stepCount: document.getElementById("stepCount"),
    stepsList: document.getElementById("stepsList"),
    stepsEmpty: document.getElementById("stepsEmpty"),
    stepsScopeChip: document.getElementById("stepsScopeChip"),
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
    aiResultToggle: document.getElementById("aiResultToggle"),
    prevBtn: document.getElementById("prevBtn"),
    nextBtn: document.getElementById("nextBtn"),
    backToMenu: document.getElementById("backToMenu"),
  };
}

function init() {
  document.getElementById("app").innerHTML = renderShell();
  cacheElements();
  mountScreens();
  bindEvents();

  document.documentElement.classList.add("view-photo");
  applyDocumentMode();
  updateChips();
  updateAiResultButtons();
  goTo(0);
  fitPhone();
  updatePlayState();
}

init();
