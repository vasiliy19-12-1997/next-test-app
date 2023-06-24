import {
  FETCH_CARS,
  FETCH_CARS_SUCCESS,
  FETCH_CARS_ERROR,
} from "../Enums/enums";

export interface ICar {
  userId: number;
  id: number;
  title: string;
  body?: string;
}

export interface IFethcCarAction {
  type: typeof FETCH_CARS;
}
export interface IFethcCarSuccessAction {
  type: typeof FETCH_CARS_SUCCESS;
  payload: ICar[];
}
export interface IFethcCarErrorAction {
  type: typeof FETCH_CARS_ERROR;
  payload: string;
}
export interface ICarAction {
  type: string;
  payload?: any;
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
