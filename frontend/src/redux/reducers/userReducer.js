import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../actionTypes";

const registerUserReducer = (state={}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {
                loading: true
            };
        case USER_REGISTER_SUCCESS:
            return {
                user: action.payload
            };
        case USER_REGISTER_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

const loginUserReducer = (state={}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {
                loading: true
            };
        case USER_LOGIN_SUCCESS:
            return {
                user: action.payload
            };
        case USER_LOGIN_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

const userLogoutReducer = (state={}, action) => {
    switch (action.type) {
        case USER_LOGOUT_SUCCESS:
            return {};
        default:
            return state;
    }
};

export { registerUserReducer, loginUserReducer, userLogoutReducer };