import React from "react";
import { Navigate, Outlet } from "react-router";

type Props = {};
const useAuth = () => {
  const user = { loggedIn: true };
  return user && user.loggedIn;
};
const ProtectedRoutes = (props: Props) => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="auth" />;
};

export default ProtectedRoutes;
