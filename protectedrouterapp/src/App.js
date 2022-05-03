import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomeComponent from "./pages/HomeComponent";
import AccountComponent from "./pages/AccountComponent";
import CardComponent from "./pages/CardComponent";
import ProtectedRoute from "./ProtectedRoute";
import useAuth from "./useAuth";

function App() {
  const [isAuth, login, logout] = useAuth(false);
  return (
    <>
      <div className="ui container">
        <h2>Protected Route Tutorial</h2>
        <Router>
          <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/accounts">Accounts (Protected)</Link>
            </li>
            <li>
              <Link to="/cards">Cards (Unprotected)</Link>
            </li>
          </ul>

          {isAuth ? (
            <>
              <div className="ui message brown">You are logged in ....</div>
              <button className="ui button blue" onClick={logout}>
                logout
              </button>
            </>
          ) : (
            <>
              <div className="ui message violet">You are logged out ....</div>
              <button className="ui button blue" onClick={login}>
                login
              </button>
            </>
          )}

          <Switch>
            <Route path="/" exact component={HomeComponent} />
            <Route path="/cards" exact component={CardComponent} />
            <ProtectedRoute
              path="/accounts"
              component={AccountComponent}
              auth={isAuth}
            />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
