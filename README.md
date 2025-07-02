# My Personal Blog

Welcome to my personal blog, built with Next.js, TypeScript, and Tailwind CSS. This project uses a simple and powerful file-based architecture where blog posts are written in Markdown.

## Getting Started

To get the project running locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/SanskarGosavi2003/sanskargosavi2003.git
    cd sanskargosavi2003
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## How to Add a New Post

Creating a new blog post is as simple as creating a new file.

1.  Navigate to the `posts` directory at the root of the project.
2.  Create a new file with a `.md` extension (e.g., `my-new-post.md`).
3.  Add the required "frontmatter" to the top of the file. This is the metadata for your post:
    ```yaml
    ---
    title: 'This is the Title of My New Post'
    date: 'YYYY-MM-DD'  # e.g., 2024-07-03
    excerpt: 'A short, compelling summary of your blog post.'
    ---
    ```
4.  Write the rest of your post content below the frontmatter using standard Markdown.

Save the file, and it will automatically appear on the homepage!

## Project Architecture

This project follows a simple, file-based architecture:

-   **`/posts`**: This directory contains all your blog posts as Markdown (`.md`) files.

-   **`src/lib/posts.ts`**: This is the data layer. It contains helper functions that read the files from the `/posts` directory, parse their frontmatter and content, and return the data to the pages.

-   **`src/app/page.tsx`**: The homepage. It calls `getSortedPostsData()` from `src/lib/posts.ts` to get a list of all posts and displays them.

-   **`src/app/posts/[id]/page.tsx`**: This is a dynamic route that displays an individual blog post. It uses the file name as the post `id` (or "slug") and fetches the post's content using `getPostData(id)`.

-   **`tailwind.config.ts`**: The configuration file for Tailwind CSS. We've added the `@tailwindcss/typography` plugin here to automatically style the HTML generated from Markdown.

## Tech Stack

-   [Next.js](https://nextjs.org/) - React Framework
-   [React](https://react.dev/) - JavaScript Library
-   [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
-   [Tailwind CSS](https://tailwindcss.com/) - Utility-First CSS Framework

