# Case Study: Wave Grocery Picker App
**Product Type:** Android Mobile Picking Application (In-Store Personnel)  
**Role:** Lead Product Designer  
**Client/Company:** Wave Grocery  
**Personal Note:** This is my favorite project from my tenure at Wave Grocery. It represents design-led change that directly improves the physical, daily lives of frontline workers.

---

## Executive Summary
The Wave Grocery Picker App is a specialized in-store fulfillment application that turns standard Android smartphones into powerful picking and packing devices. As the Lead Product Designer, I took a human-centered design approach. I moved out of the office and spent time on-site inside grocery stores to understand the physical realities, constraints, and frustrations of supermarket picker personnel. My design goal was to help pickers assemble orders faster, with near-zero errors and far less physical strain.

---

## The Field Research & Core User Insight
During the research phase, I shadowed pickers inside supermarkets, walking alongside them through the aisles during peak hours. I witnessed firsthand how exhausting the role was—pickers walked several miles a shift pushing heavy carts, constantly double-backing to find missed items.

I remember clearly interviewing a veteran picker. He looked at me and said:
> *"The only way I feel I can be better in my job is to run through the aisles of the grocery store."*

This was my breakthrough user insight. Running through grocery store aisles is dangerous, unsustainable, and leads to high employee turnover and picking errors. **The design solution was not to force pickers to move faster, but to build software that allowed them to perform their physical work easier, with less movement and less effort.**

---

## My Role and Design Solutions

### 1. Ergonomic, High-Contrast UI for Active Environments
Supermarket floors have varying lighting, and pickers are constantly moving while handling carts and items.
*   **One-Hand Operation UI:** Designed the interface so that all critical actions (scan confirmation, item listing, skipping, replacement selections) could be comfortably reached with a thumb, allowing pickers to keep one hand free to handle items.
*   **Large Tap Targets & High Contrast:** Created high-contrast dark text on white backgrounds, color-coded item categories (e.g., Green for Produce, Red for Meats), and oversized buttons to prevent mis-taps.
*   **Multisensory Feedback:** Integrated haptic vibrations and distinct audio tones (success ping vs. error buzzer) for barcode scanning. This allowed pickers to scan items using the phone camera and get instant verification without having to look at the screen.

### 2. Aisle Routing, Zone, and Batch Picking
To eliminate walking distances, I designed workflows that structured the picking route:
*   **Shelf-Location Architecture:** Redesigned the product display to show the exact location: Aisle, Bay, Shelf, and Bin. 
*   **Route Optimization:** Worked with engineers to design an aisle-routing path that guides the picker in a single, continuous loop through the store, eliminating back-tracking.
*   **Batch & Wave Picking:** Designed a multi-order UI that allows a picker to collect items for up to 6 orders in a single walk, color-coding totes to prevent cross-contamination.

### 3. Frictional Substitution Workflows
Out-of-stock items are a primary source of picking friction. Pickers waste time deciding what replacement to grab.
*   **AI Substitute Recommendations:** Designed a replacement screen that instantly displays policy-compliant, in-stock alternatives (with images and shelf locations).
*   **One-Tap Customer Approval:** The picker selects the replacement, and our system automatically alerts the customer via their app/web portal. Customers approve with a single tap, removing the need for phone calls.

---

## Impact & Business Outcomes
*   **Fulfillment Speed:** Saved **30% of order picking time**, allowing stores to handle higher volumes during rush hours without extra staff.
*   **100% Picking Accuracy:** Scaled accuracy to 100% using native barcode verification.
*   **Frontline Worker Impact:** Pickers reported significantly lower physical exhaustion. By substituting intelligent routing for physical running, we achieved a massive win for workplace ergonomics and picker retention.
*   **Financial Savings:** Reduced fulfillment costs, saving retailers **up to $0.50 per order fulfilled**.
