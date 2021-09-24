const addToCart=(payload)=>{
    console.log("In action");
    return{
        type: "add",
        payload:payload
    }
}
const removeFromCart=(payload)=>{
    return {
        type: "remove",
        payload:payload
    }
}

const increaseQuantity=(payload)=>{
    return {
        type: "increase",
        payload:payload
    }
}

const decreaseQuantity=(payload)=>{
    return {
        type: "decrease",
        payload:payload
    }
}
export default {
    addToCart,
    removeFromCart,
    increaseQuantity
}