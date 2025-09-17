import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Your Name — Portfolio",
  description: "Product/AI portfolio and case studies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-white text-zinc-900 antialiased">
        <header className="sticky top-0 bg-white/80 backdrop-blur border-b">
          <nav className="mx-auto max-w-5xl flex items-center gap-6 p-4">
            <Link href="/" className="font-semibold">Home</Link>
            <Link href="/portfolio">Portfolio</Link>
          </nav>
        </header>
        <main className="mx-auto max-w-5xl p-6">{children}</main>
        <footer className="mx-auto max-w-5xl p-6 border-t mt-12 text-sm opacity-70">
          © {new Date().getFullYear()} Your Name
        </footer>
      </body>
    </html>
  );
}
