# Component Refactor Checklist

This document defines the standard audit and refactoring process for all components in the Sol Design System. Run through every check below before a component is considered complete or production-ready.

---

## Overview

There are five categories of checks:

1. [Component Property References](#1-component-property-references)
2. [Token Binding — Colors, Spacing, Radius, Stroke](#2-token-binding)
3. [Text Style Binding](#3-text-style-binding)
4. [Existing Components — No Redundant Recreation](#4-existing-components)
5. [Interactive Elements — Icon Buttons Not Bare Icons](#5-interactive-elements)

---

## 1. Component Property References

Every property defined on the component set must be linked to the correct layer inside **every variant**. Variants that are visually different (e.g. Destructive, Small size, ReadOnly) are common culprits for missing references — they often get duplicated without re-linking.

### What to check

| Property type | Field to link | Layer it targets |
|---|---|---|
| `TEXT` | `characters` | The text node displaying that value |
| `BOOLEAN` | `visible` | The layer being shown/hidden |
| `INSTANCE_SWAP` | `mainComponent` | The instance being swapped |

### Common issues found

- A full group of variants built for a new size or state (e.g. `Size=Small`, `Destructive=true`) has zero property references — the layers exist but none are linked.
- A `TEXT` property that represents two states (e.g. `Placeholder` vs `Value`) is only linked in the base variant, not in its counterpart:
  - `Filled=false` → `input-text` must reference `Placeholder`
  - `Filled=true` → `input-text` must reference `Value`
- `BOOLEAN` visibility props (e.g. `Show leading icon`) linked in some states but not others.

### How to fix

For each variant, find the target layer by name and set its `componentPropertyReferences`:

```js
// TEXT property
labelNode.componentPropertyReferences = { characters: 'Label#59:55' };

// BOOLEAN visibility
iconNode.componentPropertyReferences = { visible: 'Show leading icon#60:150' };

// INSTANCE_SWAP
iconInstance.componentPropertyReferences = { mainComponent: 'Leading icon#60:200' };

// Node with both visibility and swap
iconInstance.componentPropertyReferences = {
  visible: 'Show leading icon#60:150',
  mainComponent: 'Leading icon#60:200'
};
```

> **Rule:** All variants must have identical property coverage. The only valid difference between variants is which property key a shared layer references (e.g. `Placeholder` vs `Value`).

---

## 2. Token Binding

All visual properties must be bound to design system variables. No raw hex values, hardcoded numbers, or magic values are permitted.

### 2a. Colors

Every `SOLID` fill and stroke must be bound to a `color/*` variable.

**Check:** Inspect `node.fills` and `node.strokes`. If a paint has no `boundVariables.color`, it is raw.

**Common issues:**
- Text color not bound (very common on newly built components)
- Stroke color on borders not bound
- Background fill on container frames not bound

**Available variables:** `color/surface/background`, `color/text/default`, `color/text/subtle`, `color/border/default`, `color/primary`, `color/error`, etc.

---

### 2b. Spacing and Padding

All `paddingTop`, `paddingBottom`, `paddingLeft`, `paddingRight`, and `itemSpacing` values greater than 0 must be bound to a `spacing/*` variable.

**Check:** Read `node.boundVariables` for each padding and gap field.

**Available variables:**

| Token | Value |
|---|---|
| `spacing/4` | 4 |
| `spacing/8` | 8 |
| `spacing/12` | 12 |
| `spacing/16` | 16 |
| `spacing/20` | 20 |
| `spacing/24` | 24 |
| `spacing/32` | 32 |
| `spacing/40` | 40 |
| `spacing/48` | 48 |

**How to fix:**

```js
const spacing8 = figma.variables.getLocalVariables('FLOAT').find(v => v.name === 'spacing/8');
node.setBoundVariable('itemSpacing', spacing8);
node.setBoundVariable('paddingTop', spacing8);
// etc.
```

---

### 2c. Corner Radius

All `cornerRadius` values greater than 0 must be bound to a `radius/*` variable. Use individual corner fields (`topLeftRadius` etc.) when sides differ.

**Available variables:**

| Token | Value |
|---|---|
| `radius/none` | 0 |
| `radius/xs` | 2 |
| `radius/sm` | 4 |
| `radius/md` | 8 |
| `radius/lg` | 12 |
| `radius/full` | 9999 |

**How to fix:**

```js
const radiusMd = figma.variables.getLocalVariables('FLOAT').find(v => v.name === 'radius/md');
for (const field of ['topLeftRadius','topRightRadius','bottomLeftRadius','bottomRightRadius']) {
  node.setBoundVariable(field, radiusMd);
}
```

**Known exception:** Tiny decorative elements (e.g. a text cursor caret with `radius=1`) that have no matching token are acceptable raw exceptions. Document them explicitly.

---

### 2d. Stroke Weight

All stroke weights on layout borders must be bound to a `stroke/*` variable.

**Important:** Figma supports both unified `strokeWeight` and per-side weights (`strokeTopWeight`, `strokeBottomWeight`, etc.). Always check both. If the component uses individual sides, bind those — not the unified field.

**Available variables:**

| Token | Value |
|---|---|
| `stroke/thin` | 1 |
| `stroke/normal` | 2 |
| `stroke/thick` | 3 |

**Known exception:** Stroke weights on vector/SVG paths inside icon instances (the artwork lines of the icon itself) are not layout strokes and should not be touched.

```js
const strokeThin = figma.variables.getLocalVariables('FLOAT').find(v => v.name === 'stroke/thin');
node.setBoundVariable('strokeTopWeight', strokeThin);
node.setBoundVariable('strokeBottomWeight', strokeThin);
node.setBoundVariable('strokeLeftWeight', strokeThin);
node.setBoundVariable('strokeRightWeight', strokeThin);
```

---

### 2e. Size Tokens

Fixed-dimension elements (icon containers, tappable targets) should use `size/*` tokens where applicable.

| Token | Value | Use case |
|---|---|---|
| `size/icon` | 16 | Icon canvas size |
| `size/icon-lg` | 24 | Large icon canvas |
| `size/xs–xl` | 24–56 | Component heights |
| `size/AA-target-size` | 24 | WCAG AA min tappable |
| `size/AAA-target-size` | 44 | WCAG AAA min tappable |

---

## 3. Text Style Binding

Every text node must reference a named text style from the file's type system. No text node should carry raw font family, weight, or size values directly — these must come from the style, not the node.

### Rule

> If a text node's `textStyleId` is empty, it is unbound and must be fixed.

### Available text styles

| Style name | Font | Weight | Size |
|---|---|---|---|
| `Headings/H1` | Poppins | Bold | 48px |
| `Headings/H2` | Poppins | Bold | 40px |
| `Headings/H3` | Poppins | Bold | 32px |
| `Headings/H4` | Poppins | Bold | 24px |
| `Headings/H5` | Poppins | Bold | 20px |
| `Subheadings/Subheading 1` | Poppins | SemiBold | 18px |
| `Subheadings/Subheading 2` | Poppins | SemiBold | 16px |
| `Body/Body Large/Bold` | Poppins | Bold | 16px |
| `Body/Body Large/Reg` | Poppins | Regular | 16px |
| `Body/Body Small/Bold` | Poppins | Bold | 14px |
| `Body/Body Small/Reg` | Poppins | Regular | 14px |
| `Assistive Text/Assistive Bold` | Poppins | Bold | 12px |
| `Assistive Text/Assistive Reg` | Poppins | Regular | 12px |
| `Button/Button Large` | Poppins | Bold | 18px |
| `Button/Button Default` | Poppins | Bold | 16px |
| `Button/Button Small` | Poppins | Bold | 14px |

### Common issues

- Text nodes copied from another tool or file that carry inline font properties instead of a style reference
- Newly added text layers (e.g. labels, helper text, placeholders) where a style was never applied
- Text inside a variant that was duplicated from a base variant but had its style detached during editing

### How to check

Inspect `node.textStyleId` — if it is an empty string, the node is unbound:

```js
// Find all unbound text nodes in a variant
function findUnboundText(node, path = '') {
  const results = [];
  if (node.type === 'TEXT' && !node.textStyleId) {
    results.push(`${path} > ${node.name}: "${node.characters}" — raw font: ${node.fontName.family} ${node.fontName.style} ${node.fontSize}px`);
  }
  if ('children' in node) {
    for (const c of node.children) results.push(...findUnboundText(c, `${path} > ${node.name}`));
  }
  return results;
}
```

### How to fix

```js
const styles = figma.getLocalTextStyles();
const bodyReg = styles.find(s => s.name === 'Body/Body Large/Reg');
textNode.textStyleId = bodyReg.id;
```

> **Note:** `textStyleId` can return a mixed symbol (`figma.mixed`) on text nodes with multiple styles applied. If a text node intentionally uses mixed styles (e.g. rich text), this is acceptable — but should be rare in component definitions.

---

## 4. Existing Components

Before building any sub-element from scratch, check whether a matching component already exists in the file.

### Rule

> If a component for the element already exists in the file, import and instance it. Never recreate it with raw frames and text nodes.

### How to check

Search the file's component library before building:
- Use `figma.importComponentByKeyAsync(key)` to bring in a local component
- Use `mcp__plugin_figma_figma__search_design_system` to find components by name

### Common violations

| Element built raw | Should have been |
|---|---|
| Input field constructed from frames | Existing `Textfield` component |
| Close X from an icon frame | Existing `Icon Button` (ghost/small) |
| Info/warning badge from scratch | Existing `Badge` or `Alert` component |
| Divider as a plain rectangle | Existing `Divider` component |

### Known exception

Slot/placeholder frames that intentionally hold arbitrary content (e.g. a `content slot` frame inside a Dialog) are designed to be empty containers — these do not need to map to an existing component.

---

## 5. Interactive Elements

Any icon that a user can tap or click must use the `Icon Button` component — not a bare icon instance.

### Rule

> Bare icons are display-only. Clickable icons must be `Icon Button` instances (typically `Type=Ghost, Size=Small`).

### How to identify

Ask: *Can the user interact with this icon?*

- Close button in a dialog header → **Icon Button**
- Search icon inside a text input → display-only → bare icon is fine
- Clear/dismiss icon on a chip → **Icon Button**
- Decorative icon next to a label → bare icon is fine

### Why

Icon buttons carry:
- Correct 48×48 tappable area (accessibility)
- Built-in hover, focused, and pressed states
- Proper `componentPropertyReferences` for state management

---

## Audit Process Summary

Run these steps in order for any component being refactored:

```
[ ] 1. List all component property definitions on the set
[ ] 2. Check every variant — confirm all properties are linked to the correct layers
[ ] 3. Audit fills for unbound color values
[ ] 4. Audit strokes (color + weight) for unbound values
[ ] 5. Audit padding and gaps for unbound spacing values
[ ] 6. Audit corner radii for unbound radius values
[ ] 7. Audit all text nodes — confirm textStyleId is set (not empty or raw)
[ ] 8. Check all sub-elements — confirm existing components are used (not recreated)
[ ] 9. Identify any interactive icons — confirm they use Icon Button, not bare icons
[ ] 10. Document any known exceptions (values with no matching token)
```

---

## Notes on Programmatic Auditing

When auditing via the Figma Plugin API (MCP):

- Use `figma.variables.getLocalVariables('COLOR')` and `getLocalVariables('FLOAT')` to get all bound variables
- Check `node.boundVariables` to verify bindings per field
- For stroke auditing, check both `strokeWeight` (unified) and `strokeTopWeight` etc. (per-side) — a node may use one or the other
- Vector/VECTOR type nodes inside icon instances have `strokeWeight` from their SVG artwork — skip these in stroke audits
- `componentPropertyReferences` is readable and writable on component children
- Always re-run the audit after fixes to confirm bindings held — some `setBoundVariable` calls fail silently

---

**Version:** 1.0  
**Last Updated:** April 2026  
**Applies to:** All components in the Sol Design System
