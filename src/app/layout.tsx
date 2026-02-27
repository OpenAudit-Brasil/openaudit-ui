import type { Metadata } from "next";
import "./globals.css";
import "./prefixer.global.css";


export const metadata: Metadata = {
  metadataBase: new URL("https://openauditbrasil.com"),
  title: "OpenAudit Brasil — Infraestrutura aberta para análise de dados públicos",
  description:
    "Projeto open source para análise responsável de dados públicos com metodologia transparente e código auditável.",
  keywords: [
    "dados públicos",
    "open data brasil",
    "OSINT Brasil",
    "transparência pública",
    "civic tech",
    "governança digital",
    "accountability pública"
  ],
  openGraph: {
    title: "OpenAudit Brasil",
    description:
      "Infraestrutura open source para análise técnica de dados governamentais.",
    url: "https://openauditbrasil.com",
    siteName: "OpenAudit Brasil",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/banner-logo-full-colorido.png",
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenAudit Brasil",
    description:
      "Análise responsável de dados públicos com código aberto.",
    images: ["/banner-logo-full-colorido.png"]
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
