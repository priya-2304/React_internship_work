//  import react from "react";
 
//  function Navbar(){
//     return (
//         <div style = {{backgroundColor:"lightblue",
//         border: "2px solid pink",borderRadius :"20px"
// }} >
//     <a href="#" style={{ marginRight: "20px" }}>Home</a>
//     <a href="#" style={{ marginRight: "20px" }}>About</a> 
//     <a href="#" style={{ marginRight: "20px" }}>Profile</a> 
//     <a href="#">Contact</a>
//           </div>
//     );    
//  }
// export default Navbar;



import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ cartItems, setShowCart }) {
return (
<div
style={{
background: "#0F172A",
padding: "18px 40px",
display: "flex",
justifyContent: "space-between",
alignItems: "center",
boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
position: "sticky",
top: "0",
zIndex: "100",
}}>
<h1
style={{
color: "#38BDF8",
letterSpacing: "2px",
fontSize: "32px",
margin: 0,
}}>
SHOP </h1>

  <input
    type="text"
    placeholder="🔍 Search products..."
    style={{
      width: "320px",
      padding: "12px 18px",
      borderRadius: "30px",
      border: "none",
      outline: "none",
      fontSize: "15px",
      backgroundColor: "#E2E8F0",
    }}
  />
   <NavLink to="/" > Home </NavLink>
   <NavLink to="/about"> About </NavLink>
   <NavLink to="/products"> Products </NavLink>
   <NavLink to="/contact"> Contact </NavLink>

  <button
    onClick={() => setShowCart(true)}
    style={{
      backgroundColor: "#38BDF8",
      color: "#0F172A",
      border: "none",
      padding: "12px 20px",
      borderRadius: "30px",
      fontWeight: "bold",
      cursor: "pointer",
      fontSize: "16px",
      transition: "0.3s",
    }} >
    🛒 Cart ({cartItems.length})
  </button>
</div>
);
}

export default Navbar;
