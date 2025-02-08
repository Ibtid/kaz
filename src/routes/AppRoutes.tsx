import { Navigate, Route, Routes } from "react-router-dom";
import UiPaths from "../paths/uiPaths";
import Dashboard from "../pages/dashboard/Dashboard.page";
import ManageTeam from "../pages/manage_teams/ManageTeam.page";
import Login from "../pages/login/Login.page";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Navigate to={UiPaths.Login} />} />
      <Route path={UiPaths.Login} element={<Login />} />
      <Route path={UiPaths.Dashboard} element={<Dashboard />} />
      <Route path={UiPaths.MangeTeam} element={<ManageTeam />} />
      <Route path="*" element={<div className="text-3xl">NotFound</div>} />
    </Routes>
  );
};

export default AppRoutes;
