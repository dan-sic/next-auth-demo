import { getToken } from 'next-auth/jwt'
import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  async (req) => {
    const token = await getToken({ req })
    const isAuthenticated = !!token

    const isAuthPage =
      req.nextUrl.pathname.startsWith('/signup') ||
      req.nextUrl.pathname.startsWith('/signin')

    if (isAuthPage) {
      if (isAuthenticated) {
        return NextResponse.redirect(new URL('/', req.url))
      }

      return null
    }

    if (!isAuthenticated) {
      let from = req.nextUrl.pathname
      if (req.nextUrl.search) {
        from += req.nextUrl.search
      }

      return NextResponse.redirect(
        new URL(`/signin?from=${encodeURIComponent(from)}`, req.url)
      )
    }
  },
  {
    callbacks: {
      async authorized() {
        // This is a work-around for handling redirect on auth pages.
        // We return true here so that the middleware function above
        // is always called.
        return true
      },
    },
  }
)
