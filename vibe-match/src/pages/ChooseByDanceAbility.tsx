import SideBar from "../components/SideBar";

export default function ChooseByDanceability() {
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
              Okay! Let's choose your vibe by dance level. Choose a dance level
              below:
            </h2>
            <a href="/" id="back-button">
              Want to go back to songs?
            </a>
            <button className="choice-button">Dance?</button>
            <button className="choice-button">Not dance?</button>
            <button className="choice-button">Some sort of difference</button>
            <button className="choice-button">Idk</button>
          </main>
        </div>
      </div>
    </>
  );
}
