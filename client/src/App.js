import React, { useState } from "react";
import locales from "./locales";

const App = () => {
  console.log(locales);
  const [locale, setLocale] = useState("en");
  return (
    <>
      <h1>Dev slang</h1>
      <label>Choose your language</label>
      <select onChange={e => setLocale(e.target.value)}>
        {Object.keys(locales).map(language => (
          <option>{language}</option>
        ))}
      </select>
      <table>
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
    </>
  );
};

export default App;
