import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.match(/\.(.*)$/)
  ) {
    return;
  }

  if (/^\/(en|id)(\/|$)/.test(pathname)) {
    return;
  }

  const lang = req.headers.get("accept-language")?.split(",")[0] || "en";
  const locale = lang.startsWith("id") ? "id" : "en";

  return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url));
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
