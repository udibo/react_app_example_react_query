import { Suspense } from "npm/react";
import { Outlet } from "npm/react-router-dom";
import { Helmet } from "npm/react-helmet-async";
import {
  AppErrorBoundary,
  DefaultErrorFallback,
  FallbackProps,
} from "x/udibo_react_app/mod.tsx";
import { useQueryErrorResetBoundary } from "npm/@tanstack/react-query";

import { Loading } from "../../components/loading.tsx";

export function BlogErrorFallback(
  { error, resetErrorBoundary }: FallbackProps,
) {
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

export default function Blog() {
  return (
    <>
      <Helmet defaultTitle="Example | Blog" titleTemplate="Example | Blog | %s">
        <title></title>
      </Helmet>
      <h1>Blog</h1>
      <Suspense fallback={<Loading />}>
        <AppErrorBoundary
          FallbackComponent={BlogErrorFallback}
          boundary={boundary}
        >
          <Outlet />
        </AppErrorBoundary>
      </Suspense>
    </>
  );
}

export const boundary = "/blog";
