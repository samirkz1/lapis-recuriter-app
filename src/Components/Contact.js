import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { css } from '@emotion/react';

const Contact = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit} css={css`width: 100%;`}>
        <TextField
          required
          id="name"
          label="Name"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          required
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          required
          id="message"
          label="Message"
          variant="outlined"
          margin="normal"
          fullWidth
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" sx={{ mt: 3 }}>
          Send
        </Button>
      </form>
    </Box>
  );
};

export default Contact;
