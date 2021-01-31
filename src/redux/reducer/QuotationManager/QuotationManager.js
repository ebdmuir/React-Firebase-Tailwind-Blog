import * as List from '../../../Utils/FunctionList'

const initialState = {
    selectedItem: []
}


const setQuotation = (state = initialState, action) => {
    if (action.type === List.SUPPORTED_FUNCTIONS.ADD_TO_CART) {
        return {
            ...state,
            selectedItem: state.selectedItem.concat(action.item)
        }
    }
    else if (action.type === List.SUPPORTED_FUNCTIONS.REMOVE_FROM_CART) {
        return {
            ...state,
            selectedItem: state.selectedItem.filter(e => e.name !== action.itemID)
        }
    }


    return state;
};

export default setQuotation