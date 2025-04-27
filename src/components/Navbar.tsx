import React from "react";

import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material";

import navItems from "../data/navItems";

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "#ffffff",
        px: { xs: 2, md: 6 },
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
          mx: 0,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              bgcolor: "#FF5722",
              color: "#fff",
              fontWeight: 700,
              fontSize: 26,
              px: 1,
              py: 0.5,
              borderRadius: "2px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            M
          </Box>
          <Typography
            component="span"
            sx={{
              ml: 0.3,
              fontSize: 26,
              fontWeight: 700,
              color: "#000",
              fontFamily: "Poppins, sans-serif",
              lineHeight: 1,
            }}
          >
            uhammad
          </Typography>
        </Box>

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
              key={item}
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
              {item}
            </Button>
          ))}
        </Box>

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
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
