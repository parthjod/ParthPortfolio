import { Grid, Paper } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <footer className="footer">
      <Grid container spacing={15}>
        <Grid item xs={4}>
          <p>Developed by Parth Jain</p>
        </Grid>
        <Grid item xs={4}>
          <p>Copyright © 2025 PJ</p>
        </Grid>
        <Grid item xs={4}>
          <a href="https://github.com/parthjod/" target="_blank">
            <GitHubIcon style={{ padding: "20px", textAlign: "center", cursor: "pointer", color: "white" }} />
          </a>
          <a href="https://www.linkedin.com/in/parth-jain-pj/" target="_blank">
            <LinkedInIcon style={{ padding: "20px", textAlign: "center", cursor: "pointer", color: "white" }} />
          </a>
          <a href="https://www.instagram.com/parththejod/" target="_blank">
            <InstagramIcon style={{ padding: "20px", textAlign: "center", cursor: "pointer", color: "white" }} />
          </a>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
