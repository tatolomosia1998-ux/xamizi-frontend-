import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [params] = useSearchParams();
  const type = params.get("type");

  useEffect(() => {
    fetch(`http://localhost:3000/api/rooms?type=${type || ""}`)
      .then(res => res.json())
      .then(setRooms);
  }, [type]);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">
        Available Rooms
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {rooms.map(room => (
          <div key={room.id} className="card">
            <h3 className="font-semibold text-lg">{room.title}</h3>
            <p className="text-sm text-gray-500">{room.area}</p>
            <p className="mt-2 font-bold text-green-600">
              R{room.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
