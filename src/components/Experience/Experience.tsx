import React, { useState } from "react";
import { Card } from "../Card/Card";
import { Control } from "../ControlForm/Control";
import { Button, DatePicker, Input } from "antd";
import * as S from "./style";
import { IExperience } from "../../types/experience";

const { RangePicker } = DatePicker;

const initialState: IExperience[] = [
  {
    id: Math.random(),
    company: "",
    position: "",
    description: "",
    date: [null, null],
  },
];

const Experience: React.FC = () => {
  const { TextArea } = Input;
  const [forms, setForms] = useState<IExperience[]>(initialState);

  const handleAddForm = () => {
    setForms([
      ...forms,
      {
        id: Math.random(),
        company: "",
        position: "",
        description: "",
        date: [null, null],
      },
    ]);
  };

  const handleDeleteForm = (index: number) => {
    if (forms.length > 1) {
      setForms(forms.filter((_, i) => i !== index));
    }
  };

  const renderForm = (form: IExperience, index: number) => (
    <Card key={form.id}>
      <S.ExperienceTitle>Место работы</S.ExperienceTitle>
      <Control label={"Компания"}>
        <Input value={form.company} />
      </Control>
      <Control label={"Должность"}>
        <Input value={form.position} />
      </Control>
      <Control label={"Период работы"}>
        <RangePicker placeholder={["Начало", "Конец"]} value={form.date} />
      </Control>
      <Control label={"Описание"}>
        <TextArea rows={5} value={form.description} />
      </Control>
      <Button onClick={handleAddForm} type={"primary"}>
        Добавить ещё
      </Button>
      {forms.length > 1 && (
        <Button onClick={() => handleDeleteForm(index)} type={"dashed"}>
          Удалить
        </Button>
      )}
    </Card>
  );

  return <>{forms.map((form, index) => renderForm(form, index))}</>;
};

export { Experience };