import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ferns",
  description: "Marketplace Acheteurs ↔ Fournisseurs (Stripe)",
  metadataBase: new URL("https://sourcehub.vercel.app"),
  openGraph: {
    title: "Ferns",
    description: "Achetez / vendez en toute confiance.",
    url: "https://sourcehub.vercel.app",
    siteName: "Ferns",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{fontFamily:"ui-sans-serif,system-ui"}}>{children}</body>
    </html>
  );
}
