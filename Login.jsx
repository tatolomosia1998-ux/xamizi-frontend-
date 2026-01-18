import { useState } from "react";
await supabase.auth.signInWithPassword({ email, password });
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (!error) navigate("/");
    else alert(error.message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-6 rounded-xl shadow w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="input mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="input mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin} className="btn-primary w-full">
          Login
        </button>
      </div>
    </div>
  );
}
