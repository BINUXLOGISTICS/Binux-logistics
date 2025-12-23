import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Rating } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Supply Chain Manager',
    company: 'TechCorp Inc.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    text: 'GreenFreight has transformed our logistics operations. Their sustainable approach aligns perfectly with our company values, and their reliability is unmatched.',
  },
  {
    name: 'Michael Chen',
    role: 'Operations Director',
    company: 'Global Imports Ltd.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    text: 'We\'ve been working with GreenFreight for over 3 years. Their real-time tracking and customer support are exceptional. Highly recommended!',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Procurement Head',
    company: 'Retail Solutions Co.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    text: 'The team at GreenFreight goes above and beyond. Their eco-friendly shipping options have helped us reduce our carbon footprint significantly.',
  },
];

const Testimonials = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" color="text.primary" gutterBottom>
          What Our Clients Say
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
          Trusted by businesses worldwide for reliable logistics solutions
        </Typography>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    transition: '0.3s',
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, pt: 4 }}>
                  <FormatQuoteIcon
                    sx={{
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      fontSize: 40,
                      color: 'primary.light',
                      opacity: 0.3,
                    }}
                  />
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    paragraph
                    sx={{ fontStyle: 'italic', mb: 3 }}
                  >
                    "{testimonial.text}"
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto' }}>
                    <Avatar
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      sx={{ width: 56, height: 56, mr: 2 }}
                    />
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                      <Typography variant="body2" color="primary.main">
                        {testimonial.company}
                      </Typography>
                    </Box>
                  </Box>
                  <Rating value={testimonial.rating} readOnly size="small" sx={{ mt: 2 }} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
