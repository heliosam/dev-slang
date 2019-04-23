import React from "react";
import "./styles.css";

const KeyPreview = ({ symbol, description, onClick }) => (
  <div className="key-preview-container" onClick={onClick}>
    <div className="key-preview">
      <h1>{symbol}</h1>
      <p>{description}</p>
    </div>
  </div>
);

export default KeyPreview;
