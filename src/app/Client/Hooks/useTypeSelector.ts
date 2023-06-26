import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../Store/Reducers/combineReducer";

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
