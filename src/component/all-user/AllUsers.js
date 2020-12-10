import React, { Component } from "react";

import Users from "./user/Users";

import UsersService from "../../service/UsersService";

class AllUsers extends Component {
  usersService = new UsersService();

  state = { users: [], chosenOne: null };

  componentDidMount() {
    this.usersService
      .getUsersService()
      .then((value) => this.setState({ users: value }));
  }

  onSelectUser = (id) => {
    let { users } = this.state;
    let find = users.find((value) => value.id === id);
    this.setState({ chosenOne: find });
  };

  render() {
    let { users, chosenOne } = this.state;

    return (
      <div>
        {users.map((user) => (
          <Users item={user} key={user.id} onSelectUser={this.onSelectUser} />
        ))}
        {chosenOne && (
          <div>
            <h1>
              {chosenOne.id}-{chosenOne.name}
            </h1>
          </div>
        )}
      </div>
    );
  }
}
export default AllUsers;
