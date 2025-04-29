import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

import aboutImg from "../assets/about.png";
import SectionWrapper from "../components/SectionWrapper";
import { aboutContent, skills } from "../data/aboutData";

const StyledSlider = (props: any) => (
  <Slider
    {...props}
    sx={{
      color: "#FF5722",
      height: 8,
      "& .MuiSlider-thumb": {
        width: 22,
        height: 22,
        bgcolor: "#ddd",
        border: "2px solid #FF5722",
        "&:before": { display: "none" },
      },
      "& .MuiSlider-rail": {
        backgroundColor: "#eee",
        opacity: 1,
      },
      "& .MuiSlider-track": {
        bgcolor: "#FF5722",
        border: "none",
      },
    }}
  />
);

const About = () => {
  return (
    <SectionWrapper>
      <Box
        id="about"
        sx={{
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
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
            maxWidth: 460,
            ml: { xs: 0, md: 6 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <img
            src={aboutImg}
            alt="About"
            style={{ width: "100%", maxWidth: 460 }}
          />
        </Box>

        <Box
          sx={{
            flex: 1,
            maxWidth: 500,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            mr: { xs: 0, md: 6 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            sx={{
              fontSize: 34,
              fontWeight: 600,
              color: "#000",
              mb: 2,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            {aboutContent.title}
          </Typography>

          <Typography
            sx={{
              fontSize: 15,
              color: "#000",
              fontWeight: 400,
              mb: 4,
              maxWidth: { xs: "100%", md: 450 },
              mx: { xs: "auto", md: 0 },
              fontFamily: "Poppins, sans-serif",
            }}
          >
            {aboutContent.description}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            {skills.map((skill) => (
              <Box key={skill.label} sx={{ width: "100%", maxWidth: 450 }}>
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#000",
                    mb: 1,
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {skill.label}
                </Typography>
                <StyledSlider value={skill.value} max={100} min={0} disabled />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </SectionWrapper>
  );
};

export default About;
