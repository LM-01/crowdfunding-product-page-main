import { combineReducers } from 'redux';

const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

export function openModal(payload){
    return {
        type: OPEN_MODAL,
        payload
    }
}

export function closeModal(payload){
    return {
        type: CLOSE_MODAL,
        payload
    }
}


const initialState = false;

export function ModalReducer(state=initialState, {type, payload}){
    let showModal = false;
    switch(type){
        case OPEN_MODAL:
            showModal = true;
            return {showModal, payload};
        case CLOSE_MODAL:
            showModal = false;
            return showModal;
        default:
            return state;
    }
}

export default combineReducers({modal:ModalReducer});