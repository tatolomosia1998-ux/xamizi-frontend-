import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("xamizi_user");
    if (!saved) navigate("/login");
    else setUser(JSON.parse(saved));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h2 className="text-3xl font-bold mb-2">
        Welcome {user?.email}
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="card">
          <h3 className="font-semibold">Rent Status</h3>
          <p className="mt-2 text-green-600 font-bold">Paid</p>
        </div>

        <div className="card">
          <h3 className="font-semibold">Wallet Balance</h3>
          <p className="mt-2 font-bold">R1,200</p>
        </div>

        <div className="card">
          <h3 className="font-semibold">Next Due Date</h3>
          <p className="mt-2">28 Jan 2026</p>
        </div>
      </div>
    </div>
  );
}
