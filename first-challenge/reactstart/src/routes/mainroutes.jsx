import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import SignIn from "../pages/signin";
import Profile from "../pages/profile";
// import News from "../pages/news";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/tes" component={Home} /> */}
        <Route exact path="/news-category/:category" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route excat path="/profile" component={Profile} />
        {/* <Route component={NotMatch} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default MainRoutes;
