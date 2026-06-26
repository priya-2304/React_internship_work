function About() {
  const stats = [
    { number: "10+", title: "Projects Completed" },
    { number: "5+", title: "Technologies Learned" },
    { number: "100%", title: "Dedication" },
    { number: "1+", title: "Years Learning" },
  ];

  return (
    <section
      id="about"
      style={{
        background: "#f9f9f9",
        color: "white",
        padding: "80px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "80px",
  
      }} >

      <div
        style={{
          flex: "1",
          width: "55%",
       }}>
        <h1
          style={{
            fontSize: "80px",
            margin: "0 0 40px 0",
            fontWeight: "650",
            color:"black",
          }}
        >
          About Me
        </h1>

        <p
          style={{
            color: "#7b7f85",
            fontSize: "25px",
            lineHeight: "1.9",
          }}
        >
          Passionate Full Stack Developer with experience in building modern and responsive  web applications using React.js.
          <br />
          Currently pursuing B.Tech and actively working on projects to strengthen my frontend and backend development knowledge.
        </p>
      </div>

      <div
        style={{
          flex: "1",
          display: "grid",
           width: "45%",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "30px",
        }}
      >
        {stats.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#111111",
              border: "1px solid #2a2a2a",
              borderRadius: "25px",
              height: "220px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                color: "#38BDF8",
                fontSize: "72px",
                margin: "10px",
                fontWeight: "800",
              }}
            >
              {item.number}
            </h1>

            <p
              style={{
                color: "#94A3B8",
                fontSize: "24px",
                marginTop: "25px",
                textAlign: "center",
              }}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;