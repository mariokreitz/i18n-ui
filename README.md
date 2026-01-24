# i18n-ui

![i18n-ui Logo](public/assets/images/png/logo.png)

> The official landing page and documentation site
> for [i18n-excel-manager](https://github.com/mariokreitz/i18n-excel-manager).

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Angular](https://img.shields.io/badge/angular-v21-dd0031.svg)](https://angular.dev)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-v4-06b6d4.svg)](https://tailwindcss.com)
[![Build & Deploy](https://github.com/mariokreitz/i18n-ui/actions/workflows/deploy.yml/badge.svg)](https://github.com/mariokreitz/i18n-ui/actions/workflows/deploy.yml)

## 🚀 Overview

**i18n-ui** is a modern, responsive web application built to showcase the features and usage of the `i18n-excel-manager`
library. It serves as the central hub for documentation, FAQs, and getting started guides, helping developers seamlessly
integrate internationalization workflows into their projects.

This project is built with **Angular v21** and styled with **TailwindCSS v4**, entirely focused on performance,
accessibility (WCAG AA), and maintainability using the latest Angular best practices (Signals, Standalone Components).

## 💎 About i18n-excel-manager

This site documents [i18n-excel-manager](https://github.com/mariokreitz/i18n-excel-manager), a comprehensive CLI tool
designed to streamline the translation process in software projects.

**Key Features:**

- **🔄 Bi-Directional Conversion:** Seamlessly convert between `JSON` translation files and Excel spreadsheets.
- **📂 Nested Key Support:** Fully supports complex, nested JSON structures.
- **✨ AI-Powered translations:** Ask Google Gemini to translate your files.
- **🔍 Code Analysis:** Detects **missing** and **unused** translation keys by analyzing your source code.
- **🛡️ Validation:** Ensures data integrity during conversion.
- **🤖 Interactive CLI:** Easy-to-use terminal interface.

## 🛠️ Tech Stack

- **Framework:** [Angular v21](https://angular.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Internationalization:** [ngx-translate](https://github.com/ngx-translate/core)
- **Icons:** [FontAwesome](https://fontawesome.com/)
- **Architecture:** Standalone Components, Signal-based State, OnPush Change Detection

## 📦 Getting Started

Follow these steps to set up the project locally for development or contributions.

### Prerequisites

Ensure you have the following installed:

- **Node.js** (Active LTS version recommended, v20+)
- **npm**

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mariokreitz/i18n-ui.git
   cd i18n-ui
   ```

2. **Install dependencies:**

   ```bash
   npm ci
   ```

3. **Run the application:**

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:4200/`.

## 🏗️ Build & Deploy

To build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### GitHub Pages

This project is configured to deploy automatically to GitHub Pages via GitHub Actions.
The build process handles the `base-href` and SPA routing (404 fallback) automatically.

## ✅ Code Quality

We enforce strict code quality standards to maintain a clean codebase.

- **Linting:**
  ```bash
  npm run lint
  ```
- **Fix Linting Issues:**
  ```bash
  npm run lint:fix
  ```
- **Formatting:**
  ```bash
  npm run format
  ```

## 🤝 Contributing

Contributions are welcome! If you find a bug in the documentation or want to improve the site:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/amazing-improvement`).
3. Commit your changes (`git commit -m 'feat: add amazing improvement'`).
4. Push to the branch (`git push origin feature/amazing-improvement`).
5. Open a Pull Request.

Please ensure all changes pass the accessibility checks (AXE/WCAG) and linting rules.

## 📄 License

This project is licensed under the MIT License.

---

Made with ❤️ by [Mario Kreitz](https://github.com/mariokreitz)
