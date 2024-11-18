import React from 'react';
import { Typography, Container, Box } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 2, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Typography variant="body1">© 2024 Cadastro Fácil</Typography>
      </Container>
    </Box>
  );
}

export default Footer;
