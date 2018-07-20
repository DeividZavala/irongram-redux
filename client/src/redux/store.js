import {createStore, applyMiddleware} from 'redux';
import roorReducer from './reducers/reducers';
import thunk from 'redux-thunk';


export default function configureStore(){
    return createStore(
        roorReducer,
        applyMiddleware(thunk)
    )
}