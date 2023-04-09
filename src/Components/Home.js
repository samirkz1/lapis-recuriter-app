import { css } from '@emotion/react';
import { Box, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const navItemStyles = css`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #333;
  }
`;

const Home = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5' }}>
      <Box sx={{ bgcolor: '#333', color: '#fff', py: 1 }}>
        <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>Lapis Hire</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ mr: 3, fontSize: '1.2rem', fontWeight: 600 }}>
  <button
    css={navItemStyles}
    onClick={() => {
      // navigate to the contact page
      window.location.href = '/Contact';
    }}
  >
    Contact Us
  </button>
</Box>
            <Box sx={{ mr: 3, fontSize: '1.2rem', fontWeight: 600 }}>Info</Box>
            <Box sx={{ fontSize: '1.2rem', fontWeight: 600 }}>More</Box>
          </Box>
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" sx={{ fontWeight: 600, mb: 4 }}>Welcome to Lapis Hire</Typography>
        <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: 2 }}>We are a recruitment agency that specializes in finding the right candidates for your business.</Typography>
      </Container>
    </Box>
  );
};

export default Home;