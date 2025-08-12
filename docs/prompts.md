# prompts.md — Calzen Mini App (React, TS, MUI, RHF+Zod, Zustand, React Query, Axios, DDD)

> Общие правила для всех промптов  
> - Понимай текущий код и структуру DDD: `ui/`, `application/`, `domain/`, `infrastructure/`, `shared/`.  
> - Пиши на TypeScript. Следуй MUI-паттернам и нашему стилю.  
> - Если меняешь код — верни **единый unified diff** между ```diff … ``` с минимальным охватом.  
> - Если создаёшь файлы — добавь их в diff с правильными путями.  
> - Критично: не ломай публичные API слоёв без причины, не тащи UI в domain/application.

---

## 1) Generate MUI Component (UI-only)
Create a reusable MUI component with typed props and story-like usage snippet.
- Location: `src/pages/{{dashboard}}/{{page}}.tsx`
- Constraints: no business logic; accept callbacks/values via props only.
- Include: accessibility, loading/empty states, minimal tests if pure.
Return a unified diff.

## 2) RHF + Zod Step Form
Build a step of the registration form using React Hook Form + Zod.
- Schema in `shared/schemas.ts` (extend if needed)
- Component in `src/ui/registration/{{StepName}}.tsx`
- Wire MainButton submit + BackButton via telegram wrapper
- Persist draft to zustand
Return a unified diff.

## 3) Zustand Store (+persist)
Create/extend a lightweight store for registration draft or UI state.
- File: `src/application/stores/{{storeName}}.ts`
- Use `zustand`, add `persist`, export selectors & actions
- No direct UI imports; keep serializable
Return a unified diff.

## 4) React Query Setup + Mock (msw)
Add query/mutation for `{{entity}}` with optimistic update and msw handler.
- Query key in `shared/queryKeys.ts`
- API client call in `infrastructure/api/{{entity}}.ts`
- Hook(s) in `application/queries/use{{Entity}}.ts`
- msw handler in `infrastructure/mocks/handlers/{{entity}}.ts`
Return a unified diff.

## 5) Axios Typed Client
Create/extend axios instance and typed endpoints for `{{resource}}`.
- Base client: `infrastructure/api/client.ts` (interceptors, baseURL, timeout)
- DTOs in `shared/types/{{resource}}.ts`
- Endpoints in `infrastructure/api/{{resource}}.ts`
- Include basic error normalization util
Return a unified diff.

## 6) Telegram WebApp Wrapper
Implement/extend Telegram SDK utilities: MainButton, BackButton, popup, theme.
- File: `infrastructure/telegram.ts`
- API: `setMainButton(text, onClick, disabled?)`, `setBack(onClick, show?)`, `haptic(type)`, `ready/expand`, `colorScheme`
- Safe usage (unsubscribe handlers on unmount)
Return a unified diff.

## 7) Main Screen + CRUD Item
Implement daily plan list with add/edit/delete item.
- UI list & modal in `ui/dashboard/`
- Domain types in `domain/plan.ts`
- Use zustand for local draft; React Query for server/mocks
- Empty & skeleton states
Return a unified diff.

## 8) Playwright Smoke Test (Critical Path)
Add an e2e test: new user → finish registration → add item → edit → reload → item persists.
- Folder: `tests/smoke.spec.ts`
- Use data-testids on UI; no brittle selectors
- Add install/run scripts to `package.json`
Return a unified diff.

## 9) Refactor to DDD (Safe)
Refactor provided files to respect layer boundaries without breaking behavior.
- Move UI-only code to `ui/`, side-effects to `infrastructure/`, orchestration to `application/`, pure logic to `domain/`
- Add barrel exports if useful
- Keep imports acyclic (no ui→domain violations)
Return a unified diff + short note of moves.

## 10) Error UX & Toasts
Add error boundary + toasts for API errors and form failures.
- Error boundary `ui/common/ErrorBoundary.tsx`
- Toast helper `ui/common/toast.tsx` or integrate with MUI Snackbar
- Axios interceptor → normalized error → toast in mutations
Return a unified diff.

---

### Quick Patch Mode (use with any prompt)
When you’re ready, output **only**:
```diff
*** begin patch
<unified diff here>
*** end patch