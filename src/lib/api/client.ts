import { env } from "@/env";
import { authMiddleware } from "@/lib/api/middlewares/auth";
import type { paths } from "@/lib/api/schema";
import createFetchClient from "openapi-fetch";
import createClient from "openapi-react-query";

const fetchClient = createFetchClient<paths>({
  baseUrl: env.VITE_SERVER_URL,
});

fetchClient.use(authMiddleware);

export const $api = createClient(fetchClient);
