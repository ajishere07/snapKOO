import { onAuthStateChanged } from "@firebase/auth";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";
import { auth } from "../configuration/firebase";
import { authe, autheticated } from "../features/AUTH/userAuthenticatedSlice";
import { fetchUserData } from "../features/PROFILE_DATA/dataSlice";
import { useAppSelector, useAppDispatch } from "../reduxHooks/hooks";

const ProtectedRoutes = () => {
  const [loading, setLoading] = useState<boolean | null>(true);
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(authe);
  useEffect(() => {
    let cancel = false;
    onAuthStateChanged(auth, (user) => {
      if (!cancel) {
        dispatch(autheticated(user));
        if (user) {
          dispatch(fetchUserData(user.uid));
        }
        setLoading(false);
      }
    });

    return () => {
      cancel = true;
    };
  }, [dispatch]);

  // Page will show splash page until it gets the user's credential in local storages

  if (loading) return <h1>Loading...</h1>;
  return isAuth ? <Outlet /> : <Navigate to="auth" />;
};

export default ProtectedRoutes;
