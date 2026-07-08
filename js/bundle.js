/* ── js/templates/signup-templates.js ── */
const pinSvg = `<svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`;
const docSvg = `<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>`;
const infoSvg = `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`;

function registerForm(bottom) {
  const prev = bottom ? "register-1" : "onboarding";
  const next = bottom ? "loading" : "register-2";
  if (!bottom) {
    return `
      <div class="status-bar"><span>15:58</span><span>5G</span></div>
      <div class="app-header"><button class="back-btn" data-goto="${prev}">‹</button><h2>Register as Pharmacy</h2></div>
      <div class="screen-body">
        <div class="field"><label>Country</label><select><option>Select Country</option></select></div>
        <div class="field"><label>City</label><input /></div>
        <div class="field"><label>Area</label><input /></div>
        <div class="field"><label>Pharmacy name</label><input placeholder="Enter Pharmacy Name" /></div>
        <div class="field"><label>Street Address</label><input placeholder="Enter Street Address" /></div>
        <div class="field"><label>Full Name</label><input placeholder="Enter Full Name" /></div>
        <div class="field">
          <div class="phone-labels"><label>Country Code</label><label>Pharmacy Phone Number</label></div>
          <div class="phone-row"><div class="country-code">🇯🇴 +962 ▾</div><input class="error" placeholder="07XXXXXXXX" /></div>
          <p class="field-hint error">Invalid Phone Number, <a href="#">need contact support?</a></p>
        </div>
      </div>
      <div class="screen-footer">
        <button class="btn btn-disabled" data-goto="${next}">Submit and Continue</button>
        <button class="btn btn-outline">Contact Support</button>
      </div>`;
  }
  return `
    <div class="status-bar"><span>15:47</span><span>5G</span></div>
    <div class="app-header"><button class="back-btn" data-goto="${prev}">‹</button><h2>Register as Pharmacy</h2></div>
    <div class="screen-body">
      <div class="field"><label>Street Address</label><input placeholder="Enter Street Address" /></div>
      <div class="field"><label>Full Name</label><input placeholder="Enter Full Name" /></div>
      <div class="field">
        <div class="phone-labels"><label>Country Code</label><label>Pharmacy Phone Number</label></div>
        <div class="phone-row"><div class="country-code">🇯🇴 +962 ▾</div><input class="error" placeholder="07XXXXXXXX" /></div>
        <p class="field-hint error">Invalid Phone Number, <a href="#">need contact support?</a></p>
      </div>
      <div class="field"><label>E-mail (Optional)</label><input placeholder="Enter your email address" /></div>
      <div class="field"><label>Password</label><input type="password" placeholder="Enter a password" /></div>
      <div class="field"><label>Referral Code/Name (Optional)</label><input placeholder="Enter Referral Code/Name" /></div>
      <div class="checkbox-row"><input type="checkbox" /><label>I confirm that I register as pharmacy on Aumet, and I'm the one responsible for procurement of pharmacy's items restock and will take the full responsibility of this account actions.</label></div>
    </div>
    <div class="screen-footer">
      <button class="btn btn-primary" data-goto="${next}">Submit and Continue</button>
      <button class="btn btn-outline">Contact Support</button>
    </div>`;
}

function stepper(doneCount) {
  const dots = [];
  dots.push('<div class="dot done">✓</div>');
  for (let i = 1; i <= 3; i++) {
    dots.push(`<div class="line ${i <= doneCount ? "done" : "pending"}"></div>`);
    dots.push(`<div class="dot ${i < doneCount ? "done" : "pending"}">${i < doneCount ? "✓" : i}</div>`);
  }
  return `<div class="stepper">${dots.join("")}</div>`;
}

function milestoneScreen(title, icon, text, btn, goto, done) {
  return `
    <div class="app-header"><button class="skip-btn" data-goto="${goto}">Skip</button></div>
    ${stepper(done)}
    <div class="milestone">
      <h3>${title}</h3>
      <div class="blob-icon">${icon}</div>
      <p>${text}</p>
    </div>
    <div class="screen-footer"><button class="btn btn-primary" data-goto="${goto}">${btn}</button></div>`;
}

