import React from 'react';
import Styles from './userRepo.css';
const repo = (props) => {
    return(
            <div className={Styles.Repo}>
            <div>Repo Name: {props.name}</div>
            <div>Full Repo Name: {props.full_name}</div>
            <div>Description: {props.description}</div>
            <div>Created at: {props.created_at}</div>
            <div>Clone Url:<a href={props.clone_url}> {props.clone_url}</a></div>
            <div>Forks: {props.forks}</div>
            <div>open issues: {props.open_issues}</div>
            <div>watchers: {props.watchers}</div>
            <div>Default Branch: {props.default_branch}</div>
            <div></div>

            </div>
    
    )
}
export default repo;