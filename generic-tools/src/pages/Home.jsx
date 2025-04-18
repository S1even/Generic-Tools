import { Link } from "react-router-dom";
import '../styles/Home.css';

const tools = [
  { name: "Compteur de mots", path: "/word-counter" },
  { name: "Générateur de mots de passe", path: "/password-generator" },
  { name: "Générateur de couleurs HEX", path: "/hex-color-generator" }
];

export default function Home() {
  return (
    <div className="page">
      <h1 className="Title">🛠️ Generic Tools</h1>

      <div className="button-section">
        <div className="tool-list">
          {tools.map((tool) => (
            <Link
              key={tool.path}
              to={tool.path}
              className="tool-button"
            >
              {tool.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}