function profileScreen(done) {
  return `
    <div class="app-header">
      <button class="back-btn" data-goto="welcome">‹</button>
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
      <div class="check-item"><div class="icon">📄<span class="badge ok">✓</span></div><div class="info"><h4>Upload pharmacy documents</h4><p class="ok">Files Uploaded</p></div><span class="arrow">›</span></div>
      <div class="check-item"><div class="icon">📍<span class="badge ok">✓</span></div><div class="info"><h4>Add Location Details</h4><p class="ok">Location Details Added</p></div><span class="arrow">›</span></div>
      <div class="check-item"><div class="icon">ℹ️<span class="badge ${done?"ok":"warn"}">${done?"✓":"!"}</span></div><div class="info"><h4>Add Other Information</h4><p class="${done?"ok":"warn"}">${done?"Added":"Not Added"}</p></div><span class="arrow">›</span></div>
    </div>`;
}

const codeTemplates = {
  onboarding: `
    <div class="onboard-wrap onboard-en">
      <img class="onboard-hero-img" src="scr/onboarding/onboarding-screen-1.png" alt="Compare Products &amp; Discover Hot Offers" />
      <div class="screen-footer onboard-footer">
        <button class="btn btn-primary" data-goto="register-1">Register as Pharmacy</button>
        <button class="btn btn-outline">Log In</button>
        <p class="help-link">Need Help?</p>
      </div>
    </div>`,

  "register-1": registerForm(false),
  "register-2": registerForm(true),

  loading: `
    <div class="status-bar"><span>18:56</span><span>5G 41%</span></div>
    <div class="app-header"><button class="back-btn" data-goto="register-2">‹</button><h2>Register as Pharmacy</h2></div>
    <div class="screen-body" style="opacity:.45">
      <div class="field"><label>Full Name</label><input value="djddhfyg gdjd fjh" /></div>
      <div class="field"><label>Pharmacy Phone Number</label><div class="phone-row"><div class="country-code">🇯🇴 +962 ▾</div><input value="780605399" /></div></div>
      <div class="field"><label>E-mail (Optional)</label><input placeholder="Enter your email address" /></div>
      <div class="field"><label>Password</label><input type="password" value="password" /></div>
    </div>
    <div class="screen-footer">
      <button class="btn btn-primary">Submit and Continue</button>
      <button class="btn btn-outline">Contact Support</button>
    </div>
    <div class="loading-overlay"><div class="loading-box"><div class="spinner"></div> Loading..</div></div>`,

  otp: `
    <div class="status-bar"><span>18:56</span><span>5G 41%</span></div>
    <div class="app-header">
      <button class="back-btn" data-goto="loading">‹</button>
      <h2>Verify Phone Number</h2>
      <button class="skip-btn" data-goto="reg-complete">Skip</button>
    </div>
    <div class="screen-body" style="display:flex;flex-direction:column;padding-top:8px;">
      <p class="otp-info">A code has been sent to <strong>780605399</strong> <a href="#">Edit</a></p>
      <div class="otp-boxes"><input maxlength="1"/><input maxlength="1"/><input maxlength="1"/><input maxlength="1"/><input maxlength="1"/><input maxlength="1"/></div>
      <p class="otp-resend">Didn't get the code?<br><span class="timer">resend code in 24 secs</span></p>
      <div class="support-row"><span class="wa-icon">✆</span>Call Support</div>
    </div>`,

  "reg-complete": milestoneScreen("Registration completed!", pinSvg,
    "Now it's time to complete your profile to have your <strong>account verified.</strong><br><br>Let's get started with your pharmacy's GPS location",
    "Add Pharmacy Location", "location-map", 1),

  "location-map": `
    <div class="app-header">
      <button class="back-btn" data-goto="reg-complete">‹</button>
      <h2>Pharmacy Location</h2>
      <button class="skip-btn" data-goto="location-details">Skip</button>
    </div>
    ${stepper(1)}
    <div class="map-area" style="background-image:url('scr/profile/Screenshot_20260707_191319.jpg')">
      <div class="map-pin"></div>
      <div class="map-zoom"><button>+</button><button>−</button></div>
    </div>
    <p class="map-label">Ar Rabab Bent Kaeb 8, Amman, Amman Governorate, Jordan</p>
    <div class="screen-footer"><button class="btn btn-primary" data-goto="location-details">Confirm Location</button></div>`,

  "location-details": `
    <div class="app-header">
      <button class="back-btn" data-goto="location-map">‹</button>
      <h2>Pharmacy Location Details</h2>
      <button class="skip-btn" data-goto="location-added">Skip</button>
    </div>
    ${stepper(1)}
    <div class="screen-body">
      <div class="gps-card"><p><strong>GPS Location:</strong> Ar Rabab Bent Kaeb 8, Amman, Amman Governorate, Jordan</p><button class="btn btn-primary">Change</button></div>
      <div class="field"><label>Street</label><input value="anhaha jahja" /></div>
      <div class="field"><label>Building</label><input placeholder="Building" /></div>
      <div class="field"><label>Brick/District</label><input placeholder="Brick/District" /></div>
      <div class="field"><label>Additional Directions</label><input /></div>
    </div>
    <div class="screen-footer"><button class="btn btn-primary" data-goto="location-added">Next</button></div>`,

  "location-added": milestoneScreen("Location Added!", docSvg,
    "Great job!<br><br>Next, let's upload your pharmacy license.",
    "Add Pharmacy License", "documents", 2),

  documents: `
    <div class="app-header">
      <button class="back-btn" data-goto="location-added">‹</button>
      <h2>Pharmacy Documents</h2>
      <button class="skip-btn" data-goto="documents-filled">Skip</button>
    </div>
    ${stepper(2)}
    <div class="screen-body">
      <p class="doc-hint">Required documents: Pharmacy Licence, Trade Registry and Tax Card</p>
      <button class="upload-btn" data-goto="documents-filled">📄 Upload Document</button>
      <p class="no-files">No Uploaded Files</p>
    </div>
    <div class="screen-footer"><button class="btn btn-disabled">Next</button></div>`,

  "documents-filled": `
    <div class="app-header">
      <button class="back-btn" data-goto="documents">‹</button>
      <h2>Pharmacy Documents</h2>
      <button class="skip-btn" data-goto="doc-success">Skip</button>
    </div>
    ${stepper(2)}
    <div class="screen-body">
      <p class="doc-hint">Required documents: Pharmacy Licence, Trade Registry and Tax Card</p>
      <button class="upload-btn" data-goto="doc-picker">📄 Upload Document</button>
      <p style="font-size:.8rem;font-weight:700;margin-top:16px;">Uploaded Files :</p>
      <div class="file-card">
        <p class="fname">File Name: <span>mrs fatima aqel.pdf</span></p>
        <select style="width:100%;padding:10px;border-radius:12px;border:1px solid var(--border);"><option>أخرى</option></select>
      </div>
    </div>
    <div class="screen-footer"><button class="btn btn-primary" data-goto="doc-success">Next</button></div>`,

  "doc-picker": `<div class="screen-body rtl" style="padding:0;background:rgba(0,0,0,.4);display:flex;align-items:flex-end;height:100%;">
    <div style="background:#fff;border-radius:16px 16px 0 0;width:100%;max-height:90%;overflow-y:auto;padding:12px 0;">
      <p style="text-align:center;font-size:.72rem;color:var(--muted);padding:8px;">Document type picker</p>
      ${["كشف الصحة","شهادة مزاولة الصيدلية","شهادة السجل التجاري","الهوية الشخصية","رخصة المهن","أخرى"].map(t=>`<div style="padding:14px 20px;font-size:.85rem;${t==="أخرى"?"background:#eceff1;":""}" data-goto="doc-success">${t}</div>`).join("")}
    </div></div>`,

  "doc-success": milestoneScreen("Document Uploaded!", infoSvg,
    "Almost There!<br><br>You're just one step away from completing your profile.",
    "Add Other Information", "other-info", 3),

  "other-info": `
    <div class="app-header">
      <button class="back-btn" data-goto="doc-success">‹</button>
      <h2>Other Information</h2>
      <button class="skip-btn" data-goto="welcome">Skip</button>
    </div>
    ${stepper(3)}
    <div class="screen-body">
      <div class="field"><label>Pharmacy Phone Number</label><input placeholder="Enter Pharmacy Phone Number" /></div>
      <div class="field"><label>Pharmacy Type</label><select><option>Individual</option></select></div>
      <div class="field"><label>Trade license Number</label><input placeholder="Enter Trade license Number" /></div>
      <div class="field"><label>Preferred Distributors</label><textarea rows="3" placeholder="Enter your preferred distributors names"></textarea></div>
    </div>
    <div class="screen-footer"><button class="btn btn-primary" data-goto="welcome">Done</button></div>`,

  "other-filled": `
    <div class="app-header">
      <button class="back-btn" data-goto="other-info">‹</button>
      <h2>Other Information</h2>
    </div>
    <div class="screen-body" style="padding-top:12px;">
      <div class="field"><label>Pharmacy Phone Number</label><input placeholder="Enter Pharmacy Phone Number" /></div>
      <div class="field"><label>Pharmacy Type</label><select><option>Individual</option></select></div>
      <div class="field"><label>Trade license Number</label><input value="13467" /></div>
      <div class="field"><label>Preferred Distributors</label><textarea rows="3" placeholder="Enter your preferred distributors names"></textarea></div>
    </div>
    <div class="screen-footer"><button class="btn btn-primary" data-goto="welcome">Done</button></div>`,

  welcome: `
    <div class="app-header">
      <button class="close-btn" data-goto="profile">✕</button>
      <h2>Welcome to Aumet</h2>
    </div>
    <div class="welcome-body">
      <div class="confetti-wrap">
        <span class="dot-c" style="top:10px;left:20px;background:#4fc3f7"></span>
        <span class="dot-c" style="top:30px;right:15px;background:#ffca28"></span>
        <span class="dot-c" style="bottom:20px;left:10px;background:#12b297"></span>
        <span class="dot-c" style="top:5px;right:40px;background:#90a4ae;width:4px;height:4px"></span>
        <div class="welcome-check"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>
      </div>
      <div class="welcome-text">
        <h3>Registration completed successfully</h3>
        <p>We are happy that you are now part of Aumet, Your account currently is pending verification, please complete your profile in order to verify your account. If you need any help, you can call support.</p>
      </div>
    </div>
    <div class="screen-footer">
      <button class="btn btn-outline" data-goto="profile">Complete your profile</button>
      <button class="btn btn-primary">Call Support</button>
    </div>`,

  profile: profileScreen(false),
  "profile-done": profileScreen(true),
};




/* ── js/templates/ai-templates.js ── */


function prefixGotos(html) {
  return html.replace(/data-goto="(?!ai-)([^"]+)"/g, (_, id) => `data-goto="ai-${id}"`);
}

function profileScreenAi(opts = {}) {
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

function buildAiTemplates() {
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


/* ── js/config/scopes.js ── */
/** Scope definitions — add new flows here (login, signup, etc.) */
const SCOPES = {
  signup: {
    id: "signup",
    label: "Sign up",
    chipClass: "chip-signup",
    description: "Pharmacy registration & onboarding",
  },
  login: {
    id: "login",
    label: "Login",
    chipClass: "chip-login",
    description: "Pharmacy login — add screens later",
  },
};

const VIEW_MODES = {
  photo: { id: "photo", label: "Screenshot", chipClass: "chip-view" },
  code: { id: "code", label: "Editable", chipClass: "chip-view" },
  ai: { id: "ai", label: "AI flow", chipClass: "chip-ai" },
};


/* ── js/data/signup-screens.js ── */
/** Pharmacy sign-up flow screens (screenshot layer) */
const signupScreens = [
      { id: "onboarding",    photo: "scr/onboarding/Screenshot_20260707_155801.jpg", label: "Onboarding (EN)", scope: "signup", group: "Onboarding" },
      { id: "register-1",    photo: "scr/register-form/Screenshot_20260707_185456.jpg", label: "Register form — top (EN)",  scope: "signup", group: "Register" },
      { id: "register-2",    photo: "scr/register-form/Screenshot_20260707_185500.jpg", label: "Register form — bottom (EN)", scope: "signup", group: "Register" },
      { id: "loading",       photo: "scr/register-form/Screenshot_20260707_185630.jpg", label: "Submitting…",               scope: "signup", group: "Register" },
      { id: "otp",           photo: "scr/verify/Screenshot_20260707_185635.jpg", label: "Verify phone (OTP)",        scope: "signup", group: "Verify" },
      { id: "reg-complete",  photo: "scr/profile/Screenshot_20260707_191307.jpg", label: "Registration completed",    scope: "signup", group: "Profile" },
      { id: "location-map",  photo: "scr/profile/Screenshot_20260707_191319.jpg", label: "Pharmacy location (map)",   scope: "signup", group: "Profile" },
      { id: "location-details", photo: "scr/profile/Screenshot_20260707_191326.jpg", label: "Location details",       scope: "signup", group: "Profile" },
      { id: "location-added", photo: "scr/profile/Screenshot_20260707_191333.jpg", label: "Location added",           scope: "signup", group: "Profile" },
      { id: "documents",     photo: "scr/documents/Screenshot_20260707_191343.jpg", label: "Documents — empty",         scope: "signup", group: "Documents" },
      { id: "documents-filled", photo: "scr/documents/Screenshot_20260707_191427.jpg", label: "Documents — uploaded",   scope: "signup", group: "Documents" },
      { id: "doc-picker",    photo: "scr/documents/Screenshot_20260707_191450.jpg", label: "Document type picker",      scope: "signup", group: "Documents" },
      { id: "doc-success",   photo: "scr/documents/Screenshot_20260707_191518.jpg", label: "Document uploaded!",        scope: "signup", group: "Documents" },
      { id: "other-info",    photo: "scr/profile/Screenshot_20260707_191524.jpg", label: "Other information",         scope: "signup", group: "Profile" },
      { id: "other-filled",  photo: "scr/profile/Screenshot_20260707_191820.jpg", label: "Other info — filled",       scope: "signup", group: "Profile" },
      { id: "welcome",       photo: "scr/done/Screenshot_20260707_191708.jpg", label: "Welcome / Success",           scope: "signup", group: "Done" },
      { id: "profile",       photo: "scr/done/Screenshot_20260707_191717.jpg", label: "Complete your profile",       scope: "signup", group: "Done" },
      { id: "profile-done",  photo: "scr/done/Screenshot_20260707_191856.jpg", label: "Profile checklist (done)",  scope: "signup", group: "Done" },
    ];


/* ── js/data/login-screens.js ── */
/** Login scope — placeholder for future screens & screenshots */
const loginScreens = [];


/* ── js/data/ai-screens.js ── */
/** AI sign-up flow screens */
const AI_BRANCH_ID = "ai-processing";
const AI_PASS_TAIL = ["ai-approved", "ai-other-info", "ai-welcome", "ai-profile"];
const AI_FAIL_TAIL = ["ai-failed", "ai-blocked", "ai-reupload", "ai-app-block"];

const aiScreens = [
      { id: "ai-onboarding",       label: "Onboarding",                  scope: "signup", group: "Onboarding" },
      { id: "ai-register-1",       label: "Register — pharmacy details", scope: "signup", group: "Register" },
      { id: "ai-register-2",       label: "Register — password & terms", scope: "signup", group: "Register" },
      { id: "ai-loading",          label: "Submitting registration",     scope: "signup", group: "Register" },
      { id: "ai-otp",              label: "Verify phone (OTP)",          scope: "signup", group: "Verify" },
      { id: "ai-reg-complete",     label: "Registration completed",      scope: "signup", group: "Profile" },
      { id: "ai-location-map",     label: "Pharmacy location (map)",     scope: "signup", group: "Profile" },
      { id: "ai-location-details", label: "Location details",            scope: "signup", group: "Profile" },
      { id: "ai-location-added",   label: "Location added",              scope: "signup", group: "Profile" },
      { id: "ai-intro",            label: "AI verification intro",       scope: "signup", group: "AI docs" },
      { id: "ai-upload",           label: "Upload certificates",         scope: "signup", group: "AI docs" },
      { id: "ai-processing",       label: "AI analyzing documents",      scope: "signup", group: "AI check" },
      { id: "ai-failed",           label: "Documents rejected",          scope: "signup", group: "AI check" },
      { id: "ai-blocked",          label: "Account blocked",             scope: "signup", group: "Blocked" },
      { id: "ai-reupload",         label: "Re-upload & resubmit",          scope: "signup", group: "Blocked" },
      { id: "ai-approved",         label: "AI verification approved",    scope: "signup", group: "AI check" },
      { id: "ai-other-info",       label: "Other information",           scope: "signup", group: "Profile" },
      { id: "ai-welcome",          label: "Welcome / Success",           scope: "signup", group: "Done" },
      { id: "ai-profile",          label: "Complete your profile",       scope: "signup", group: "Done" },
      { id: "ai-app-block",        label: "App access blocked",          scope: "signup", group: "Blocked" },
    ];

/** Pass or fail tail — autoplay only walks the selected branch */
function buildAiDemoFlow(result = "pass") {
  const branchIdx = aiScreens.findIndex((s) => s.id === AI_BRANCH_ID);
  const shared = aiScreens.slice(0, branchIdx + 1);
  const tailIds = result === "pass" ? AI_PASS_TAIL : AI_FAIL_TAIL;
  const tail = tailIds.map((id) => aiScreens.find((s) => s.id === id)).filter(Boolean);
  return [...shared, ...tail];
}


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


/* ── js/app.js ── */







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
