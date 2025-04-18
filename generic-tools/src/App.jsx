import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WordCounter from "./pages/WordCounter";
import PasswordGenerator from "./pages/PasswordGenerator";
import HexColorGenerator from "./pages/HexColorGenerator";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/word-counter" element={<WordCounter />} />
        <Route path="/password-generator" element={<PasswordGenerator />} />
        <Route path="/hex-color-generator" element={<HexColorGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;
