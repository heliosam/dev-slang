import React from "react";
import "./styles.css";

const LanguageSelector = ({ languages, setLanguage }) => (
  <div className="language-selector">
    <div className="select-control">
      <label>Language</label>
      <select onChange={e => setLanguage(e.target.value)}>
        {languages.map(language => (
          <option value={language.value} key={language.value}>
            {language.name} {language.flag}
          </option>
        ))}
      </select>
    </div>
    <a className="link" href="https://github.com/heliosam/dev-slang#contribute">
      Add new language
    </a>
  </div>
);

export default LanguageSelector;
