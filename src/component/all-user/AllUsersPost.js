import React, { Component } from 'react'
import UsersPostService from "../../service/UsersPostService";

import UsersPost from "./userPost/UsersPost";

class AllUsersPost extends Component {

    usersPostService = new UsersPostService();
    state = {userspost:[]};


componentDidMount(){
    
        this.usersPostService  
        .getUsersPostService()
        .then((value) =>this.setState({userspost:value })); 

}



    render() {
       let  {userspost} = this.state;
        return (

            <div>

{
    userspost.map((userpost)=>(<UsersPost  item={userpost} key={userpost.id}/>))
}




            </div>
        )
    }
}
export default AllUsersPost;
