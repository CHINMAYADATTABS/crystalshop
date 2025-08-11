// components/Navbar.js
export default function Navbar() {
  return (
    <nav className="bg-purple-800 text-white p-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">CrystalShop 💎</h1>
        <ul className="flex gap-6">
          <li><a href="/" className="hover:text-yellow-300">Home</a></li>
          <li><a href="/products" className="hover:text-yellow-300">Products</a></li>
          <li><a href="/cart" className="hover:text-yellow-300">Cart</a></li>
        </ul>
      </div>
    </nav>
  );
}
