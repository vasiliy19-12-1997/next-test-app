import { CarActionType } from "../Enums/enums";

export interface ICar {
  id: number;
  images: string[];
  name: string;
  description: string;
  price: number;
  contacts: string;
  technical_characteristics: ITechnicalCharacteristics;
  options: IOptions[];
}
interface ITechnicalCharacteristics {
  car_id: number;
  brand: string;
  model: string;
  productionYear: number;
  body: string;
  mileage: number;
}
interface IOptions {
  option_name: string;
}

export interface IFethcCarAction {
  type: CarActionType.FETCH_CARS;
}
export interface IFethcCarSuccessAction {
  type: CarActionType.FETCH_CARS_SUCCESS;
  payload: any[];
}
export interface IFethcCarErrorAction {
  type: CarActionType.FETCH_CARS_ERROR;
  payload: string;
}

export interface ICarState {
  cars: ICar[];
  loading: boolean;
  error: null | string;
}
export type CarAction =
  | IFethcCarAction
  | IFethcCarSuccessAction
  | IFethcCarErrorAction;
