import { Dispatch } from "redux";

import axios from "axios";
import { CarActionType } from "../../Enums/enums";
import { CarAction, ICar } from "../../Types/types";

export const fetchCars = () => {
  return async (dispatch: Dispatch<CarAction>) => {
    try {
      dispatch({ type: CarActionType.FETCH_CARS });
      const response = await axios.get("http://localhost:4000/options");
      console.log(response.data);
      dispatch({
        type: CarActionType.FETCH_CARS_SUCCESS,
        payload: response.data,
      });
      console.log("работает");
    } catch (error) {
      dispatch({
        type: CarActionType.FETCH_CARS_ERROR,
        payload: "Произошла ошибка при загрузке машин",
      });
    }
  };
};
