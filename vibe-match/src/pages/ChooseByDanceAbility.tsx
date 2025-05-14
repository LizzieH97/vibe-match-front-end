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
<<<<<<< HEAD
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
=======
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
>>>>>>> a4cf401be16fdb12a6716bb9d376f99a5f672fa1
          </main>
        </div>
      </div>
    </>
  );
};

export default ChooseByDanceability;
