import React from "react";
import { Header } from "./components/Header/Header";
import { PersonalInfo } from "./components/PersonalInfo/PersonalInfo";
import { Education } from "./components/Education/Education";

function App() {
  return (
    <div className="App container">
      <Header />
      <PersonalInfo />
      <Education />
    </div>
  );
}

export default App;