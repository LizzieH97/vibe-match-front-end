import Header from "../components/Header";
import PopularityTable from "../components/PopularityTable";
import SideBar from "../components/SideBar";

const Popularity = () => {
  return (
    <div className="app-container">
      <SideBar />
      <div className="main-content">
        <Header />
        <main>
          <div className="page-info-section">
            <h2 className="subtitle">
              Great choice! Here's some of the most popular songs currently:
            </h2>
            <a href="/" id="back-button" className="help-back">
              Want to go back to songs?
            </a>
          </div>
          <div className="pop-table">
            <PopularityTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Popularity;
