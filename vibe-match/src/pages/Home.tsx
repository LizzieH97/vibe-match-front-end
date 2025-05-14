import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <>
      <div className="app-container">
        <SideBar />
        <div className="main-content">
          <header className="page-header">
            <h1 id="brandName">🎶 Vibe Match</h1>
          </header>
          <main className="">
            <input
              className="search-bar"
              type="text"
              placeholder="What's the vibe?"
            />
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
