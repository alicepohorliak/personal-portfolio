import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import SectionWrapper from "../components/SectionWrapper";
import { services } from "../data/servicesData";

const Services = () => {
  return (
    <SectionWrapper>
      <Box
        id="services"
        sx={{
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 3, md: 10 },
          py: { xs: 6, md: 10 },
          width: "100%",
          maxWidth: 1600,
          mx: "auto",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 32, md: 40 },
            fontWeight: 600,
            color: "#000",
            mb: 2,
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Services
        </Typography>

        <Typography
          sx={{
            fontSize: 15,
            fontWeight: 400,
            color: "#000",
            maxWidth: 600,
            mb: 6,
            fontFamily: "Poppins, sans-serif",
            textAlign: "center",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
          felis ligula aliquam venenatis fghh hjgj nisi ante.
        </Typography>

        <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                elevation={0}
                sx={{
                  px: 3,
                  py: 5,
                  backgroundColor: "#f5f5f5",
                  textAlign: "center",
                  borderRadius: "16px",
                  border: "1px solid #eee",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={service.icon}
                  alt={service.title}
                  sx={{
                    width: 60,
                    height: 60,
                    mb: 3,
                    objectFit: "contain",
                  }}
                />
                <CardContent sx={{ p: 0 }}>
                  <Typography
                    sx={{
                      fontSize: 18,
                      fontWeight: 600,
                      color: "#000",
                      fontFamily: "Poppins, sans-serif",
                      mb: 1,
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 14,
                      color: "#000",
                      fontWeight: 400,
                      fontFamily: "Poppins, sans-serif",
                      lineHeight: 1.6,
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
    </SectionWrapper>
  );
};

export default Services;
