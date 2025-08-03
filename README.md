<div>
<h1 align="center">webstarter</h1>
</div>

TODO replace all `webstarter` with your app name

stack:

- vite
- tanstack-router
- tanstack-query
- tailwindcss
- shadcn-ui

## Initialize

run one of the following to create the project

### main

```sh
pnpm dlx degit 5u4/webstarter <your-project-name>
```

### with openapi backend

```sh
pnpm dlx degit 5u4/webstarter#with-openapi-backend <your-project-name>
```

> [!NOTE]  
> Update `VITE_SERVER_URL` in .env to your server url and the url in `package.json > scripts > openapi:generate` to your OpenAPI URL

## Setup

```sh
cp .env.example .env
# fill out .env
pnpm i
```

## Development

```sh
# start/stop local supabase
pnpx supabase start
pnpx supabase stop
```

```sh
# if using with-openapi-backend, sync openapi types with backend
pnpm openapi:generate
```

```sh
# run dev
pnpm dev
```

```sh
# adding new [shadcn](https://ui.shadcn.com/) components
pnpm dlx shadcn@latest add ...
```
