import SideBar from "../components/SideBar";

export default function ChooseByTempo() {
  return (
    <>
      <div className="app-container">
        <SideBar />
        <div className="main-content">
          <header className="page-header">
            <h1 id="brandName">🎶 Vibe Match</h1>
          </header>
          <main className="genre-grid">
            <h2 className="subtitle">
              Okay! Let's choose your vibe by tempo. Choose a genre below:
            </h2>
            <a href="/" id="back-button">
              Want to go back to songs?
            </a>
            <button className="genre-button">Fast</button>
            <button className="genre-button">Slow</button>
            <button className="genre-button">Kind of fast</button>
            <button className="genre-button">Kind of slow</button>
            <button className="genre-button">Soemthing like that</button>
          </main>
        </div>
      </div>
    </>
  );
}
