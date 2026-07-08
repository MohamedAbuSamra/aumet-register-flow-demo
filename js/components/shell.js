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
            <span class="section-label">Scope</span>
            <div class="chip-row" id="scopeChips">
              <button type="button" class="chip chip-signup active" data-scope="signup">Sign up</button>
              <button type="button" class="chip chip-login" data-scope="login">Login</button>
            </div>
          </div>

          <div class="panel-section" id="viewSection">
            <span class="section-label">View</span>
            <div class="chip-row" id="viewChips">
              <button type="button" class="chip chip-view" data-view="photo">Screenshot</button>
              <button type="button" class="chip chip-view" data-view="code">Editable</button>
              <button type="button" class="chip chip-ai active" data-flow="ai">AI</button>
            </div>
          </div>

          <button type="button" class="steps-entry" id="openSteps">
            <span class="steps-entry-label">Browse steps</span>
            <span class="chip chip-count" id="stepCount">0</span>
            <span class="steps-entry-chevron">›</span>
          </button>

          <div class="scope-hint" id="scopeHint"></div>
        </div>

        <div class="panel-view" id="panelSteps">
          <div class="panel-top">
            <button type="button" class="panel-back" id="backToMenu">‹ Back</button>
            <div class="steps-head-meta">
              <div class="steps-head-row">
                <span class="chip chip-scope" id="stepsScopeChip">Sign up</span>
                <span class="flow-progress" id="flowProgress">1 / 21</span>
              </div>
              <div class="progress-track"><div class="progress-fill" id="progressFill"></div></div>
            </div>
          </div>
          <div class="steps-scroll-panel">
            <ul class="steps-list" id="stepsList"></ul>
            <div class="steps-empty" id="stepsEmpty" hidden>
              <span class="chip chip-muted">Coming soon</span>
              <p>Add login screenshots to <code>js/data/login-screens.js</code></p>
            </div>
          </div>
          <div class="panel-steps-foot">
            <div class="nav-row">
              <button class="btn-prev" id="prevBtn" type="button" aria-label="Previous">‹</button>
              <button class="btn-next" id="nextBtn" type="button" aria-label="Next">›</button>
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
                <div class="phone-screen" id="phoneScreen"></div>
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
              <div class="demo-ai-result" id="aiResultToggle" title="AI verification outcome">
                <button type="button" class="demo-result-btn" data-result="fail">Fail</button>
                <button type="button" class="demo-result-btn active" data-result="pass">Pass</button>
              </div>
            </div>
          </div>
        </div>
        <div class="scope-empty-phone" id="scopeEmptyPhone" hidden>
          <span class="chip chip-muted">Login</span>
          <p>Coming soon</p>
          <p class="scope-empty-hint">Add screens in <code>js/data/login-screens.js</code></p>
        </div>
      </div>
    </main>
  </div>`;
}
