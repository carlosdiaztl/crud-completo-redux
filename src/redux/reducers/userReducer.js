import { userTypes } from "../types/userTypes"


export const userReducer =(state={},action)=>{
    switch (action.type) {
        case userTypes.USER_REGISTER:
            
            return{
                ...state,
                ...action.payload
            }
    
        default:
            return state
    }


}