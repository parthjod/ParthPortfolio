import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Box, Container } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

function ProjectCard({ title, description, image, githubLink, deployLink, date }) {
  return (
    <Container sx={{ textAlign: "center", marginTop: "100px" }}>
      <Typography
        variant="h2"
        sx={{
          fontFamily: "'Press Start 2P', cursive",
          color: "#00ccff",
          marginBottom: "40px",
          textShadow: "3px 3px 10px #00ccff",
        }}
      >
        Crafted With Passion
      </Typography>

      <Typography
        variant="h5"
        sx={{
          fontFamily: "'Pacifico', cursive",
          color: "#fff",
          marginBottom: "30px",
          fontStyle: "italic",
          marginBottom: "80px",
        }}
      >
        Dive into some of my latest tech marvels
      </Typography>

      <Card
        sx={{
          maxWidth: 550,
          background: "#121212",
          color: "white",
          boxShadow: "0px 0px 15px #00ccff",
          borderRadius: "15px",
          position: "relative",
          transition: "transform 0.6s ease, box-shadow 0.4s ease",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: "0px 0px 25px #00ccff",
          },
        }}
        style={{ marginBottom: "70px" }}
      >
        <CardMedia component="img" height="200" image={image} alt={title} style={{ width: "500px", marginLeft: "25px", marginTop: "30px", marginRight: "25px" }} />

        <Box
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            background: "#00ccff",
            color: "#020202",
            padding: "5px 10px",
            borderRadius: "5px",
            fontWeight: "bold",
          }}
        >
          {date}
        </Box>

        <CardContent>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#00ccff",
              textAlign: "center",
              fontFamily: "'Bungee', cursive",
              marginBottom: "25px",
            }}
          >
            {title}
          </Typography>

          <Box
            sx={{
              marginTop: "10px",
              color: "#ccc",
              fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
              textAlign: "left",
              whiteSpace: "pre-line",
              fontSize: "18px",
            }}
          >
            {description}
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
            <Button
              variant="outlined"
              href={githubLink}
              target="_blank"
              sx={{
                color: "#00ccff",
                borderColor: "#00ccff",
                "&:hover": { backgroundColor: "#00ccff", color: "#020202" },
              }}
            >
              <GitHubIcon sx={{ marginRight: "5px" }} /> GitHub
            </Button>
            <Button variant="contained" href={deployLink} target="_blank" sx={{ backgroundColor: "#00ccff", color: "#020202", "&:hover": { backgroundColor: "#008bb5" } }}>
              <RocketLaunchIcon sx={{ marginRight: "5px" }} /> Live
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ProjectCard;
