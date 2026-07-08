# Aumet — Pharmacy Register Flow Demo

Interactive mobile mockup for reviewing the Aumet pharmacy sign-up experience. Built for stakeholder demos and A/B comparison between the current flow, editable prototypes, and the AI document verification path.

**Live demo:** https://mohamedabusamra.github.io/aumet-register-flow-demo/

## Features

- **Phone mockup** with auto-scaled device frame and play/pause autoplay
- **Three view modes**
  - **Screenshot** — real device captures from the app
  - **Editable** — HTML/CSS prototypes you can tweak in code
  - **AI** — self-service document upload with pass/fail branching
- **Step browser** — navigate the full flow with grouped steps and prev/next controls
- **AI pass/fail toggle** — switch between approved and blocked outcomes on the phone controls

## Quick start

Open `index.html` in a browser (double-click works — uses the bundled `js/bundle.js`).

Or run a local server:

```bash
python3 -m http.server
# open http://localhost:8000
```

## Project structure

```
├── index.html              # App shell
├── css/app.css             # Layout and phone styles
├── js/
│   ├── app.js              # Main logic (ES modules)
│   ├── bundle.js           # Bundled build for file://
│   ├── components/         # Shell markup
│   ├── config/             # Scope and view config
│   ├── data/               # Screen definitions (signup, AI, login)
│   └── templates/          # Editable screen HTML
├── scr/                    # Screenshot assets by flow group
│   ├── onboarding/
│   ├── register-form/
│   ├── verify/
│   ├── profile/
│   ├── documents/
│   └── done/
└── scripts/build-bundle.cjs
```

## After editing JavaScript

Rebuild the bundle so `index.html` picks up changes when opened without a server:

```bash
node scripts/build-bundle.cjs
```

## Flow overview

| Mode | Screens | Notes |
|------|---------|-------|
| Screenshot / Editable | 18 steps | Onboarding → register → OTP → profile → documents → done |
| AI | ~20 steps | Same through location, then AI doc check with pass or fail branch |

Default view on load: **Sign up → AI → Pass**.

## License

Internal Aumet demo — not for public distribution without approval.
