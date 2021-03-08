const SELECT_PRODUCT = 'SELECT_PRODUCT';
const CLEAR_PRODUCT = 'CLEAR_PRODUCT';

export function selectProduct(payload){
    return {
        type: SELECT_PRODUCT,
        payload
    }
}

export function clearProduct(){
    return {
        type: CLEAR_PRODUCT
    }
}


const initialState = {
    selectedProduct: null,
};

export function ProductReducer(state=initialState, {type, payload}){
    switch(type){
        case SELECT_PRODUCT:
            // console.log('Product Selected: ' + payload)
            return {payload};
        case CLEAR_PRODUCT:
            return null;
        default:
            return state;
    }
}
