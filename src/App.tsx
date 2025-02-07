import { FC, Fragment } from "react";

import { BrowserRouter } from "react-router-dom";
import Login from "./pages/login/Login.page";

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
