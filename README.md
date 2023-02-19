# Example Udibo React App with React query

[![CI/CD](https://github.com/udibo/react_app_example_react_query/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/udibo/react_app_example_react_query/actions/workflows/main.yml)
[![license](https://img.shields.io/github/license/udibo/react_app_example_react_query)](https://github.com/udibo/react_app_example_react_query/blob/main/LICENSE)

A basic example of a [Udibo React App](https://deno.land/x/udibo_react_app)
using [React Query](https://tanstack.com/query/latest) for asyncronous state
management.

To do this in your own project, copy the react query import from the
`import_map.json`, copy `query.js` and use it to create your query clients, add
a custom `Provider` to your hydrate options in `app.tsx`, add a custom
`providerFactory` to your serve options in `main.tsx`, and update `deno.jsonc`
to use `main.tsx` as your entry point.

- [GitHub Repository](https://github.com/udibo/react_app/)
- [Deno docs](https://deno.land/x/udibo_react_app)

## Deployment

The workflow is configured to run tests for all PRs and to deploy to Deno
Deploy.

If you are forking this repository, you will need to update the workflow.

If you are using Deno Deploy, you should update `.github/workflows/main.yml` to
use your project. If you don't have a project created yet on Deno Deploy, create
a new one and configure it to use GitHub Actions for deployment. The GitHub
action is required because there is a build step.

If you are not planning on using Deno Deploy, remove the CD job from
`.github/workflows/main.yml` or write your own deployment action to replace it.

## Tasks

To run the tests, use `deno task test` or `deno task test-watch`.

To check formatting and run lint, use `deno task check`.

To create a build and to run the build, use `deno task build` and
`deno task run`. By default, the application builds and runs in development
mode. To build and run a production build, set the `APP_ENV` environment
variable to `production`.

To run the application in development mode with live reloading, use
`deno task dev`.

When in development, identifiers are not minified and sourcemaps are generated
and linked.

## Contributing

To contribute, please read the [contributing instruction](CONTRIBUTING.md).
