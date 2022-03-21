import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
// import AuthRoute from "store/authRoute";
import { Route } from "react-router";

import Test1 from "page/test/test1";
import Test2 from "page/test/test2";

const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* TEST */}
        <Route path="/test1" exact component={Test1} />
        <Route path="/test2" exact component={Test2} />
      </Switch>
    </Router>
  );
};

export default Routes;
