# 01.6 Competitive Analysis

Phase: 01. Analyse

## Setting the stage

<aside>
❓

**Purpose**
To understand the current Applicant Tracking System (ATS) market landscape, identify industry standards, and spot opportunities for UX improvement.

</aside>

<aside>
🏗️

**The Process**
Evaluated three major industry players (Workable, Greenhouse, Lever), comparing their approaches to candidate lists, filtering systems, evaluation workflows, and talent pooling.

</aside>

<aside>
🎯

**Goal**
To establish a competitive baseline and identify that reducing "feature bloat" and "cognitive load" would be the primary competitive advantage for the *Apply Now* platform.

</aside>

## Competitive  Overview

We will examine three major players in the recruitment software space: **Workable**, **Greenhouse**, and **Lever**. These platforms set the industry standard for tracking applications and keeping resumes for future references.

- **Workable:** Known for its clean, intuitive UI and quick setup, making it highly popular among SMBs.
- **Greenhouse:** A robust, feature-dense platform tailored for enterprise-level structured hiring, though its interface can feel overwhelming.
- **Lever:** Focuses heavily on Candidate Relationship Management (CRM) and treating candidates like sales leads, featuring a highly visual pipeline.

---

## Feature Comparison Matrix

| **Feature / Platform** | **Workable** | **Greenhouse** | **Lever** | **Opportunity for "Apply Now"** |
| --- | --- | --- | --- | --- |
| **Candidates List UX** | Highly visual, card-based or list views. Easy to scan. | Dense data tables. High cognitive load but rich in data. | Kanban-style pipeline. Great for tracking stages. | Balance data density with readability. Offer customizable columns. |
| **Search & Filtering** | Intuitive faceted search (location, tags, status). | Deep, complex boolean search capabilities. | Fast, real-time filtering based on pipeline stage. | Provide powerful, yet simple, faceted filtering and search functionality. |
| **Candidate Info Page** | Clean timeline view of candidate interactions. | Tabbed interface (Scorecards, Details, Resume). | Side-panel overlay to keep context of the list. | Unified view showing the resume alongside evaluation tools for effortless reviewing. |
| **Future Reference** | Talent pool feature with simple tagging. | Deep CRM features for nurturing past candidates. | "Snooze" feature and robust archiving. | Create a simple, centralized "Vault" for keeping resumes for future references. |

---

## UX Breakdown for Design Deliverables

To inform the high fidelity designs for desktop, we need to analyze how competitors solve the specific challenges of our required pages.

1. Candidates List

Our list needs to show all candidates applied to a job opening. Besides the candidate's name, we must display other essential information alongside filtering and search functionality.

- **Competitor Strengths:** Lever excels here by using a split-screen or Kanban approach, allowing HR to see the pipeline at a glance. Workable uses clear typography to highlight the candidate's current role and last contact date.
- **Competitor Weaknesses:** Greenhouse's list view often requires horizontal scrolling and hides essential quick-actions behind menus.
- **UX Strategy for "Apply Now":** We should adopt a responsive data table or a structured list view. Essential information (Name, Applied Role, Status, Match Score, Date Applied) must be immediately scannable. We will implement persistent, easily accessible filters on the left or top of the screen to avoid hiding the search functionality.

2. Candidate Info Page

This page must display all related information and allow HR to evaluate applicants effortlessly.

- **Competitor Strengths:** Greenhouse uses structured scorecards to keep evaluations objective. Workable embeds the parsed resume directly next to the evaluation notes.
- **Competitor Weaknesses:** Many ATS platforms force the user to download the resume or open it in a new tab, breaking the user flow and increasing cognitive load.
- **UX Strategy for "Apply Now":** A split-screen layout is highly recommended. The left side (or main area) can display the native PDF/resume viewer, while the right side houses the action items: scorecard, team notes, and contact details. This eliminates context-switching and makes the evaluation truly effortless.

---

## Key Takeaways & Next Steps

Most current platforms suffer from feature bloat. The primary advantage for "Apply Now" will be **simplicity combined with power**. By reducing cognitive load on the Candidates List and minimizing clicks on the Candidates info page, we can create a superior user experience.

With this competitive baseline established, the next logical step in the design task is to define the **User Flow**  for how an HR representative navigates from searching the candidate list to evaluating a specific profile.