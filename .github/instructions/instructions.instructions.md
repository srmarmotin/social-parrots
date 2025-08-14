---
applyTo: '**'
---

# COPILOT EDITS OPERATIONAL GUIDELINES

## PRIME DIRECTIVE

    Avoid working on more than one file at a time.
    Multiple simultaneous edits to a file will cause corruption.
    Be chatting and teach about what you are doing while coding.
    Always use code in English.

### MAKING EDITS

    - Focus on one conceptual change at a time
    - Show clear "before" and "after" snippets when proposing changes
    - Include concise explanations of what changed and why
    - Always check if the edit maintains the project's coding style

### REFACTORING GUIDANCE

    When refactoring large files:
    - Break work into logical, independently functional chunks
    - Ensure each intermediate state maintains functionality
    - Consider temporary duplication as a valid interim step
    - Always indicate the refactoring pattern being applied

### RATE LIMIT AVOIDANCE

    - For very large files, suggest splitting changes across multiple sessions
    - Prioritize changes that are logically complete units
    - Always provide clear stopping points

## General Requirements

    Use modern technologies as described below for all code suggestions. Prioritize clean, maintainable code with appropriate comments.

## Browser Compatibility

    - Prioritize feature detection (`if ('fetch' in window)` etc.).
        - Support latest two stable releases of major browsers:
    - Firefox, Chrome, Edge, Safari (macOS/iOS)
        - Emphasize progressive enhancement with polyfills or bundlers (e.g., **Babel**, **Vite**) as needed.

## PHP Requirements

    - **Target Version**: PHP 8.1 or higher
    - **Features to Use**:
    - Named arguments
    - Constructor property promotion
    - Union types and nullable types
    - Match expressions
    - Nullsafe operator (`?->`)
    - Attributes instead of annotations
    - Typed properties with appropriate type declarations
    - Return type declarations
    - Enumerations (`enum`)
    - Readonly properties
    - Emphasize strict property typing in all generated code.
    - **Coding Standards**:
    - Follow PSR-12 coding standards
    - Use strict typing with `declare(strict_types=1);`
    - Prefer composition over inheritance
    - Use dependency injection
    - **Static Analysis:**
    - Include PHPDoc blocks compatible with PHPStan or Psalm for static analysis
    - **Error Handling:**
    - Use exceptions consistently for error handling and avoid suppressing errors.
    - Provide meaningful, clear exception messages and proper exception types.

## HTML/CSS Requirements

    - **HTML**:
    - Use HTML5 semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<search>`, etc.)
    - Include appropriate ARIA attributes for accessibility
    - Ensure valid markup that passes W3C validation
    - Use responsive design practices
    - Include `loading="lazy"` on images where applicable
    - Generate `srcset` and `sizes` attributes for responsive images when relevant
    - Prioritize SEO-friendly elements (`<title>`, `<meta description>`, Open Graph tags)

    - **CSS**:
    - Use modern CSS features including:
    - CSS Grid and Flexbox for layouts
    - CSS Custom Properties (variables)
    - CSS animations and transitions
    - Media queries for responsive design
    - Logical properties (`margin-inline`, `padding-block`, etc.)
    - Modern selectors (`:is()`, `:where()`, `:has()`)
    - Follow BEM or similar methodology for class naming
    - Use CSS nesting where appropriate
    - Include dark mode support with `prefers-color-scheme`
    - Prioritize modern, performant fonts and variable fonts for smaller file sizes
    - Use modern units (`rem`, `vh`, `vw`) instead of traditional pixels (`px`) for better responsiveness

## Documentation Requirements

    - Include JSDoc comments for JavaScript/TypeScript.
    - Document complex functions with clear examples.
    - Maintain concise Markdown documentation.
    - Minimum docblock info: `param`, `return`, `throws`, `author`

## Security Considerations

    - Sanitize all user inputs thoroughly.
    - Parameterize database queries.
    - Enforce strong Content Security Policies (CSP).
    - Use CSRF protection where applicable.
    - Ensure secure cookies (`HttpOnly`, `Secure`, `SameSite=Strict`).
    - Limit privileges and enforce role-based access control.
    - Implement detailed internal logging and monitoring.
