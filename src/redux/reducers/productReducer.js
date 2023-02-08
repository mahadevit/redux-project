 
import {ActionType} from '../contants/action-type'
const initialState = {
//     product:[
//         {
//         id:1,
//         title:"mahadevi",
//         category:"programmer",
//     },

// ],
product:[{}],
};
export const productReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case ActionType.SET_PRODUCTS:
        return {...state, product:payload};
        default:
            return state;
    }
}
export const selectedProductReducer =(state={},{type,payload})=>{
    switch(type){
        case ActionType.SELECTED_PRODUCT:
            return {...state, ...payload};
        case ActionType.REMOVE_SELECTED_PRODUCT:
            return{};
            default:
              return state;
    }
}
