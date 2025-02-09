import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../context"; 

interface PrivateRouteProps {
  allowedRoles?: string[];
  redirectTo: string; 
}

const PrivateRoute = ({ allowedRoles, redirectTo }: PrivateRouteProps) => {
  const { user } = useUser();
  
  if (!user) {
    return <Navigate to={redirectTo} />;
  }
  
  if (allowedRoles && !allowedRoles.includes(user)) {
    return <Navigate to={redirectTo} />;
  }

  return <Outlet />;
};

export default PrivateRoute;