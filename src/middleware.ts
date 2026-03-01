import { NextRequest, NextResponse } from "next/server";

const SUPPORTED_LANGUAGES = ["es", "en", "pt"];
const DEFAULT_LANGUAGE = "es";

export function middleware(req: NextRequest) {
    const currentLangCookie = req.cookies.get("inver_lang");

    // Si existe una preferencia manual o de sesion previa, se retorna tal cual.
    if (currentLangCookie && SUPPORTED_LANGUAGES.includes(currentLangCookie.value)) {
        return NextResponse.next();
    }

    // Se prioriza SIEMPRE la autodetección del dispositivo (Fase 8).
    // Si no hay cookie previa (emergencia), inferimos desde Accept-Language con fallback a Español.
    const acceptLang = req.headers.get("accept-language") || "";
    let detectedLang = DEFAULT_LANGUAGE;

    if (acceptLang) {
        const primaryCode = acceptLang.split(",")[0].toLowerCase().split("-")[0];
        if (SUPPORTED_LANGUAGES.includes(primaryCode)) {
            detectedLang = primaryCode;
        }
    }

    const response = NextResponse.next();
    response.cookies.set("inver_lang", detectedLang, {
        maxAge: 31536000,
        path: "/",
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
    });

    return response;
}

export const config = {
    matcher: [
        /*
         * Match a todas las rutas a transitar para SEO exceptuando:
         * - api (API routes)
         * - _next/static (archivos estaticos)
         * - _next/image (images generadas on-demand)
         * - favicon.ico, images (rutas estaticas)
         */
        "/((?!api|_next/static|_next/image|images|icons|favicon.ico).*)",
    ],
};
