import React, { Component } from 'react';
import axiosInstance from '../../axios';
import Style from './UserDetails.css';
import { connect } from 'react-redux';
import globalErrorhandler from '../../hoc/globalErrorHandler/globalErrorHandler';
import * as actions from '../../store/action/actions';
import UserRepo from './userRepo/userRepo';
import Aux from '../../hoc/Aux/Aux';

class UserDetails extends Component {
    componentDidMount() {
          const userLogin = this.props.match.params.userLogin       
          this.props.fetchUserDetails(userLogin);
        }

    

    render() {
        const userData = this.props.usrInfo;
        const repo = []
        for(let each of this.props.usrRepo  ){
            repo.push(
            <div className={Style.FlexRepo} key={each.id}>
                    <UserRepo {...each} />
            </div>
        )
        }

         return (
             <Aux>
            <div className={Style.Detail}>
                <div className={Style.ImgWrap}>
                <img src={userData.avatar_url} alt={userData.name}/>
                </div>
                <div className={Style.Desc}>
                <h3>Name: {userData.name}</h3>
                <div>Compnay: {userData.company}</div>
                <div>Login Id: {userData.login}</div>
                <div>Bio: {userData.bio}</div>           
                
                <div>followers: {userData.followers}</div>
                <div>following: {userData.following}</div>
                <div>Public Repos: {userData.public_repos}</div>
                <div>public gists: {userData.public_gists}</div>
                <div>Blog: {userData.blog}</div>
                <div>email: {userData.email}</div>
                <div>location: {userData.location}</div>
                </div> 
            </div>
            <h3 style={{textAlign: "center"}}>List Of User Repos</h3>
            { repo }
             </Aux>
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        usrInfo: state.user.moreUserInfo,
        usrRepo: state.user.userRepos
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return{
        fetchUserDetails: (login) => dispatch(actions.onFetchUserInfoInit(login)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(globalErrorhandler(UserDetails, axiosInstance));
