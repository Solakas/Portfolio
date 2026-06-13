# Claude Design System

Created: March 3, 2026 1:58 PM
Description: Design System Library
Tags: Claude, Design Systems, Figma MCP, 🤖 AI Project
Live App: https://www.figma.com/design/2KSMnZQ3VwwcQJdiFI6J0q/Sol-Design-System?m=auto&t=W2lP3X33q5GTKrf1-6
Github: https://69ccd5d1cd51d872970660e1-cpcvowqpxi.chromatic.com/?path=/docs/components-accordion--docs

# ☀️ Sol Design System

[**Sol Design System**](https://www.notion.so/Claude-Design-System-3184da27e7c98092a890cc4c69955bfb?pvs=21) is a production-grade design system built for modern product teams who need speed without sacrificing quality. It provides a comprehensive library of UI components that are fully documented in Figma and immediately usable in code — no translation layer required.

[https://youtu.be/sKnTK_iIP1E](https://youtu.be/sKnTK_iIP1E)

---

## 💡 What is Sol?

Sol is the result of a deliberate, end-to-end process that bridges Figma design and React implementation. Every component in the library was designed with **code generation in mind**: structured with precise auto-layout rules, semantic design tokens, and consistent variant naming conventions — then implemented directly in TypeScript/React using **Claude Code**, Anthropic's AI coding assistant.

> This means components are not just visually polished — they are structurally sound, semantically correct, and ready to drop into a production codebase.
> 

---

## ⚙️ The Process

### 🧱 1. Foundation First

The system begins with a strict three-tier token architecture:

- **Core → Foundation → Component**
- **Core tokens** define raw values (colors, spacing, type scales).
- **Foundation/Semantic tokens** map those values to intent (e.g., `color/primary`, `color/surface`, `color/text-subtle`).
- **Component tokens** consume Foundation tokens, ensuring that theme changes propagate automatically across the entire library.

### 🎨 2. Component Authoring in Figma

Each component is built according to rigid construction guidelines to ensure code-readiness:

- 📐 **Auto Layout** applied to all frames for reliable code-to-design parity.
- 🎛️ **Variants** used for interactive states (Default, Hovered, Pressed, Focused, Disabled).
- 🔘 **Boolean properties** to toggle optional elements without creating unnecessary variant bloat.
- 🎨 **Semantic tokens only** — no hard-coded hex values or raw spacing numbers.
- 🏷️ **Naming conventions** that map 1:1 to component props in code.

### 🔍 3. Refactor Review

Before a component is marked as code-ready, it goes through a comprehensive refactor check:

- Layer structure is audited for depth.
- Property naming is validated against the convention standard.
- Token coverage is verified to ensure there are no detached styles.
- Interactive states are confirmed complete.
- *Only components that pass this review are included in the library.*

### 🤖 4. Code Generation with Claude Code

Implementation is handled directly by **Claude Code**.

- Each component's Figma design context (layout, token references, variant structure) is fed to Claude Code, which then generates the corresponding React component.
- This tight loop between design and code eliminates the visual drift that typically occurs when designers and developers work asynchronously.
- **The Result:** A library where the Figma source and the code implementation are *always* in sync.

---

## 📊 Library at a Glance

*Updated 7 Apr 2026*

| **Metric** | **Details** |
| --- | --- |
| 🧩 **Total components** | 37 |
| 🗂️ **Total variants** | 2,290 |
| 🎨 **Design tokens** | 45+ Foundation/Semantic variables |
| 🖼️ **Icon set** | Excluded from variant count |
| ✅ **Code status** | All components are code-ready |

> 🚀 **The Claude Code Advantage:** Every variant, every state, and every token binding in this library has a direct, verified counterpart in production React/TypeScript. There is no gap between what you see in Figma and what ships in code.
> 

[https://www.figma.com/design/2KSMnZQ3VwwcQJdiFI6J0q/Sol-Design-System?m=auto&t=W2lP3X33q5GTKrf1-6](https://www.figma.com/design/2KSMnZQ3VwwcQJdiFI6J0q/Sol-Design-System?m=auto&t=W2lP3X33q5GTKrf1-6)

[https://69ccd5d1cd51d872970660e1-cpcvowqpxi.chromatic.com/?path=/docs/components-accordion--docs](https://69ccd5d1cd51d872970660e1-cpcvowqpxi.chromatic.com/?path=/docs/components-accordion--docs)

- Task List
    
    [Components](Claude%20Design%20System/Components%203184da27e7c980e69af1daec08471ba4.csv)