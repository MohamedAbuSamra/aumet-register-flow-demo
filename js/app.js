import { renderShell } from "./components/shell.js";
import { EPICS } from "./config/scopes.js";
import { signupScreens } from "./data/signup-screens.js";
import { loginScreens } from "./data/login-screens.js";
import { codeTemplates } from "./templates/signup-templates.js";

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
};

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
      let fileEl = meta.querySelector("span");
      if (!fileEl) {
        fileEl = document.createElement("span");
        meta.appendChild(fileEl);
      }
      fileEl.textContent = name;
    }

    const badge = row.querySelector(".cp-doc-badge");
    if (badge) {
      badge.className = "cp-doc-badge is-ok";
      badge.textContent = "Uploaded ✓";
    }

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
        const meta = row.querySelector(".cp-doc-meta");
        meta?.querySelector("span")?.remove();
        const badge = row.querySelector(".cp-doc-badge");
        if (badge) {
          badge.className = "cp-doc-badge is-missing-badge";
          badge.textContent = "⚠ Missing";
        }
        const thumb = row.querySelector(".cp-doc-thumb");
        if (thumb) {
          thumb.className = "cp-doc-thumb cp-doc-thumb-missing";
          thumb.innerHTML =
            '<svg viewBox="0 0 40 40" aria-hidden="true"><rect x="8" y="6" width="24" height="28" rx="3" fill="#fff7ed" stroke="#fb923c" stroke-width="1.5"/><path fill="#fb923c" d="M14 14h12v2H14zm0 5h12v2H14zm0 5h8v2h-8z"/></svg>';
        }
        const more = row.querySelector(".cp-doc-more");
        if (more) {
          more.outerHTML = `<button type="button" class="cp-doc-upload-btn">Uplaod</button>`;
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
  const hasFailed = root.querySelector(".cp-doc.is-failed");
  cta.textContent = hasFailed ? "Fix & resubmit" : "Complete Profile";
}

function setDocBanner(root, text) {
  const banner = root.querySelector("#cp-doc-banner");
  if (!banner) return;
  if (!text) {
    banner.hidden = true;
    banner.textContent = "";
    return;
  }
  banner.hidden = false;
  banner.textContent = text;
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
  if (state.aiRunning) return;
  const verifySheet = root.querySelector("#ai-verify-sheet");
  const submittedSheet = root.querySelector("#profile-submitted-sheet");
  const list = root.querySelector("#ai-verify-list");
  if (!verifySheet || !list) return;

  const docs = AI_DOC_META.map((meta) => ({
    ...meta,
    row: root.querySelector(`.cp-doc[data-doc="${meta.id}"]`),
  }));

  const missing = docs.filter((d) => !d.row || !d.row.classList.contains("is-uploaded"));
  if (missing.length) {
    setDocBanner(root, "Upload all documents before completing your profile.");
    missing.forEach((d) => d.row?.classList.add("is-highlight"));
    setTimeout(() => root.querySelectorAll(".is-highlight").forEach((el) => el.classList.remove("is-highlight")), 1200);
    return;
  }

  state.aiRunning = true;
  clearDocFailures(root);
  closeDocSheet();
  closeSheet(submittedSheet);
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
    failed.forEach((doc) => markDocFailed(doc.row, doc.failReason));
    setDocBanner(root, "Some documents are not valid. Replace them with the correct files and resubmit.");
    updateDocsCta(root);
    state.aiRunning = false;
    return;
  }

  closeSheet(verifySheet);
  openSheet(submittedSheet);
  state.aiRunning = false;
}

function bindAiVerify() {
  const root = document.querySelector(".screen.active .cp");
  if (!root) return;

  root.querySelectorAll("[data-ai-verify]").forEach((btn) => {
    btn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
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
