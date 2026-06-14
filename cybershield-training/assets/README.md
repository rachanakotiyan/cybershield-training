# Static Visual Assets

To ensure the training portal is completely self-contained and functions offline when double-clicking the `index.html` file in a web browser:

*   **Inline SVGs:** All shield graphics, lock configurations, check icons, and portal logos are rendered directly in the HTML markup using inline SVG elements.
*   **Benefits:**
    *   No broken image links when running locally.
    *   Immune to browser CORS policy blocks that restrict loading local image files (`file:///` path issues).
    *   High-performance rendering with responsive vector sizing.
    *   Easy custom coloring and electric glow styling via our central `style.css`.
