export const pinSvg = `<svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`;
export const docSvg = `<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>`;
export const infoSvg = `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`;

export function registerForm(bottom) {
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

export function stepper(doneCount) {
  const dots = [];
  dots.push('<div class="dot done">✓</div>');
  for (let i = 1; i <= 3; i++) {
    dots.push(`<div class="line ${i <= doneCount ? "done" : "pending"}"></div>`);
    dots.push(`<div class="dot ${i < doneCount ? "done" : "pending"}">${i < doneCount ? "✓" : i}</div>`);
  }
  return `<div class="stepper">${dots.join("")}</div>`;
}

export function milestoneScreen(title, icon, text, btn, goto, done) {
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

export function profileScreen(done) {
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

export const codeTemplates = {
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


