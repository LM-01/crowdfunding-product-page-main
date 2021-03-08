import { combineReducers } from 'redux';
import { ModalReducer } from './modalReducer';
import { ProductReducer } from './productReducer';


export default combineReducers({modal:ModalReducer,
product:ProductReducer});