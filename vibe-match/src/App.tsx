
import './App.css'

function App() {

  return (
    <>
      <header className='page-header'>
        <h1 id='brandName'>🎶 Vibe Match</h1>
      </header>
      <main className="">
        <input className="search-bar" type="text" />
        {/* <button>
          onClick={() =>}
        </button> */}
      <table className='song-table'>
            <tr className='table-headings'>
                <th>#</th>
                <th>SONG TITLE</th>
                <th>ARTIST</th>
            </tr>
            <tr className=""></tr>
            <tr className=""></tr>
            <tr className=""></tr>
            <tr className=""></tr>
            <tr className=""></tr>
            <tr className=""></tr>
            <tr className=""></tr>
            <tr className=""></tr>
            <tr className=""></tr>
            <tr className=""></tr>
        </table>
      </main>
      <aside className='side-menu'>
        <a href="">Genre</a>
        <a href="">Tempo</a>
        <a href="">Danceable</a>
        <a href="">Time period</a>
        <a href=""></a>
      </aside>
          
    </>
  );
}

export default App
