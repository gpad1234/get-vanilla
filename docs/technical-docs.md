# Technical Documentation

## Project Overview

This project is a lightweight vanilla web application that demonstrates how to build a polished experience with plain HTML, CSS, and JavaScript. The app provides a simple idea-capture experience with theme toggling and browser-based persistence.

## Goals

- Provide a small, easy-to-understand web app without a framework.
- Demonstrate semantic HTML, responsive styling, and lightweight JavaScript behavior.
- Keep the app simple enough for learning and experimentation.

## Tech Stack

- HTML5 for page structure
- CSS3 for layout and visual styling
- Vanilla JavaScript for DOM interaction and local storage
- Node.js + Express for serving the static site locally

## Project Structure

- index.html: Page structure and content sections
- styles.css: Visual design, layout, and responsive rules
- script.js: Client-side behavior including theme switching and idea management
- server.js: Simple Express server used to serve the app locally
- package.json: Node project metadata and scripts

## Runtime Behavior

### Client-side flow

1. The page loads and initializes the theme based on the user preference.
2. Existing ideas are read from localStorage.
3. The list is rendered into the DOM.
4. The form submits new entries, which are saved and immediately displayed.

### Server-side flow

1. Express serves the static files from the project root.
2. Any unmatched route falls back to index.html so the app can be opened reliably.

## Data Model

The application uses a minimal in-browser data model:

- Storage key: vanilla-web-ideas
- Stored value: array of strings
- Each string represents one saved idea

## Development Workflow

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm start
```

The server listens on port 3000 by default, or on a custom port if PORT is provided.

## Extension Points

The current implementation is intentionally simple, but it can be expanded in several ways:

- Add server-side persistence with a database
- Introduce routing for multiple views
- Add client-side validation and edit/delete interactions
- Introduce a component-based structure if the app grows

## Known Limitations

- No backend persistence beyond browser localStorage
- No automated tests
- No API layer or authentication
- The app is designed for learning and prototyping rather than production-scale use

## Maintenance Notes

- Keep UI logic in script.js and avoid mixing styling concerns into HTML.
- Preserve accessibility attributes when adding new interactive elements.
- Prefer small, focused updates over large rewrites.
