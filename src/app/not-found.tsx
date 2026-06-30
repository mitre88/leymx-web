import "./globals.css";
import { fraunces } from "./fonts";
import { Teco } from "@/components/Teco";

// Root not-found renders its own <html>/<body> because the root layout
// only forwards children (the locale layout owns the document otherwise).
export default function NotFound() {
  return (
    <html lang="en" className={`${fraunces.variable} h-full antialiased`}>
      <body className="flex min-h-full items-center justify-center bg-[#06101c] px-6 text-[#eef1f5]">
        <div className="text-center">
          <Teco className="mx-auto size-24" />
          <p className="mt-6 font-display text-6xl tracking-tight text-white">404</p>
          <p className="mt-3 text-[#8a97a6]">This page could not be found.</p>
          <a
            href="/"
            className="mt-8 inline-flex rounded-full bg-[#c9a24b] px-6 py-3 font-medium text-[#1a1304]"
          >
            Back to home
          </a>
        </div>
      </body>
    </html>
  );
}
