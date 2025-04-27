import React from "react";

import Box from "@mui/material/Box";
import { useTheme, useMediaQuery } from "@mui/material";

type SectionWrapperProps = {
  children: React.ReactNode;
};

const SectionWrapper = ({ children }: SectionWrapperProps) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        width: "100%",
        paddingTop: isMdUp ? "24px" : "16px",
        paddingBottom: isMdUp ? "24px" : "16px",
        px: { xs: 2, md: 6 },
      }}
    >
      {children}
    </Box>
  );
};

export default SectionWrapper;
