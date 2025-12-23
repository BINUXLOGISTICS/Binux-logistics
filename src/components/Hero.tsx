import { Box, Container, Typography, Button, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4} maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            color="inherit"
            gutterBottom
            sx={{ fontWeight: 800, letterSpacing: '-0.02em' }}
          >
            Binux Logistics
          </Typography>
          <Typography variant="h5" color="inherit" paragraph sx={{ opacity: 0.85, fontWeight: 400, lineHeight: 1.6 }}>
            We provide top-tier freight and logistics services tailored to your needs. 
            Efficient, secure, and reliable transportation across the globe.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="flex-start"
          >
            <Button 
              variant="contained" 
              size="large" 
              endIcon={<ArrowForwardIcon />} 
              href="#services"
              sx={{ 
                bgcolor: 'white', 
                color: 'black', 
                px: 4, 
                py: 1.5,
                '&:hover': { bgcolor: 'grey.200' } 
              }}
            >
              Explore Services
            </Button>
            <Button 
              variant="outlined" 
              size="large" 
              sx={{ 
                color: 'white', 
                borderColor: 'white', 
                borderWidth: 2,
                px: 4, 
                py: 1.5,
                '&:hover': { borderColor: 'grey.300', bgcolor: 'rgba(255,255,255,0.1)', borderWidth: 2 } 
              }} 
              href="#contact"
            >
              Contact Us
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
