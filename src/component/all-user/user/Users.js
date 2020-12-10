import React, { Component } from 'react'



class Users extends Component {




    render() {
        let {item,onSelectUser} = this.props;
        return (
            <div>

{item.id} - {item.name} -<b> {item.email} </b>-

<button onClick = { () => onSelectUser(item.id)} > Choose </button>





            </div>
        )
    }
}
export default  Users;