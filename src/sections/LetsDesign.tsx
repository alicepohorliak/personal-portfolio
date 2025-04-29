import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LetsDesign = () => {
  return (
    <Box
      id="lets-design"
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
          fontSize: { xs: 30, md: 36 },
          fontWeight: 700,
          textAlign: "center",
          fontFamily: "Poppins, sans-serif",
          mb: 2,
        }}
      >
        Lets Design Together
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

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          alignItems: "center",
          width: "100%",
          maxWidth: 600,
        }}
      >
        <TextField
          placeholder="Enter Your Email"
          variant="outlined"
          sx={{
            flex: 1,
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
              fontFamily: "Poppins, sans-serif",
              height: 48,
              backgroundColor: "#f5f5f5",
            },
          }}
        />

        <Button
          variant="contained"
          sx={{
            width: { xs: "100%", sm: "auto" },
            height: 48,
            px: { xs: 0, sm: 4 },
            backgroundColor: "#FF5722",
            borderRadius: 3,
            fontWeight: 500,
            fontFamily: "Poppins, sans-serif",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#e64a19",
            },
          }}
        >
          Contact Me
        </Button>
      </Box>
    </Box>
  );
};

export default LetsDesign;
