import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/HexColorGenerator.css";

export default function HexColorGenerator() {
  const [color, setColor] = useState("#000000");
  const [copied, setCopied] = useState(false);

  const generateHexColor = () => {
    const hex = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    setColor(hex);
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="container">
      <Link to="/" className="back-arrow">← Retour</Link>
      <div className="title">
        <h1>🎨 Générateur de couleur HEX</h1>
      </div>

      <div
        className="color-display"
        style={{ backgroundColor: color }}
        onClick={copyToClipboard}
      >
        <p>{color}</p>
        {copied && <span className="copied">Copié !</span>}
      </div>

      <button onClick={generateHexColor}>Générer une couleur</button>
    </div>
  );
}
