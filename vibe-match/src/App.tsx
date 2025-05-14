import "./App.css";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChooseByGenre from "./pages/ChooseByGenre";
import ChooseByTempo from "./pages/ChooseByTempo";
import ChooseByDanceability from "./pages/ChooseByDanceAbility";

import ChooseByEra from "./pages/ChooseByEra";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genres" element={<ChooseByGenre />} />
        <Route path="/tempo" element={<ChooseByTempo />} />
        <Route path="/danceability" element={<ChooseByDanceability />} />
        <Route path="/era" element={<ChooseByEra />} />
      </Routes>
    </BrowserRouter>
  );
}
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
