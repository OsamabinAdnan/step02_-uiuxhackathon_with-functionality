import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Create a matcher to define which routes are public
// Public routes are accessible without requiring user authentication

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/', '/sign-up(.*)'])

export default clerkMiddleware(async (auth, request) => {
  // Check if the current route is NOT a public route
  if (!isPublicRoute(request)) {
    // Protect the route: require the user to be authenticated
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    // This ensures middleware doesn't unnecessarily process static files like images, styles, or scripts
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always apply the middleware for API routes and `trpc` routes
    '/(api|trpc)(.*)',
  ],
}