import * as actionTypes from './actontypes';
import axiosInstance from '../../axios';

export const setUserDetails = (users) => {
    return {
        type: actionTypes.SET_USER_DETAILS,
        users: users
    }
}


export const onFetchUserInit = () => {
    return dispatch => {    // dispatch here is available due to thunk
        axiosInstance.get("/users")
                .then(res => {
                    dispatch(setUserDetails(res.data))
                })
    }
}

export const setMoreUserInfo = (user) => {
    return {
        type: actionTypes.SET_MORE_USER_INFO,
        user: user
    }
}

export const setUserRepo = (userRepo) => {
    return {
        type: actionTypes.SET_USER_REPO,
        userRepo: userRepo
    }
}


export const onFetchUserInfoInit = (userLogin) => {
    return dispatch => {
        axiosInstance.get("/users/" + userLogin)
            .then( res => {
                dispatch(setMoreUserInfo(res.data))
            })
        return axiosInstance.get("/users/" + userLogin + "/repos")
            .then( res => {
                dispatch(setUserRepo(res.data))
            });
    }
}
