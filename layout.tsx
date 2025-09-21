export const metadata = {
  title: "SourceHub",
  description: "Marketplace B2B - Acheteurs & Fournisseurs",
};

import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-white text-slate-900">
        <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="font-semibold">SourceHub</Link>
            <nav className="flex gap-4 text-sm">
              <Link href="/buyers" className="hover:underline">Acheteurs</Link>
              <Link href="/suppliers" className="hover:underline">Fournisseurs</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t py-6 mt-10 text-sm text-slate-500">
          <div className="max-w-7xl mx-auto px-4 flex justify-between">
            <div className="font-semibold">SourceHub</div>
            <div>© {new Date().getFullYear()} SourceHub</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
