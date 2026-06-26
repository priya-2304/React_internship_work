function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#364568",
        color: "white",
        padding: "30px 20px",
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <h2 style={{color: "#38BDF8",marginBottom: "10px", }}>
      My Portfolio
      </h2>

      <p style={{color: "#CBD5E1", marginBottom: "20px", }}>
        Thanks for visiting my portfolio website.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          marginBottom: "20px",
        }}
      >
        <a
          href="https://github.com/priya-2304"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "18px",
          }}> 
        GitHub Link
        </a>
      </div>

      <p style={{color: "#94A3B8",fontSize: "14px",margin: 0,}}>
        © 2026 My Portfolio | All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;