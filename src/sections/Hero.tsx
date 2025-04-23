import React from 'react';
import { Box, Typography, Button, IconButton, Container } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import heroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        pt: { xs: 4, md: 5 }, 
        pb: { xs: 3, md: 5 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            gap: { xs: 5, md: 10 },
          }}
        >
          {/* LEFT SIDE */}
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontSize: 14,
                color: '#000',
                fontWeight: 500,
                mb: 1,
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              Hi I am
            </Typography>

            <Typography
              sx={{
                fontSize: 20,
                color: '#FF5722',
                fontWeight: 600,
                mb: 1,
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              Muhammad Bin Jameel
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 36, md: 44 }, 
                fontWeight: 800,
                color: '#000',
                lineHeight: 1.1,
                mb: 2,
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              UI & UX <br /> Designer
            </Typography>

            <Typography
              sx={{
                fontSize: 16,
                color: '#666',
                fontWeight: 400,
                mb: 4,
                maxWidth: 450,
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis nisi ante. Aliquet ornare tellus consectetur lacus
            </Typography>

            <Button
              variant="contained"
              sx={{
                bgcolor: '#FF5722',
                color: '#fff',
                borderRadius: '6px',
                px: 3, 
                py: 1.2,
                textTransform: 'none',
                fontWeight: 500,
                fontSize: 14,
                fontFamily: 'Poppins, sans-serif',
                '&:hover': {
                  bgcolor: '#e64a19',
                },
              }}
            >
              Hire Me
            </Button>
          </Box>

          {/* RIGHT SIDE */}
          <Box
            sx={{
              flex: 1,
              textAlign: 'center',
              maxWidth: 420,
              mx: 'auto', 
            }}
          >
            <img
              src={heroImg}
              alt="Hero"
              style={{ width: '100%', maxWidth: 420 }}
            />

            <Box
              sx={{
                mt: 3,
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
              }}
            >
              <IconButton color="inherit">
                <Facebook sx={{ fontSize: 28 }} />
              </IconButton>
              <IconButton color="inherit">
                <Twitter sx={{ fontSize: 28 }} />
              </IconButton>
              <IconButton color="inherit">
                <Instagram sx={{ fontSize: 28 }} />
              </IconButton>
              <IconButton color="inherit">
                <LinkedIn sx={{ fontSize: 28 }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
