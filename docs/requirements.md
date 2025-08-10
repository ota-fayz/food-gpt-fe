# /docs/requirements.md

## Purpose

Ship a working **Telegram Mini App (Calzen‑clone)** MVP that covers one main user journey: **Registration → View/Edit daily plan**. Backend can be mocked initially.

## Scope (MVP)

* Registration (multi‑step) with validation.
* Main screen with daily items (view/add/edit/delete).
* Data persisted locally (zustand persist) and via mock API later.
* Telegram WebApp UX: MainButton, BackButton, theme, safe area.

## Out of Scope (later)

* Auth via real backend & HMAC verification.
* Advanced calendar, analytics, notifications.

## User Stories

1. As a new user, I can complete registration so the app can personalize my plan.
2. As a user, I can see my plan for today.
3. As a user, I can add/edit/remove an item in my plan.
4. As a user, my data stays after reload.

## Non‑Functional

* Mobile‑first, fast first paint (<1.5s on mid devices).
* No blank screens; graceful error states.
* Dark/light follow Telegram theme.

## Architecture (DDD)

```
src/
  ui/                # MUI components, RHF forms
  application/       # use cases (registerUser, loadPlan, upsertItem)
  domain/            # entities (User, Plan, Item), value objects
  infrastructure/    # axios client, mock api, telegram sdk wrapper, storage
  shared/            # zod schemas, types, utils, hooks
```

## Tech Stack

* React + TypeScript + Vite
* MUI, RHF + Zod
* Axios
* Zustand (+persist) for local UI/data drafts
* React Query for server data (mock → real API)
* Telegram WebApp SDK (`@tma.js/sdk` or `@telegram-apps/sdk`)

## Data Models (minimal)

```ts
// domain/User
id: string; gender: 'MALE'|'FEMALE'; goal: 'LOSE'|'MAINTAIN'|'GAIN';
age: number; heightCm: number; weightKg: number;

// domain/Item
id: string; dateISO: string; title: string; note?: string; done?: boolean;

// domain/Plan
items: Item[];
```

## Routes / Screens

* `/` — Registration (steps 1..N, MainButton submit, BackButton prev)
* `/home` — Main screen (today list)
* `/item/:id?` — Add/Edit modal (as route or dialog)

## Validation (Zod)

* Gender: enum
* Goal: enum
* Age: 14..120, Height: 120..230, Weight: 30..250

## State & Data Flow

* Forms ↔ RHF; Zod resolver.
* Draft user → Zustand persist.
* Data fetching/caching → React Query (later points to real API).

## API (mock first)

```
GET /user/me -> User
POST /user     -> User
GET /plan?date=YYYY-MM-DD -> Item[]
POST /plan/item           -> Item
PATCH /plan/item/:id      -> Item
DELETE /plan/item/:id     -> { ok: true }
```

Use `msw` in dev; swap baseURL to real backend later without changing UI/application layers.

## Telegram UX

* Use MainButton for primary actions (Next, Save).
* BackButton controls step/back navigation.
* Follow color scheme; use safe area insets.

## Acceptance Criteria

* App opens via bot link without blank screens.
* Registration end → user lands on `/home`.
* CRUD item works; state persists across reload.
* Smoke test: new user → finish registration → add item → edit → reload → item still there.

## Testing

* Playwright smoke (`/tests/smoke.spec.ts`): critical path.
* Unit for domain utils (pure functions only).

## Deployment

* Vercel (preview per PR, prod on main).
* BotFather: Configure Mini App → URL of prod build.

## AI Workflow (Cursor)

1. Generate UI in Figma/v0.dev → paste into code.
2. Ask Cursor to adapt to MUI + RHF + Zod + SDK wrapper.
3. Generate tests and msw handlers automatically.
4. Keep tasks in `/docs/plan.md`; one PR per day.
