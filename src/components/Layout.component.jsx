import { Box, Stack } from '@mui/material';
import { LeftSide, Navbar } from '.';

const Layout = ({ children }) => (
  <Box
    sx={{
      width: '100%',
      height: '100vh',
      display: 'flex',
    }}
  >
    <LeftSide />
    <Stack
      sx={{
        width: '100%',
        height: '100%',
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        background: '#F0F2F5',
      }}
    >
      <Navbar />
      {/* Main */}
      {children}
    </Stack>
  </Box>
);

export default Layout;
