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

## start

```sh
pnpm dlx degit 5u4/webstarter <your-project-name>
cp .env.example .env
pnpm i
```

## dev

```sh
# start/stop local supabase
pnpx supabase start
pnpx supabase stop
```

```sh
# run dev
pnpm dev
```

```sh
# adding new [shadcn](https://ui.shadcn.com/) components
pnpm dlx shadcn@latest add ...
```
