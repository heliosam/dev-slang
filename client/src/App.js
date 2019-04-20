import React, { Component } from "react";
import en from "./locales/en.json";

class App extends Component {
  render() {
    return (
      <>
        <h1>Dev slang</h1>
        <table>
          <tbody>
            {Object.keys(en).map(key => (
              <tr>
                <td>{key}</td>
                <td>{en[key].join(", ")}</td>
              </tr>
            ))}
            <tr />
          </tbody>
        </table>
      </>
    );
  }
}

export default App;
