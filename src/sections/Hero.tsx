import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

import heroImg from "../assets/hero.png";
import { heroContent } from "../data/heroContent";

const Hero = () => {
  return (
    <Box
      id="hero"
      sx={{
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, sm: 4, md: 10 },
        py: { xs: 4, sm: 6, md: 10 },
        width: "100%",
        maxWidth: 1600,
        mx: "auto",
        gap: { xs: 6, md: 0 },
      }}
    >
      <Box
        sx={{
          flex: 1,
          maxWidth: 500,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          ml: { xs: 0, md: 6 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          sx={{
            fontSize: 16,
            color: "#000",
            fontWeight: 500,
            mb: 1,
            fontFamily: "Poppins, sans-serif",
          }}
        >
          {heroContent.greeting}
        </Typography>

        <Typography
          sx={{
            fontSize: 20,
            color: "#FF5722",
            fontWeight: 600,
            mb: 2,
            fontFamily: "Poppins, sans-serif",
          }}
        >
          {heroContent.name}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: 36, sm: 46, md: 60 },
            fontWeight: 800,
            color: "#000",
            lineHeight: 1.2,
            mb: 3,
            fontFamily: "Poppins, sans-serif",
          }}
        >
          UI & UX
          <br />
          <Box
            component="span"
            sx={{ display: "inline-block", pl: { xs: 0, md: 17 } }}
          >
            Designer
          </Box>
        </Typography>

        <Typography
          sx={{
            fontSize: 15,
            color: "#000",
            fontWeight: 400,
            mb: 4,
            maxWidth: { xs: "100%", md: 450 },
            mx: { xs: "auto", md: "0" },
            fontFamily: "Poppins, sans-serif",
          }}
        >
          {heroContent.description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "#FF5722",
              color: "#fff",
              borderRadius: "6px",
              px: 3,
              py: 1.2,
              textTransform: "none",
              fontWeight: 600,
              fontSize: 15,
              fontFamily: "Poppins, sans-serif",
              "&:hover": {
                bgcolor: "#e64a19",
              },
              width: "120px",
            }}
          >
            {heroContent.buttonText}
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          flex: 1,
          textAlign: "center",
          maxWidth: 460,
          mr: { xs: 0, md: 6 },
        }}
      >
        <img
          src={heroImg}
          alt="Hero"
          style={{ width: "100%", maxWidth: 460 }}
        />

        <Box
          sx={{
            mt: 4,
            display: "flex",
            justifyContent: "center",
            gap: 1.5,
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
    </Box>
  );
};

export default Hero;
