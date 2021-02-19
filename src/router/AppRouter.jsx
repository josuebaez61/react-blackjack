import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import HomeScreen from "../pages/home/HomeScreen";
import GameScreen from "../pages/game/GameScreen";

const AppRouter = () => {
  return (
    <Router>
      <div className="main">
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/ingame" component={GameScreen} />
          <Redirect to='/' />,
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
