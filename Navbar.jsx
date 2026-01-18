import { Link } from "react-router-dom";

export default function Navbar({ user }) {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-bold text-green-600">
          🏠 Xamizi
        </Link>

        <nav className="flex items-center gap-3">
          <Link to="/" className="btn">Home</Link>
          <Link to="/rooms" className="btn">Rooms</Link>

          {user ? (
            <Link to="/dashboard" className="btn-primary">
              Dashboard
            </Link>
          ) : (
            <>
              <Link to="/login" className="btn">Login</Link>
              <Link to="/signup" className="btn-primary">
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
