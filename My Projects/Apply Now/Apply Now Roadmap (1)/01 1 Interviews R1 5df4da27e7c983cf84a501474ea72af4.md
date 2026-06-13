# 01.1 Interviews R1

Phase: 01. Analyse

## Setting the stage

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
    
    
    <aside>
    ❓
    
    **Question 1**
    What are your primary goals and needs when logging into a recruitment platform each day?
    
    </aside>
    
    <aside>
    ☝🏻
    
    **Goal**
    To establish the user's core workflows, volume of work, and primary motivation (e.g., speed vs. deep evaluation) before diving into specific features.
    
    </aside>
    
    ---
    
    <aside>
    ❓
    
    **Question 2**
    Besides the name of the candidate, what other essential information do you need to see instantly on a candidate list to make a quick decision?
    
    </aside>
    
    <aside>
    ☝🏻
    
    **Goals**
    To establish the user's core workflows, volume of work, and primary motivation (e.g., speed vs. deep evaluation) before diving into specific features.
    
    </aside>
    
    ---
    
    <aside>
    ❓
    
    **Question 3**
    Which filtering and search functionality do you rely on most heavily, and in what context do you use them?
    
    </aside>
    
    <aside>
    ☝🏻
    
    **Goal** 
    To identify which filters are "dealbreakers" that need to be permanently visible on the UI, versus advanced search criteria that can be hidden in secondary menus.
    
    </aside>
    
    ---
    
    <aside>
    ❓
    
    **Question 4**
    What quick actions (individual or bulk) do you perform most often through the platform?
    
    </aside>
    
    <aside>
    ☝🏻
    
    **Goal**
    To map out the primary Call-To-Action (CTA) buttons needed on both the Candidates List and the Candidates Info page, ensuring high-frequency actions are the easiest to reach.
    
    </aside>
    
    ---
    
    <aside>
    ❓
    
    **Question 5**
    What are your biggest constraints, workarounds, or pain points with your current tracking system?
    
    </aside>
    
    <aside>
    ☝🏻
    
    **Goal**
    To uncover hidden frustrations (like "click fatigue" or poor data formatting) that represent the biggest opportunities for our new design to create a competitive advantage
    
    </aside>
    
    ---
    
    <aside>
    ❓
    
    **Question 6**
    How do you currently manage keeping resumes for future references, and how easy is it to find past talent?
    
    </aside>
    
    <aside>
    ☝🏻
    
    **Goal**
    To understand the administrative and data-integrity needs of the platform, ensuring historical candidate data is stored and surfaced logically.
    
    </aside>
    
- Interview Checklist
    
    **Verbal Cues & Emphasis**
    
    - [ ]  **User repeatedly uses a specific phrase or metric (e.g., "time-to-fill," "dealbreaker," "clunky"):** *Insight: This highlights their core mental model and the exact vocabulary you should use when presenting your final design to stakeholders*
    - [ ]  **User uses absolute words ("always," "never," "hate"):** Insight: Strong language indicates high-priority pain points or absolute must-have features that will make or break their adoption of a new tool.
    - [ ]  **User hesitates or struggles to explain a step in their workflow:** Insight: If they can't easily explain how they do something, their current process is likely convoluted, overly complex, or lacks standardization.
    
    **Contradictions & Workarounds**
    
    - [ ]  **User contradicts themselves (e.g., says a process is "fine" but then describes a 10-step manual workaround):** *Insight: Users often normalize bad experiences. The workaround is the actual pain point you need to solve.*
    - [ ]  **User mentions leaving the system (e.g., "Then I Slack the manager," "I export it to Excel"):** *Insight: This exposes a massive gap in their current tool's collaboration or reporting features, giving you a clear opportunity to improve the new platform.*
    
    **Emotional & Physical Reactions**
    
    - [ ]  **User's tone drops, they sigh, or they roll their eyes when asked about a specific task:** Insight: This visceral reaction pinpoints the most frustrating part of their day. Solving this will create the most emotional relief for the user.
    - [ ]  **User leans in, speaks faster, or smiles when talking about an ideal scenario or a specific goal:** Insight: This shows what truly motivates them (e.g., finding the perfect candidate, saving time). Your design should visually celebrate when they achieve these moments.
    - [ ]  **User dismisses a question quickly (e.g., "Oh, we don't really use that")**: Insight: That specific functionality is either poorly designed in their current system, or genuinely irrelevant to their specific persona.

