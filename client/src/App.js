import React, { useState } from "react";
import locales from "./locales";

import Table from "./components/Table";
import LanguageSelector from "./components/LanguageSelector";

const App = () => {
  console.log(locales);
  const [locale, setLocale] = useState("en");
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
      <LanguageSelector
        languages={Object.keys(locales)}
        setLanguage={setLocale}
      />
      <Table translations={locales[locale]} />
    </div>
  );
};

export default App;
