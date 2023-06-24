import { ICarState, ICarAction } from "../../Types/types";
import {
  FETCH_CARS,
  FETCH_CARS_ERROR,
  FETCH_CARS_SUCCESS,
} from "./../../Enums/enums";

const initialState: ICarState = {
  cars: [
    {
      userId: 1,
      id: 1,
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor eius, eum perferendis perspiciatis labore, fugit voluptatem ducimus earum suscipit aspernatur nisi at voluptates nesciunt esse culpa laborum officiis qui?",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, explicabo nihil? Neque asperiores, facere maiores suscipit corrupti ab eligendi iusto, unde, veritatis id iure alias. Doloremque quasi commodi minus eius.",
    },
    {
      userId: 2,
      id: 2,
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor eius, eum perferendis perspiciatis labore, fugit voluptatem ducimus earum suscipit aspernatur nisi at voluptates nesciunt esse culpa laborum officiis qui?",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, explicabo nihil? Neque asperiores, facere maiores suscipit corrupti ab eligendi iusto, unde, veritatis id iure alias. Doloremque quasi commodi minus eius.",
    },
    {
      userId: 3,
      id: 3,
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor eius, eum perferendis perspiciatis labore, fugit voluptatem ducimus earum suscipit aspernatur nisi at voluptates nesciunt esse culpa laborum officiis qui?",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, explicabo nihil? Neque asperiores, facere maiores suscipit corrupti ab eligendi iusto, unde, veritatis id iure alias. Doloremque quasi commodi minus eius.",
    },
  ],
  loading: false,
  error: null,
};
export const carReducer = (
  state = initialState,
  action: ICarAction
): ICarState => {
  switch (action.type) {
    case FETCH_CARS:
      return { loading: true, error: null, cars: [] };
    case FETCH_CARS_SUCCESS:
      return { loading: false, error: null, cars: action.payload };
    case FETCH_CARS_ERROR:
      return { loading: false, error: action.payload, cars: [] };
    default:
      return state;
  }
};
