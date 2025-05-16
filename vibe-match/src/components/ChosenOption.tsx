import GenreTable from "./GenreTable";
import Header from "./Header";
import SideBar from "./SideBar";

export default function ChosenOption(genreId: number) {
  return (
    <>
      <div className="app-container">
        <SideBar />
        <div className="main-content">
          <Header />
          <main>
            <GenreTable genreId={genreId} />
          </main>
        </div>
      </div>
    </>
  );
}
