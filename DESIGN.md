# Landing page for Blankon – Figma Make

## Mission
Create implementation-ready, token-driven UI guidance for Landing page for Blankon – Figma Make that is optimized for consistency, accessibility, and fast delivery across content site.

## Brand
- Product/brand: Landing page for Blankon – Figma Make
- URL: https://www.figma.com/make/ERJxYsbF3kBvx8jxML61P5/Landing-page-for-Blankon?code-node-id=0-9&p=f&t=YgPGXLXo6T5N4Apr-0&fullscreen=1
- Audience: readers and knowledge seekers
- Product surface: content site

## Style Foundations
- Visual style: clean, functional, implementation-oriented
- Main font style: `font.family.primary=Inter`, `font.family.stack=Inter, sans-serif`, `font.size.base=11px`, `font.weight.base=400`, `font.lineHeight.base=16px`
- Typography scale: `font.size.xs=11px`, `font.size.sm=13px`, `font.size.md=16px`
- Color palette: `color.text.primary=#ffffff`, `color.text.secondary=#f7d15f`, `color.text.tertiary=#b9b8ff`, `color.surface.base=#000000`, `color.surface.muted=#3d38f5`
- Spacing scale: `space.1=4px`
- Radius/shadow/motion tokens: `radius.xs=2px`, `radius.sm=5px` | `motion.duration.instant=100ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
Concise, confident, implementation-focused.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure
- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: cards (63), buttons (28), inputs (3), links (2).

- Extraction diagnostics: Low sample size: fewer than 30 visible elements were extracted. Audience and product surface inference confidence is low; verify generated brand context.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.
