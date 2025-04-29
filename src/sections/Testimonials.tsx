import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import SectionWrapper from "../components/SectionWrapper";
import { testimonials } from "../data/testimonialsData";

const Testimonials = () => {
  const extendedTestimonials = [...testimonials, ...testimonials];

  return (
    <SectionWrapper>
      <Box
        id="testimonials"
        sx={{
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: { xs: 3, md: 6 },
          py: { xs: 6, md: 10 },
          width: "100%",
          maxWidth: "100%",
          mx: "auto",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 32, md: 40 },
            fontWeight: 700,
            textAlign: "center",
            fontFamily: "Poppins, sans-serif",
            mb: 2,
          }}
        >
          Testimonials
        </Typography>

        <Typography
          sx={{
            fontSize: 15,
            color: "#000",
            maxWidth: 600,
            textAlign: "center",
            mx: "auto",
            fontFamily: "Poppins, sans-serif",
            mb: 6,
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
          felis ligula aliquam venenatis fghh hjgj nisi ante.
        </Typography>

        <Swiper
          spaceBetween={-150}
          slidesPerView={1.7}
          centeredSlides={true}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          style={{ width: "100%", paddingBottom: 50 }}
        >
          {extendedTestimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <Box
                  sx={{
                    opacity: isActive ? 1 : 0.3,
                    transform: isActive ? "scale(1)" : "scale(0.9)",
                    transition: "all 0.4s ease",
                    backgroundColor: "#f9f9f9",
                    borderRadius: "20px",
                    p: { xs: 3, md: 5 },
                    mx: "auto",
                    maxWidth: { xs: 320, md: 800 },
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    justifyContent: "center",
                    gap: { xs: 3, md: 4 },
                    boxShadow: isActive
                      ? "0 6px 24px rgba(0,0,0,0.08)"
                      : "none",
                  }}
                >
                  <Box
                    component="img"
                    src={testimonial.image}
                    alt={testimonial.name}
                    sx={{
                      width: { xs: 80, md: 100 },
                      height: { xs: 80, md: 100 },
                      borderRadius: "50%",
                      objectFit: "cover",
                      mb: { xs: 2, md: 0 },
                    }}
                  />
                  <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                    <Typography
                      sx={{
                        fontSize: 15,
                        color: "#424242",
                        fontFamily: "Poppins, sans-serif",
                        mb: 2,
                        lineHeight: 1.7,
                      }}
                    >
                      <span style={{ color: "#FF5722", fontSize: "24px" }}>
                        &ldquo;
                      </span>
                      {testimonial.feedback}
                      <span style={{ color: "#FF5722", fontSize: "24px" }}>
                        &rdquo;
                      </span>
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 16,
                        fontWeight: 600,
                        color: "#000",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 13,
                        fontWeight: 400,
                        color: "#000",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      CEO
                    </Typography>
                  </Box>
                </Box>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        <style>
          {`
            .swiper-pagination-bullet {
              width: 25px;
              height: 10px;
              border-radius: 5px;
              background-color: #ccc;
              opacity: 1;
              margin: 0 6px !important;
            }
            .swiper-pagination-bullet-active {
              background-color: #FF5722;
              width: 25px;
              height: 10px;
              border-radius: 5px;
            }
          `}
        </style>
      </Box>
    </SectionWrapper>
  );
};

export default Testimonials;
