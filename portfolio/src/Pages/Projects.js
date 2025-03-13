import React from "react";
import { Grid, Container } from "@mui/material";
import ProjectCard from "../Components/ProjectCards";
import Logo from "../assets/ParthConnect.png";

function Projects() {
  const projectData = [
    {
      title: "ParthConnect",
      description:
        "Developed a real-time video calling platform using MERN and WebRTC, featuring screen sharing, chat, and multi-user conferencing for seamless communication. Designed a responsive UI with React.js and Bootstrap while optimizing backend performance with Node.js and Express.js. Efficiently managed data storage using MongoDB for smooth and reliable functionality.",
      image: Logo,
      githubLink: "https://github.com/parthjod/ParthConnect",
      deployLink: "https://parthconnect.onrender.com/",
      date: "March 2025",
    },
  ];

  return (
    <Container sx={{ marginTop: "40px" }}>
      <Grid container spacing={4} justifyContent="center">
        {projectData.map((project, index) => (
          <Grid item key={index}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;
