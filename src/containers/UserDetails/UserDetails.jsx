import React, { Component } from 'react';
import axios from 'axios';
import Style from './UserDetails.css';
class MovieDetails extends Component {

    state = {
        userDetails: "",
        
    }

    componentDidMount() {

        const userLogin = this.props.match.params.userLogin        
            axios.get("/users/"+ userLogin)
            .then( res => {
                const fetchUserDetails = {...res.data};
                this.setState({
                    userDetails: fetchUserDetails
                }) 
            }).catch(err => console.log(err))
        }

    render() {
        const userData = this.state.userDetails;
        console.log(userData.repos_url);
        
        return (
            <div className={Style.Detail}>
                <div className={Style.ImgWrap}><img src={userData.avatar_url} alt={userData.name}/></div>
                <div className={Style.Desc}>
                <h3>Name: {userData.name}</h3>
                <div>Compnay: {userData.company}</div>
                <div>Login Id: {userData.login}</div>
                <div>Bio: {userData.bio}</div>           
                
                <div>followers: {userData.followers}</div>
                <div>following: {userData.following}</div>
                <div>public gists: {userData.public_gists}</div>
                <div>Blog: {userData.blog}</div>
                <div>email: {userData.email}</div>
                <div>location: {userData.location}</div>
                </div>
            </div>
        )
    }
}

export default MovieDetails;
