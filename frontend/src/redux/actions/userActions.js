import axios from 'axios';
import { 
    USER_LOGIN_FAIL, 
    USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS, 
    USER_LOGOUT_SUCCESS, 
    USER_PROFILE_FAIL, 
    USER_PROFILE_REQUEST, 
    USER_PROFILE_SUCCESS, 
    USER_REGISTER_FAIL, 
    USER_REGISTER_REQUEST, 
    USER_REGISTER_SUCCESS, 
    USER_UPDATE_FAIL, 
    USER_UPDATE_REQUEST, 
    USER_UPDATE_SUCCESS
} from '../actionTypes';


const registerUserAction = (userdata) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: USER_REGISTER_REQUEST
            });

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const { data } = await axios.post('api/user/register', userdata, config);

            dispatch({
                type: USER_REGISTER_SUCCESS,
                payload: data
            });
            
        } catch (error) {
            dispatch({
                type: USER_REGISTER_FAIL,
                payload: error.response && error.response.data.message
            })
        }
    };
};


const loginUserAction = (userdata) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: USER_LOGIN_REQUEST
            });

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const { data } = await axios.post('api/user/login', userdata, config);

            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: data
            });

            localStorage.setItem('userAuthData', JSON.stringify(data.token));
            
        } catch (error) {
            dispatch({
                type: USER_LOGIN_FAIL,
                payload: error.response && error.response.data.message
            });
        }
    };  
};

const userProfileAction = () => {
    return async (dispatch, getState) => {
        try {
            const {token} = getState().userLogin; 

            dispatch({
                type: USER_PROFILE_REQUEST
            });

            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };

            const { data } = await axios.get('api/user/profile', config);

            dispatch({
                type: USER_PROFILE_SUCCESS,
                payload: data
            });
            
        } catch (error) {
            dispatch({
                type: USER_PROFILE_FAIL,
                payload: error.response && error.response.data.message
            });
        }
    };
};

const userUpdateAction = (userdata) => {
    return async (dispatch, getState) => {
        try {
            const { token } = getState().userLogin; 

            dispatch({
                type: USER_UPDATE_REQUEST
            });

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            };

            const { data } = await axios.put('api/user/update-profile', userdata, config);

            dispatch({
                type: USER_UPDATE_SUCCESS,
                payload: data
            });
            
        } catch (error) {
            dispatch({
                type: USER_UPDATE_FAIL,
                payload: error.response && error.response.data.message
            });
        }
    };
};

const logoutUserAction = () => async dispatch => {
    try {
        localStorage.removeItem('userAuthData');
        dispatch({
            type: USER_LOGOUT_SUCCESS
        });
    } catch (error) {}
};



export { 
    registerUserAction, 
    loginUserAction, 
    logoutUserAction, 
    userProfileAction,
    userUpdateAction 
};