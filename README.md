# HealthAI

HealthAI is an Expo / React Native portfolio prototype focused on a mobile-first health-oriented interface and authentication-style onboarding flows.

The project is built with Expo Router and TypeScript and can run on Android, iOS and the web. It is currently a development/portfolio project rather than a production medical application.

## Current scope

- Expo Router based application structure
- Tab navigation with React Navigation
- Sign-up / onboarding screen work
- Shared styled-components based UI primitives
- Responsive React Native / React Native Web support
- Web export and Netlify configuration
- Jest / jest-expo test setup
- TypeScript configuration

## Tech stack

- Expo 52
- React 18
- React Native 0.76
- TypeScript
- Expo Router
- React Navigation
- styled-components
- Jest / jest-expo
- React Native Web

## Project structure

```text
HealthAI/
├── app/
│   ├── (tabs)/        # Tab-based routes
│   ├── screens/       # Authentication/onboarding screens
│   ├── _layout.tsx    # Root router layout
│   └── index.tsx      # Entry route
├── assets/            # Images, fonts and static assets
├── components/        # Reusable interface components
├── constants/         # Shared constants/theme values
├── hooks/             # Custom hooks
├── scripts/           # Project helper scripts
├── netlify.toml       # Web deployment configuration
└── package.json
```

## Getting started

### Requirements

- Node.js 18+ for local Expo development
- Node.js 22 for parity with the current Netlify build configuration
- npm
- Expo tooling through `npx`

### Install

```bash
npm install
```

### Start development

```bash
npm start
```

or run a target directly:

```bash
npm run android
npm run ios
npm run web
```

## Build and quality commands

```bash
npm run build       # Export the web build with Expo
npm run export-web  # Explicit web export
npm run lint        # Expo lint
npm test            # Jest in watch mode for local development
npm run test:ci     # Run Jest once without watch mode (CI/pre-push)
```

## Web deployment

The repository includes a Netlify configuration for the web export. Netlify currently pins Node.js 22 and executes `npm install && npm run build` during deployment.

Because Expo web-export conventions can change between SDK versions, verify the generated output directory after dependency or Expo upgrades and keep the Netlify `publish` setting aligned with the actual export folder before relying on a production deployment.

## Authentication configuration

The current Google and Facebook sign-in setup still uses placeholder client IDs in the prototype screen. Replace those placeholders with environment- or build-config values when wiring real OAuth credentials; do not commit production client secrets or tokens to the repository.

## Security and privacy note

Authentication forms must never log passwords, tokens or other credentials. A previous development `console.log` that exposed sign-in values was removed from the current code in a dedicated security fix; repository history should not be assumed to be free of previously committed sensitive values unless it has been explicitly rewritten and audited.

HealthAI is a portfolio prototype. It does not provide medical advice, diagnosis or treatment and should not be treated as a production healthcare system without a full security, privacy, legal and clinical review.

## Project status

The repository still contains prototype and starter-derived areas. Before production use, authentication, data persistence, API boundaries, consent/privacy flows, accessibility and medical-data handling would need to be designed and audited explicitly.
