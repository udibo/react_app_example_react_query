import { Router } from "x/oak/mod.ts";

import { getPost } from "../../services/posts.ts";
import { createQueryClient } from "../../query.ts";
import { AppState } from "../../state.ts";
import { parsePostId } from "../../services/posts.tsx";

export default new Router<AppState>()
  .get("/", async (context) => {
    const { state, params } = context;
    const id = parsePostId(params.id);

    state.queryClient ??= createQueryClient();
    const queryClient = state.queryClient!;
    await queryClient.fetchQuery(
      ["get", id],
      () => getPost(id),
    );

    await state.app.render();
  });
