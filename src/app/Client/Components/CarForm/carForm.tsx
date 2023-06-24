"use client";
import React, { FC, useState } from "react";

import MyButton from "../UI/MyButton/myButton";
import MyInput from "../UI/MyInput/myInput";
interface ICarFormProps {}

const CarForm: FC<ICarFormProps> = (props) => {
  const [value, setValue] = useState("");

  const addCar = () => {
    const newCar = {
      userId: Math.random(),
      id: Math.random(),
      title: value,
    };

    setValue("");
  };

  const changeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <MyInput value={value} onChange={changeEvent} />
      <MyInput value={value} onChange={changeEvent} />
      <MyButton onClick={addCar}>Save</MyButton>
    </div>
  );
};

export default CarForm;
