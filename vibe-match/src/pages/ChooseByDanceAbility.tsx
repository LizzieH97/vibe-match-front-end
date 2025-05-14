import SideBar from "../components/SideBar";
// SongFilterDisplay

type ChooseByDanceAbilityProp = {
  subtitle: string;
  buttons: string[];
};

const ChooseByDanceability = (filter: ChooseByDanceAbilityProp) => {
  return (
    <>
      <div className="app-container">
        <SideBar />
        <div className="main-content">
          <header className="page-header">
            <h1 id="brandName">🎶 Vibe Match</h1>
          </header>
          <main className="genre-grid">
            <h2 className="subtitle">{filter.subtitle}</h2>
            <a href="/" id="back-button">
              Want to go back to songs?
            </a>
            {filter?.buttons?.map((btn) => {
              return <button className="genre-button">{btn}</button>;
            })}
            {/* <button className="genre-button">Dance?</button>
            <button className="genre-button">Not dance?</button>
            <button className="genre-button">Some sort of difference</button>
            <button className="genre-button">Idk</button> */}
          </main>
        </div>
      </div>
    </>
  );
};

export default ChooseByDanceability;
