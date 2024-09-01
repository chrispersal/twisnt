import { NoUser } from "@/components/NoUser.tsx";
import { Logo } from "@/components/Logo.tsx";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <Logo />
        <body>
          <SignedOut>
            <NoUser />
          </SignedOut>
          <SignedIn>
            <UserButton />
            {children}
          </SignedIn>
        </body>
        <footer className="bottomText">(C) Elon Hubbard 2024</footer>
      </ClerkProvider>
    </html>
  );
}
