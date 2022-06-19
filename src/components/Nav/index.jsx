import React from "react";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import "./styles.css";

function Nav() {
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <CurrencyExchangeIcon fontSize="inherit" />
        <div className="">
          <h1>Exchange</h1>
          <h2>Calculator</h2>
        </div>
      </div>
      <div className="">
        <h3>
          Discover your coins <br />
        </h3>
        <div className="nav-text-container">
          <p>exchange rate really</p>
          <h3>FAST!</h3>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
