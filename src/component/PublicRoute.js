import { useAuth } from "../context/AuthContext";
import { Outlet, Navigate } from "react-router-dom";

export default function PublicRoute(params) {
    let { currentUser } = useAuth()

    return !currentUser ? <Outlet /> : <Navigate to="/"/>
};
