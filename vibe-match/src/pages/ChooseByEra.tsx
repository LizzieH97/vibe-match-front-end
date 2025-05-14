import SideBar from "../components/SideBar";

export default function ChooseByEra() {
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
              Okay! Let's choose your vibe by the era. Choose an era below:
            </h2>
            <a href="/" id="back-button">
              Want to go back to songs?
            </a>
            <button className="choice-button">60s</button>
            <button className="choice-button">70s</button>
            <button className="choice-button">80s</button>
            <button className="choice-button">90s</button>
            <button className="choice-button">00s</button>
            <button className="choice-button">10s</button>
            <button className="choice-button">20s</button>
          </main>
        </div>
      </div>
    </>
  );
}
