import React from "react";
import { Header } from "./components/Header/Header";
import { PersonalInfo } from "./components/PersonalInfo/PersonalInfo";
import { Skills } from "./components/Skills/Skills";
import { Education } from "./components/Education/Education";
import { Experience } from "./components/Experience/Experience";

function App() {
  return (
    <div className="App container">
      <Header />
      <PersonalInfo />
      <Skills />
      <Education />
      <Experience />
    </div>
  );
}

export default App;