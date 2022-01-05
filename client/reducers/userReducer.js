import * as t from '../action.Types';

const initialState = null;


export const userReducer = (state = initialState,action)=>{
    console.log('ACTION',action.type, action.payload)
    switch(action.type){
        case t.LOGIN_USER:
        // case t.SIGNUP_USER:
        // case t.LOAD_USER:
            return action.payload;
        
        case t.LOGOUT_USER:
            return null
        default:
            return null;
        
    }
}