import resume from "../assets/resume.pdf";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "80vh",
        marginTop: "-80px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding :"50px",
        background: "linear-gradient(135deg, #0F172A, #1E293B)",
        color: "white",
        flexWrap: "wrap",
         gap: "50px",
      }}
    >
      {/* Left Side */}
      <div style={{ maxWidth: "600px" }}>
        <h1
          style={{
            color: "#38BDF8",
            fontSize: "80px",
            marginBottom: "60px",
             fontWeight: "800",
          }}>
         Priya Deswal
        </h1>

        <h2 style={{ color: "#CBD5E1", marginTop: "10px",fontSize: "30px", fontWeight: "550", }}> Full Stack Developer </h2>

        <p style={{ marginTop: "25px", lineHeight: "1.8", color: "#CBD5E1", fontSize: "18px", fontWeight: "500",}} >
          I build modern, responsive and user-friendly web applications using
          HTML, CSS, JavaScript and React.js.
        </p>
        <br/>
          <a href={resume} target="_blank" rel="noreferrer">
             <button
               style={{
              padding: "14px 30px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#38BDF8",
              color: "#0F172A",
              fontWeight: "bold",
              cursor: "pointer",
              }}>
             Download Resume
          </button>
           </a>
  
      </div>

      <div style={{flex:"1",display:"flex",justifyContent:"content",}}>
        <img
          src={profile}
          alt="Profile"
          style={{
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "5px solid #38BDF8",
          }}
        />
      </div>
    </section>
  );
}

export default Hero;