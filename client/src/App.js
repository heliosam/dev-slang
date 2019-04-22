import React, { useState, useEffect } from "react";
import locales from "./locales";

import github from "./images/github.png";

import Table from "./components/Table";
import LanguageSelector from "./components/LanguageSelector";
import KeyPreview from "./components/KeyPreview";

const validSymbol = symbol => locales.en.symbols[symbol];
const keyFromBrackets = {
  "[": "[]",
  "]": "[]",
  "{": "{}",
  "}": "{}",
  "(": "()",
  ")": "()"
};

const App = () => {
  const [currentLocale, setLocale] = useState("en");
  const [currentSymbol, setSymbol] = useState(null);

  const translations = locales[currentLocale].symbols;
  const languages = Object.keys(locales).map(language => ({
    value: language,
    name: locales[language].name,
    flag: locales[language].flag
  }));

  useEffect(() => {
    window.addEventListener("keydown", e => {
      (validSymbol(e.key) && setSymbol(e.key)) ||
        (keyFromBrackets[e.key] && setSymbol(keyFromBrackets[e.key]));
    });
  }, []);

  return (
    <div className="container">
      <a href="https://github.com/heliosam/dev-slang" className="github-link">
        <img src={github} alt="github" width="20" height="20" />
      </a>
      <h1 className="title">
        Dev slang{" "}
        <span role="img" aria-label="speech-bubble">
          💬
        </span>
      </h1>
      <p className="description">
        You work with them everyday while working with your computer, but do you
        really know how to pronounce the symbols you program with?
      </p>
      <p className="pro-tip">
        TIP! Try pressing the key on your keyboard
        <span className="key">/</span>
        <span className="key">?</span>
        <span className="key">}</span>
      </p>
      {currentSymbol && (
        <KeyPreview
          symbol={currentSymbol}
          description={translations[currentSymbol].join(", ")}
          onClick={() => setSymbol(null)}
        />
      )}
      <LanguageSelector languages={languages} setLanguage={setLocale} />
      <Table translations={translations} />
      <div>
        Made by{" "}
        <a
          href="https://github.com/heliosam"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Helios
        </a>{" "}
        and <a
          href="https://github.com/heliosam/dev-slang#contributors"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >cool people</a>
      </div>
    </div>
  );
};

export default App;
