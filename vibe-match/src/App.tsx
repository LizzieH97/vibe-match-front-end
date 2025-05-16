import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Choices from "./pages/Choices";
import ChoiceData from "./data/ChoicesData";
import Help from "./pages/Help";
import Popularity from "./pages/Popularity";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genres" element={<Choices choice={ChoiceData.genre} />} />

        <Route
          path="/danceability"
          element={<Choices choice={ChoiceData.danceability} />}
        />
        <Route path="/tempo" element={<Choices choice={ChoiceData.tempo} />} />
        <Route path="/help" element={<Help />} />
        <Route path="/popularity" element={<Popularity />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
