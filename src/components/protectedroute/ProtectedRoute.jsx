import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { myContext } from "../../../context/MyContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useContext(myContext);

  if (loading) return <p>Loading...</p>;
  return user ? children : <Navigate to="/login" replace />;
}