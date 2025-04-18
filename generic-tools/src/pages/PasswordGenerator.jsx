import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/PasswordGenerator.css";

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let chars = letters;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    let result = "";
    for (let i = 0; i < length; i++) {
      const randIndex = Math.floor(Math.random() * chars.length);
      result += chars[randIndex];
    }
    setPassword(result);
  };

  return (
    <div className="container">
      <Link to="/" className="back-arrow">← Retour</Link>
      <div className="title">
        <h1>Password Generator</h1>
      </div>
      <div className="form-control">
        <label>
          Length:
          <input
            type="number"
            min="4"
            max="50"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          Include numbers
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />
          Include symbols
        </label>
        <button onClick={generatePassword}>Generate Password</button>
        <div className="result">
          {password && <p><strong>Generated password:</strong> {password}</p>}
        </div>
      </div>
    </div>
  );
}
