import React, { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";

import SectionWrapper from "../components/SectionWrapper";
import { categories, allProjects } from "../data/projectsData";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const shouldShowProjects =
    selectedCategory === "All" || selectedCategory === "UI UX";

  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <SectionWrapper>
      <Box
        sx={{
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: { xs: 3, md: 10 },
          py: { xs: 6, md: 10 },
          width: "100%",
          maxWidth: 1600,
          mx: "auto",
        }}
      >
        <Typography
          sx={{
            fontSize: 42,
            fontWeight: 700,
            textAlign: "center",
            fontFamily: "Poppins, sans-serif",
            mb: 2,
          }}
        >
          My Projects
        </Typography>

        <Typography
          sx={{
            fontSize: 15,
            color: "#000",
            maxWidth: 600,
            textAlign: "center",
            mx: "auto",
            fontFamily: "Poppins, sans-serif",
            mb: 5,
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
          felis ligula aliquam venenatis fghh hjgj nisi ante.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "center",
            mb: 6,
          }}
        >
          {categories.map((cat) => (
            <Chip
              key={cat}
              label={cat}
              onClick={() => setSelectedCategory(cat)}
              sx={{
                backgroundColor:
                  selectedCategory === cat ? "#FF5722" : "#f1f1f1",
                color: selectedCategory === cat ? "#fff" : "#000",
                fontWeight: 500,
                px: 3,
                height: 44,
                fontSize: 16,
                fontFamily: "Poppins, sans-serif",
                borderRadius: "8px",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor:
                    selectedCategory === cat ? "#e64a19" : "#ddd",
                },
              }}
            />
          ))}
        </Box>

        {shouldShowProjects && (
          <Grid container spacing={4} justifyContent="center">
            {filteredProjects.slice(0, 3).map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box sx={{ textAlign: "left" }}>
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "12px",
                      mb: 1.5,
                      boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: 15,
                      color: "#FF5722",
                      fontWeight: 500,
                      fontFamily: "Poppins, sans-serif",
                      mb: 0.5,
                    }}
                  >
                    {project.category}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 16,
                      color: "#000",
                      fontWeight: 700,
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    {project.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </SectionWrapper>
  );
};

export default Projects;
