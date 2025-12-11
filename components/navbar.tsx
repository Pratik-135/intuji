export const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">E-commerce</div>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/products" className="hover:underline">Products</a></li>
          <li><a href="/checkout" className="hover:underline">Checkout</a></li>
          </ul>
        </div>
          </nav>
  );
}
     