import { useState } from "react";
import { X } from "lucide-react";

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://your-backend.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ " + data.message);
        localStorage.setItem("token", data.token); 
        setShowLogin(false); 
      } else {
        alert("❌ " + data.error);
      }
    } catch (err) {
      alert("⚠️ Server error. Try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white flex flex-col items-center justify-center">
      {/* Main Page Content */}
      <h1 className="text-4xl font-bold mb-6">
        Welcome to <span className="text-purple-400">ICreate Club</span>
      </h1>
      <button
        onClick={() => setShowLogin(true)}
        className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl shadow-lg font-semibold hover:scale-105 transition"
      >
        Login
      </button>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-gray-900 rounded-2xl shadow-xl w-full max-w-md p-8 relative">
            {/* Close Button */}
            <button
              onClick={() => setShowLogin(false)}
              className="absolute right-4 text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold mb-2 text-center">
              Welcome to <span className="text-purple-400">ICreate Club</span>
            </h2>
            <p className="text-gray-400 mb-6 text-center">
              Please login to your account
            </p>

            {/* Login Form */}
            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <label className="block mb-1 text-sm">Email address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none text-white"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 text-sm">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none text-white"
                  required
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <button
                  type="submit"
                  className="px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg font-semibold hover:scale-105 transition"
                >
                  Sign in
                </button>
                <a href="#" className="text-purple-400 hover:underline">
                  Forgot password?
                </a>
              </div>
            </form>

            {/* Register Link */}
            <p className="mt-6 text-sm text-center text-gray-400">
              Don’t have an account?{" "}
              <a href="#" className="text-purple-400 hover:underline">
                Register
              </a>
            </p>

            {/* Footer Banner */}
            <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white">
              <h3 className="text-lg font-semibold mb-1">
                We are more than just a club
              </h3>
              <p className="text-sm">
                Join <span className="font-bold">ICreate Club</span> to explore
                innovation, collaboration, and growth. Together we design,
                create, and inspire 🚀
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
