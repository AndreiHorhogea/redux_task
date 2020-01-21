import { ADD_ITEM } from "../constants/action-types";
import { REMOVE_ITEM } from "../constants/action-types";

const initialState = {
    items: [],
    itemToDelete: ""
};

function rootReducer(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case ADD_ITEM:
            return {
                ...state,
                items: [payload, ...state.items]
            };
        case REMOVE_ITEM:
            // const newItems = state.items.slice();    //delete one by one
            // newItems.splice(action.index,1);
            // console.log(newItems);
            // return{
            //   items: newItems,
            // };

            return {
                items: [...state.items.filter( (element) => element !== payload )],
                itemToDelete: payload
            };


        default:
            return state;
    }
}

export default rootReducer;