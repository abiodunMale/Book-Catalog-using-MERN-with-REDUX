import { DELETE_BOOK_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS, USER_PROFILE_FAIL, USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_UPDATE_FAIL, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS } from "../actionTypes";

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
                token: action.payload.token
            };
        case USER_LOGIN_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case USER_LOGOUT_SUCCESS:
            return {};
        default:
            return state;
    }
};

const userProfileReducer = (state={}, action) => {
    switch (action.type) {
        case USER_PROFILE_REQUEST:
            return {
                loading: true
            };
        case USER_PROFILE_SUCCESS:
            return {
                user: action.payload,
                books: action.payload.books
            };
        case USER_PROFILE_FAIL: 
            return {
                loading: false,
                error: action.payload
            };
        case DELETE_BOOK_SUCCESS: 
            return {
                success: action.payload.success,
                books: action.payload.books
            };
        default:
            return state;
    }
};

const userUpdateReducer = (state={}, action) => {
    switch (action.type) {
        case USER_UPDATE_REQUEST:
            return {
                loading: true
            };
        case USER_UPDATE_SUCCESS: 
            return {
                user: action.payload.data,
                success: action.payload.message
            };
        case USER_UPDATE_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export { registerUserReducer, loginUserReducer, userProfileReducer, userUpdateReducer };