import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CallToAction = () => {
  return (
    <Box
      sx={{
        py: 12,
        bgcolor: '#000000',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 800 }}>
          Ready to Ship with Us?
        </Typography>
        <Typography variant="h6" paragraph sx={{ opacity: 0.7, mb: 4, fontWeight: 400 }}>
          Get started today and experience the Binux difference. 
          Fast, reliable, and premium logistics solutions await you.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            href="#contact"
            sx={{
              bgcolor: 'white',
              color: '#000000',
              px: 5,
              py: 1.5,
              '&:hover': {
                bgcolor: 'grey.200',
              },
            }}
          >
            Get a Free Quote
          </Button>
          <Button
            variant="outlined"
            size="large"
            href="tel:+15551234567"
            sx={{
              borderColor: 'white',
              borderWidth: 2,
              color: 'white',
              px: 5,
              py: 1.5,
              '&:hover': {
                borderColor: 'grey.300',
                borderWidth: 2,
                bgcolor: 'rgba(255,255,255,0.1)',
              },
            }}
          >
            Call Us Now
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default CallToAction;
