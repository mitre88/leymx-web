import "./globals.css";

// The `[locale]` layout renders <html> and <body> so the document language
// can be set per locale. This root layout simply forwards its children.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
