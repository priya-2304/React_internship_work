import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
     style={{
        background: "linear-gradient(90deg, #80532c, #67210c)",
        padding: "18px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
      }}
    >
         <h2
        style={{
          color: "white",
          margin: 0,
          cursor: "pointer",
          letterSpacing: "1px",
        }}
      >
       Online Store
      </h2>

      <NavLink to="/Day15FormValidation" style={{color:"yellow"}}> Student Registration From </NavLink>
      <NavLink to="/about" style={{color:"yellow"}}> About </NavLink>
      <NavLink to="/products" style={{color:"yellow"}}> Products </NavLink>
      <NavLink to="/contact" style={{color:"yellow"}}> Contact </NavLink>
    </nav>
  );
}

export default Navbar;