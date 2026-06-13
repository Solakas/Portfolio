# Neonpolis

Created: November 3, 2025 8:10 PM
Description: An interactive board game
Tags: Cursor, Figma make, LIVE, 🤖 AI Project
Live App: https://neonpolis-4u4d.vercel.app/
Github: https://github.com/Solakas/neonpolis

# 🎲 Neonpolis — From table-feel to playable web app (AI-assisted)

## ✨ Short teaser (above the fold)

I led a **3-day sprint** to translate the feel of **King of Tokyo** into a fast, readable web experience. I owned the end-to-end process—**research → game systems → UX flows → UI → playable prototype**—using **Figma, Make, ChatGPT**, and **Vercel**.

Result: a modular game with clear micro-interactions, a solid rules engine, and a design system ready to scale to live multiplayer. **Playful, fast, readable.** 🚀

---

## 🧭 Case study (condensed)

**👤 Role**

Lead Product Designer & Prototyper (solo)

**⏱️ Timeline**

3 days (rapid MVP)

**🎯 Goal**

Bring the *table-feel* of the physical game to the browser while fixing common layout/readability issues in online board-game platforms while giving emphasis to **interaction design**

---

### 🔍 Research

- 🧩 **Source analysis:** Document all the game mechanics, card rules, character effects, card effects
- ⚠️ Define common pain pain points
- 💙 Detect the most wanted game features and mechanics

### ⚙️ Systems & interaction design

- 🧠 **Rules engine:** Converted rules into **explicit, testable states** and **JSON playbooks**; UI shows only valid actions per step.
- 🧭 **UX flows:** Step-by-step for characters and **all 48 cards** (post-update), with timing windows, guardrails, and resolution order (🛡️ shields → passives → actives).
- 🗄️ **Board IA:** Left = economy (Shop/Discard/Deck) • Center = title & players • Right = **Victory Road** • Top = arena state.
- 🎰 **Dice experience:** 3-roll loop, selective keeps, lightweight roll animation, instant affordances (damage/energy/heal).

### 🎨 Design system

- 🎛️ **Tokens & theming:** Colors, radii, shadows, typography → **Fira Sans** (H1–H4 Extra Bold, H5–H6 Medium) + **Inter** for body.
- 👀 **Readability first:** High-contrast dice/icons, clear card layout, consistent microcopy (**“Use / Skip”**, inline guards).
- 🧱 **Scalable:** Componentized styles + JSON so **UI, rules, and bots** evolve in sync.

### 🛠️ Build & tooling

- 🧩 **Figma components:** Variants for cards, dice, and states; rule docs in accordions.
- 🤖 **AI as copilot:** **ChatGPT** to co-document rules, generate edge-case tests, and draft JSON UX playbooks; I refined for clarity.
- 🔁 **Automation:** **Make** for exports/hand-off.
- 🌐 **Deploy:** Playable prototype on **Vercel** (clean CI).

### 🔭 What’s next

- 🌍 Live matchmaking & turn-based netcode
- 📱 Mobile-first board scaling & one-hand controls