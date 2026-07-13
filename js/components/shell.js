/** App shell markup — sidebar + phone stage */
export function renderShell() {
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
