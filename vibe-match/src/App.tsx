import "./App.css";
<<<<<<< HEAD

=======
>>>>>>> 8b489b810d48c687a294678b661f4e2a0fbae8e7
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Choices from "./components/Choices";
import ChoiceData from "./data/ChoicesData";
import Help from "./components/Help";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/genres" element={<Choices choice={ChoiceData.genre} />} />
                <Route path="/eras" element={<Choices choice={ChoiceData.era} />} />
                <Route
                    path="/danceability"
                    element={<Choices choice={ChoiceData.danceability} />}
                />
                <Route path="/tempo" element={<Choices choice={ChoiceData.tempo} />} />
                <Route path="/help" element={<Help />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;