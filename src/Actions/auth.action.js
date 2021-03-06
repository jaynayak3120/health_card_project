import axiosInstant from "../axios";
import { authConstant } from "./constants";

export const Signin = (user) => {
    return async (dispatch) => {

        dispatch({ type: authConstant.LOGIN_REQUEST });

        const res = await axiosInstant.post(`${user.userType}/signin/`, {
            ...user.userData
        });

        console.log('request');

        if(res.status === 200) {
            const { token } = res.data;
            const user1 = res.data.user;
            console.log(res.data);

            localStorage.setItem( 'token', token );
            localStorage.setItem( 'user', JSON.stringify(user1) );
            localStorage.setItem( 'type', user.userType );

            dispatch({
                type: authConstant.LOGIN_SUCCESS,
                payload: {
                    token, user, type: user.userType
                }
            });
        } else {
            if(res.status === 400) {
                dispatch({ 
                    type: authConstant.LOGIN_FAILURE,
                    payload: { error: res.data.error }
                });
            }
        }
    }
}

export const isUserLoggedIn = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('token');
        if(token) {
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({
                type: authConstant.LOGIN_SUCCESS,
                payload: {
                    token, user,
                }
            });
        } else {
            dispatch({ 
                type: authConstant.LOGIN_FAILURE,
                payload: { error: 'Failed to Login!' }
            });
        }
    }
}

export const signOut = () => {
    return async (dispatch) => {
        dispatch({ type: authConstant.SIGNOUT_REQUEST });
        //const res = await axiosInstant.post('/admin/signout');

        // if(res.status === 200){
            localStorage.clear();
            localStorage.removeItem('token');
            localStorage.removeItem('user');
                dispatch({
                type: authConstant.SIGNOUT_SUCCESS,
            });
        // } else {
        //     dispatch({ type: authConstant.SIGNOUT_FAILURE, payload: { error: res.data.error }});
        // }
    }
}
