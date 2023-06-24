"use client";

import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "../store";

/* Core */

/* Instruments */

export const Providers = (props: PropsWithChildren) => {
  return <Provider store={store}>{props.children}</Provider>;
};
