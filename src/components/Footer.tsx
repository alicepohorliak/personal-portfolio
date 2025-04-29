import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import navItems from "../data/navItems";

const Footer = () => {
  const scrollToSection = (target: string) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ mt: 10 }}>
      <Box
        sx={{
          backgroundColor: "#f8f8f8",
          px: { xs: 3, md: 6 },
          pt: { xs: 6, md: 10 },
          pb: 6,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 5,
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
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: { xs: 2, md: 5 },
            mb: 4,
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

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: { xs: 1, md: 1.5 },
            mb: 4,
          }}
        >
          <IconButton color="inherit">
            <Facebook sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton color="inherit">
            <Twitter sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton color="inherit">
            <Instagram sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton color="inherit">
            <LinkedIn sx={{ fontSize: 30 }} />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{ backgroundColor: "#545454", py: 2, mt: -4 }}>
        <Typography
          sx={{
            fontSize: 15,
            color: "#fff",
            textAlign: "center",
            fontFamily: "Poppins, sans-serif",
            px: 2,
          }}
        >
          © 2023 <strong style={{ color: "#FF5722" }}>Muhammad</strong> All
          Rights Reserved, Inc.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
