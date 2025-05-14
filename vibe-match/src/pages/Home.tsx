import Header from "../components/Header";
import SideBar from "../components/SideBar";
import SongTable from "../components/SongTable";

const Home = () => {
  return (
    <>
      <div className="app-container">
        <SideBar />
        <div className="main-content">
          <Header />
          <main className="">
            <input
              className="search-bar"
              type="text"
              placeholder="What's the vibe?"
            />
            {/* <button>
          onClick={() =>}
        </button> */}
            <SongTable />
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
