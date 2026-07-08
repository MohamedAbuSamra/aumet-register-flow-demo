/** AI sign-up flow screens */
export const AI_BRANCH_ID = "ai-processing";
export const AI_PASS_TAIL = ["ai-approved", "ai-other-info", "ai-welcome", "ai-profile"];
export const AI_FAIL_TAIL = ["ai-failed", "ai-blocked", "ai-reupload", "ai-app-block"];

export const aiScreens = [
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
export function buildAiDemoFlow(result = "pass") {
  const branchIdx = aiScreens.findIndex((s) => s.id === AI_BRANCH_ID);
  const shared = aiScreens.slice(0, branchIdx + 1);
  const tailIds = result === "pass" ? AI_PASS_TAIL : AI_FAIL_TAIL;
  const tail = tailIds.map((id) => aiScreens.find((s) => s.id === id)).filter(Boolean);
  return [...shared, ...tail];
}
