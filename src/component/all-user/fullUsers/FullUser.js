import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom';


 class FullUser extends Component {
    render() {
       
        
        let { item,match: {url} } = this.props;
        console.log(this.props)
        return (
            <div>
Was is das?

 
            </div>
        )
    }
}
export default withRouter(FullUser);