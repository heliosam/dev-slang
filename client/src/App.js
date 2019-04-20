import React, { useState, useEffect } from "react";
import locales from "./locales";

import Table from "./components/Table";
import LanguageSelector from "./components/LanguageSelector";
import KeyPreview from "./components/KeyPreview";

const validSymbol = symbol => locales.en[symbol];
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

  const translations = locales[currentLocale];

  useEffect(() => {
    window.addEventListener("keydown", e => {
      console.log(e.key);
      (validSymbol(e.key) && setSymbol(e.key)) ||
        (keyFromBrackets[e.key] && setSymbol(keyFromBrackets[e.key]));
    });
  }, []);

  return (
    <div className="container">
      <h1 className="title">
        Dev slang{" "}
        <span role="img" aria-label="keyboard">
          ⌨️
        </span>
      </h1>
      <p className="description">
        You work with them everyday while working with your computer, but do you
        really know how to pronounce the symbols you program with?
      </p>
      {currentSymbol && (
        <KeyPreview
          symbol={currentSymbol}
          description={translations[currentSymbol].join(", ")}
          onClick={() => setSymbol(null)}
        />
      )}
      <LanguageSelector
        languages={Object.keys(locales)}
        setLanguage={setLocale}
      />
      <Table translations={translations} />
    </div>
  );
};

export default App;
