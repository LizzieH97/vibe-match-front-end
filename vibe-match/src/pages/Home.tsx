import { useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import SongTable from "../components/SongTable";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="app-container">
        <SideBar />
        <div className="main-content">
          <Header />
          <main>
            <input
              className="search-bar"
              type="text"
              placeholder="What's the vibe?"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
<<<<<<< HEAD

            {/* <button>
          onClick={() =>}
        </button> */}
            <table className="song-table">
              <thead>
                <tr className="table-headings">
                  <th>#</th>
                  <th>SONG TITLE</th>
                  <th>ARTIST</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-rows">
                  <td className="song-numbers"></td>
                  <td className="song-title"></td>
                  <td className="song-artist"></td>
                </tr>
              </tbody>
            </table>
=======
            <SongTable songInput={searchTerm} />
>>>>>>> 8b489b810d48c687a294678b661f4e2a0fbae8e7
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
