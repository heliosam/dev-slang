import React, { useState } from "react";
import locales from "./locales";

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
      <div className="language-selector">
        <label>Language</label>
        <select onChange={e => setLocale(e.target.value)}>
          {Object.keys(locales).map(language => (
            <option>{language}</option>
          ))}
        </select>
      </div>
      <p className="description">
        You work with them everyday while working with your computer, but do you
        really know how to pronounce the symbols you program with?
      </p>
      <table>
        <thead>
          <tr>
            <td>Symbol</td>
            <td>How to pronounce it</td>
          </tr>
        </thead>
        <tbody>
          {Object.keys(locales[locale]).map(key => (
            <tr>
              <td>{key}</td>
              <td>{locales[locale][key].join(", ")}</td>
            </tr>
          ))}
          <tr />
        </tbody>
      </table>
    </div>
  );
};

export default App;
