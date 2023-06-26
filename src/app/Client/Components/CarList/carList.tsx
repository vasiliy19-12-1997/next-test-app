"use client";
import { FC, useEffect } from "react";
import { useActions } from "../../Hooks/useActions";
import { useTypeSelector } from "./../../Hooks/useTypeSelector";

const CarList: FC = () => {
  const { cars, error, loading } = useTypeSelector((state) => state.cars);
  const { fetchCars } = useActions();

  useEffect(() => {
    fetchCars();
  }, []);

  if (loading) {
    return <h1>Идет загрузка</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      {cars.map((car) => (
        <div key={car.id}>{car.options[0].option_name}</div>
      ))}
    </>
  );
};
export default CarList;
