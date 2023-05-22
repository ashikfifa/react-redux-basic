import { ADD_ITEM,DELETE_ITEM } from "./ActionType"


const initState={
    noOfItem:0
}

 const ItemReducer=(state=initState,action)=>{
    switch(action.type){
        case ADD_ITEM:
            return{
                ...state,
                noOfItem:state.noOfItem+1
            }

         case DELETE_ITEM:
            return{
                ...state,
                noOfItem:state.noOfItem-1
            }
        default:
            return state
    }
} 

export default ItemReducer