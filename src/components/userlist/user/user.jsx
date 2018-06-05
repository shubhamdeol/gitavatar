import React from 'react';
import Style from './user.css';
import Button from '../../../UI/Button/Button';
const user = (props) => {
    const userTileData = { ...props }
    return (
        <div className={Style.UserTile}>
            <div className={Style.Avatar}><img src={userTileData.avatar_url} alt=""/></div>
            <div className={Style.Desc}>
                <h3>Login: {userTileData.login.toUpperCase()}</h3>
            <h5>No of Followers: {userTileData.followers_url.length}</h5>
            <Button clicked={ () => props.clicked(userTileData.login)} btnType="Success">Click to View More Details </Button>
            </div>
        </div>
    )
}

export default user;