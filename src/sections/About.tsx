import React from 'react';
import { Box, Typography, Slider } from '@mui/material';
import aboutImg from '../assets/about.png';
import SectionWrapper from '../components/SectionWrapper';

const skills = [
  { label: 'UX', value: 100 },
  { label: 'Website Design', value: 90 },
  { label: 'App Design', value: 85 },
  { label: 'Graphic Design', value: 95 },
];

const StyledSlider = (props: any) => (
  <Slider
    {...props}
    sx={{
      color: '#FF5722',
      height: 6,
      '& .MuiSlider-thumb': {
        width: 14,
        height: 14,
        bgcolor: '#fff',
        border: '2px solid #FF5722',
        '&:before': { display: 'none' },
      },
      '& .MuiSlider-rail': {
        backgroundColor: '#eee',
        opacity: 1,
      },
      '& .MuiSlider-track': {
        bgcolor: '#FF5722',
        border: 'none',
      },
    }}
  />
);

const About = () => {
  return (
    <SectionWrapper>
      <Box
        sx={{
          backgroundColor: '#fff',
          display: 'flex',
          justifyContent: 'center',
          px: 2,
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 1140,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 5, md: 10 },
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
            }}
          >
            <Box
              component="img"
              src={aboutImg}
              alt="About"
              sx={{
                width: '100%',
                maxWidth: 360,
                objectFit: 'contain',
              }}
            />
          </Box>

          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              sx={{
                fontSize: 32,
                fontWeight: 800,
                mb: 1,
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              About Me
            </Typography>

            <Typography
              sx={{
                fontSize: 14,
                color: '#555',
                fontWeight: 400,
                mb: 4,
                fontFamily: 'Poppins, sans-serif',
                maxWidth: 450,
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis
              ligula aliquam venenatis nisi ante. Aliquet ornare tellus consectetur lacus
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {skills.map((skill) => (
                <Box key={skill.label}>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 700,
                      mb: 1,
                      fontFamily: 'Poppins, sans-serif',
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
      </Box>
    </SectionWrapper>
  );
};

export default About;
