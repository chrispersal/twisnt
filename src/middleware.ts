import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

//publishableKey="pk_test_cG9saXNoZWQtd2lsZGNhdC05Ni5jbGVyay5hY2NvdW50cy5kZXYk"

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
