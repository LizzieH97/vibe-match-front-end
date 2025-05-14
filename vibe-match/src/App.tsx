
import './App.css'

function App() {

  return (
    <div className='app-container'>
      <aside className="side-menu">
        <a href="">Genre</a>
        <a href="">Tempo</a>
        <a href="">Danceable</a>
        <a href="">Time period</a>
        <a href=""></a>
      </aside>
      <div className='main-content'>
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
              <tr className="">
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}

export default App
