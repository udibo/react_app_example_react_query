import { AppState as AppStateBase } from "x/udibo_react_app/server.tsx";
import { DehydratedState, QueryClient } from "npm/@tanstack/react-query";

export interface AppState extends
  AppStateBase<{
    queryState?: DehydratedState;
  }> {
  queryClient?: QueryClient;
}
