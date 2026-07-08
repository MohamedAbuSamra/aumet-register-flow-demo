import { pinSvg, docSvg } from './icons.js';
import { registerForm, milestoneScreen, codeTemplates } from './signup-templates.js';

export function prefixGotos(html) {
  return html.replace(/data-goto="(?!ai-)([^"]+)"/g, (_, id) => `data-goto="ai-${id}"`);
}

export function profileScreenAi(opts = {}) {
  const { docsOk = true, docsBlocked = false, otherDone = true } = opts;
  const docClass = docsBlocked ? "warn" : docsOk ? "ok" : "warn";
  const docText = docsBlocked ? "AI rejected — re-upload required" : docsOk ? "AI verified ✓" : "Pending AI check";
  const docBadge = docsBlocked ? "!" : docsOk ? "✓" : "!";
  return `
    <div class="app-header">
      <button class="back-btn" data-goto="ai-welcome">‹</button>
      <h2>Complete your profile</h2>
    </div>
    <div class="screen-body" style="padding-top:6px;">
      <div class="field">
        <label>Pharmacy Phone Number</label>
        <div style="display:flex;align-items:center;border:1px solid var(--border);border-radius:var(--radius-input);padding:11px 14px;">
          <span style="flex:1;font-size:.82rem;font-weight:600;">780305398</span><span style="color:#b0bec5;">›</span>
        </div>
        <p class="field-hint" style="color:var(--warn);">Not Verified</p>
      </div>
      <div class="check-item" ${docsBlocked ? 'data-goto="ai-reupload"' : ""}>
        <div class="icon">📄<span class="badge ${docClass === "ok" ? "ok" : "warn"}">${docBadge}</span></div>
        <div class="info"><h4>Upload pharmacy documents</h4><p class="${docClass}">${docText}</p></div>
        <span class="arrow">›</span>
      </div>
      <div class="check-item">
        <div class="icon">📍<span class="badge ok">✓</span></div>
        <div class="info"><h4>Add Location Details</h4><p class="ok">Location Details Added</p></div>
        <span class="arrow">›</span>
      </div>
      <div class="check-item">
        <div class="icon">ℹ️<span class="badge ${otherDone ? "ok" : "warn"}">${otherDone ? "✓" : "!"}</span></div>
        <div class="info"><h4>Add Other Information</h4><p class="${otherDone ? "ok" : "warn"}">${otherDone ? "Added" : "Not Added"}</p></div>
        <span class="arrow">›</span>
      </div>
      ${docsBlocked ? `<div class="result-banner fail" style="margin-top:10px">App access is blocked until documents pass AI verification.</div>` : ""}
    </div>`;
}

