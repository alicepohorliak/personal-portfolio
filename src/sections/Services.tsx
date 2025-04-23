import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SectionWrapper from '../components/SectionWrapper'; 

import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';

const services = [
  {
    icon: icon1,
    title: 'UI/UX',
    description: 'Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh',
  },
  {
    icon: icon2,
    title: 'Web Design',
    description: 'Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh',
  },
  {
    icon: icon3,
    title: 'App Design',
    description: 'Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh',
  },
  {
    icon: icon4,
    title: 'Graphic Design',
    description: 'Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh',
  },
];

const Services = () => {
  return (
    <SectionWrapper>
      <Box
        id="services"
        sx={{
          backgroundColor: '#fff',
          px: { xs: 2, md: 6 },
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 1140 }}>
          <Typography
            sx={{
              fontSize: 40,
              fontWeight: 700,
              textAlign: 'center',
              fontFamily: 'Poppins, sans-serif',
              mb: 2,
            }}
          >
            Services
          </Typography>

          <Typography
            sx={{
              fontSize: 14,
              textAlign: 'center',
              maxWidth: 620,
              mx: 'auto',
              color: '#444',
              mb: 6,
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hjgj nisi ante.
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    px: 3,
                    py: 4,
                    backgroundColor: '#f9f9f9',
                    textAlign: 'center',
                    borderRadius: '16px',
                    border: '1px solid #e0e0e0',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={service.icon}
                    alt={service.title}
                    sx={{
                      width: 48,
                      height: 48,
                      mb: 2,
                      objectFit: 'contain',
                    }}
                  />
                  <CardContent sx={{ p: 0 }}>
                    <Typography
                      sx={{
                        fontSize: 18,
                        fontWeight: 700,
                        fontFamily: 'Poppins, sans-serif',
                        mb: 1,
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#555',
                        fontSize: 13,
                        fontFamily: 'Poppins, sans-serif',
                      }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </SectionWrapper>
  );
};

export default Services;
