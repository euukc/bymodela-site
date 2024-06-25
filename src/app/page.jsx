import Image from "next/image";
import HomePage from "./Components/HomePage";
import Header from "./Components/Header";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <HomePage />
      
      
    </main>
  );
}
