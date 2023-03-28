import React from "react";
import "./styles/App.css";
import "./styles/normalize.css";
import TicTacToe from "./components/TicTacToe/TicTacToe";

const App = () => {
  return (
    <div className="App">
      <TicTacToe />
    </div>
  );
};

export default App;
