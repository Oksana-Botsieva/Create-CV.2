import React from "react";
import { Header } from "./components/Header/Header";
import { PersonalInfo } from "./components/PersonalInfo/PersonalInfo";
import { Skills } from "./components/Skills/Skills";
import { Education } from "./components/Education/Education";
import { Experience } from "./components/Experience/Experience";
import { Title } from "./components/Title/Title";

function App() {
  return (
    <div className="App container">
      <Header />
      <Title title={"Персональная информация"} />
      <PersonalInfo />
      <Title title={"Образование"} />
      <Skills />
      <Title title={"Навыки"} />
      <Education />
      <Title title={"Опыт работы"} />
      <Experience />
    </div>
  );
}

export default App;