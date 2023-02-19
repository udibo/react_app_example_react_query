import { createAppContext } from "x/udibo_react_app/mod.tsx";
import { DehydratedState } from "npm/@tanstack/react-query";

export const AppContext = createAppContext<{
  queryState?: DehydratedState;
}>();
