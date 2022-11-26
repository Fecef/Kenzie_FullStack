import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { TechContext, TechProvider } from "../../contexts/TechContext";

export function ProtectedRoute() {
  const { user } = useContext(UserContext);
  const { loading } = useContext(TechContext);
  
  const location = useLocation();

  if (loading) return null;

  return user ? (
    <TechProvider>
      <Outlet />
    </TechProvider>
  ) : (
    <Navigate to={"/"} replace state={{ from: location }} />
  );
}
