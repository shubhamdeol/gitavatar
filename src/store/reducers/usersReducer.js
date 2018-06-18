import * as actionTypes from '../action/actontypes';

const initialState = {
    userdata: "",
}

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case actionTypes.SET_USER_DETAILS :
        return {
            ...state,
            userdata: action.users
        }
        default:
            return state
        
    }
}

export default reducer;