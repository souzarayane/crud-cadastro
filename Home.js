import React, { useState } from 'react';
import { Container, Typography, Button, Box, TextField, Grid, Paper, Snackbar, Alert } from '@mui/material';

function Home() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [formData, setFormData] = useState({ nome: '', email: '' });

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      nome: formData.nome,
      email: formData.email,
    };

    fetch('http://localhost:8080/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(user => {
        console.log('Usuário cadastrado:', user);
        setOpenSnackbar(true);
        setFormData({ nome: '', email: '' });
      })
      .catch(error => {
        console.error('Erro ao cadastrar usuário:', error);
      });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ color: '#555555', textAlign: 'center' }} // Cor mais clara
        >
          Bem-vindo à sua aplicação de cadastro!
        </Typography>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src={`${process.env.PUBLIC_URL}/background.png`}
              alt="Descrição da Imagem"
              style={{ width: '100%', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
            <Paper elevation={3} sx={{ p: 3, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Cadastro
              </Typography>
              <form onSubmit={handleSubmit} noValidate autoComplete="off">
                <TextField
                  label="Nome"
                  name="nome"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  sx={{ mb: 2 }}
                  required
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                />
                <TextField
                  label="Email"
                  name="email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  sx={{ mb: 2 }}
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <Button type="submit" variant="contained" color="primary">
                  Cadastrar
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Usuário cadastrado com sucesso!
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Home;
