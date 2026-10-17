# Blogify

A simple blog browsing web application built using React, Vite, and React Router. The app fetches post and comment data from the JSONPlaceholder API.

## Features

- Home page with a short overview and link to explore posts.
- Posts page that fetches and lists 100 posts from JSONPlaceholder.
- Live search input to filter posts by their title.
- Dynamic post details page (/posts/:id) showing the full post content along with its comments.
- 404 Not Found page for invalid routes.
- Loading and error states for API calls.

## Tech Stack

- React
- React Router DOM
- Vanilla CSS
- Vite

## How to Run

1. Clone or download this repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Routes

- `/` - Home
- `/post` or `/posts` - Posts list
- `/posts/:id` - Post details and comments
- `*` - 404 Not Found
