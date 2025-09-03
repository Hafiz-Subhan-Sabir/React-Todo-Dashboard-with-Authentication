import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center shadow-md">
      <div className="text-lg font-bold">
        <Link to="/">MyApp</Link>
      </div>
      <div className="flex gap-4">
        {user ? (
          <>
            <Link to="/todos" className="hover:underline">
              Todos
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-700 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/" className="hover:underline">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