## Findings

### 1. The High-Volume Recruiter (Sarah)

*Context: Hires for retail/customer success; manages hundreds of applicants per posting.*

- **Core Goal:** Speed and efficiency. The ability to process maximum candidates in minimum time.
- **The "6-Second Rule":** Needs instant visibility into Current Job Title, Location, and Recent Tenure directly on the list view.
- **Filtering Habits:** Relies entirely on "dealbreaker" filters (e.g., Location radius, Right-to-Work/Visa status). Prefers simple checkboxes over complex search bars.
- **Frequent Actions:** Heavy reliance on bulk actions (Bulk Reject, Bulk Advance, Bulk Send Assessment).
- **Major Pain Points:** "Click fatigue." Extremely frustrated by hidden menus and systems that force her to download PDF resumes rather than viewing them inline.

> 💬 *"If I have to click three times just to see a phone number, the UI has failed me."*
> 

### 2. The Technical Recruiter (David)

*Context: Hires specialized engineering talent; lower volume, but requires high candidate quality and deep skill matching.*

- **Core Goal:** Deep context and seamless collaboration with hiring managers.
- **Essential Data:** Needs immediate access to external portfolios (GitHub, LinkedIn) and a clear breakdown of hard vs. soft skills.
- **Filtering Habits:** Uses complex keyword searches (e.g., "React" AND "Node.js"), boolean logic, and filters by application source (e.g., Referrals).
- **Frequent Actions:** @-Tagging hiring managers directly on a profile, leaving quick ratings (1-5 stars or thumbs up/down).
- **Major Pain Points:** Rigid ATS keyword parsers that automatically reject good talent due to formatting. Hates relying on external email chains to share candidate profiles.

> 💬 *"For tech, the resume is only half the story. I need a workspace where I can look at their GitHub on one side and type my scorecard on the other."*
> 

### 3. The HR Director (Elena)

*Context: Oversees enterprise hiring strategy, compliance, and long-term talent pooling.*

- **Core Goal:** Data integrity and building a reliable "Talent Vault" for future reference.
- **Essential Data:** Macro-level view. Needs to see aggregate scorecard ratings, current pipeline stage across the company, and the candidate's historical application record.
- **Filtering Habits:** Primarily searches the *historical* database using past statuses (e.g., "Reached Final Interview"), application dates, and custom tags.
- **Frequent Actions:** Assigning past candidates to newly opened job requisitions, exporting data to CSVs for compliance, and sending GDPR notices.
- **Major Pain Points:** "Garbage In, Garbage Out." When recruiters move too fast and fail to leave standardized rejection reasons, the historical database becomes unsearchable and useless.

> 💬 *"If we don't hire someone today, I want to easily find them a year from now. The system has to force clean data entry."*
> 

---

## 🎯 Findings Synthesis Matrix

| **User Persona** | **Primary Need** | **Key Info Needed Instantly** | **Dominant Filters** | **Frequent Quick Actions** | **Biggest Pain Point** |
| --- | --- | --- | --- | --- | --- |
| **High-Volume (Sarah)** | Speed & Bulk Processing | Title, Location, Tenure | Dealbreakers (Location, Visa) | Bulk Reject / Advance | Click fatigue; Forced PDF downloads |
| **Technical (David)** | Context & Collaboration | Portfolios, Hard Skills | Keywords, Boolean, Source | @ Tag Manager, Quick Rate | Rigid parsing; Emailing profiles |
| **HR Director (Elena)** | Data Integrity & Archiving | Pipeline Stage, Past History | Historical Status, Tags | Assign to New Job, Export CSV | Messy data from recruiters rushing |

---

## 💡 Key UX Directives for "Apply Now"

Based on the raw findings above, the design of the platform must adhere to the following principles:

1. **Eradicate Click Fatigue:** Resumes must render natively inline. Essential data must live on the primary list view to support the "6-second rule."
2. **Frictionless Bulk Processing:** Bulk actions must be sticky and immediately accessible the moment multiple candidates are selected.
3. **Unified Evaluation Workspace:** The interface must support split-screen or side-by-side evaluation to prevent context switching between a resume and a scorecard.
4. **Prominent Historical Context:** The system must visually flag "Past Applicants" and ensure historical data is just as accessible as active campaign data.