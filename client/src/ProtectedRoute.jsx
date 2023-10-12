import { Navigate, Outlet } from "react-router-dom";
import { UseAuth } from "./Context/authContext";

function ProtectedRoute() {
  const { isAuthenticated, loading } = UseAuth();
  console.log("ProtectedRoute");
  if(loading) return <h1>Loading...</h1>
  if(!isAuthenticated && !loading) return <Navigate to="/login" replace />
  if (isAuthenticated && !loading) return <Outlet />;
}

export default ProtectedRoute;
