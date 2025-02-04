import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;
    const authCookie = req.cookies.get('auth');

    if (path.startsWith('/dashboard')) {
        if (!authCookie) {
            return NextResponse.redirect(new URL('/login', req.url));
        }
        try {
            const parsedAuth = JSON.parse(authCookie.value);
            if (!parsedAuth?.loggedIn) {
                return NextResponse.redirect(new URL('/login', req.url));
            }
        } catch {
            return NextResponse.redirect(new URL('/login', req.url));
        }
    }

    if (path === '/login' && authCookie) {
        try {
            const parsedAuth = JSON.parse(authCookie.value);
            if (parsedAuth?.loggedIn) {
                return NextResponse.redirect(new URL('/dashboard', req.url));
            }
        } catch {
            return NextResponse.redirect(new URL('/login', req.url));
        }
    }

    return NextResponse.next();
}