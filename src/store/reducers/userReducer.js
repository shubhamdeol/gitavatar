import * as actionTypes from '../action/actontypes';

const initialState = {
    moreUserInfo: "",
    userRepos: ""
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.SET_MORE_USER_INFO:
            return {
                ...state,
                moreUserInfo: action.user
            }
        case actionTypes.SET_USER_REPO:
            return {
                ...state,
                userRepos: action.userRepo
            }
        default:
            return state

    }
}

export default reducer;