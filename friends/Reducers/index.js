import React from 'react';
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from '../Actions/index';

const initialState= {
    error: '',
    fetchingData: false,
    loggingIn: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START: 
        return {
            ...state, loggingIn: true, error: ''
        }

        case LOGIN_SUCCESS: 
        return {
            ...state, loggingIn: false, fetchingData: true
        }

        case LOGIN_FAIL: 
        return{
            ...state, loggingIn: false, fetchingData: false, error: error.stack
        }
        
        default: return state;
    }

}