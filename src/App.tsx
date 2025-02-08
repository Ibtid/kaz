import { FC, Fragment } from "react";

import { BrowserRouter } from "react-router-dom";
import Login from "./pages/login/Login.page";
import Dashboard from "./pages/dashboard/Dashboard.page";
import ManageTeam from "./pages/manage_teams/ManageTeam.page";
import AppRoutes from "./routes/AppRoutes";
import { UserProvider } from "./context";

const App: FC = () => {
  return (
    <Fragment>
      <UserProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </UserProvider>
    </Fragment>
  );
};

export default App;
