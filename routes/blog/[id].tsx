import { useParams } from "npm/react-router-dom";
import { Helmet } from "npm/react-helmet-async";

import { getPost, parsePostId } from "../../services/posts.tsx";

export default function BlogPost() {
  const params = useParams();
  const id = parsePostId(params.id);
  const post = getPost(id);
  return post
    ? (
      <>
        <Helmet>
          <title>{post.title}</title>
          <meta name="description" content={post.content} />
        </Helmet>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </>
    )
    : (
      <>
        <Helmet>
          <title>Loading...</title>
        </Helmet>
        <h2>Loading...</h2>
      </>
    );
}
