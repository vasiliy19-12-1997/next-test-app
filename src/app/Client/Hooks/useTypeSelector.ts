import { TypedUseSelectorHook, useSelector } from "react-redux";
import { ICar } from "../Types/types";
import { RootState } from "../Store/Reducers/combineReducer";

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
