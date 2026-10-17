# Blogify 📚

A simple blog reader application built with React, React Router, and the JSONPlaceholder API.

## Features

- **Home Page**: Welcome screen with an introduction and quick navigation.
- **Explore Posts**: Browse posts fetched dynamically from JSONPlaceholder.
- **Search Functionality**: Real-time search filter to find posts by title.
- **Post Details**: View full post content and comments using dynamic routing (`/posts/:id`).
- **404 Not Found Page**: Friendly error page for invalid URLs.
- **Clean UI**: Simple, responsive layout that works on desktop and mobile.

## Tech Stack

- React (Vite)
- React Router DOM
- CSS3
- JSONPlaceholder API

## Project Setup

Follow these steps to run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/kr-subh/PS1-Blogify.git
   cd PS1-Blogify
   ```

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

## Routes Included

- `/` - Home Page
- `/post` - Post Listing Page with Search
- `/posts/:id` - Dynamic Post Details Page with Comments
- `*` - 404 Page Not Found
