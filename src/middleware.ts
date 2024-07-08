import { withAuth } from "next-auth/middleware";

// middleware is applied to all routes, use conditionals to select

export default withAuth(function middleware(req) {}, {
  callbacks: {
    authorized: ({ req, token }) => {
      // console.log(token)
      if (token === null) {
        return false;
      }
      return true;
    },
  },
});

export const config = {
  matcher: [
    "/home/:path*",
    "/medrek/:path*",
    "/dokter/:path*",
    "/history/:path*",
    "/profile/:path*",
    "/articles/:path*",
    "/buat-janji/:path*",
  ],
};
