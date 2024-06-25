import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], weight: ['600'] });

export const metadata = {
  title: "By Modela",
  description: "Modelagem para Impressão 3D",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={sora.className}>{children}</body>
    </html>
  );
}
