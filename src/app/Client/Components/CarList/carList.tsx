"use client";
import { FC, useState } from "react";
import { ICar } from "../../Types/types";
import { useSelector } from "react-redux";
import { useTypeSelector } from "./../../Hooks/useTypeSelector";

interface ICarListProps {}
const CarList: FC<ICarListProps> = () => {
  const { cars, error, loading } = useTypeSelector((state) => state.cars);
  console.log(cars);

  return (
    <>
      <div>
        {cars.map((car: ICar) => (
          <ul key={car.id}>
            <li>{car.id}</li>
            <li>{car.title}</li>
            <li>{car.userId}</li>
          </ul>
        ))}
      </div>
    </>
  );
};
export default CarList;
