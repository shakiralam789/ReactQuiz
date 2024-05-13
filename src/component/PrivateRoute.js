import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  let { currentUser } = useAuth();

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
}
