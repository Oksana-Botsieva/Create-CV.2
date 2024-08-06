import React from "react";
import { Header } from "./components/Header/Header";
import { PersonalInfo } from "./components/PersonalInfo/PersonalInfo";
import { Skills } from "./components/Skills/Skills";
import { Education } from "./components/Education/Education";
import { Experience } from "./components/Experience/Experience";
import { Title } from "./components/Title/Title";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App container">
        <Header />
        <Title title={"Персональная информация"} />
        <PersonalInfo />
        <Title title={"Навыки"} />
        <Skills />
        <Title title={"Образование"} />
        <Education />
        <Title title={"Опыт работы"} />
        <Experience />
      </div>
    </Provider>
  );
}

export default App;