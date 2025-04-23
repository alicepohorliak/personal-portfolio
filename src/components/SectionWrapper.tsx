import React from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';

type SectionWrapperProps = {
  children: React.ReactNode;
};

const SectionWrapper = ({ children }: SectionWrapperProps) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      sx={{
        paddingTop: isMdUp ? '40px' : '24px',    
        paddingBottom: isMdUp ? '40px' : '24px',  
      }}
    >
      {children}
    </Box>
  );
};

export default SectionWrapper;
