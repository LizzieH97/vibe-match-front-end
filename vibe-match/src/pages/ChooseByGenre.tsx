import SideBar from "../components/SideBar";

export default function ChooseByGenre() {
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
              Okay! Let's choose your vibe by genre. Choose a genre below:
            </h2>
            <a href="/" id="back-button">
              Want to go back to songs?
            </a>
            <button className="choice-button">Some genre</button>
            <button className="choice-button">Some other genre</button>
            <button className="choice-button">Another genre</button>
            <button className="choice-button">etc</button>
          </main>
        </div>
      </div>
    </>
  );
}
