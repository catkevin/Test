import { OPEN_PLACE } from '../actions/actionTypes'

const initialState = {
    open : false
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case OPEN_PLACE:
            return {
                ...state,
                open : !state.open
            }
        default: 
            return state
    }
};

export default reducer;