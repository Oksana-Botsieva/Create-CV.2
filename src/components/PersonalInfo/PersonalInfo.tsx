import React, {ChangeEvent, useState} from "react";
import {Card} from "../Card/Card";
import {DatePicker, Input} from "antd";
import dayjs, {Dayjs} from "dayjs";
import {Control} from "../ControlForm/Control";
import {Upload} from "../Upload/Upload";

const PersonalInfo: React.FC = () => {
    const [info, setInfo] = useState({
        name: "",
        birthDate: "",
        address: "",
        phone: "",
        avatar: null as string | null,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    const handleDateChange = (date: Dayjs | null, dateString: string) => {
        setInfo((prevInfo) => ({
            ...prevInfo,
            birthDate: dateString,
        }));
    };

    const handleUploadChange = (img: string) => {
        setInfo((prevInfo) => ({
            ...prevInfo,
            avatar: img,
        }));
    };
    return (
        <Card>
            <Control label={"ФИО"}>
                <Input
                    placeholder="ФИО"
                    name="name"
                    value={info.name}
                    onChange={handleChange}
                />

            </Control>
            <Control label={"Место жительства"}>
                <Input
                    placeholder="Место жительства"
                    name="address"
                    value={info.address}
                    onChange={handleChange}
                />
            </Control>
            <Control label={"Номер Телефона"}>
                <Input
                    placeholder="Номер телефона"
                    name="phone"
                    value={info.phone}
                    onChange={handleChange}
                />
            </Control>
            <Control label={"Дата рождения"}>
                <DatePicker
                    value={info.birthDate ? dayjs(info.birthDate) : null}
                    onChange={(date, dateString) =>
                        handleDateChange(date, dateString as string)
                    }
                />
            </Control>
            <Upload onChange={handleUploadChange}></Upload>
        </Card>
    );
};

export {PersonalInfo};