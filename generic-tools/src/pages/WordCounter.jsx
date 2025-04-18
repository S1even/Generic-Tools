import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/WordCounter.css";

export default function WordCounter() {
  const [text, setText] = useState("");

  const countWords = (text) => {
    const words = text.trim().split(/\s+/);
    return text.trim() === "" ? 0 : words.length;
  };

  const wordCount = countWords(text);
  const charCount = text.length;

  return (
    <div className="container">
      <Link to="/" className="back-arrow">
        ← Retour
      </Link>

      <div className="title">
        <h1>Word and character counter</h1>
      </div>
      <div className="form-control">
        <textarea
          id="textInput"
          className="input input-alt"
          placeholder="Type something intelligent"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div id="counter">
        Number of words : {wordCount} | Number of characters : {charCount}
      </div>
    </div>
  );
}
