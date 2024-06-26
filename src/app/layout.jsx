import { Sora } from "next/font/google";
import "./globals.css";
import "./styles/mobile.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";


const sora = Sora({ subsets: ["latin"], weight: ['800'] });

export const metadata = {
  title: "By Modela",
  description: "Modelagem para Impressão 3D",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={sora.className}>
        <Header />
        {children}
        <Nav />
      </body>
    </html>
  );
}
