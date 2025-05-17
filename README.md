# React Design Patterns Starter

A minimal and scalable React starter template focused on best practices and modern design patterns. This boilerplate is designed to help you build maintainable, reusable, and performant React applications with TypeScript.

---

## Features

- **TypeScript** ready with strict typings  
- **Atomic design principles** for component organization  
- **React Hooks** and **Context API** support  
- Modular and scalable **folder structure**  
- Reusable UI components: Button, Text, Container, etc.  
- Scoped styling with **CSS Modules**  
- **Storybook** integration for isolated UI development  
- Code quality tools: **ESLint** and **Prettier**  
- Performance optimizations using **React.memo** and **forwardRef**  
- Easily extendable for routing, state management, and API integration

---

### Prerequisites

- Node.js (>=14.x)  
- npm or yarn package manager

### Installation

```bash
git clone https://github.com/connect-bilal/react-design-patterns-starter.git
cd react-design-patterns-starter
npm install
# or
yarn install
```

## 📦 Included Dependencies

### Core Dependencies

| Package            | Description                                      |
|--------------------|--------------------------------------------------|
| `react`            | The core library for building UI components.     |
| `react-dom`        | React DOM bindings for rendering to the browser. |
| `react-router-dom` | Declarative routing for React applications.      |
| `react-helmet`     | Manage document head for SEO optimization.       |
| `classnames`       | Utility for conditionally joining class names.   |

---

### Dev Dependencies

#### 🛠 Build & Tooling

| Package                  | Description                                             |
|--------------------------|---------------------------------------------------------|
| `vite`                   | Fast, modern build tool with native ESM support.        |
| `@vitejs/plugin-react`   | Vite plugin for React.                                  |
| `vite-tsconfig-paths`    | Supports TypeScript path aliases in Vite.              |
| `typescript`             | TypeScript language support.                            |

#### ✅ Linting & Formatting

| Package                      | Description                                        |
|------------------------------|----------------------------------------------------|
| `prettier`                   | Opinionated code formatter.                        |
| `eslint-config-prettier`     | Disables ESLint rules that conflict with Prettier. |
| `eslint-plugin-import`       | Linting support for ES6+ `import/export` syntax.   |
| `eslint-plugin-jsx-a11y`     | Accessibility linting for JSX elements.            |
| `eslint-plugin-react`        | Linting for React components and patterns.         |
| `eslint-plugin-react-hooks`  | Ensures correct usage of React Hooks.              |
| `eslint-plugin-react-refresh`| ESLint rules for React Fast Refresh.               |
| `eslint-plugin-storybook`    | Storybook-specific linting rules.                  |

#### 🧪 Testing

| Package                   | Description                                      |
|---------------------------|--------------------------------------------------|
| `vitest`                  | Vite-native unit testing framework.              |
| `@vitest/browser`         | Browser-based testing support.                   |
| `@vitest/coverage-v8`     | Coverage reports using V8 instrumentation.       |
| `playwright`              | End-to-end testing with modern browser support.  |

#### 📚 Storybook (Component Documentation)

| Package                          | Description                                       |
|----------------------------------|---------------------------------------------------|
| `@storybook/react`               | Main Storybook package for React.                |
| `@storybook/react-vite`          | Vite integration with Storybook.                 |
| `@storybook/addon-essentials`    | Core set of useful addons.                       |
| `@storybook/experimental-addon-test` | Integrates tests with stories.             |
| `@storybook/blocks`              | Visual layout and component blocks.              |
| `@storybook/test`                | Addon to run automated tests on stories.         |
| `@chromatic-com/storybook`       | Visual testing and deployment with Chromatic.    |

#### 🧹 Git Hooks & Commit Hygiene

| Package        | Description                                          |
|----------------|------------------------------------------------------|
| `husky`        | Manage Git hooks easily (e.g., pre-commit hooks).    |
| `lint-staged`  | Run linters only on staged files.                    |

---

## 🧰 Key Features

- ✅ React 19 with TypeScript
- ⚡ Vite for blazing-fast development and builds
- 🛠 ESLint + Prettier + Husky + Lint-Staged
- 🧪 Vitest + Playwright for testing
- 🌐 SEO-ready with `react-helmet`
- 📖 Storybook for component development
- 📦 Organized folder structure based on best practices

---



## Project Structure
```
src/
├── assets/              # Static assets like images, fonts, icons, and svgs
├── components/          # Reusable UI components following Atomic Design principles
│   ├── common/          # Base-level atomic components (Button, Text, Container)
│   │   ├── Button/               # Button component
│   │   ├── Container/            # Container/layout component
│   │   ├── Label/                # Label component
│   │   └── Text/                 # Text/typography component
│   └── hoc/             # Higher-Order Components
│       └── withLogging.tsx
│       └── withAuth.tsx
├── constants/           # Application-wide constants, enums, and configuration values
├── hooks/               # Custom React hooks for shared logic across app
├── pages/               # Route-level components (pages/screens)
├── services/            # API calls, business logic
├── store/               # State management (Redux, Zustand, or Context)
├── styles/              # Global styles, theme files, and CSS Modules
├── types/               # TypeScript type definitions and interfaces
├── utils/               # Utility functions and helpers (formatting, API calls, etc.)
├── App.tsx              # Root application component
└── index.tsx            # Application entry point, rendering <App />
```

## 📘 Storybook Preview

Explore the live Storybook documentation to see the components in action, following the React Design Patterns used in this project:

🔗 [View Storybook](https://storybook-react-design-patterns.vercel.app)

## License – Bilal Ahmad Khan

This React starter template is provided free of charge for building personal or commercial products and applications.

✔ You MAY:
- Use this project to build your own app or product
- Modify the code as needed
- Share your own built products

❌ You MAY NOT:
- Resell, redistribute, or republish this project as a starter template, boilerplate, or development kit
- Claim ownership of the original project structure for educational or starter purposes

Contact me for permission if you wish to use it as a base for another starter/template.

Author: `Bilal Ahmad Khan`

---
🚧 Work in Progress… Stay tuned!