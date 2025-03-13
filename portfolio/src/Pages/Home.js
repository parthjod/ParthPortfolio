import React from "react";
import Typewriter from "typewriter-effect";
import { Box, Typography, Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Logo from "../assets/coding.png";

function Home() {
  return (
    <Box
      sx={{
        padding: "50px",
        color: "#fff",
        backgroundColor: "rgba(2, 2, 2, 0.5)",
        minHeight: "100vh",
      }}
    >
      <Grid container alignItems="center" spacing={4} style={{ marginTop: "50px", backgroundColor: "rgba(2, 2, 2, 0.5)" }}>
        <Grid item xs={6}>
          <Typography variant="h3" gutterBottom>
            Hello Buddy,
          </Typography>
          <Typography variant="h3">
            I'M <span style={{ color: "#00ccff", fontWeight: "bold", marginTop: "40px" }}>PARTH JAIN</span>
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#00ccff",
              marginTop: "60px",
              fontSize: "40px",
              fontFamily: "'Press Start 2P', cursive",
            }}
          >
            <Typewriter
              options={{
                strings: ["Full Stack Developer", "React Enthusiast", "Java Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <img src={Logo} alt="coding" style={{ width: "100%", maxWidth: "700px", borderRadius: "10px" }} />
        </Grid>
      </Grid>

      <Box sx={{ marginTop: "200px" }} />

      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: "60px", fontFamily: "'Press Start 2P', cursive" }}>
          THIS IS MY INTRO YOU'RE LOOKING AT
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "27px",
            fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
            maxWidth: "700px",
            margin: "auto",
            textAlign: "justify",
            wordBreak: "break-word",
          }}
        >
          I am a proactive and versatile B.Tech Computer Science and Engineering student with a strong foundation in programming languages such as Java and C. My expertise extends to frontend technologies like HTML, CSS, JavaScript, and React.js, as well as backend development using Node.js,
          Express.js, and databases like SQL and MongoDB.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "27px",
            fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
            maxWidth: "700px",
            margin: "auto",
            marginTop: "30px",
            textAlign: "justify",
            wordBreak: "break-word",
          }}
        >
          Passionate about innovation and problem-solving, I am always eager to learn and adapt to new challenges. My strong collaboration and communication skills enable me to work effectively in teams and contribute to delivering high-quality solutions.
        </Typography>
      </Box>

      <Box sx={{ marginTop: "85px" }} />

      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Press Start 2P', cursive",
            marginBottom: "50px",
          }}
        >
          Find me on:
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <a href="https://github.com/parthjod" target="_blank" rel="noopener noreferrer">
            <GitHubIcon style={{ padding: "20px", textAlign: "center", cursor: "pointer", color: "white", fontSize: "50px", marginTop: "-20px" }} />
          </a>
          <a href="https://www.linkedin.com/in/parth-jain-pj/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon style={{ padding: "20px", textAlign: "center", cursor: "pointer", color: "white", fontSize: "50px", marginTop: "-20px" }} />
          </a>
          <a href="https://www.instagram.com/parththejod/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon style={{ padding: "20px", textAlign: "center", cursor: "pointer", color: "white", fontSize: "50px", marginTop: "-20px" }} />
          </a>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
