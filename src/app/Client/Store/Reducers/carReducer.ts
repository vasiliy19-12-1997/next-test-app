import { CarActionType } from "../../Enums/enums";
import { CarAction, ICarState } from "../../Types/types";

const initialState: ICarState = {
  cars: [],
  loading: false,
  error: null,
};
export const carReducer = (
  state = initialState,
  action: CarAction
): ICarState => {
  switch (action.type) {
    case CarActionType.FETCH_CARS:
      return { loading: true, error: null, cars: [] };
    case CarActionType.FETCH_CARS_SUCCESS:
      return { loading: false, error: null, cars: action.payload };
    case CarActionType.FETCH_CARS_ERROR:
      return { loading: false, error: action.payload, cars: [] };
    default:
      return state;
  }
};
