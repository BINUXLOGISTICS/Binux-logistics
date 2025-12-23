import { Box, Container, Typography } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import NatureIcon from '@mui/icons-material/Nature';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';

const features = [
  {
    icon: <SpeedIcon sx={{ fontSize: 32 }} />,
    title: 'Fast Delivery',
    description: 'Express shipping options with guaranteed delivery times.',
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 32 }} />,
    title: 'Secure Handling',
    description: 'State-of-the-art security measures for your cargo.',
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 32 }} />,
    title: '24/7 Support',
    description: 'Round-the-clock customer service assistance.',
  },
  {
    icon: <PriceCheckIcon sx={{ fontSize: 32 }} />,
    title: 'Competitive Pricing',
    description: 'Transparent pricing with no hidden fees.',
  },
  {
    icon: <NatureIcon sx={{ fontSize: 32 }} />,
    title: 'Global Reach',
    description: 'Worldwide network covering 120+ countries.',
  },
  {
    icon: <TrackChangesIcon sx={{ fontSize: 32 }} />,
    title: 'Real-Time Tracking',
    description: 'Track shipments with advanced technology.',
  },
];

const WhyChooseUs = () => {
  return (
    <Box sx={{ py: 10, bgcolor: '#fafafa' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          align="center" 
          gutterBottom 
          sx={{ fontWeight: 800, mb: 2 }}
        >
          Why Choose Binux?
        </Typography>
        <Typography 
          variant="body1" 
          align="center" 
          color="text.secondary" 
          sx={{ mb: 8, maxWidth: 600, mx: 'auto' }}
        >
          Experience the difference with our premium logistics services
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: 'calc(50% - 16px)', md: 'calc(33.333% - 22px)' },
                textAlign: 'center',
                p: 3,
              }}
            >
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  border: '2px solid #000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 2,
                }}
              >
                {feature.icon}
              </Box>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, fontSize: '1rem' }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                {feature.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
