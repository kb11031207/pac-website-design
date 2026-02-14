# Draft Speaker Placeholder – Plan & Rollback

This doc describes how the **first speaker (Opening Speaker)** is hidden behind a placeholder until legal/contract details are confirmed, and how to **undo** it when everything is ready.

---

## Choices We’re Using

| Decision | Choice | Why |
|----------|--------|-----|
| **Speaker data** | Add `status: "draft" \| "published"` on the `Speaker` type in `lib/speakers.ts`. First speaker stays in the array with full data, marked `status: "draft"`. | Data is never deleted; we only control visibility. |
| **Display list** | Export `publishedSpeakers` (filter `speakers` where `status === "published"`) and use it everywhere we render the speaker list. | One place to decide who is shown. |
| **Homepage speaker grid** | Use `publishedSpeakers` for the cards. Add **one placeholder card** for the Opening slot (e.g. “Opening Speaker – To be announced”) so the section still shows 5 slots. | Keeps layout and “five speakers” story without showing unconfirmed details. |
| **Speaker detail page** | For draft slugs: **don’t** include them in `generateStaticParams()`, and in the page component show a **“Coming soon”** layout (no bio/photo/name) instead of `notFound()`. | Direct links to `/speakers/francisco-cantu` show “Coming soon” instead of 404. |
| **Schedule** | In `lib/constants.ts`, first row of `EVENT_SCHEDULE`: use `speaker: "To be announced"`, keep `role: "Opening Speaker"`, optional `isTba: true` for styling. | Schedule still shows the slot; name is hidden. |
| **Register session option** | In `app/register/page.tsx`, first `SESSION_OPTIONS` entry: `"Thu 7:30 PM – Opening Speaker (To be announced)"`. | Dropdown doesn’t promise the speaker until confirmed. |
| **Event details copy** | In `components/event-details.tsx`, replace the sentence that names Francisco Cantú with generic “Opening Speaker” / “To be announced” copy. | No named reference until confirmed. |
| **Hero** | Keep “Five speakers” as-is (placeholder counts as the fifth). | No code change; copy stays consistent. |

---

## How to Undo It (When Everything Is Confirmed)

When legal/contract is confirmed and you’re ready to show the first speaker everywhere:

### 1. Publish the speaker

**File: `lib/speakers.ts`**

- Find the first speaker (Opening Speaker) in the `speakers` array.
- Change `status: "draft"` to `status: "published"`.

No other edits needed in this file; `publishedSpeakers` will automatically include them.

---

### 2. Show real name in the schedule

**File: `lib/constants.ts`**

- In `EVENT_SCHEDULE`, first row:
  - Set `speaker` back to the real name (e.g. `"Francisco Cantú"`).
  - Remove `isTba` if you added it.

---

### 3. Restore the register session option

**File: `app/register/page.tsx`**

- In `SESSION_OPTIONS`, first entry:
  - Change back to the real label, e.g. `"Thu 7:30 PM – Francisco Cantú (Opening Speaker)"`.

---

### 4. Restore event-details copy

**File: `components/event-details.tsx`**

- In the “What to Expect” / Thursday Evening copy, put the speaker’s name back (e.g. “Francisco Cantú’s powerful reflection…”).

---

### 5. Remove the placeholder card (if you added one)

**File: `components/speaker.tsx`**

- If the grid explicitly renders a “To be announced” card when the first speaker is draft:
  - Remove that conditional placeholder; the published first speaker will now appear in `publishedSpeakers` and render as a normal card.

---

### 6. Optional: drop draft handling on the detail page

**File: `app/speakers/[slug]/page.tsx`**

- If you had special “Coming soon” handling for draft speakers:
    - You can leave it in place (it will never run once the speaker is `"published"`), or remove the draft branch and rely on the normal speaker layout for all published slugs.

---

## Checklist: Undo When Confirmed

- [ ] `lib/speakers.ts` – set first speaker `status` to `"published"`.
- [ ] `lib/constants.ts` – first `EVENT_SCHEDULE` row: real `speaker` name (and remove `isTba` if used).
- [ ] `app/register/page.tsx` – first `SESSION_OPTIONS` label: real name + “(Opening Speaker)”.
- [ ] `components/event-details.tsx` – restore speaker name in Thursday Evening copy.
- [ ] `components/speaker.tsx` – remove placeholder card logic if present.
- [ ] (Optional) `app/speakers/[slug]/page.tsx` – remove or keep draft “Coming soon” branch.

After these steps, the first speaker is fully visible everywhere and the “draft” behavior is effectively undone.
