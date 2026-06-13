# 05.1 Measurement Concept

Phase: 05. Measurement

## Set the stage

<aside>
❓

**Purpose**
To validate that our design decisions actually solve the user problems we identified in the Research phase. We need to transition from assuming our design is intuitive to proving it with quantitative data.

</aside>

<aside>
🏗️

**The Process**
We will define a clear tracking plan utilizing Firebase Analytics. This includes establishing high-level UX Metrics (the "pulse" of the app), specific Firebase Events (individual interactions), and Funnels (user journeys).

</aside>

<aside>
🎯

**Goal**
To establish a continuous feedback loop. By monitoring how real recruiters interact with the Sol Design System components, we can identify friction points, validate our layout choices, and prioritize future feature enhancements based on actual user behavior.

</aside>

### The Process & Benefits of Defining a Measurement Strategy

Launching a product without analytics is like flying blind. You might have built the most beautiful interface in the world, but if users aren't utilizing the features you designed to save them time, the UX has failed.

Defining metrics *before* launch ensures that engineering builds the right tracking hooks into the code from day one. The primary benefit of this strategy is **objective validation**. For example, we designed the Bulk Action Bar because High-Volume Recruiters complained about "click fatigue." By tracking how often that specific bar is used compared to single-row actions, we can definitively prove to stakeholders that our design reduced repetitive clicks and saved the company measurable hours of labor. It turns design from subjective art into a measurable business asset.

### 1. High-Level UX Metrics to Monitor

These are the overarching numbers we will watch on our analytics dashboard to gauge platform health:

- **Time-to-Disposition (Efficiency Metric):** The average time a recruiter spends on the platform before making a decision (Advance or Reject) on a candidate.
    - *Why & How:* If our "six-second rule" layout and scannable table are successful, this number should be significantly lower than industry averages.
- **Bulk Action Adoption Rate:** The percentage of total candidate status changes that occur via the Bulk Action Bar vs. individual row clicks.
    - *Why & How:* Validates our hypothesis that grouping candidates saves time. A high rate means the UI successfully built confidence, allowing recruiters to process groups without opening every single resume.
- **Table Customization Frequency:** How often users open the "Columns" sidesheet to alter the default view.
    - *Why & How:* If 90% of users are hiding the "Applied Date" column and adding the "Skills" column, our default table state is wrong. This metric tells us exactly how to adjust the default UI for future updates.

### 2. Specific Firebase Events to Craft

Events track singular actions. We will ask developers to log these specific interactions:

- **Event: `filter_applied`**
    - *Parameters:* `filter_category` (e.g., Location, Score), `filter_value`.
    - *Why:* Tells us how recruiters hunt for talent. If the "Score > 80%" filter is the most heavily used, we might want to elevate it out of the sidebar and place it prominently as a quick-toggle above the table.
- **Event: `quick_action_triggered` vs. `bulk_action_triggered`**
    - *Parameters:* `action_type` (e.g., Reject, Advance).
    - *Why:* Helps us understand the recruiter's mental model. Do they prefer hovering over a single row, or checking boxes to act on groups?
- **Event: `team_note_posted`**
    - *Parameters:* `has_mention` (boolean).
    - *Why:* Validates the collaboration tools designed for David (the Technical Recruiter). If this event fires frequently, it proves we successfully moved communication out of email and into our platform.

### 3. User Funnels to Build

Funnels track a sequence of events to see where users succeed and where they drop off (abandon the task).

**Funnel A: The High-Volume Screen (Validating Sarah's Workflow)**

1. *Trigger:* Lands on Candidates List.
2. *Action:* Applies 1 or more filters.
3. *Action:* Selects multiple candidate checkboxes.
4. *Success:* Triggers a Bulk Action (Advance/Reject).
- *What it tells us:* If users apply filters but *don't* use bulk actions, it means they are still opening individual profiles to double-check data. This implies our table columns aren't providing enough context to make a confident mass decision.

**Funnel B: The Deep Evaluation (Validating David's Workflow)**

1. *Trigger:* Opens Candidate Info Page.
2. *Action:* Switches to "Team Notes" or "History" tab.
3. *Success:* Posts a Note, Likes a comment, or updates the candidate's status.
- *What it tells us:* If users open the Info page but never switch tabs or post notes, the dual-pane workspace might be confusing, or the collaboration features aren't visible enough. A high completion rate here proves the split-screen layout effectively supports deep evaluation.