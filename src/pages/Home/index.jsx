import React from "react";
import Main from "../../components/Main";
import Nav from "../../components/Nav";
import "./styles.css";

function Home() {
  return (
    <div className="home-container">
      <Nav />
      <Main />
    </div>
  );
}

export default Home;
