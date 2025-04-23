import React, { useState } from 'react';
import { Box, Typography, Grid, Chip, Container } from '@mui/material';
import SectionWrapper from '../components/SectionWrapper';
import cardImage from '../assets/Card-1.png';

const categories = ['All', 'UI UX', 'Website Design', 'App Design', 'Graphic Design'];

const allProjects = [
  {
    title: 'AirCalling Landing Page Design',
    image: cardImage,
    category: 'UI UX',
  },
  {
    title: 'AirCalling Landing Page Design',
    image: cardImage,
    category: 'UI UX',
  },
  {
    title: 'AirCalling Landing Page Design',
    image: cardImage,
    category: 'UI UX',
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Показувати проекти лише якщо "All" або "UI UX"
  const shouldShowProjects = selectedCategory === 'All' || selectedCategory === 'UI UX';

  const filteredProjects = selectedCategory === 'All'
    ? allProjects
    : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <SectionWrapper>
      <Box sx={{ textAlign: 'center', mb: 5 }}>
        <Typography
          sx={{
            fontSize: 32,
            fontWeight: 800,
            mb: 2,
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          My Projects
        </Typography>

        <Typography
          sx={{
            fontSize: 14,
            color: '#555',
            maxWidth: 580,
            mx: 'auto',
            fontFamily: 'Poppins, sans-serif',
            mb: 4,
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam
          venenatis fghh hjgj nisi ante.
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', mb: 4 }}>
          {categories.map((cat) => (
            <Chip
              key={cat}
              label={cat}
              onClick={() => setSelectedCategory(cat)}
              sx={{
                backgroundColor: selectedCategory === cat ? '#FF5722' : '#f1f1f1',
                color: selectedCategory === cat ? '#fff' : '#000',
                fontWeight: 500,
                px: 2,
                fontFamily: 'Poppins, sans-serif',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: selectedCategory === cat ? '#e64a19' : '#ddd',
                },
              }}
            />
          ))}
        </Box>
      </Box>

      {shouldShowProjects && (
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="space-between">
            {filteredProjects.slice(0, 3).map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box sx={{ textAlign: 'left' }}>
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '12px',
                      mb: 1.5,
                      boxShadow: '0 6px 16px rgba(0,0,0,0.06)',
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: 13,
                      color: '#FF5722',
                      fontWeight: 500,
                      fontFamily: 'Poppins, sans-serif',
                      mb: 0.5,
                    }}
                  >
                    {project.category}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 700,
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    {project.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </SectionWrapper>
  );
};

export default Projects;
