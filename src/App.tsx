import React from "react";
import { Header } from "./components/Header/Header";
import { PersonalInfo } from "./components/PersonalInfo/PersonalInfo";
import { Skills } from "./components/Skills/Skills";

function App() {
  return (
    <div className="App container">
      <Header />
      <PersonalInfo />

      <Skills />
    </div>
  );
}

export default App;