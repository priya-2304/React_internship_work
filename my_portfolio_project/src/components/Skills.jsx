function Skills() {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: ["React.js", "JavaScript", "HTML5"],
    },
    {
      title: "Backend Technologies",
      skills: ["Node.js", "Express.js", "REST API"],
    },
    {
      title: "Database",
      skills: ["MongoDB","MySQL","NOSQL Database"],
    },
    {
      title: "Tools & Soft Skills",
      skills: ["VS Code","GitHub", "Postman"],
    },
  ];

  return (
    <section
      id="skills"
      style={{
        padding: "100px 70px",
        background: "#000",
        color: "white",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "80px",
          fontWeight: "650",
          marginBottom: "60px",
        }}
      >
        Technical Skills
      </h1>

      <div
        style={{
          maxWidth: "1400px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "30px",
        }}
      >
        {skillCategories.map((category, index) => (
          <div
            key={index}
            style={{
              background: "#111111",
              padding: "15px",
              borderRadius: "25px",
              border: "1px solid #222",
              minHeight: "10px",
              transition: "0.3s",
            }}
          >
            <h2
              style={{
                fontSize: "34px",
                marginBottom: "35px",
                color: "#38BDF8",
                fontWeight: "700",
              }} >
              {category.title}
            </h2>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "18px",
              }}
            >
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  style={{
                    background: "#f2f2fc",
                    border: "1px solid #2a2a2a",
                    padding: "14px 24px",
                    borderRadius: "30px",
                    color: "#000000",
                    fontSize: "15px",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;