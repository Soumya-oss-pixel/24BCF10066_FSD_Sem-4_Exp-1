# Experiment Documentation: Admin Dashboard

### 1. Personal Information
* **Name:** Soumya Ranjan Pradhan
* **UID:** 24BCF10066
* **Group:** 24BCF-1

---

### 2. Title
**Development of a Responsive Admin Dashboard with CSS Grid Layout and Dynamic Theme Switching.**

---

### 3. Your Defined Approach
The project was developed using a modular approach focusing on modern CSS techniques for layout and state management:

* **Structural Layout (CSS Grid):** I used the `grid-template-areas` property to define a clear skeleton for the dashboard (Sidebar, Header, and Main Content). This approach separates the layout logic from the content, making the code easier to read.
* **Dynamic Styling (CSS Variables):** Instead of hard-coding colors, I defined a set of root variables (`--bg-color`, `--text-main`, etc.). This allows the entire UI to update by changing only the top-level values.
* **Responsive Cards:** I implemented a sub-grid within the main content area using `repeat(auto-fit, minmax(250px, 1fr))` to ensure that dashboard cards automatically rearrange themselves based on the screen width.
* **Theme Switching Logic:** I utilized a lightweight JavaScript event listener that toggles a `data-theme` attribute on the HTML document. This triggers the CSS to swap variable sets between "Light" and "Dark" modes.

---

### 4. Learning Outcomes of Experiment
Through this experiment, I have achieved the following:

1.  **Mastery of CSS Grid:** Gained a deep understanding of how to build complex, 2D layouts without relying on legacy methods like floats or excessive flexbox nesting.
2.  **State Management via CSS:** Learned how to use CSS Variables (Custom Properties) to manage application-wide themes dynamically.
3.  **DOM Manipulation:** Practiced using JavaScript to interact with the Document Object Model (DOM) to change element attributes in response to user input.
4.  **UI/UX Principles:** Explored the importance of accessibility and user preference by implementing a functional Dark Mode toggle.
5.  **Project Organization:** Learned the importance of separating concerns by keeping HTML (structure), CSS (presentation), and JS (behavior) in distinct, linked files.
