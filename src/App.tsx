import { FC, Fragment } from "react";

import { BrowserRouter } from "react-router-dom";
import Login from "./pages/login/Login.page";
import Dashboard from "./pages/dashboard/Dashboard.page";
import ManageTeam from "./pages/manage_teams/ManageTeam.page";

const App: FC = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
