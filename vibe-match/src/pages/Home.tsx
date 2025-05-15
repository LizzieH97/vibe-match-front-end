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
            <SongTable songInput={searchTerm} />
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
