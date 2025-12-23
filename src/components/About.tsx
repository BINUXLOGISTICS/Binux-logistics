import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const About = () => {
  return (
    <Box id="about-us" sx={{ py: 10, bgcolor: 'white' }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 800 }}>
            About Binux
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph sx={{ mb: 3 }}>
            Your trusted partner in global logistics and supply chain management.
          </Typography>
          <Typography paragraph color="text.secondary" sx={{ lineHeight: 1.8, mb: 2 }}>
            At Binux Logistics, we are committed to providing premium and efficient logistics solutions. 
            With years of experience in the industry, we understand the complexities of global trade and 
            work tirelessly to ensure your cargo reaches its destination safely and on time.
          </Typography>
          <Typography paragraph color="text.secondary" sx={{ lineHeight: 1.8, mb: 4 }}>
            Our mission is to deliver excellence in every shipment while maintaining the highest 
            standards of service reliability and customer satisfaction.
          </Typography>
          
          <Grid container spacing={3} justifyContent="center">
            {['Global Network', 'Premium Service', '24/7 Support', 'Real-time Tracking'].map((item) => (
              <Grid item xs={6} sm={3} key={item}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CheckCircleIcon sx={{ mr: 1, color: '#000' }} />
                  <Typography variant="body2" fontWeight="600">
                    {item}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
