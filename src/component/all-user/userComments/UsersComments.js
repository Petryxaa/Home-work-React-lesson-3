import React, { Component } from "react";


import { BrowserRouter as Router, 
    Switch,
     Route,
      Link, 
      withRouter
    } from "react-router-dom";

class UsersComments extends Component {
  render() {
    let { item,match: {url} } = this.props;
    

    return (
      <div>
          
    {item.id} - {item.name} - <Link to = {`/comments/${item.email}`}>{item.email}</Link>-<em><b>{item.body}</b></em> 
      </div>
    );
  }
}
export default withRouter(UsersComments);
