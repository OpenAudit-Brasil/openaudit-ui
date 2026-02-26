import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenAudit Brasil",
  description: "OpenAudit Brasil — busca e auditoria de dados públicos (MVP)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
