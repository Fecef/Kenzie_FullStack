import { AccountContext } from "../../contexts/AccountContext";
import { useContext } from "react";

import { Navigate, Outlet, useLocation } from "react-router-dom";

export function ProtectedRoute() {
  const { user, loading } = useContext(AccountContext);
  const location = useLocation();

  if (loading) return null;

  return !user.message ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
}
