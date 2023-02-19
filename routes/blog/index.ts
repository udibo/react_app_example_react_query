import { Router } from "x/oak/mod.ts";
import { createQueryClient } from "../../query.ts";

import { getPosts } from "../../services/posts.ts";
import { AppState } from "../../state.ts";

export default new Router<AppState>()
  .get("/", async (context) => {
    const { state } = context;
    state.queryClient ??= createQueryClient();
    const queryClient = state.queryClient!;
    await queryClient.fetchQuery(
      ["get"],
      () => getPosts(),
    );

    await state.app.render();
  });
