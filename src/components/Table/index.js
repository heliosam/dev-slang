import React from "react";
import "./styles.css";

const Table = ({translations}) => (
  <table>
    <thead>
      <tr>
        <td>Symbol</td>
        <td>How to pronounce it</td>
      </tr>
    </thead>
    <tbody>
      {Object.keys(translations).map(symbol => (
        <tr key={symbol}>
          <td>{symbol}</td>
          <td>{translations[symbol].join(", ")}</td>
        </tr>
      ))}
      <tr />
    </tbody>
  </table>
);

export default Table;
