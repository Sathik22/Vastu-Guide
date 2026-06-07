export default function Navbar() {
  return (
<nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4">

        <div className="h-16 flex items-center justify-between">

          <h1 className="font-bold text-xl">
            Interior Vastu Guide
          </h1>

          <div className="hidden md:flex gap-6">
            <button>Home</button>
            <button>Categories</button>
            <button>Directions</button>
          </div>

        </div>

      </div>

    </nav>
  );
}