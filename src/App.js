import React from "react";
import "./styles/app.css";
import ButtonAppBar from "./components/ButtonAppBar";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Search />
    </div>
  );
}

export default App;
