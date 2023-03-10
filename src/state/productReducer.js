import { actionType } from "./actionType";

export const initialState = {
    loading: false,
    products: [],
    error: false,
    cart: [],
    remove: [],
};

export const productReducer = (state, action) => {
    switch (action.type) {
        case actionType.FETCHING_START:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case actionType.FETCHING_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: false,
            };
        case actionType.FETCHING_ERROR:
            return {
                ...state,
                loading: true,
                error: true,
            };
        case actionType.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case actionType.REMOVE_TO_CART:
            return {
                ...state,
                remove: [state.cart.filter(product => product.id !== action.payload.id)],
            };
            
        default:
            return state;
    }
};