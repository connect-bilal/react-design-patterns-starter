# React Design Patterns Starter

A minimal and scalable React starter template focused on best practices and modern design patterns. This boilerplate is designed to help you build maintainable, reusable, and performant React applications with TypeScript.

---

## Features

- **TypeScript** ready with strict typings
- **Atomic design principles** for component organization
- **React Hooks** and **Context API** support
- Modular and scalable **folder structure**
- Reusable UI components: Button, Text, Container, etc.
- Utility-first styling with **Tailwind CSS**
- **Storybook** integration for isolated UI development
- Code quality tools: **ESLint** and **Prettier**
- Performance optimizations using **React.memo** and **forwardRef**
- Easily extendable for routing, state management, and API integration

---

## Tailwind CSS

- Fully integrated with Tailwind CSS for utility-first styling
- Supports custom theming via CSS variables for colors, fonts, and spacing
- Enables fast, consistent styling while maintaining a scalable, maintainable design system

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

### Customize to Fit Your Needs

- 🔧 Update global styles and themes in `src/styles/`
- 🎨 Modify or extend atomic components in `src/common/`
- 🧱 Create new features using the pre-defined folder structure and design patterns
- 📖 Check the [Storybook documentation](https://storybook-react-design-patterns.vercel.app) to explore available components and see usage examples for each one

## 📦 Included Dependencies

### Core Dependencies

| Package            | Description                                                      |
| ------------------ | ---------------------------------------------------------------- |
| `react`            | The core library for building UI components.                     |
| `react-dom`        | React DOM bindings for rendering to the browser.                 |
| `react-router-dom` | Declarative routing for React applications.                      |
| `react-helmet`     | Manage document head for SEO optimization.                       |
| `clsx`             | Utility for conditionally joining class names.                   |
| `react-icons`      | Popular icons (FontAwesome, Material, etc.) as React components. |

---

### Dev Dependencies

#### 🛠 Build & Tooling

| Package                | Description                                      |
| ---------------------- | ------------------------------------------------ |
| `vite`                 | Fast, modern build tool with native ESM support. |
| `@vitejs/plugin-react` | Vite plugin for React.                           |
| `vite-tsconfig-paths`  | Supports TypeScript path aliases in Vite.        |
| `typescript`           | TypeScript language support.                     |

#### ✅ Linting & Formatting

| Package                       | Description                                        |
| ----------------------------- | -------------------------------------------------- |
| `prettier`                    | Opinionated code formatter.                        |
| `eslint-config-prettier`      | Disables ESLint rules that conflict with Prettier. |
| `eslint-plugin-import`        | Linting support for ES6+ `import/export` syntax.   |
| `eslint-plugin-jsx-a11y`      | Accessibility linting for JSX elements.            |
| `eslint-plugin-react`         | Linting for React components and patterns.         |
| `eslint-plugin-react-hooks`   | Ensures correct usage of React Hooks.              |
| `eslint-plugin-react-refresh` | ESLint rules for React Fast Refresh.               |
| `eslint-plugin-storybook`     | Storybook-specific linting rules.                  |

#### 🧪 Testing

| Package               | Description                                     |
| --------------------- | ----------------------------------------------- |
| `vitest`              | Vite-native unit testing framework.             |
| `@vitest/browser`     | Browser-based testing support.                  |
| `@vitest/coverage-v8` | Coverage reports using V8 instrumentation.      |
| `playwright`          | End-to-end testing with modern browser support. |

#### 📚 Storybook (Component Documentation)

| Package                              | Description                                   |
| ------------------------------------ | --------------------------------------------- |
| `@storybook/react`                   | Main Storybook package for React.             |
| `@storybook/react-vite`              | Vite integration with Storybook.              |
| `@storybook/addon-essentials`        | Core set of useful addons.                    |
| `@storybook/experimental-addon-test` | Integrates tests with stories.                |
| `@storybook/blocks`                  | Visual layout and component blocks.           |
| `@storybook/test`                    | Addon to run automated tests on stories.      |
| `@chromatic-com/storybook`           | Visual testing and deployment with Chromatic. |

#### 🧹 Git Hooks & Commit Hygiene

| Package       | Description                                       |
| ------------- | ------------------------------------------------- |
| `husky`       | Manage Git hooks easily (e.g., pre-commit hooks). |
| `lint-staged` | Run linters only on staged files.                 |

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
│   │   ├── Alert/               # Alert component
│   │   ├── Button/               # Button component
|   │   │   ├── Button.tsx            # Main Button component
│   │   │   ├── Button.types.ts       # Props types / interfaces
│   │   │   ├── Button.styles.ts      # Tailwind style definitions
│   │   │   ├── Button.stories.ts     # Storybook story
│   │   │   ├── index.ts              # Re-export for cleaner imports
│   │   ├── Container/            # Container/layout component
│   │   ├── Divider/              # Divider component
│   │   ├── Input/                # Reusable input field component
│   │   ├── Label/                # Label component
│   │   ├── Link/                 # Styled wrapper for internal and external links
│   │   └── Text/                 # Text/typography component
│   │   ├── Icon/                 # Icon component with SVG support
│   │   └── Link/                 # Link component with external/internal support
│   │   └── Toggle/               # Toggle component for switch or checkbox functionality
│   │   └── ThemeSwitcher/        # Wrapper component using Toggle & ThemeContext
│   │   └── TruncateText/         # Truncates long text with "Less" and "More" toggle support
│   └── hoc/             # Higher-Order Components
│   └──├── index.ts         # Central re-export
│   └── layouts/            # Reusable layout wrappers and page structures (e.g. Page, AppShell)
│       ├── index.ts        # Central re-export of layout components
│       └── Page/           # Page layout component for consistent page structure
├── constants/           # Application-wide constants, enums, and configuration values
├── context/                # Global app state with React context
│   ├── ThemeContext.tsx    # Theme context (light/dark toggle)
│   |── index.ts            # Contexts export
├── hooks/               # Custom React hooks for shared logic across app
│   ├── useTheme.ts         # Manages light/dark theme state and toggle logic
│   ├── useTitle.ts         # Sets and updates the document title dynamically
│   ├── useWindowWidth.ts   # Tracks and returns current window width (responsive utility)
│   └── index.ts            # Central export file for all custom hooks
├── i18n/                # Localization files and i18n config (e.g., en.json, fr.json)
├── lib/                 # Library modules & integrations (API clients, services)
│   |── index.ts         # Library export
├── pages/               # Route-level components (pages/screens)
├── services/            # API calls, business logic
├── store/               # State management (Redux, Zustand, or Context)
├── styles/              # Global styles, theme files, and CSS Modules
│   ├── global.css       # Base styles, CSS resets, and global styling
│   ├── theme.css        # Theme-related styles (e.g., light and dark mode overrides)
│   ├── utilities.css    # Custom Tailwind utility classes and overrides for extended styling
│   └── token.ts         # Design tokens and reusable style constants (colors, spacing, typography, state classes)
├── types/               # TypeScript type definitions and interfaces
├── utils/               # Utility functions and helpers (formatting, API calls, etc.)
│   ├── capitalize.ts       # Capitalize the first letter of a string
│   ├── clamp.ts            # Clamp a number between a min and max
│   ├── isClient.ts         # Check if code is running in a browser environment
│   ├── isValidLiteral.ts   # Validate if a value matches allowed literals (e.g., enums)
│   ├── mergeRefs.ts        # Combine multiple refs into one
│   ├── truncate.ts         # Shorten text with ellipsis based on limit
│   ├── uuid.ts             # Generate a unique identifier
│   └── index.ts            # Central export for all utility functions
├── App.tsx              # Root application component
└── index.tsx            # Application entry point, rendering <App />
```

## 📘 Storybook Preview

Explore the live Storybook documentation to see the components in action, following the React Design Patterns used in this project:

🔗 [View Storybook](https://storybook-react-design-patterns.vercel.app)

## Frequently Asked Questions (FAQs)

**Q: Can I remove components I don’t need?**  
**A:** To remove unused components, simply delete their folder inside `src/components/common/` and remove their export from  
`src/components/common/index.ts`.

**Q: Can I use this starter for commercial projects?**  
**A:** Absolutely! This starter is free to use and modify for personal or commercial projects. Just please don’t redistribute it as your own starter template.

## License – Bilal Ahmad Khan

This React starter template is provided free of charge for building personal or commercial products and applications.

✔ You MAY:

- Use this project to build your own app or product
- Modify the code as needed
- Share your own built products

❌ You MAY NOT:

- Resell, redistribute, or republish this project as a starter template, boilerplate, or development kit
- Claim ownership of the original project structure for educational or starter purposes

Contact me for approval if you wish to use it as a base for another starter/template.

- Author: `Bilal Ahmad Khan`
- Email: `bilal.inform@gmail.com`

---

🚧 Work in Progress… Stay tuned!
