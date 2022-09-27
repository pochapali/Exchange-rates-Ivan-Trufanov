// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { json } from "react-router-dom";
function App() {
  async function convert() {
    try {
      const address = "https://api.exchangerate.host/latest";
      const response = await fetch(address);
      if (response.ok) {
        const data = await response.json();
        setGBP(eur * data.rates.GBP);
      } else {
        alert("couldnt receive data");
      }
    } catch (err) {
      alert(err);
    }
  }

  const [eur, setEur] = useState(0);
  const [GBP, setGBP] = useState(0);
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div id="content">
      <h3>euros to GBP</h3>
      <form>
        <div>
          <label>euros</label>
          <input
            type="number"
            placeholder="Type euros here"
            value={eur}
            onChange={(e) => setEur(e.target.value)}
          />
        </div>
        <div>
          <label>GBP</label>
          <output>{GBP}</output>
        </div>
        <button type="button" onClick={convert}>
          calculate
        </button>
      </form>
    </div>
  );
}

export default App;
