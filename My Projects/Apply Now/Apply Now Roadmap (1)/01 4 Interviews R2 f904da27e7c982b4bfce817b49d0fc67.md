# 01.4 Interviews R2

Phase: 01. Analyse

## Setting the stage

Round 2 is focused on **UI, layout, and interaction**, the accompanying checklist shifts from observing their general workflow to observing their spatial expectations and mental models regarding how an interface should behave.

<aside>
❓

**Purpose**
To discover the real-world needs, pain points, constraints, and daily workflows of the actual end-users.

</aside>

<aside>
🏗️

**The Process**
Conducted simulated qualitative interviews representing three distinct user personas: The High-Volume Recruiter (Retail), The Technical Recruiter (Engineering), and the HR Director (Enterprise).

</aside>

<aside>
🎯

**Goal**
To gather raw, qualitative data regarding how different roles use filters, execute quick actions, and evaluate candidates, ensuring the platform scales to different hiring needs.

</aside>

## Resources

- Interview Questions & Goals
    
    **Focus Area 1:** The Candidates List (High-Volume & Scannability)
    
    <aside>
    ❓
    
    **Question 1**
    When you look at a list of candidates, what exact columns are absolute must-haves for your initial 6-second scan?
    
    </aside>
    
    <aside>
    ☝🏻
    
    **Goal**
    To strictly define the data hierarchy and determine which data points get premium horizontal real estate versus what gets hidden behind a click.
    
    </aside>
    
    ---
    
    <aside>
    ❓
    
    **Question 2**
    How do you expect the filtering and search functionality to be positioned visually on this list?
    
    </aside>
    
    <aside>
    ☝🏻
    
    **Goals**
    To validate the layout decision (e.g., persistent left-hand sidebar vs. top-horizontal dropdowns) for the filtering system.
    
    </aside>
    
    ---
    
    <aside>
    ❓
    
    **Question 3**
    If you select multiple candidates to perform a bulk action, where do you intuitively expect those action buttons to appear?
    
    </aside>
    
    <aside>
    ☝🏻
    
    **Goal** 
    To determine the micro-interaction for bulk processing (e.g., a sticky header, a floating action bar at the bottom, or a right-click menu).
    
    </aside>
    
    ---
    
    <aside>
    ❓
    
    **Question 4
    To define the visual indicators (badges, icons, color highlights) needed to alert recruiters to historical data without cluttering the screen.**
    
    </aside>
    
    <aside>
    ☝🏻
    
    **Goal**
    To map out the primary Call-To-Action (CTA) buttons needed on both the Candidates List and the Candidates Info page, ensuring high-frequency actions are the easiest to reach.
    
    </aside>
    
    ---
    
    **Focus Area 2**: The Candidates Info Page (Effortless Evaluation)
    
    <aside>
    ❓
    
    **Question 5**
    When you click into a candidate's profile, how should the screen be divided to make evaluation truly 'effortless'?
    
    </aside>
    
    <aside>
    ☝🏻
    
    **Goal**
    To validate the split-screen layout and determine the optimal width ratio (e.g., 60% resume / 40% workspace) for side-by-side reviewing.
    
    </aside>
    
    ---
    
    <aside>
    ❓
    
    **Question 6**
    On your active workspace panel (next to the resume), what is the exact hierarchy of information you need from top to bottom?
    
    </aside>
    
    <aside>
    ☝🏻
    
    **Goal**
    To structure the right-hand panel, ensuring contact info, external links, and the default evaluation tab (Scorecard) are ordered logically.
    
    </aside>
    
    ---
    
    <aside>
    ❓
    
    **Question 7**
    How do you want the 'Quick Actions' (like Advance or Reject) to behave while you are scrolling through a long resume or scorecard?
    
    </aside>
    
    <aside>
    ☝🏻
    
    **Goal**
    To confirm the necessity of a sticky, fixed-position header for primary Call-To-Actions, preventing vertical scroll fatigue.
    
    </aside>
    
- Interview Checklist
    
    **Spatial Mapping & Eye Tracking**
    
    - [ ]  **User gestures to specific areas of the screen:** Insight: Watch their hands. If they say "filters" and gesture to the left, or "save" and gesture to the top right, your UI should match those ingrained spatial expectations.
    - [ ]  **User describes a left-to-right or top-to-bottom reading pattern:** Insight: This dictates where you place the most critical data (e.g., Candidate Name should be far left; Status should be highly visible).
    
    **Interaction Mental Models**
    
    - [ ]  **User expects an action to happen immediately upon selection** (e.g., checking a box): Insight: The UI needs to be highly reactive. State changes (like a bulk-action bar appearing) shouldn't require a page reload.
    - [ ]  **User mentions "hovering" over items to see more info: Insight:** This indicates a desire to keep the main view clean but still access secondary data quickly via tooltips or popovers.
    - [ ]  **User assumes scrolling down will hide their main navigation or actions:** *Insight: This confirms the need for sticky headers or floating action buttons so they never feel "trapped" at the bottom of a long profile.*
    
    **Information Hierarchy**
    
    - [ ]  **User explicitly categorizes data as "dealbreakers" vs. "nice-to-haves":** *Insight: Dealbreakers must be persistent UI elements (always visible); nice-to-haves can live inside accordions or secondary tabs.*
    - [ ]  **User requests to see two distinct pieces of information at the exact same time:** *Insight: This is your strongest validation for split-screen, side-by-side, or picture-in-picture UI patterns.*

### UI Component Requirements  from Round 2

**Candidates List (Desktop)**

- **Layout:** Left-sidebar for persistent filters (Search bar, Location, Tags); Main central area for the data table.
- **Data Columns:** Checkbox (for selection), Name/Avatar, Current Title, Location, Application Date, Stage/Status, and a 'Match Score' or 'Historical' badge.
- **Interaction:** A sticky bulk-action bar that only appears when one or more candidate checkboxes are selected.

**Deliverable 2: Candidates Info Page (Desktop)**

- **Layout:** Split-screen UI.
- **Left Pane (Context):** Native PDF viewer taking up roughly 60% of the width.
- **Right Pane (Action):** 40% width. Header contains quick contact info and social links. Below that, a tabbed navigation: `[Scorecard] | [Notes] | [History]`.
- **Sticky Header:** The global actions for the profile (`Advance`, `Reject`, `Share`) remain fixed at the top right, ensuring effortless evaluation.