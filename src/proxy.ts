import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Next.js 16 renamed the `middleware` convention to `proxy`.
// next-intl ships a request handler we re-export as `proxy`.
const handle = createMiddleware(routing);

export function proxy(request: Parameters<typeof handle>[0]) {
  return handle(request);
}

export const config = {
  // Skip Next internals, API routes and any path with a file extension.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
