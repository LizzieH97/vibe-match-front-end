import ChoiceData from "../data/ChoicesData";
import SideBar from "./SideBar";

type ChoiceProps = {
  choice: {
    subtitle: string;
    options: string[];
  };
};

export default function Choices({ choice }: ChoiceProps) {
  return (
    <>
      <div className="app-container">
        <SideBar />
        <div className="main-content">
          <header className="page-header">
            <h1 id="brandName">🎶 Vibe Match</h1>
          </header>
          <main className="choice-grid">
            <h2 className="subtitle">{choice.subtitle}</h2>
            <a href="/" id="back-button">
              Want to go back to songs?
            </a>
            {choice.options.map((option, idex) => (
              <button key={idex} className="choice-button">
                {option}
              </button>
            ))}
          </main>
        </div>
      </div>
    </>
  );
}
