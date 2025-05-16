import { useMemo, useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import SongTable from "../components/SongTable";

import type { Song } from "../types/Song";
import { useSongs } from "../utils/CallingFunctions";

const Home = () => {
  const { songs: allSongs, loading } = useSongs();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSongs, setFilteredSongs] = useState<Song[]>([]);

  const handleSearch = () => {
    const match = allSongs.find((song) =>
      song.track_name.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );

    if (match) {
      const genreId = match.genre.id;
      const results = allSongs.filter((song) => song.genre.id === genreId);
      const limitedResults = results.slice(0, 10);
      setFilteredSongs(limitedResults);
    } else {
      setFilteredSongs([]);
    }
  };

  return (
    <>
      <div className="app-container">
        <SideBar />
        <div className="main-content">
          <Header />
          <main>
            <div id="searchContainer">
              <input
                className="search-bar"
                placeholder="What's the vibe?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className="search-button"
                onClick={handleSearch}
                disabled={loading}
              >
                Search
              </button>
            </div>

            {!loading && <SongTable filteredSongs={filteredSongs} />}
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
