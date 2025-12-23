import { Box, Container, Typography, Grid, Link, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logoImage from '../assets/logo.png';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#000000', color: 'white', py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Binux Logistics
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7, lineHeight: 1.8 }}>
              Your reliable partner for premium logistics solutions worldwide. 
              Connecting businesses with efficient transportation services.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#home" color="inherit" underline="hover">Home</Link>
              <Link href="#services" color="inherit" underline="hover">Services</Link>
              <Link href="#about-us" color="inherit" underline="hover">About Us</Link>
              <Link href="#contact" color="inherit" underline="hover">Contact</Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Follow Us
            </Typography>
            <Box>
              {/* <IconButton color="inherit" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <TwitterIcon />
              </IconButton> */}
              <IconButton color="inherit" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
              {/* <IconButton color="inherit" aria-label="Instagram">
                <InstagramIcon />
              </IconButton> */}
            </Box>
            <Typography variant="body2" sx={{ mt: 2, opacity: 0.7 }}>
              © {new Date().getFullYear()} Binux Logistics. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
