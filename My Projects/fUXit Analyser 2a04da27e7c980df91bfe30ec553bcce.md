# fUXit Analyser

Created: November 3, 2025 8:49 PM
Description: AI-Powered UI/UX Design Critique
Tags: Google AI studio, LIVE, UX Tool, 🤖 AI Project
Live App: https://f-u-xit.vercel.app/
Github: https://github.com/Solakas/fUXit-

## **Project Summary:**

The fUXit Analyzer is a sophisticated web application that acts as an AI design consultant, leveraging the power of Google's Gemini to provide instant, expert-level UI/UX feedback on any application screenshot. Users can upload a design and receive a comprehensive, interactive report detailing its strengths, weaknesses, and specific violations of design principles. This tool empowers developers and designers to rapidly iterate and improve their user interfaces with actionable, AI-driven insights, bridging the gap between design and development.

---

## **Key Features & Functionality:**

- **Instant AI Analysis:** At its core, the application sends a user-uploaded screenshot to the Gemini 2.5 Flash model. A carefully engineered prompt instructs the AI to act as a senior UI/UX expert and return a structured JSON analysis.
- **Interactive & Visual Feedback:**
    - **Annotated Image:** The original screenshot is displayed with interactive markers precisely pinpointing the location of each identified design flaw.
    - **Dynamic Tooltips:** Hovering over a marker reveals a detailed tooltip with the violation's category and description, creating an intuitive link between the issue and its visual context.
    - **Synced Highlighting:** Hovering over an item in the violations list highlights its corresponding marker on the image, creating a seamless and user-friendly diagnostic experience.
- **In-Depth Reporting:** The analysis is presented in a multi-faceted report, making complex design feedback easy to digest:
    - **Overall Summary:** A high-level, AI-generated critique rendered in Markdown.
    - **Scored Categories:** A quantitative breakdown of core design pillars (Whitespace, Accessibility, Typography, etc.) with scores from 1-5, color-coded star ratings, and detailed explanations highlighting both good and bad practices.
    - **Actionable Violations List:** A clear, categorized list of all identified issues that can be copied to the clipboard for easy sharing or integration into project management tools.
- **Persistent Analysis History:** The application uses localStorage to save all past analyses. Users can easily browse their submission history, view thumbnails, and reload any previous report with a single click, allowing them to track design improvements over time.
- **Polished User Experience:** The application is designed to be as intuitive and seamless as the interfaces it critiques. It features a sleek dark mode, a responsive layout built with Tailwind CSS, a smooth drag-and-drop file uploader, and an engaging loading state with a dynamic progress bar and informative messages.

---