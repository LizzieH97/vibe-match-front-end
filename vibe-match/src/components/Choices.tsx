import { useState } from "react";
import ChoiceData from "../data/ChoicesData";
import { getAllGenres } from "../utils/CallingFunctions";
import Header from "./Header";
import SideBar from "./SideBar";

import GenreTable from "./GenreTable";

type ChoiceProps = {
  choice: {
    subtitle: string;
    buttons: string[];
  };
};

export default function Choices({ choice }: ChoiceProps) {
  const [selectedGenreId, setSelectedGenreId] = useState<number | null>(null);
  const allGenres = getAllGenres();

  const genreName = allGenres.map((genre) => {
    return genre.genre;
  });

  const buttonsToRender =
    choice === ChoiceData.genre ? genreName : choice.buttons;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const genreNameCurrent = event.currentTarget.innerHTML;

    const foundGenre = allGenres.find(
      (genre) => genre.genre === genreNameCurrent
    );
      
    if (foundGenre) {
      setSelectedGenreId(foundGenre.id);
    }
  };

  return (
    <>
      <div className="app-container">
        <SideBar />
        <div className="main-content">
          <Header />
          <main>
            <div className="page-info-section">
              <h2 className="subtitle">{choice.subtitle}</h2>
              <a href="/" id="back-button">
                Want to go back to songs?
              </a>
            </div>
            <div className="btns-table-container">
              <div className="choice-btn-grid">
                {buttonsToRender.map((btn, i) => (
                  <button
                    key={i}
                    className="choice-button"
                    onClick={handleClick}
                  >
                    {btn}
                  </button>
                ))}
              </div>
              {selectedGenreId !== null && (
                <GenreTable key={selectedGenreId} genreId={selectedGenreId} />
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
