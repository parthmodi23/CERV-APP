import { selectedProductData } from "../actions/order";

const initialState = {
    catererData: null,
    singleCaterer: null,
    selectedProductData: [],
    subcategoryData: null,
    quantity: 1,
    orderItem: [],
    totalPrice: 0 // Initialize total price
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CATERER_DATA':
            return {
                ...state,
                catererData: action.payload.catererData
            };

        case 'GET_SINGLE_CATERER_DATA':
            return {
                ...state,
                singleCaterer: action.payload.singleCaterer
            };

        case 'SELECTEDPRODUCTDATA':
            return {
                ...state,
                selectedProductData: [...state.selectedProductData, action.payload]
            };

        case 'INCREMENTCOUNTER':
            const { productId, quantity, price,size } = action.payload;
            const existingIndex = (state.orderItem || []).findIndex(item => item?.productId === productId);
            if (existingIndex !== -1) {
                // Product already exists, update its quantity
                const updatedOrderItem = state.orderItem.map((item, index) => {
                    if (index === existingIndex) {
                        return { ...item, quantity: item.quantity + quantity };
                    } else {
                        return item;
                    }
                });
                return {
                    ...state,
                    orderItem: updatedOrderItem,
                    totalPrice: state.totalPrice + quantity * price 
                };
            } else {
                // Product doesn't exist, add it to the cart
                const newOrderItem = state.orderItem || [];
                return {
                    ...state,
                    orderItem: [...newOrderItem, { productId, quantity,price,size }],
                    totalPrice: state.totalPrice + quantity * price 
                };
            }

        case 'DECREMENTCOUNTER':
            const decrementIndex = state.orderItem.findIndex(item => item.productId === action.payload.productId);
            if (decrementIndex !== -1) {
                const updatedOrderItem = state.orderItem.map((item, index) => {
                    if (index === decrementIndex) {
                        // for not 0
                        const newQuantity = Math.max(item.quantity - action.payload.quantity, 0);
                        return { ...item, quantity: newQuantity };
                    } else {
                        return item;
                    }
                });
                return {
                    ...state,
                    orderItem: updatedOrderItem,
                    totalPrice: state.totalPrice - action.payload.quantity * action.payload.price // Update total price
                };
            } else {
                return state; //returning current state if not found
            }

        case 'GET_SUBCATEGORY_DATA':
            return {
                ...state,
                subcategoryData: action.payload.subCategory
            };

        case 'ORDERD_ITEMS':
            return {
                ...state,
                orderItem: [...state.orderItem, action.payload.orderItem]
            };
        case 'HANDLETOTAL':
            return{
                ...state,
                orderItem:action.payload.orderItem,
                totalPrice: action.payload.totalPrice,
                selectedProductData:action.payload.selectedProductData
            }

        default:
            return state;
    }
};
