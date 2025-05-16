import { useMemo, useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import SongTable from "../components/SongTable";

import type { Song } from "../types/Song";
import { useSongs } from "../utils/CallingFunctions";

const Home = () => {
  const { songs: allSongs, loading } = useSongs(); // ✅ Called at top level
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSongs, setFilteredSongs] = useState<Song[]>([]);

  const handleSearch = () => {
    const match = allSongs.find((song) =>
      song.track_name.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );

    if (match) {
      const genreId = match.genre.id;
      const results = allSongs.filter((song) => song.genre.id === genreId);
      setFilteredSongs(results);
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
            <div>
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button onClick={handleSearch} disabled={loading}>
                Search
              </button>

              {!loading && <SongTable filteredSongs={filteredSongs} />}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
