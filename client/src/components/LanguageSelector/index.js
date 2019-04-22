import React from "react";
import "./styles.css";

const LanguageSelector = ({ languages, setLanguage }) => (
  <div className="language-selector">
    <label>Language</label>
    <select onChange={e => setLanguage(e.target.value)}>
      {languages.map(language => (
        <option value={language.value} key={language.value}>
          {language.name} {language.flag}
        </option>
      ))}
    </select>
  </div>
);

export default LanguageSelector;
