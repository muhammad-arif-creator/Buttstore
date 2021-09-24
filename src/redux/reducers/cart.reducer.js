const initialState={
    cartItems:[],
    price:0,
}
const cart = (state = initialState, action) => {
    switch(action.type){
        case "add":
            const newcartItem = [...state.cartItems];
            newcartItem.push({...action.payload.product, quantity:action.payload.qty});
            return {
               ...state,
               cartItems:newcartItem,
               price:state.price+action.payload.product.price
            }
        case "remove":
            const cartItems=[...state.cartItems];
            cartItems.splice(action.payload.index,1);
            return {
                ...state,
                cartItems,
                price:state.price-action.payload.product.price
            }
            case "increase":
                const temp=[...state.cartItems];
                temp[action.payload.index].quantity++;
                return {
                    ...state,
                    cartItems:temp,
                    //price:state.price+cartItems[action.payload.index].price
                }
        default: 
            return state
    }
}

export default cart
