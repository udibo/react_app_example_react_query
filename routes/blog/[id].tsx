import { useParams } from "npm/react-router-dom";
import { HttpError } from "x/http_error/mod.ts";
import { Helmet } from "npm/react-helmet-async";
import { DefaultErrorFallback } from "x/udibo_react_app/mod.tsx";
import { FallbackProps } from "x/udibo_react_app/error.tsx";
import { useQueryErrorResetBoundary } from "npm/@tanstack/react-query";
import { useEffect } from "npm/react";

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

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <DefaultErrorFallback
      error={error}
      resetErrorBoundary={(...args) => {
        reset();
        resetErrorBoundary(...args);
      }}
    />
  );
}
