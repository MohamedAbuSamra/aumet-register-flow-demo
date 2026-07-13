/**
 * Epics = top-level demo cases.
 * Add a new entry here when you start a new flow (Pulse, Login, etc.).
 */
export const EPICS = {
  register: {
    id: "register",
    label: "Register",
    chipClass: "chip-register",
    description: "Pharmacy registration & complete profile",
  },
};

/** @deprecated use EPICS — kept as alias during rename */
export const SCOPES = EPICS;
