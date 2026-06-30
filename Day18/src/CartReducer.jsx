export const initialState={
    cart:[],
    total:0,
    discount: 0,
}

export function cartReducer(state,action){
    switch(action.type){
        case "ADD_ITEM":{
            const existingitem = state.cart.find((item)=>item.id === action.payload.id);
            let updatedCart;
            if(existingitem){
                updatedCart = state.cart.map((item)=>item.id === action.payload.id ? {...item,quantity:item.quantity+1}:item);
            }
            else{
                updatedCart =[
                    ...state.cart , {
                        ...action.payload , quantity:1
                    }
                ]
            }
            const total = updatedCart.reduce((sum,item)=>sum+item.price*item.quantity,0);
            return {
                  ...state,
                cart : updatedCart ,
                total
            }
        }

        case "REMOVE_ITEM": {
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      const total = updatedCart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      return {
        cart: updatedCart,
        total,
      };
    }

     case "INCREASE_QUANTITY": {
      const updatedCart = state.cart.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      const total = updatedCart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      return {
        cart: updatedCart,
        total,
      };
    }

    case "DECREASE_QUANTITY": {
      const updatedCart = state.cart
        .map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);

      const total = updatedCart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      return {
        cart: updatedCart,
        total,
      };
    }

    case "CLEAR_CART":
      return {
        cart: [],
        total: 0,
      };
     
     case "APPLY_COUPON": {
    const discountPercent = Number(action.payload);

    const discount = (state.total * discountPercent) / 100;

    return {
        ...state,
        discount,
    };
}
   
        default : 
        return state;
    }
}