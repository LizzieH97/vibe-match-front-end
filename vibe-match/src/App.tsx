import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Choices from "./components/Choices";
import ChoiceData from "./data/ChoicesData";

export default function App() {
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
        <Route path="/era" element={<Choices choice={ChoiceData.era} />} />
      </Routes>
    </BrowserRouter>
  );
}
