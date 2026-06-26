function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "80px 50px",
        backgroundColor: "#0e0f0f",
        textAlign: "center",
      }}>
        
      <h1 style={{fontSize: "80px",color: "#ffffff",marginTop:"-10px", marginBottom: "35px", fontWeight: "650",}}> Contact Me </h1>

      <p style={{color: "#a5b2c4",fontSize: "18px", marginBottom: "40px", }}>
        Feel free to reach out to me for collaboration or opportunities.
      </p>

      <div
        style={{
          maxWidth: "600px",
          margin: "auto",
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        }}>
        <p style={{fontSize: "18px",marginBottom: "20px", }}>
        📧 Email: Priya23@gmail.com
        </p>

        <p style={{fontSize: "18px",marginBottom: "20px", }}>
        📱 Phone: +91 987654321
        </p>

        <p style={{ fontSize: "18px", marginBottom: "20px", }} >
        📍 Location: Panipat, Haryana, India
        </p>

        <p style={{ fontSize: "18px",}} >
        💼 Open to internships and freelance opportunities.
        </p>
      </div>
    </section>
  );
}

export default Contact;