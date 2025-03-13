import React from "react";
import { Container, Typography, Box } from "@mui/material";
// import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import ResumePDF from "../assets/Parth_A_Jain_Resume (1).pdf";

function ResumeSection() {
  //   const handleDownload = () => {
  //     const link = document.createElement("a");
  //     link.href = ResumePDF;
  //     link.download = "Parth_A_Jain_Resume (1).pdf"; // Change filename as needed
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   };

  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#121212",
        color: "#00ccff",
        padding: "40px 0",
        marginTop: "80px",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "'Rubik Glitch', cursive",
          textShadow: "0px 0px 15px #00ccff",
          marginBottom: "80px",
        }}
      >
        My Resume
      </Typography>

      <Box
        component="iframe"
        src={ResumePDF}
        width="80%"
        height="500px"
        sx={{
          border: "2px solid #00ccff",
          borderRadius: "10px",
          boxShadow: "0px 0px 20px #00ccff",
          backgroundColor: "#000",
        }}
      />
      {/* <Button
        variant="contained"
        onClick={handleDownload}
        sx={{
          marginTop: "20px",
          padding: "12px 24px",
          fontSize: "18px",
          fontFamily: "'Press Start 2P', cursive",
          backgroundColor: "#00ccff",
          color: "#020202",
          boxShadow: "0px 0px 20px #00ccff",
          "&:hover": {
            backgroundColor: "#008bb5",
            boxShadow: "0px 0px 30px #00ccff",
          },
        }}
      >
        <CloudDownloadIcon sx={{ marginRight: "8px" }} />
        Snag My CV
      </Button> */}
    </Container>
  );
}

export default ResumeSection;
