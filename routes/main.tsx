import { Suspense } from "npm/react";
import { Link, Outlet } from "npm/react-router-dom";
import { Helmet } from "npm/react-helmet-async";
import {
  AppErrorBoundary,
  DefaultErrorFallback,
} from "x/udibo_react_app/mod.tsx";

import { Loading } from "../components/loading.tsx";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Blog", to: "/blog" },
];

export default function Main() {
  return (
    <>
      <Helmet
        defaultTitle="Example"
        titleTemplate="Example | %s"
        htmlAttributes={{ lang: "en" }}
      >
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <ul>
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <Suspense fallback={<Loading />}>
        <AppErrorBoundary FallbackComponent={DefaultErrorFallback}>
          <Outlet />
        </AppErrorBoundary>
      </Suspense>
    </>
  );
}
