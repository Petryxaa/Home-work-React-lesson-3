import React, { Component } from "react";
import AllUsers from "./component/all-user/AllUsers";
import AllUsersPost from "./component/all-user/AllUsersPost";
import AllUsersComments from "./component/all-user/AllUsersComments";

import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      
      <Router>
        <div>



          
          <div className="link">
            <div>
              <Link to={"/users"}> Users </Link>
            </div>

            <div>
              <Link to={"/posts"}>Post</Link>
            </div>

            <div>
              <Link to={"/comments"}>Comments</Link>
            </div>
          </div>

          <div className={"app-route"}>
            <Switch>
              <Route path={"/users"}>
              <div className="app-users">
                <AllUsers />
                </div>
              </Route>
            </Switch>

            <Switch>
              <Route path={"/posts"}>
                <div className="app-users-post">
                  <AllUsersPost />
                </div>
              </Route>
            </Switch>

            <Switch>
              <Route>
                <div className="coment">
                  <Route
                    path={"/comments"}
                    render={(props) => {
                      console.log(props);
                      return <AllUsersComments />;
                    }}
                  />
                </div>
              </Route>
            </Switch>
          </div>


        </div>
      </Router>
    );
  }
}
export default App;
