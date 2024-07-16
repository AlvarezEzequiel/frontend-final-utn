export const totalItem = (cart) => {
    return cart.reduce((sum, product) => sum + product.cantidad || 0 , 0)
}

export const totalPrice = (cart) => {
    return cart.reduce((total, product) => total + product.cantidad * product.precio || 0 , 0)
}


const CartReducer = (state, action) => {
    
    switch(action.type) {
        case "Add":
            const existingProductIndex = state.findIndex(p => p.id === action.product.id);
            if (existingProductIndex !== -1) {
                const updatedCart = [...state];
                updatedCart[existingProductIndex].cantidad += 1;
                return updatedCart;
            } else {
                return [...state, { ...action.product, cantidad: 1 }];
            }

        case "Remove":
            return state.filter(p => p.id !== action.id);

        case "Increase":
            const IndexI = state.findIndex(p => p.id === action.id);
            if (IndexI !== -1) {
                const updatedCart = [...state];
                updatedCart[IndexI].cantidad += 1;
                return updatedCart;
            }
            return state;

        case "Decrease":
            const IndexD = state.findIndex(p => p.id === action.id);
            if (IndexD !== -1) {
                const updatedCart = [...state];
                updatedCart[IndexD].cantidad -= 1;
                return updatedCart;
            }
            return state;

        default: 
            return state;
    }
}

export default CartReducer