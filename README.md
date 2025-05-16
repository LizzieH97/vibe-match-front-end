# vibe-match-front-end


## ✨ Description

This is a single-page React application built with TypeScript and Material UI that allows users to browse a music catalog. Users can explore songs by genre through clickable choices or use a search bar to find songs by title and view other songs from the same genre.

The application demonstrates key React concepts such as:
- Functional components and Hooks (`useState`, `useEffect`, `useMemo`).
- Custom Hooks for abstracting asynchronous data fetching (`useSongs`, `useAllGenres`, etc.).
- Managing application state and side effects.
- Conditional rendering based on data availability, loading status, and user input.
- Displaying data in tables using Material UI components.
- Basic styling with CSS classes and Material UI's `sx` prop.

## 🚀 Features

- **Browse Genres:** Navigate through different music genres presented as interactive buttons.
- **View Songs by Genre:** Clicking a genre button displays a table of songs belonging to that specific genre (limited to 10 results).
- **Song Search by Title:** Use a search bar to find songs based on their title (supports partial, case-insensitive matching).
- **Explore Similar Genre:** Searching for a song title displays other songs that share the same genre as the matched song.
- **Interactive Tables:** Song lists are displayed using Material UI tables.
- **Loading and Error Handling:** Provides user feedback while data is being fetched or if API calls fail.

## 🛠️ Technologies Used

* **React:** JavaScript library for building user interfaces.
* **TypeScript:** Typed superset of JavaScript that compiles to plain JavaScript.
* **Material UI (`@mui/material`):** A popular React UI framework implementing Google's Material Design.
* **CSS:** For custom styling and layout.
* **Fetch API:** For making asynchronous HTTP requests to the backend.
* **Custom React Hooks:** For encapsulating stateful logic, particularly data fetching.
* **npm or yarn:** Package manager.

## 🚦 Setup and Installation

To get a copy of this project up and running on your local machine for development and testing purposes, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/LizzieH97/vibe-match-front-end.git
    cd vibe-match
    ```
2.  **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Using yarn:
    ```bash
    yarn install
    ```

## ▶️ Running the Project

**IMPORTANT:** This application requires a running backend API server to fetch song and genre data. The application is configured to call endpoints on `http://localhost:8080`. Please ensure your backend is running and accessible at this address with the following expected endpoints:

* `GET http://localhost:8080/api/songs` (Fetches all songs)
* `GET http://localhost:8080/api/genres` (Fetches all genres)
* `GET http://localhost:8080/api/songs/bygenre/{genreId}` (Fetches songs for a specific genre ID)
* `GET http://localhost:8080/api/songs/byartist/{artistId}` (Fetches songs for a specific artist ID - used by `useSongsByArtist` hook)

Once your backend is running, start the React development server:

Using npm:
```bash
npm run dev
```