import Header from "../components/Header";
import PopularityTable from "../components/PopularityTable";
import SideBar from "../components/SideBar";

const Popularity = () => {
  return (
    <div className="app-container">
      <SideBar />
      <div className="main-content">
        <Header />
        <main className="choice-grid">
          <h2 className="subtitle">
            Great choice! Here's some of the most popular songs currently:
          </h2>
          <div className="pop-table">
            <PopularityTable />
          </div>
          <a href="/" id="back-button" className="help-back">
            Want to go back to songs?
          </a>
        </main>
      </div>
    </div>
  );
};

export default Popularity;
