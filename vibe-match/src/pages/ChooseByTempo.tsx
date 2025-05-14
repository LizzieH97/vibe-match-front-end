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
          <main className="choice-grid">
            <h2 className="subtitle">
              Okay! Let's choose your vibe by tempo. Choose a tempo below:
            </h2>
            <a href="/" id="back-button">
              Want to go back to songs?
            </a>
            <button className="choice-button">Fast</button>
            <button className="choice-button">Slow</button>
            <button className="choice-button">Kind of fast</button>
            <button className="choice-button">Kind of slow</button>
            <button className="choice-button">Soemthing like that</button>
          </main>
        </div>
      </div>
    </>
  );
}
