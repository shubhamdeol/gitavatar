import React, { Component } from 'react';
import axios from 'axios';
import UserList from '../../components/userlist/userlist';
import Spinner from '../../UI/Spinner/Spinner';
import Aux from '../../hoc/Aux/Aux';
class UserBuilder extends Component {

    state = {
        usersData: ""
    }

    componentDidMount() {
        axios.get("/users")
            .then(res => {
                this.setState(
                    {
                        usersData: res.data
                    }
                )
            })
    }

    userDetailHandler = (login) => {
        
            this.props.history.push({
                pathname: "/users/" + login
            })
    }
    render() {

        const users = this.state.usersData ? <UserList clicked={this.userDetailHandler} users = {this.state.usersData} /> : <Spinner />

        return (
            <Aux>
                {users}
            </Aux>
        )
    }
}

 

export default UserBuilder;