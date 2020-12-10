import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import UsersCommentsService from "../../service/UsersCommentsServise";
import UsersComments from "./userComments/UsersComments";
import FullUser from "./fullUsers/FullUser";
import "../all-user/all -userStyle/Style.css";

class AllUsersComments extends Component {
  usersCommentsService = new UsersCommentsService();

  state = { usersComments: [] };

  async componentDidMount() {
    let usersComments = await this.usersCommentsService.getUsersCommentsService();
    this.setState({ usersComments });
  }

  render() {
    let { usersComments } = this.state;
    let {
      match: { url },
    } = this.props;
    return (
      <div>
        <div className="all-usersComments-router">
          
          <Switch>
            <Route
              path={`${url}/:id`}
              //exact={true}
              render={(props) => {
                let {
                  match: {
                    params: { id },
                  },
                } = props;
                return <FullUser id={id} />;
              }}
            />
          </Switch>

        </div>

        {usersComments.map((userscomment) => (
          <UsersComments item={userscomment} key={userscomment.id} />
        ))}
      </div>
    );
  }
}
export default withRouter(AllUsersComments);
