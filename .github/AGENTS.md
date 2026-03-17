# AGENTS.md

> Landing page & docs site for [i18n-excel-manager](https://github.com/mariokreitz/i18n-excel-manager). Angular v21 + TailwindCSS v4 + ngx-translate.

## Architecture

Single-page app with one lazy-loaded route (`/` → `pages/home/home.ts`). The home page composes feature sections inside a `RootLayout` shell (header, footer, toast, back-to-top).

```
src/app/
├── core/          # App-wide: layout shell, header/footer, language-switch, constants, interfaces, services
├── features/      # Page sections: hero, faq, features, getting-started, simple-to-use, etc.
├── shared/        # Reusable: components (code-card, feature-card, toast), directives, utils
├── pages/         # Route-level components (home, not-found) — use default exports for lazy loading
```

Barrel exports (`index.ts`) exist in `core/constants`, `core/interfaces`, `core/services`, and `shared/directives` — always import from the barrel, not individual files.

## Commands

| Task          | Command                                    |
| ------------- | ------------------------------------------ |
| Dev server    | `npm start` (runs `sync-version` pre-hook) |
| Build         | `npm run build`                            |
| Test (Vitest) | `npm test`                                 |
| Lint          | `npm run lint` / `npm run lint:fix`        |
| Format        | `npm run format`                           |

`scripts/sync-version.mjs` auto-syncs the `i18n-excel-manager` package version into `src/environments/environment.ts` on every start/build. Do **not** manually edit the `version` field there.

## Component Conventions

- **No `standalone: true`** — it's the default in Angular v21; omit it from decorators.
- **Always `changeDetection: ChangeDetectionStrategy.OnPush`** in every `@Component`.
- Use `input()` / `output()` signal functions, **not** `@Input()` / `@Output()` decorators.
- Use `inject()` for DI, **not** constructor parameters.
- Host bindings go in the decorator `host` object, **not** `@HostBinding`/`@HostListener`.
- File naming: `hero.ts`, `hero.html`, `hero.css` (no `.component` suffix). Selector prefix: `app-` (kebab-case).
- Small components use inline templates; larger ones use external files with **relative paths** (`./hero.html`).

## i18n / Translations

- Translation JSON files live in `public/assets/i18n/{de,en,es,fr,pt,tr}.json`.
- All user-facing strings use `TranslatePipe` (`{{ 'key.path' | translate }}`), never hardcoded text.
- Translation keys are referenced via typed constants in `core/constants/` (e.g., `FAQ_ITEMS`, `I18N_EXCEL_MANAGER_CORE_FEATURES`).
- `de` and `en` are human-translated; other locales are AI-translated (indicated in UI via an AI badge).

## Styling

- TailwindCSS v4 with `@theme` custom tokens defined in `src/styles/theme.css` (e.g., `--color-bg-page`, `--color-brand-primary`).
- Global layers in `src/styles/`: `base.css`, `button.css`, `code-card.css`, `utilities.css`, `fonts.css`.
- Use Tailwind classes directly — **no `ngClass`** (use `[class.*]` bindings) and **no `ngStyle`** (use `[style.*]` bindings).
- Use `NgOptimizedImage` for all `<img>` tags (except inline base64).

## Icons

FontAwesome icons are imported individually for tree-shaking:

```typescript
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
```

Render with `<fa-icon [icon]="chevronDownIcon" />`. Never import from the top-level barrel (`@fortawesome/free-solid-svg-icons`).

## State & Signals

- Local state: `WritableSignal` + expose via `.asReadonly()` (see `language-switch.ts`, `toast.service.ts`).
- Derived state: `computed()`. Mutations: `.set()` or `.update()` — **never** `.mutate()`.
- Services use `providedIn: 'root'` for singletons.

## Templates

- Use native control flow: `@if`, `@for`, `@switch` — not structural directives (`*ngIf`, `*ngFor`).
- No arrow functions in templates (unsupported).
- Observables: use `async` pipe. Signals: read directly.

## Testing

- Test runner: **Vitest** (via `@angular/build:unit-test` builder).
- Test files colocated: `hero.spec.ts` next to `hero.ts`.
- Use `TestBed.configureTestingModule({ imports: [ComponentClass] })` — no module declarations.

## Accessibility

- Must pass AXE / WCAG AA. Focus-visible styles defined globally in `src/styles/base.css`.
- ESLint enforces `angular.configs.templateAccessibility` rules.
- The `FadeInDirective` respects `prefers-reduced-motion`.
- Translation keys under `a11y.*` provide ARIA labels and screen-reader text.
