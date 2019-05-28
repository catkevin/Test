import { createStore, combineReducers } from 'redux'
import placesReducer from './reducers/root'

const rootPlaces = combineReducers({
    places : placesReducer
});

const configureStore = () => {
    return createStore(rootPlaces)
}

export default configureStore