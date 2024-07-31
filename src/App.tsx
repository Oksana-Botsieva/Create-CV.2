import React from "react";
import { Header } from "./components/Header/Header";
import { PersonalInfo } from "./components/PersonalInfo/PersonalInfo";
import { Experience } from "./components/Experience/Experience";

function App() {
  return (
    <div className="App container">
      <Header />
      <PersonalInfo />

      <Experience />
    </div>
  );
}

export default App;