import ChoiceData from "../data/ChoicesData";
import Header from "./Header";
import SideBar from "./SideBar";

type ChoiceProps = {
  choice: {
    subtitle: string;
    buttons: string[];
  };
};

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