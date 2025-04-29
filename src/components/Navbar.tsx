import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import navItems from "../data/navItems";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const scrollToSection = (target: string) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ textAlign: "center", mt: 2 }}>
      {navItems.map((item) => (
        <List key={item.label}>
          <ListItem button onClick={() => scrollToSection(item.target)}>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                fontSize: 15,
              }}
            />
          </ListItem>
        </List>
      ))}
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "#ffffff",
          px: { xs: 3, md: 10 },
          top: 0,
          zIndex: 1100,
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mx: "auto",
            maxWidth: 1600,
          }}
        >
          <Typography
            sx={{
              fontSize: 26,
              fontWeight: 700,
              fontFamily: "Poppins, sans-serif",
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              color: "#000",
            }}
          >
            <Box
              component="span"
              sx={{
                bgcolor: "#FF5722",
                color: "#fff",
                fontWeight: 700,
                fontSize: 26,
                px: 1,
                py: 0.5,
                borderRadius: "2px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              M
            </Box>
            uhammad
          </Typography>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              flexGrow: 1,
              justifyContent: "center",
              gap: 5,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => scrollToSection(item.target)}
                sx={{
                  color: "#000",
                  textTransform: "none",
                  fontWeight: 500,
                  fontSize: 15,
                  fontFamily: "Poppins, sans-serif",
                  px: 2,
                  minWidth: "auto",
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#FF5722",
                color: "#fff",
                borderRadius: "5px",
                fontWeight: 500,
                fontSize: 14,
                px: 2.5,
                py: 1,
                textTransform: "none",
                boxShadow: "none",
                fontFamily: "Poppins, sans-serif",
                "&:hover": { bgcolor: "#e64a19" },
              }}
            >
              Download CV
            </Button>
          </Box>

          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton onClick={handleDrawerToggle}>
              <MenuIcon sx={{ color: "#000" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            width: 240,
            fontFamily: "Poppins, sans-serif",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
