# Props Drilling Project

**Live Demo:** [https://props-drilling-project.vercel.app](https://props-drilling-project.vercel.app)

This is a front-end web application built to practice core React concepts, specifically passing data from parent to child components using props. The project renders a modern job board where each listing is dynamically generated from a central data array.

## Screenshots

**Job Board View 1:**
<img width="1469" height="773" alt="image" src="https://github.com/user-attachments/assets/d5c250fe-0b50-4e13-ad75-a8f1fbdd0593" />


**Job Board View 2:**
<img width="1419" height="774" alt="image" src="https://github.com/user-attachments/assets/6ecabbb5-ea00-4a12-98d5-59037e30ad81" />


## Technical Details

This project is structured to demonstrate how React components share data efficiently without duplicating UI code:

* **Centralized Data:** The main `App` component holds a single array of objects (`jobOpenings`) containing all the specific details for various tech jobs (Google, Meta, Amazon, etc.).
* **Props Drilling:** The `App` component uses the `.map()` method to iterate through the job array. For each job, it renders a child `Cards` component and passes the relevant data down via props (e.g., `logo={elem.brandLogo}`, `post={elem.post}`).
* **Component Reusability:** The `Cards` component acts as a blueprint. It accepts the `props` object and injects the dynamic data into the HTML structure. This allows the application to render 10 distinct job cards using only one UI template.
* **Dynamic Styling:** Inline conditional logic or standard CSS targets specific text elements like the hourly rate (`#rate`) and location (`#city`) to format them cleanly within the card.

## Built With

* **React:** Core framework for component architecture and props management.
* **Lucide React:** Used for lightweight, scalable UI icons (like the Bookmark icon).
* **Vite/Vercel:** Optimized build tooling and live deployment hosting.
