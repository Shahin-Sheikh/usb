import { Box, Typography } from '@mui/material';
import React from 'react';

const CustomInputLabel = ({ labelName, name }) => (
  <Box
    sx={{
      position: 'relative',
      width: '100%',
    }}
  >
    <Typography
      variant="h6"
      letterSpacing={0.4}
      fontWeight={600}
      fontSize="12px"
    >
      {labelName}
    </Typography>
  </Box>
);

export default CustomInputLabel;
