import { Navigate, Outlet } from "react-router-dom";
import { UseAuth } from "./Context/authContext";
import SpinnerLoading from "./Components/SpinnerLoading";

function ProtectedRoute() {
  const { isAuthenticated, loading } = UseAuth();
  if(loading) return <SpinnerLoading />
  if(!isAuthenticated && !loading) return <Navigate to="/login" replace />
  if (isAuthenticated && !loading) return <Outlet />;
}

export default ProtectedRoute;
