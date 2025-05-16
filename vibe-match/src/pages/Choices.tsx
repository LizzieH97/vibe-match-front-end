import { useState } from "react";
import ChoiceData from "../data/ChoicesData";
import { getAllGenres } from "../utils/CallingFunctions";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

import GenreTable from "../components/GenreTable";
import DanceTable from "../components/DanceabilityTable";
import TempoTable from "../components/TempoTable";

type ChoiceProps = {
  choice: {
    subtitle: string;
    buttons: string[];
  };
};

export default function Choices({ choice }: ChoiceProps) {
  const [selectedGenreId, setSelectedGenreId] = useState<number | null>(null);
  const allGenres = getAllGenres();
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [filterSelected, setFilterSelected] = useState(false);
  const genreName = Array.from(
    new Set(allGenres.map((genre) => genre.genre))
  ).sort();

  const buttonsToRender =
    choice === ChoiceData.genre ? genreName : choice.buttons;
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const btnCurrent = event.currentTarget.innerHTML;
    setFilterSelected(true);

    const foundGenre = allGenres.find((genre) => genre.genre === btnCurrent);
    if (foundGenre) {
      setSelectedGenreId(foundGenre.id);
    } else {
      switch (btnCurrent) {
        case "very high":
          setMin(0.8);
          setMax(1);
          break;
        case "high":
          setMin(0.6);
          setMax(0.8);
          break;
        case "medium":
          setMin(0.4);
          setMax(0.6);
          break;
        case "low":
          setMin(0.2);
          setMax(0.4);
          break;
        case "barely any":
          setMin(0);
          setMax(0.2);
          break;
        case "very fast":
          setMin(160);
          setMax(185);
          break;
        case "fast":
          setMin(140);
          setMax(160);
          break;
        case "kind of fast":
          setMin(120);
          setMax(140);
          break;
        case "kind of slow":
          setMin(100);
          setMax(120);
          break;
        case "slow":
          setMin(80);
          setMax(100);
          break;
        case "very slow":
          setMin(60);
          setMax(80);
          break;
      }
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
            {max <= 1 ? (
              <DanceTable key={min} minVal={min} maxVal={max} />
            ) : (
              <TempoTable key={min} minVal={min} maxVal={max} />
            )}
          </main>
        </div>
      </div>
    </>
  );
}
