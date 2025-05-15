import ChoiceData from "../data/ChoicesData";
import { getAllGenres } from "../utils/CallingFunctions";
import Header from "./Header";
import SideBar from "./SideBar";

type ChoiceProps = {
  choice: {
    subtitle: string;
    buttons: string[];
  };
};

<<<<<<< HEAD
export default function Choices({ choice }: ChoiceProps) {
  if (choice === ChoiceData.genre) {
    choice.buttons = getAllGenres();
  }
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
            {choice.buttons.map((btn, idex) => (
              <button key={idex} className="choice-button">
                {btn}
              </button>
            ))}
          </main>
        </div>
      </div>
    </>
  );
}
=======
const Choices = ({ choice }: ChoiceProps) => {
    return (
            <div className="app-container">
                <SideBar />
                <div className="main-content">
                    <Header />
                    <main className="choice-grid">
                        <h2 className="subtitle">{choice.subtitle}</h2>
                        <a href="/" id="back-button">
                            Want to go back to songs?
                        </a>
                        {choice.buttons.map((btn, idex) => (
                            <button key={idex} className="choice-button">
                                {btn}
                            </button>
                        ))}
                    </main>
                </div>
            </div>
    );
};

export default Choices;
>>>>>>> 8b489b810d48c687a294678b661f4e2a0fbae8e7
