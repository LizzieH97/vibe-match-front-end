import "./App.css";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import choiceData from "./data/ChoicesData";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/genres"
          element={<ChooseByGenre filter={choiceData.genre} />}
        />
        <Route
          path="/tempo"
          element={<ChooseByTempo filter={choiceData.tempo} />}
        />
        <Route
          path="/danceability"
          element={<ChooseByDanceability filter={choiceData.danceability} />}
        />
        <Route
          path="/era"
          element={<ChooseByEra filter={choiceData.era} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

// const rootElement = document.getElementById("root");

// if (rootElement) {
//   const root = ReactDOM.createRoot(rootElement);
//   root.render(<App />);
// }``
