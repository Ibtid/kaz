import { FC, Fragment } from "react";

import { BrowserRouter } from "react-router-dom";
import Login from "./pages/login/Login.page";
import Dashboard from "./pages/dashboard/Dashboard.page";

const App: FC = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
