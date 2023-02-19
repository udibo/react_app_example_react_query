import * as path from "std/path/mod.ts";
import { renderToReadableStream, serve } from "x/udibo_react_app/server.tsx";
import { dehydrate, QueryClientProvider } from "npm/@tanstack/react-query";
import { Context } from "x/oak/mod.ts";

import route from "./routes/_main.tsx";
import router from "./routes/_main.ts";
import { AppContext } from "./context.ts";
import { AppState } from "./state.ts";

await serve({
  port: 9000,
  router,
  route,
  workingDirectory: path.dirname(path.fromFileUrl(import.meta.url)),
  Context: AppContext,
  providerFactory(context: Context<AppState>) {
    return ({ children }) => {
      const { state } = context;
      const { queryClient } = state;
      return queryClient
        ? (
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        )
        : <>{children}</>;
    };
  },
  async renderToReadableStream(context: Context<AppState>) {
    const { state } = context;
    const { queryClient } = state;
    if (queryClient) {
      state.app.context.queryState = dehydrate(queryClient);
    }
    return await renderToReadableStream(context);
  },
});
