import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ItemReducer from './ItemReducer';

const store = createStore(ItemReducer, applyMiddleware(thunk));

export default store
