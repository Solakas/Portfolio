# Case Study: Wave Grocery Online Grocery Management Software
**Product Type:** B2B SaaS Admin Panel & Content Management System (CMS)  
**Role:** Lead Product Designer  
**Client/Company:** Wave Grocery  

---

## Executive Summary
The Wave Grocery Management Software is the operational heart of our grocery e-commerce suite. It is a SaaS admin panel used by store owners, managers, call center operators, and system administrators to manage inventory, fulfill orders, configure delivery zones, schedule timeslots, track performance, and run marketing campaigns. As the Lead Product Designer, my primary challenge was to take an extremely complex web of operational controls and present it in an intuitive, easy-to-learn interface that reduces user error and training time for non-technical supermarket personnel.

---

## The Challenge: Reducing Cognitive Load & Learning Curve
Supermarket store managers are busy professionals who manage physical inventory, staffing, and store operations. They cannot afford to spend hours learning complex software. The existing industry administrative tools were notoriously clunky, displaying dense grids of configuration tables that caused high cognitive strain, user frustration, and data entry errors (e.g., setting wrong delivery fees or blocking active timeslots).

My goal was to design an admin panel that:
1.  **Minimized Onboarding Time:** Allowed store managers to learn the system and perform daily routines in under an hour.
2.  **Simplified Complex Settings:** Streamlined settings like delivery timeslots, geographical coverage areas, and localized product availability.
3.  **Unified Channels:** Merged web, app, phone, and third-party marketplace orders into a single, unified order queue.

---

## My Role and Design Decisions

### 1. Intuitive Information Architecture (IA)
I restructured the navigation and layout around the user's mental model of daily store routines:
*   **Operational Scoping:** Designed a global store-selector dropdown at the top of the interface. Selecting a specific store filters all product availability, order queues, timeslots, and promotions for that store, preventing accidental cross-store edits.
*   **Logical Sectioning:** Grouped the dashboard into clean operational modules:
    *   **Dashboard & Analytics:** Real-time revenue, average cart values, active pickers, and SLA warnings.
    *   **Orders Queue:** A unified order pipeline showing order status (pending, picking, staged, out for delivery) from all channels.
    *   **PXM Catalog:** A product catalog editor supporting nested levels of category management and ERP sync logs.
    *   **Fulfillment Settings:** Interactive grids for timeslots, zones, and fees.
    *   **Marketing CMS:** Leaflet builders, promo codes, banners, and coupon setups.

### 2. Redesigning Timeslot & Capacity Management
Supermarket timeslot management is notoriously complex. Store admins must allocate order capacities based on the number of active pickers and delivery drivers available for each hour block.
*   **Visual Grid Design:** I replaced dense data tables with a visual, interactive calendar grid. Admins can view order capacities, edit delivery fees for high-demand slots, or block slots with a single drag-and-drop action.
*   **Dynamic Capacity Safeguards:** Designed visual warning indicators (amber and red states) that highlight when a store is nearing picker capacity, prompting managers to increase staff or cap orders.

### 3. Streamlining CMS Campaigns and Promotions
Supermarkets run frequent promotions (e.g., weekly flyer leaflets, buy-one-get-one, product combos).
*   **WYSIWYG Flyer builder:** Designed a simple CMS workspace where marketing managers can drag products directly into virtual weekly leaflets, automatically generating web and mobile banner promotions.
*   **Laser-Targeted User Segmentation:** Created a user group builder based on shopping behavior (e.g., cart abandoners, vegetarian shoppers, or inactive users) allowing admins to set targeted campaigns.

### 4. Simplified User Access Controls (RBAC)
Designed a simple role-based dashboard control system with 5 preset user types to prevent accidental misconfigurations:
1.  **Wave Admin:** Full platform visibility.
2.  **Admin:** Full store operations with restricted system settings.
3.  **Store Manager:** View and edit permissions restricted strictly to their assigned branch.
4.  **Picker App User:** Access restricted solely to order fulfillment states.
5.  **Phone Ordering User:** Restructured portal optimized for rapid order logging.

---

## Impact & Business Outcomes
*   **Training and Onboarding:** Reduced manager training time from **days to under one hour**, lowering onboarding friction for new supermarket franchises.
*   **Operational Excellence:** Achieved **99.999% SLA Uptime management** by designing clear warning states that prevented operational bottlenecks.
*   **Omnichannel Efficiency:** Unified order channels, reducing order processing overhead by **30%** for grocery networks.
