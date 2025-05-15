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
          <main className="choice-grid">
            <h2 className="subtitle">{choice.subtitle}</h2>
            <a href="/" id="back-button">
              Want to go back to songs?
            </a>
            {buttonsToRender.map((btn, i) => (
              <button key={i} className="choice-button" onClick={handleClick}>
                {btn}
              </button>
            ))}
            {selectedGenreId !== null && (
              <GenreTable key={selectedGenreId} genreId={selectedGenreId} />
            )}
          </main>
        </div>
      </div>
    </>
  );
}
