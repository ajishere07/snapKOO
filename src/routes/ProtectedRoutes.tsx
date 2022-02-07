import { onAuthStateChanged } from "@firebase/auth";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";
import Splash from "../assets/SplashScreen/Splash";
import { auth } from "../configuration/firebase";
import { authe, autheticated } from "../features/AUTH/userAuthenticatedSlice";
import { fetchKoosData } from "../features/KOOS(Tweets)/KoosSlice";
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
          dispatch(fetchKoosData());
        }
        setLoading(false);
      }
    });

    return () => {
      cancel = true;
    };
  }, [dispatch]);

  // Page will show splash page until it gets the user's credential in local storages

  if (loading) return <Splash />;
  return isAuth ? <Outlet /> : <Navigate to="auth" />;
};

export default ProtectedRoutes;
