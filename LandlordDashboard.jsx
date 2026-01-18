import { useEffect, useState } from "react";

export default function LandlordDashboard() {
  const user = JSON.parse(localStorage.getItem("xamizi_user"));
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/landlord-rooms/${user.id}`)
      .then(res => res.json())
      .then(setRooms);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Rooms</h2>

      <div className="grid md:grid-cols-3 gap-4">
        {rooms.map(room => (
          <div key={room.id} className="card">
            <h3 className="font-semibold">{room.title}</h3>
            <p>{room.area}</p>
            <p className="font-bold">R{room.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
