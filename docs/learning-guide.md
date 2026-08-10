# Learning Guide

## What To Learn First

This project is a good path for learning core front-end fundamentals without a framework.

### 1. HTML Structure

Start with the page markup in `index.html`.

Focus on:

- Semantic sections such as header, main, and footer
- Form structure and labels
- Meaningful headings and content order

### 2. CSS Layout and Design

Move to `styles.css` once the structure makes sense.

Focus on:

- Layout using flexbox or grid
- Theme colors and spacing tokens
- Responsive behavior on smaller screens
- Accessible contrast and visible focus states

### 3. JavaScript Behavior

Study `script.js` to see how the app becomes interactive.

Focus on:

- Selecting DOM elements
- Handling click and submit events
- Reading and writing `localStorage`
- Re-rendering the idea list after updates

### 4. Server Basics

Look at `server.js` to understand the local development server.

Focus on:

- Serving static files with Express
- Falling back to `index.html` for unknown routes
- Using a port from the environment when available

## Recommended Study Order

1. Read `index.html` and map the page structure.
2. Read `styles.css` and match each style block to the markup.
3. Read `script.js` and trace the app from load to submit.
4. Read `server.js` to see how the app is served locally.
5. Revisit the architecture and technical docs with the code in mind.

## Practice Exercises

- Add a delete button for each saved idea.
- Add a counter for the number of ideas stored.
- Improve the empty state copy and styling.
- Persist the theme choice in `localStorage`.
- Add simple form validation and inline feedback.

## Good Habits While Learning

- Make one change at a time.
- Keep behavior, structure, and styling separate.
- Test in the browser after each change.
- Write down what you learned in the docs as the app evolves.