import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "ms"];
const defaultLocale = "en";

function getLocale(request: NextRequest): string {
  // 1. Check for custom locale cookie
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  // 2. Parse Accept-Language header (check for Malay/ms)
  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    const isMalay = acceptLanguage
      .toLowerCase()
      .split(",")
      .some((lang) => {
        const code = lang.split(";")[0].trim();
        return code === "ms" || code.startsWith("ms-");
      });
    if (isMalay) return "ms";
  }

  // 3. Fallback to default locale
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname already has a supported locale prefix
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) {
    // If the path has a locale, make sure the cookie is set to match it
    const locale = locales.find(
      (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`,
    );
    const response = NextResponse.next();
    if (locale) {
      response.cookies.set("NEXT_LOCALE", locale, { path: "/" });
    }
    return response;
  }

  // Otherwise, determine the target locale and redirect
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  const response = NextResponse.redirect(request.nextUrl);
  response.cookies.set("NEXT_LOCALE", locale, { path: "/" });
  return response;
}

export const config = {
  matcher: [
    // Skip all internal Next.js paths, Payload admin panel, GraphQL APIs, media upload endpoints, and static assets
    "/((?!api|_next/static|_next/image|favicon.ico|admin|media|.*\\..*).*)",
  ],
};