export function buildAiTemplates() {
  const aiTemplates = {
  "ai-onboarding": prefixGotos(codeTemplates.onboarding),
  "ai-register-1": prefixGotos(registerForm(false, false)),
  "ai-register-2": prefixGotos(registerForm(false, true)),
  "ai-loading": prefixGotos(codeTemplates.loading),
  "ai-otp": prefixGotos(codeTemplates.otp),
  "ai-reg-complete": milestoneScreen("Registration completed!", pinSvg,
    "Now it's time to complete your profile to have your <strong>account verified.</strong><br><br>Let's get started with your pharmacy's GPS location",
    "Add Pharmacy Location", "ai-location-map", 1),
  "ai-location-map": prefixGotos(codeTemplates["location-map"]),
  "ai-location-details": prefixGotos(codeTemplates["location-details"]),
  "ai-location-added": milestoneScreen("Location Added!", docSvg,
    "Great job!<br><br>Next, verify your pharmacy certificates with <strong>AI</strong> — no manual review needed.",
    "Verify documents with AI", "ai-intro", 2),
  "ai-other-info": prefixGotos(codeTemplates["other-info"].replace('data-goto="welcome"', 'data-goto="ai-welcome"')),
  "ai-welcome": prefixGotos(codeTemplates.welcome),
  "ai-profile": profileScreenAi({ docsOk: true, otherDone: true }),
  "ai-profile-blocked": profileScreenAi({ docsBlocked: true, otherDone: true }),

  "ai-intro": `
    <div class="app-header"><h2>Verify your pharmacy</h2></div>
    <div class="screen-body">
      <div class="ai-intro-card">
        <span class="ai-badge">✦ AI-powered</span>
        <h4 style="margin-top:8px">Automatic document verification</h4>
        <p>Upload your certificates and our AI will verify them instantly — no waiting for a business team call.</p>
      </div>
      <p style="font-size:.74rem;color:var(--muted);line-height:1.5;margin-bottom:12px;">
        We check document type, pharmacy name, expiry date, and country requirements before granting app access.
      </p>
      <div class="doc-checklist">
        <div class="doc-slot"><div class="slot-icon">📋</div><div class="slot-body"><h4>Pharmacy Licence</h4><p>Must match your registered pharmacy name</p></div></div>
        <div class="doc-slot"><div class="slot-icon">🏢</div><div class="slot-body"><h4>Trade Registry</h4><p>Valid commercial registration certificate</p></div></div>
        <div class="doc-slot"><div class="slot-icon">🧾</div><div class="slot-body"><h4>Tax Card</h4><p>Current tax identification document</p></div></div>
      </div>
    </div>
    <div class="screen-footer"><button class="btn btn-ai" data-goto="ai-upload">Continue to upload</button></div>`,

  "ai-upload": `
    <div class="app-header">
      <button class="back-btn" data-goto="ai-intro">‹</button>
      <h2>Upload documents</h2>
    </div>
    <div class="screen-body">
      <p style="font-size:.72rem;color:var(--muted);margin-bottom:12px;">Upload each required certificate. AI validates after you submit.</p>
      <div class="doc-checklist">
        <div class="doc-slot uploaded">
          <div class="slot-icon">✓</div>
          <div class="slot-body">
            <h4>Pharmacy Licence</h4>
            <p>pharmacy_licence.pdf · 1.2 MB</p>
            <button class="slot-action">Replace file</button>
          </div>
        </div>
        <div class="doc-slot uploaded">
          <div class="slot-icon">✓</div>
          <div class="slot-body">
            <h4>Trade Registry</h4>
            <p>trade_registry.pdf · 890 KB</p>
            <button class="slot-action">Replace file</button>
          </div>
        </div>
        <div class="doc-slot" id="taxSlot">
          <div class="slot-icon">+</div>
          <div class="slot-body">
            <h4>Tax Card</h4>
            <p>PDF or image · max 10 MB</p>
            <button class="slot-action" id="mockUploadTax">Upload file</button>
          </div>
        </div>
      </div>
    </div>
    <div class="screen-footer">
      <button class="btn btn-ai" id="btnSubmitAi" data-goto="ai-processing">Submit for AI verification</button>
    </div>`,

  "ai-processing": `
    <div class="ai-progress-card">
      <div class="ai-orb">✦</div>
      <h3>AI is verifying your documents</h3>
      <p>This usually takes 30–60 seconds. You can stay on this screen.</p>
      <div class="ai-steps" id="aiSteps">
        <div class="ai-step-row done"><span class="si">✓</span> Reading document text (OCR)</div>
        <div class="ai-step-row active"><span class="si">◉</span> Matching document type</div>
        <div class="ai-step-row"><span class="si">○</span> Checking expiry &amp; validity</div>
        <div class="ai-step-row"><span class="si">○</span> Verifying pharmacy name match</div>
        <div class="ai-step-row"><span class="si">○</span> Final compliance decision</div>
      </div>
    </div>`,

  "ai-failed": `
    <div class="app-header"><h2>Verification failed</h2></div>
    <div class="screen-body">
      <div class="result-banner fail">
        <strong>AI could not verify your documents.</strong> Some files are not what we need to onboard your pharmacy.
      </div>
      <div class="issue-list">
        <div class="issue-item">
          <strong>Tax Card — Wrong document</strong>
          Uploaded file appears to be a personal ID, not a tax registration certificate.
        </div>
        <div class="issue-item">
          <strong>Trade Registry — Name mismatch</strong>
          Document name does not match your registered pharmacy name.
        </div>
      </div>
      <p style="font-size:.7rem;color:var(--muted);line-height:1.45;">
        Your account is temporarily blocked from using the app until valid documents are submitted.
      </p>
    </div>
    <div class="screen-footer">
      <button class="btn btn-danger" data-goto="ai-blocked">View account status</button>
      <button class="btn btn-ghost" data-goto="ai-reupload" style="margin-top:10px">Fix &amp; re-upload now</button>
    </div>`,

  "ai-blocked": `
    <div class="block-screen">
      <div class="block-icon">⊘</div>
      <h3>Account access blocked</h3>
      <p>AI verification failed. You cannot browse, order, or use app features until your pharmacy documents pass verification.</p>
      <p style="margin-top:12px;font-size:.7rem;color:#b91c1c;font-weight:600;">Reason: Invalid or mismatched certificates</p>
    </div>
    <div class="screen-footer">
      <button class="btn btn-danger" data-goto="ai-reupload">Re-upload documents</button>
      <button class="btn btn-outline" data-goto="ai-app-block" style="margin-top:10px;border-color:#94a3b8;color:#64748b">See blocked app view</button>
    </div>`,

  "ai-reupload": `
    <div class="app-header">
      <button class="back-btn" data-goto="ai-blocked">‹</button>
      <h2>Fix your documents</h2>
    </div>
    <div class="screen-body">
      <div class="result-banner fail" style="margin-bottom:12px">Re-upload the files marked below. AI will re-check automatically.</div>
      <div class="doc-checklist">
        <div class="doc-slot uploaded">
          <div class="slot-icon">✓</div>
          <div class="slot-body"><h4>Pharmacy Licence</h4><p style="color:var(--success)">Verified — no action needed</p></div>
        </div>
        <div class="doc-slot error">
          <div class="slot-icon">!</div>
          <div class="slot-body">
            <h4>Trade Registry</h4>
            <p style="color:var(--error)">Name mismatch — upload correct file</p>
            <button class="slot-action">Upload new file</button>
          </div>
        </div>
        <div class="doc-slot error">
          <div class="slot-icon">!</div>
          <div class="slot-body">
            <h4>Tax Card</h4>
            <p style="color:var(--error)">Wrong document type detected</p>
            <button class="slot-action">Upload new file</button>
          </div>
        </div>
      </div>
    </div>
    <div class="screen-footer">
      <button class="btn btn-ai" data-goto="ai-processing">Resubmit for AI verification</button>
    </div>`,

  "ai-approved": `
    <div class="app-header"><h2>Verification complete</h2></div>
    <div class="screen-body" style="display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding-top:30px;">
      <div class="welcome-check" style="position:relative;transform:none;top:auto;left:auto;margin:0 auto 16px;">
        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h3 style="font-size:.95rem;margin-bottom:8px;">Documents verified by AI</h3>
      <p style="font-size:.74rem;color:var(--muted);line-height:1.5;max-width:240px;">
        All certificates passed automated checks. Your pharmacy can now use Aumet — no manual onboarding call required.
      </p>
      <div class="result-banner ok" style="margin-top:20px;text-align:left;">
        ✓ Pharmacy Licence · valid<br>
        ✓ Trade Registry · name matched<br>
        ✓ Tax Card · valid
      </div>
    </div>
    <div class="screen-footer">
      <button class="btn btn-primary" data-goto="ai-other-info">Continue onboarding</button>
    </div>`,

  "ai-app-block": `
    <div style="flex:1;display:flex;flex-direction:column;min-height:0;">
      <div class="mini-home" style="flex:1;">
        <div class="fake-content">
          <p style="font-weight:700;color:var(--text);margin-bottom:8px;">Aumet</p>
          <p>Products · Orders · Offers</p>
          <p style="margin-top:40px;font-size:.72rem;">(App content dimmed)</p>
        </div>
        <div class="app-block-overlay">
          <div class="block-modal">
            <div class="block-icon">⊘</div>
            <h3>Access blocked</h3>
            <p>Your documents failed AI verification. Re-upload valid certificates to unlock the app.</p>
            <button class="btn btn-danger" data-goto="ai-reupload">Re-upload documents</button>
          </div>
        </div>
      </div>
      <div class="fake-nav"><span>Home</span><span>Orders</span><span>Account</span></div>
    </div>`,
};


  return aiTemplates;
}
