import { Route, Routes, Navigate } from "react-router-dom";
import UiPaths from "../paths/uiPaths";
import Dashboard from "../pages/dashboard/Dashboard.page";
import ManageTeam from "../pages/manage_teams/ManageTeam.page";
import Login from "../pages/login/Login.page";
import { useUser } from "../context";
import PrivateRoute from "./PrivateRoutes"; // import the PrivateRoute component

const AppRoutes = () => {
  const { user } = useUser();

  return (
    <Routes>
     
      <Route path="/" element={<Navigate to={UiPaths.Login} />} />

      <Route path={UiPaths.Login} element={<Login />} />

      <Route path={UiPaths.Dashboard} element={<PrivateRoute allowedRoles={["ceo", "lead", "hr"]} redirectTo={UiPaths.Login} />}>
        <Route path={UiPaths.Dashboard} element={<Dashboard />} />
      </Route>

   
      <Route path={UiPaths.MangeTeam} element={<PrivateRoute allowedRoles={["lead", "hr"]} redirectTo={UiPaths.Dashboard} />}>
        <Route path={UiPaths.MangeTeam} element={<ManageTeam />} />
      </Route>

      {/* Catch-All Route for unknown paths */}
      <Route path="*" element={<div className="text-3xl">NotFound</div>} />
    </Routes>
  );
};

export default AppRoutes;