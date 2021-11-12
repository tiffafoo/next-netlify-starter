import { NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(request) {
  const acceptLanguageHeader = request.headers.get('Accept-Language')
  const nextLocaleCookie = request.cookies && request.cookies.NEXT_LOCALE

  if (
    PUBLIC_FILE.test(request.nextUrl.pathname) 
    || (!acceptLanguageHeader && !nextLocaleCookie)
    || (request.nextUrl.pathname.includes(`/${acceptLanguageHeader}/`) || request.nextUrl.pathname.includes(`/${nextLocaleCookie}/`))
  ) {
    return undefined
  }

  if (nextLocaleCookie) {
    return NextResponse.redirect(`/${nextLocaleCookie}${request.nextUrl.href}`)
  }

  return NextResponse.redirect(`/${acceptLanguageHeader}${request.nextUrl.href}`)
}