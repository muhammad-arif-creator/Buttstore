const initialState={
    cartItems:[],
    price:0,
}
const cart = (state = initialState, action) => {
    switch(action.type){
        case "add":
            const newcartItem = [...state.cartItems];
            let doesExist=false;
            for(let i=0; i<newcartItem.length;i++)
            {
                if(newcartItem[i].id===action.payload.product.id)
                {
                    doesExist=true;
                }
            }
            
            if(doesExist===false)
            {
                newcartItem.push({...action.payload.product, quantity:action.payload.qty});
            return {
               ...state,
               cartItems:newcartItem,
               price:state.price+(action.payload.product.price*action.payload.qty)
            }
            }
            else{
                alert("Product already exists in the cart");
                return{
                    
                    ...state
                }
            }
        case "remove":
            const cartItems=[...state.cartItems];
            cartItems.splice(action.payload.index,1);
            return {
                ...state,
                cartItems,
                price:state.price-(action.payload.product.price*action.payload.product.quantity)
            }
        case "increase":
            const temp=[...state.cartItems];
            temp[action.payload.index].quantity++;
            const tempPrice=temp[action.payload.index].price;
            return {
                    ...state,
                    cartItems:temp,
                    price:state.price+tempPrice
                }
        case "decrease":
            const temp1=[...state.cartItems];
            if(temp1[action.payload.index].quantity===1)
            {   
                const tempPrice1=temp1[action.payload.index].price;
                temp1.splice(action.payload.index,1);
                return {
                    ...state,
                    cartItems:temp1,
                    price:state.price-tempPrice1
                }
            }
            if(temp1[action.payload.index].quantity>1)
            {
                temp1[action.payload.index].quantity--;
                const tempPrice1=temp1[action.payload.index].price;
                return {
                    ...state,
                    cartItems:temp1,
                    price:state.price-tempPrice1
                    }
            }
            
        default: 
            return state
    }
}

export default cart
