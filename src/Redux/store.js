import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './reducer';


const store = createStore(RootReducer);

export default store;
