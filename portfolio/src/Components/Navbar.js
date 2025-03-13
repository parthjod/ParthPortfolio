import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import "../App.css";
import HomeIcon from "@mui/icons-material/Home";
import DomainIcon from "@mui/icons-material/Domain";
import DescriptionIcon from "@mui/icons-material/Description";
import ComputerIcon from "@mui/icons-material/Computer";
import Logo from "../assets/PJLogo.png";

function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        top: 0,
        left: 0,
        width: "100%",
      }}
      style={{
        backgroundColor: "rgba(2, 2, 2, 0.5)",
      }}
    >
      <Toolbar className="Navbar">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link to="/">
            <img
              src={Logo}
              alt="logo"
              style={{
                width: "80px",
                borderRadius: "50%",
                boxShadow: "0px 0px 15px",
              }}
            />
          </Link>
        </Box>

        <Box sx={{ display: "flex", marginLeft: "auto", gap: 5 }}>
          {navItems.map(({ href, icon: Icon, label }, index) => (
            <Button
              key={index}
              href={href}
              sx={{
                color: "#00ccff",
                border: "2px solid #00ccff",
                boxShadow: "0px 0px 10px #00ccff",
                fontWeight: "bold",
                letterSpacing: "1px",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  backgroundColor: "#00ccff",
                  color: "#020202",
                  transform: "scale(1.1)",
                  boxShadow: "0px 0px 20px #00ccff",
                },
              }}
            >
              <Icon sx={{ marginRight: "5px" }} />
              {label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

const navItems = [
  { href: "/", icon: HomeIcon, label: "Home" },
  { href: "/projects", icon: ComputerIcon, label: "Projects" },
  { href: "/experience", icon: DomainIcon, label: "Experience" },
  { href: "/resume", icon: DescriptionIcon, label: "Resume" },
];

export default Navbar;
