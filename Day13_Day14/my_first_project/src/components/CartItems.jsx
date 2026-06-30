import React from "react";

function CartItems({ cartItems, setShowCart }) {
return (
<div
style={{
padding: "40px",
backgroundColor: "#F4F7FE",
minHeight: "100vh",
}}
>
<button
onClick={() => setShowCart(false)}
style={{
padding: "12px 22px",
border: "none",
backgroundColor: "#0F172A",
color: "#38BDF8",
borderRadius: "30px",
cursor: "pointer",
fontWeight: "bold",
marginBottom: "30px",
}}
>
← Continue Shopping </button>

  <h1
    style={{
      color: "#0F172A",
      marginBottom: "30px",
    }}
  >
    🛒 My Cart
  </h1>

  {cartItems.length === 0 ? (
    <h2
      style={{
        color: "#64748B",
      }}
    >
      No items in cart
    </h2>
  ) : (
    cartItems.map((item) => (
      <div
        key={item.id}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "25px",
          backgroundColor: "white",
          padding: "20px",
          marginBottom: "20px",
          borderRadius: "20px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src={item.image}
          alt={item.title}
          style={{
            width: "120px",
            height: "120px",
            objectFit: "cover",
            borderRadius: "15px",
          }}
        />

        <div>
          <h2
            style={{
              color: "#0F172A",
              marginBottom: "10px",
            }}
          >
            {item.title}
          </h2>

          <p
            style={{
              color: "#64748B",
            }}
          >
            Category : {item.category}
          </p>

          <p
            style={{
              color: "#38BDF8",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Quantity : {item.quantity}
          </p>
          
        </div>
      </div>
    ))
  )}
</div>

);
}

export default CartItems;
