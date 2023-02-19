import { hydrate } from "x/udibo_react_app/mod.tsx";
import { useContext } from "npm/react";
import { Hydrate, QueryClientProvider } from "npm/@tanstack/react-query";

import { AppContext } from "./context.ts";
import { createQueryClient } from "./query.ts";
import route from "./routes/_main.tsx";

hydrate({
  route,
  Provider({ children }) {
    const queryClient = createQueryClient();
    const { queryState } = useContext(AppContext);
    return (
      <QueryClientProvider client={queryClient}>
        <Hydrate state={queryState}>
          {children}
        </Hydrate>
      </QueryClientProvider>
    );
  },
  Context: AppContext,
});
