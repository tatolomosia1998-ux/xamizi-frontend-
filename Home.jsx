import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data?.user ?? null);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar user={user} />

      {/* HERO */}
      <section className="text-center py-20 px-6 bg-gradient-to-br from-green-100 to-white">
        <h1 className="text-4xl font-bold mb-4">
          Find a Room Near You
        </h1>

        <p className="text-gray-600 max-w-xl mx-auto">
          Affordable long-stay and short-stay rooms in your community.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/rooms?type=long" className="btn-primary">
            🏠 Long Stay (Monthly)
          </Link>
          <Link to="/rooms?type=short" className="btn-secondary">
            🏨 Short Stay (Daily)
          </Link>
        </div>
      </section>

      {/* SEARCH */}
      <section className="max-w-5xl mx-auto bg-white shadow rounded-2xl p-6 -mt-12">
        <div className="grid sm:grid-cols-4 gap-4">
          <input
            placeholder="Search area e.g. Soweto"
            className="input"
          />

          <select className="input">
            <option>Long Stay</option>
            <option>Short Stay</option>
          </select>

          <select className="input">
            <option>Any Price</option>
            <option>Under R2,000</option>
            <option>R2,000 – R4,000</option>
            <option>R4,000+</option>
          </select>

          <button className="btn-primary">
            Search
          </button>
        </div>
      </section>

      {/* POPULAR AREAS */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold mb-6">
          Popular Areas
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["Soweto", "Tembisa", "Alexandra"].map(area => (
            <div key={area} className="card cursor-pointer">
              <h3 className="font-semibold text-lg">{area}</h3>
              <p className="text-gray-500 text-sm">
                View available rooms
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-400 text-sm">
        © {new Date().getFullYear()} Xamizi • We’ve Got You
      </footer>
    </div>
  );
}
