import React from "react";
import stock from "./images/stock1.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Captcha Assumptions</p>
      </header>
      <img src={stock} alt="stock" />
    </div>
  );
}

export default App;
