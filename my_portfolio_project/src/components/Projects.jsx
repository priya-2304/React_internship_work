function Projects() {
  const projects = [
    { title: "Shopping Cart App",
      description: "An e-commerce shopping cart application built using React with add to cart functionality.",
       link: "https://github.com/priya-2304/React_internship_work/tree/main/Day13%20%2B%20Day14/my_first_project",
    },
    { title: "Student Visitor Card",
      description: "A visitor card project displaying student details in a beautiful card layout.",
      link: "https://github.com/priya-2304/React_internship_work/tree/main/Day11%20%2B%2012/StudentVisitorCard",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        padding: "60px 40px",
        backgroundColor: "#F8FAFC",
      }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "70px",
          color: "#0F172A",
          marginTop:"-10px",
          marginBottom: "90px",
          fontWeight: "650",
        }}
      >
        My Projects
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              width: "300px",
              backgroundColor: "white",
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            }}
          >
            <h2
              style={{
                color: "#38BDF8",
                marginBottom: "15px",
              }}
            >
              {project.title}
            </h2>

            <p
              style={{
                color: "#64748B",
                lineHeight: "1.7",
              }}
            >
              {project.description}
            </p>
              <a
                 href={project.link}
                 target="_blank"
                 rel="noreferrer" >
            <button
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "#38BDF8",
                color: "#0F172A",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              View Project
            </button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;