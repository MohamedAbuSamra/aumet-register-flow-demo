/** Scope definitions — add new flows here (login, signup, etc.) */
export const SCOPES = {
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

export const VIEW_MODES = {
  photo: { id: "photo", label: "Screenshot", chipClass: "chip-view" },
  code: { id: "code", label: "Editable", chipClass: "chip-view" },
  ai: { id: "ai", label: "AI flow", chipClass: "chip-ai" },
};
