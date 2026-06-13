# 03.3 React Prototype

Phase: 03. Ideate

## Set the stage

<aside>
❓

**Purpose**
To validate our static high-fidelity mockups through real interactive use. While Figma is excellent for visual arrangement, a coded prototype allows us to test the actual "feel" of the application in a live browser environment, specifically focusing on micro-interactions, data filtering logic, and delightful animations.

</aside>

<aside>
🏗️

**The Process
We** transitioned from Figma to code by building a functional front-end application using **React, TypeScript, and Vite**, directly utilizing the tokens and components from the **Sol Design System**. The code was generated and refined with Claude Code, pushed to GitHub, and seamlessly deployed to a public, live environment using **Vercel**

</aside>

<aside>
🎯

**Goal**
To deliver a tangible, testable artifact that proves the Sol Design System works flawlessly in production code. This step bridges the gap between design and engineering, allowing stakeholders to experience the complex interactions (like multi-parameter filtering and bulk actions) exactly as the end-user will.

</aside>

## 🕹️ Prototype Testing Instructions

**GitHub URL:** https://github.com/Solakas/Apply-Now-Platform

**Live URL:** [https://apply-now-platform-oysw.vercel.app/](https://apply-now-platform-oysw.vercel.app/)

**Stack:** React + TypeScript, Vite, inline design tokens

*This document walks through every interactive feature of the prototype so you can explore and test the full experience. No login required — open the URL and start exploring.*

### 🔍 Overview

The prototype is a fully functional **Applicant Tracking System (ATS) view** built to demonstrate the Sol Design System components in a realistic product context. It includes a KPI dashboard bar, a filterable and configurable candidates table, a detailed candidate profile page, and several micro-interactions and animations.

---

### 1. KPI Bar

**Location:** Top of the main content area, above the table.

**What to check:**

- On page load, watch the four numbers **count up from 0** to their target values with a staggered ease-out animation (each card starts 120ms after the previous).
- Cards: Total Applications (48), New Applications (5), Assignment Stage (12), Final Stage (8).
- Uptrend values appear in **green**, downtrend values in **red**.

---

### 2. Filter Sidebar

**Location:** Left panel, always visible. The sidebar filters the candidates table in real time as you make selections.

- **Pipeline Stage:** Click any of the stage chips (Applied, Screening, Interview, Offer, Hired). Multiple stages can be selected simultaneously. The table and the count in the heading update instantly.
- **Application Status:** Check/uncheck any combination of statuses (New, Screen Call, Assignment, Ass. Center, Ex. Interview, Offer, Hired). These match the Status column values in the table exactly.
- **Match Score:** Drag the **range slider** to set a minimum and maximum score range (0–100). Use the **Score Threshold chips** (>70%, >80%, >90%, Any) to apply a quick minimum cutoff.
- **Qualification Level:** Click chips: Any, Junior, Mid, Senior, Lead. Filtering is based on years of experience. The hint subtitle below the section label explains the thresholds. Selecting a specific level removes "Any". Deselecting all reverts back to "Any".
- **Location:** Click the **Location combobox** to open the dropdown. Start typing to filter the city list. Select a city — it appears as a **removable chip** above the input. Select multiple cities to filter for candidates from any of them. Click the × on a chip to remove that location filter.

---

### 3. Candidates Table

**Location:** Main content area, below the KPI bar.

- **Sorting:** Click any **column header** (Name, Experience, Score, Location, Applied, Status) to sort ascending. Click the same header again to sort descending. A third click clears the sort. An arrow indicator shows the active sort direction.
- **Row Selection:** Click the **checkbox** on the left of any row to select it. Click the **header checkbox** to select or deselect all visible rows at once. Selected rows are highlighted with a light primary-blue background.
- **Candidate Name Click:** Click on a **candidate's name** (blue underlined link) to open the Candidate Info Page.
- **Action Buttons:** Each row has inline action buttons on the right. Hover over a row to see them clearly: Thumbs Up / Thumbs Down, Share, Contact, Quick Note, Promote / Reject / Archive.

---

### 4. Bulk Action Bar

**Trigger:** Select one or more candidates using the row checkboxes.

**What to check:**

- A **sticky bar slides up** from the bottom of the screen showing how many candidates are selected.
- Available bulk actions: **Advance, Contact, Share, Reject**.
- Click **Advance** — confirms the action and clears the selection.
- Click **Reject** — shows a confirmation prompt before clearing.
- Click **Contact** or **Share** — shows a notification.
- Click **×** (close) to dismiss the bar and deselect all.

---

### 5. Columns Sidesheet

**Trigger:** Click the **"Columns"** button in the top-right area of the table toolbar.

**What to check:**

- A **sidesheet slides in from the left** over the filter sidebar, with a darkened overlay behind it.
- **Display Columns:** Toggle visibility of Experience, Score, Location, Applied Date, Status, Skills, Contact Info, and Actions columns. "Candidate" is always on and cannot be toggled.
- **Display Actions:** Toggle which action buttons appear per row.
- Changes are in **draft state** — the table does not update until you click **Apply**.
- Click **Reset All** to revert all toggles back to defaults.
- Click **Apply** to close the sidesheet and update the table immediately.
- Click anywhere on the **overlay** or press the close button to dismiss without applying.

---

### 6. Candidate Info Page

**Trigger:** Click any candidate's name in the table. This opens a full-page detail view for the selected candidate. Click **← Back** to return to the list.

- **Rating Animation:** On first entry, the Overall Rating card animates. Stars pop in one by one with a spring bounce, and the score number counts up from 0 with a glow effect. This animation plays **only on mount** (re-entering the page replays it).
- **Tab: Overview:** Displays candidate details, skills as tags, and the rating card.
- **Tab: Team Notes:** Displays a comment thread.
    - **Like:** Click the heart icon.
    - **Reply:** Click the Reply button, type, and post. It nests below the original note.
    - **Post New:** Type in the bottom input and click Post. It appears at the top with a slide-in animation, a highlight flash, and a "just now" timestamp.
- **Tab: History:** Displays a timeline. On entry, each step animates in with a stagger. The active step has a pulsing ring animation.

---

### 7. Design Token Observations

As you explore, notice the consistent use of the Sol Design System tokens throughout:

- **Colors:** Semantic CSS variables (`-color-primary-base`, `-color-surface-default`, `-color-text-subtle`).
- **Spacing:** Padding and gaps reference token variables (`-spacing-16`, `-spacing-32`).
- **Radius:** Border radii use `-radius-md`, `-radius-lg`, `-radius-full`.
- **Typography:** Poppins for display/KPI values, Manrope or Inter for UI text.