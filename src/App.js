import "./App.css";
import React from "react";
import ColorBar from "./Tools/ColorBar";
import LoginForm from "./Tools/LoginForm";

function App() {
  return (
    <header className='App-bar'>
      <div>
        <ColorBar></ColorBar>

        <div style={{ display: "flex", justifyContent: "center", margin: "0",marginBottom:"100" }}>
          <img
            src='https://i.ibb.co/tK9dzJs/Logos-UAM-09.png'
            width='100px'
            height='65px'
          />
        </div>

        <div className='Body-Image'>
          <img
            src='https://i.ibb.co/wJ96nGP/Logo2.png'
            height='650'
            width='1520'
            alt='Logo2'></img>
        </div>
      </div>
    </header>
  );
}

export default App;
