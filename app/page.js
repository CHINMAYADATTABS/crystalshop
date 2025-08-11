// app/page.js  OR  pages/index.js
import Navbar from "../components/Navbar"; // if app/page.js -> ../components
// if pages/index.js and components at root, use: import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="text-center p-10">
        <h2 className="text-3xl font-bold">Welcome to CrystalShop 💎</h2>
        <p className="mt-4 text-lg">Hand-picked crystals for your energy and vibes ✨</p>
      </main>
    </>
  );
}
