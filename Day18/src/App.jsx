import React, { useReducer , useState } from "react";
import products from "./Products";
import { cartReducer, initialState } from "./CartReducer";

const App = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [coupon, setCoupon] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>

      <h2>Total : Rs {state.total}</h2>

         <input type="number" placeholder="discount kitna chaie btao" value={coupon} onChange={(e) => setCoupon(e.target.value)}/>

          <button  onClick={() => dispatch({  type: "APPLY_COUPON", payload: coupon,})}>
           Apply Coupon
            </button>
            
      <h3>Discount : Rs {state.discount}</h3>
<h2>Final Amount : Rs {state.total - state.discount}</h2>   

      <h2>Products</h2>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid gray",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px",
          }}
        >
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>

          <button
            onClick={() =>
              dispatch({
                type: "ADD_ITEM",
                payload: product,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      ))}

      <hr />

      <h2>Cart</h2>

      {state.cart.length === 0 ? (
        <h3>Cart is Empty</h3>
      ) : (
        state.cart.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid black",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "10px",
            }}
          >
            <h3>{item.name}</h3>

            <p>Price: ₹{item.price}</p>

            <p>Quantity: {item.quantity}</p>

            <button
              onClick={() =>
                dispatch({
                  type: "INCREASE_QUANTITY",
                  payload: item.id,
                })
              }
            >
              +
            </button>

            <button
              onClick={() =>
                dispatch({
                  type: "DECREASE_QUANTITY",
                  payload: item.id,
                })
              }
              style={{ marginLeft: "10px" }}
            >
              -
            </button>

            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE_ITEM",
                  payload: item.id,
                })
              }
              style={{ marginLeft: "10px" }}
            >
              Remove
            </button>
          </div>
        ))
      )}

      {state.cart.length > 0 && (
        <button
          onClick={() =>
            dispatch({
              type: "CLEAR_CART",
            })
          }
          style={{
            marginTop: "20px",
            padding: "10px 20px",
          }}
        >
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default App;