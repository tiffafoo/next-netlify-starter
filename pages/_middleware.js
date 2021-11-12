import { NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(request) {
  const acceptLanguageHeader = request.headers.get('Accept-Language')
  const nextLocaleCookie = request.cookies && request.cookies.NEXT_LOCALE

  if (
    PUBLIC_FILE.test(request.nextUrl.pathname) 
    || (!acceptLanguageHeader && !nextLocaleCookie)
  ) {
    return undefined
  }

  if (nextLocaleCookie) {
    if (request.nextUrl.pathname.includes(`/${nextLocaleCookie}`)) {
      return undefined
    }
    return NextResponse.redirect(`/${nextLocaleCookie}${request.nextUrl.href}`)
  }

  if (request.nextUrl.pathname.includes(`/${acceptLanguageHeader}`)) {
    return undefined
  }

  return NextResponse.redirect(`/${acceptLanguageHeader}${request.nextUrl.href}`)
}