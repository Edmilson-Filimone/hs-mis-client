import React from "react";
import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "./Loading";

function PrivateRoute() {
  const navigate = useNavigate();
  const { loading, isAuthenticated } = useAuth();
  if (loading) {
    return <Loading />;
  }
  if(isAuthenticated){
    return <Outlet />
  }
  else{
    toast.error("Access denied, please sign in")
    navigate('/sign-in')
  }
}

export default PrivateRoute;