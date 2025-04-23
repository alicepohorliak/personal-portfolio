import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from '@mui/material';

const navItems = ['Home', 'About', 'Services', 'Projects', 'Testimonials', 'Contact Us'];

const Navbar = () => {
  return (
    <AppBar
  position="static"
  elevation={0}
  sx={{
    bgcolor: 'transparent',
    pt: { xs: 3, md: 4 },
    mb: { xs: 2.5, md: 3 }, 
  }}
>
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{
                bgcolor: '#FF5722',
                color: '#fff',
                fontWeight: 700,
                fontSize: 24,
                px: 1,
                py: 0.5,
                borderRadius: '2px',
              }}
            >
              M
            </Box>
            <Typography
              component="span"
              sx={{
                ml: 0.5,
                fontSize: 24,
                fontWeight: 500,
                color: '#000',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              uhammad
            </Typography>
          </Box>

          {/* Menu */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 6,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: '#000',
                  textTransform: 'none',
                  fontWeight: 500,
                  fontSize: 15,
                  fontFamily: 'Poppins, sans-serif',
                  p: 0,
                }}
              >
                {item}
              </Button>
            ))}

            {/* CTA Button */}
            <Button
              variant="contained"
              sx={{
                bgcolor: '#FF5722',
                color: '#fff',
                borderRadius: '5px',
                fontWeight: 500,
                fontSize: 14,
                px: 2,
                py: 1,
                textTransform: 'none',
                boxShadow: 'none',
                fontFamily: 'Poppins, sans-serif',
                '&:hover': { bgcolor: '#e64a19' },
              }}
            >
              Download CV
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
