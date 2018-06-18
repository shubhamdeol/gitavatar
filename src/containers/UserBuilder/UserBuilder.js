import React, { Component } from 'react';
import axiosInstance from '../../axios';
import UserList from '../../components/userlist/userlist';
import Spinner from '../../UI/Spinner/Spinner';
import Aux from '../../hoc/Aux/Aux';
import globalErrorHandler from '../../hoc/globalErrorHandler/globalErrorHandler';
import { connect } from 'react-redux';
import * as actions from '../../store/action/actions';

class UserBuilder extends Component {
    componentDidMount() {
        this.props.onStartFetchUsers();
    }

    userDetailHandler = (login) => {        
            this.props.history.push({
                pathname: "/users/" + login
            })
    }
    render() {
        const users = this.props.userDetails
                     ? <UserList clicked={this.userDetailHandler} users = {this.props.userDetails} /> 
                     : <Spinner />

        return (
            <Aux>       
                {users}
            </Aux>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userDetails: state.users.userdata
    }
}

const mapActionToProps = ( dispatch ) => {
    return {
        onStartFetchUsers: () => dispatch(actions.onFetchUserInit()) 
    }
}

export default connect(mapStateToProps, mapActionToProps)(globalErrorHandler(UserBuilder, axiosInstance));