import { Box } from '@mui/material';
import React from 'react';

const Main = ({ children }) => (
  <Box
    sx={{
      height: '100%',
      overflowY: 'auto',
      px: 4,
      py: 2,
    }}
  >
    {children}
  </Box>
);

export default Main;
