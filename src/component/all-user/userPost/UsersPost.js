import React, { Component } from 'react'

class UsersPost extends Component {
    render() {

let {item}=this.props;

        return (
            <div>
                
 
<b> {item.id} - {item.title}</b>

            </div>
        )
    }
}
export default UsersPost;