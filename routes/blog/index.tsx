import { Link } from "npm/react-router-dom";
import { Helmet } from "npm/react-helmet-async";
import { DefaultErrorFallback } from "x/udibo_react_app/mod.tsx";
import { FallbackProps } from "x/udibo_react_app/error.tsx";
import { useQueryErrorResetBoundary } from "npm/@tanstack/react-query";

import { getPosts } from "../../services/posts.tsx";

export default function BlogIndex() {
  const posts = getPosts();
  return posts
    ? (
      <>
        <Helmet>
          <meta name="description" content="This is an example blog." />
        </Helmet>
        <ul>
          {posts.map((post) => (
            <li key={`${post.id}`}>
              <Link to={`${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </>
    )
    : <div>Loading posts...</div>;
}

/*
Doesn't work for server side render, the message and try again button is missing.
Might need to look at DefaultErrorFallback.
The server should use same component for server rendered error
*/
export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <DefaultErrorFallback
      error={error}
      resetErrorBoundary={(...args) => {
        reset();
        return resetErrorBoundary(...args);
      }}
    />
  );
}
