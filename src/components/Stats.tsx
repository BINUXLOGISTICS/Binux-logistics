import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PublicIcon from '@mui/icons-material/Public';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const stats = [
  {
    icon: <LocalShippingIcon sx={{ fontSize: 50 }} />,
    value: '50K+',
    label: 'Deliveries Completed',
  },
  {
    icon: <PublicIcon sx={{ fontSize: 50 }} />,
    value: '120+',
    label: 'Countries Served',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 50 }} />,
    value: '5000+',
    label: 'Happy Clients',
  },
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 50 }} />,
    value: '15+',
    label: 'Years Experience',
  },
];

const Stats = () => {
  return (
    <Box
      sx={{
        py: 10,
        bgcolor: '#000000',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={6} sm={6} md={3} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  bgcolor: 'transparent',
                  color: 'white',
                }}
              >
                <Box sx={{ mb: 2, opacity: 0.9 }}>{stat.icon}</Box>
                <Typography variant="h3" component="div" fontWeight="bold" gutterBottom>
                  {stat.value}
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                  {stat.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Stats;
