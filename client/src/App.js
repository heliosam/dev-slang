import React, { useState, useEffect } from "react";
import locales from "./locales";

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
        TIP! Try pressing the key you want to know
        <span class="key">/</span>
        <span class="key">?</span>
        <span class="key">}</span>
      </p>
      {currentSymbol && (
        <KeyPreview
          symbol={currentSymbol}
          description={translations[currentSymbol].join(", ")}
          onClick={() => setSymbol(null)}
        />
      )}
      <LanguageSelector
        languages={languages}
        setLanguage={setLocale}
      />
      <Table translations={translations} />
    </div>
  );
};

export default App;
