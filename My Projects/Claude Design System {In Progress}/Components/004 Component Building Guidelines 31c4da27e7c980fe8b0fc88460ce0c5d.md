# 004. Component Building Guidelines

Status: Done

# Component Build Guidelines

This document outlines the standards for building and maintaining components within the RADD design system ecosystem. Adhere to these rules to ensure technical parity between Figma designs and code implementation.

---

## 1. Structural Architecture

- [cite_start]**Frame-First Construction**: Use frames as the primary container for components[cite: 3].
- [cite_start]**Shape Constraints**: Rectangles and vector shapes should only be used for vector work or cases where content is not contained within the shape[cite: 4].
- [cite_start]**Auto Layout Requirement**: Apply Auto Layout to all component frames to manage orientation (horizontal, vertical, or wrap)[cite: 7, 8].
- **Layer Optimization**:
    - [cite_start]Minimize layer depth to ensure compatibility with code generation tools[cite: 14].
    - [cite_start]Avoid extra layers for purely visual styling, such as dedicated background or border layers[cite: 13, 17].
    - [cite_start]Extra layers are only permitted for complex nested Auto Layouts or animation requirements[cite: 16].

## 2. Properties & Logic

- [cite_start]**Variants**: Use variants for multiple versions of a component that share properties, specifically for interactive states like Standard, Hovered, Pressed, and Focused[cite: 30, 31, 32].
- [cite_start]**Booleans**: Implement Boolean properties to toggle the visibility of elements, reducing the need for excessive variants[cite: 38, 39].
- **Instance Swaps**: Use for components with undetermined content (e.g., cards). [cite_start]Use a slot component as a placeholder[cite: 42, 43, 46].
- [cite_start]**Text Properties**: Explicitly define text properties for layers intended to be edited by users[cite: 48, 49].
- **Property Hierarchy**:
    1. [cite_start]**Property Type**: Group similar types (all variants together) at the top of the property stack[cite: 56, 57].
    2. [cite_start]**Use Case**: Order by relevance; place style layers above state layers[cite: 61, 62, 63].

## 3. Interaction & Accessibility

- [cite_start]**State Completeness**: Interactive components must include variants for Standard, Hovered (Web), Pressed, Focused, and Disabled[cite: 91, 92, 97].
- [cite_start]**Tappable Area**: Interactive elements smaller than 48px must be nested within a parent frame of at least 48x48px using the `minimum-tappable-area` token for accessibility[cite: 124, 125].
- [cite_start]**Disabled States**: The "Disabled" state must be managed as a distinct Boolean property rather than a simple variant change[cite: 111].

## 4. Styling & Tokens

- [cite_start]**Design Tokens**: Exclusively use spacing and component variables from the RADD Foundation Library[cite: 9].
- [cite_start]**Borders**: Always set borders to "Inside" and ensure strokes are included in Auto Layout calculations[cite: 142, 146].
- **Sizing Logic**:
    - [cite_start]**Fixed**: Use for rigid, non-scaling components[cite: 128].
    - [cite_start]**Hug**: Default for components that shrink to content[cite: 130].
    - [cite_start]**Fill**: Set initially to "Hug" in the component set, then toggle to "Fill" within the specific implementation context[cite: 132].

## 5. Naming Conventions

- [cite_start]**Language**: All naming must be in English using Title Case[cite: 161].
- **Properties**:
    - [cite_start]**Variant**: `Type`, `Mode`, `State`, `Size` [cite: 173-178].
    - [cite_start]**Boolean**: `Disabled`, `Selected`, `Icon`, `Error`, `Expanded` [cite: 191-200].
    - [cite_start]**Text**: `Label Text`, `Input Text`, `Info Message` [cite: 208-213].
- **Layer Clarity**: Keep names short and descriptive. [cite_start]Avoid naming based solely on component functions[cite: 164, 165, 168].