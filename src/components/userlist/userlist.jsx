import React from 'react';
import User from './user/user';
import Aux from '../../hoc/Aux/Aux';
import Style from './userList.css';
import Search from '../../containers/search/search';

const userList = (props) => {

   const users = props.users.map( (each,i) => {
        
    return (
                <User  {...each} key={each.id} clicked={props.clicked} />
           )
       })
       
        return (
        <Aux>
            <br/>
            <br/>
            <Search />
            <h1>Git Hub Users</h1>
            <div className = {Style.TilesWrapper}>
            {users}
            </div>
        </Aux>
    )
}
export default userList;