# Hacker News Scraper Frontend

Frontend for the Hacker News Scraper project.

This web application connects to the backend API to display the first 30 entries from [Hacker News](https://news.ycombinator.com/). Users can apply different filters to view entries based on title word count and sort criteria.

## Project Structure

- **Framework**: React + Next.js
- **State Management**: React Query
- **Testing**: Vitest + @testing-library/react
- **Styling**: TailwindCSS

## Available Scripts

Run the following commands inside the project directory.

### Install dependencies

```bash
pnpm install
```

### Run development server

```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Run tests

```bash
pnpm test
```

This runs all unit tests using Vitest.

### Build for production

```bash
pnpm build
```

### Start production server

```bash
pnpm start
```

## Features

- Fetch and display the first 30 entries from Hacker News.
- Filter entries:
    - **longTitles**: Entries with more than 5 words in the title, ordered by number of comments (descending).
    - **shortTitles**: Entries with 5 or fewer words in the title, ordered by points (descending).
- Loading and error states are handled gracefully.

## API

This frontend consumes the following API endpoint from the backend:

```http
GET /hacker-news/entries?filter={filterMode}
```

Where `filterMode` can be:
- `longTitles`
- `shortTitles`

Example:
```bash
curl https://api.hacker-news.jsguzman.space/hacker-news/entries?filter=longTitles
```

The backend API is documented at:

```
https://api.hacker-news.jsguzman.space/docs
```

## Deployment

This project is set up for deployment on [Vercel](https://vercel.com/). A new deployment is triggered automatically on each commit to the `main` branch.

Production URL:

```
https://hacker-news.jsguzman.space
```

## Folder Structure

```
src/
  components/     // UI components (FilterBar, EntriesTable, etc.)
  hooks/          // Custom hooks (e.g., useHackerNewsEntries)
  lib/            // API client
  pages/          // Next.js pages
  types/          // TypeScript types
```

## Contributing
Feel free to open issues and pull requests to improve the project.

## License
This project is licensed under the MIT License.

