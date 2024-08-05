import React, { useState } from "react";
import { Card } from "../Card/Card";
import { DatePicker, Input } from "antd";
import { Dayjs } from "dayjs";
import { Control } from "../ControlForm/Control";
import { Upload } from "../Upload/Upload";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import {
  setAddress,
  setAvatar,
  setBirthday,
  setFio,
  setPhone,
} from "../../store/personalInfoSlice";

const PersonalInfo: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const personalInfo = useSelector((state: RootState) => state.personalInfo);

  const [fio, setFioState] = useState(personalInfo.fio);
  const [address, setAddressState] = useState(personalInfo.address);
  const [phone, setPhoneState] = useState(personalInfo.phone);
  const [birthday, setBirthdayState] = useState<Dayjs | null>(
    personalInfo.birthday,
  );
  const [avatar, setAvatarState] = useState(personalInfo.avatar);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "fio":
        setFioState(value);
        break;
      case "address":
        setAddressState(value);
        break;
      case "phone":
        setPhoneState(value);
        break;
      case "avatar":
        setAvatarState(value);
        break;
    }
  };
  const handleDateChange = (date: Dayjs | null) => {
    setBirthdayState(date);
  };

  const handleUploadChange = (img: string) => {
    setAvatarState(img);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setFio(fio));
    dispatch(setAddress(address));
    dispatch(setPhone(phone));
    dispatch(setBirthday(birthday));
    dispatch(setAvatar(avatar));
  };

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setInfo((prevInfo) => ({
  //     ...prevInfo,
  //     [name]: value,
  //   }));
  // };
  //
  // const handleDateChange = (date: Dayjs | null, dateString: string) => {
  //   setInfo((prevInfo) => ({
  //     ...prevInfo,
  //     birthDate: dateString,
  //   }));
  // };
  //
  // const handleUploadChange = (img: string) => {
  //   setInfo((prevInfo) => ({
  //     ...prevInfo,
  //     avatar: img,
  //   }));
  // };
  return (
    <Card>
      <Control label={"ФИО"}>
        <Input
          placeholder="ФИО"
          name="name"
          value={fio}
          onChange={handleChange}
        />
      </Control>
      <Control label={"Место жительства"}>
        <Input
          placeholder="Место жительства"
          name="address"
          value={address}
          onChange={handleChange}
        />
      </Control>
      <Control label={"Номер Телефона"}>
        <Input
          placeholder="Номер телефона"
          name="phone"
          value={phone}
          onChange={handleChange}
        />
      </Control>
      <Control label={"Дата рождения"}>
        <DatePicker value={birthday} onChange={handleDateChange} />
      </Control>
      <Upload onChange={handleUploadChange}></Upload>
    </Card>
  );
};

export { PersonalInfo };