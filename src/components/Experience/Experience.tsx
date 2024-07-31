import React, { useState } from "react";
import { Card } from "../Card/Card";
import { Control } from "../ControlForm/Control";
import { Button, DatePicker, Input } from "antd";
import * as S from "./style";

const Experience: React.FC = () => {
  const { RangePicker } = DatePicker;
  const { TextArea } = Input;
  const [forms, setForms] = useState<number[]>([]);
  const addForm = () => {
    setForms([...forms, forms.length]);
  };

  const renderForm = (index: number) => (
    <Card key={index}>
      <S.ExperienceTitle>Место работы</S.ExperienceTitle>
      <Control label={"Компания"}>
        <Input />
      </Control>
      <Control label={"Должность"}>
        <Input />
      </Control>
      <Control label={"Период работы"}>
        <RangePicker placeholder={["Начало", "Конец"]} />
      </Control>
      <Control label={"Описание"}>
        <TextArea rows={5} />
      </Control>
    </Card>
  );
  return (
    <>
      <Card>
        <S.ExperienceTitle>Место работы</S.ExperienceTitle>
        <Control label={"Компания"}>
          <Input />
        </Control>
        <Control label={"Должность"}>
          <Input />
        </Control>
        <Control label={"Период работы"}>
          <RangePicker placeholder={["Начало", "Конец"]} />
        </Control>
        <Control label={"Описание"}>
          <TextArea rows={5} />
        </Control>
      </Card>
      {forms.map((_, index) => renderForm(index))}
      <Button onClick={addForm} type={"primary"}>
        Добавить ещё
      </Button>
    </>
  );
};

export { Experience };