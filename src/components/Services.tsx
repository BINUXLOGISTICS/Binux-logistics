import React, { useState } from 'react';
import { Box, Container, Typography, Collapse, IconButton } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InventoryIcon from '@mui/icons-material/Inventory';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DiamondIcon from '@mui/icons-material/Diamond';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const services = [
  {
    title: 'FTL',
    subtitle: 'Full Truckload',
    description: 'Require swift Full Truckload (FTL) deliveries? Look no further. Our custom-tailored logistics ensure timely and efficient transport, making your FTL shipping experience hassle-free and efficient.',
    icon: <LocalShippingIcon sx={{ fontSize: 36 }} />,
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&h=400&q=80',
  },
  {
    title: 'LTL',
    subtitle: 'Less-Than-Truckload',
    description: 'Looking for dependable and expedited Less-Than-Truckload (LTL) transport? Count on us. Our personalized services ensure your smaller shipments arrive seamlessly, offering you a hassle-free and convenient shipping experience.',
    icon: <InventoryIcon sx={{ fontSize: 36 }} />,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&h=400&q=80',
  },
  {
    title: 'FLATBED',
    subtitle: 'Oversized Cargo',
    description: 'Seeking seamless transport of oversized cargo? Our specialized flatbed services ensure easy loading of machinery and construction materials, making your transportation hassle-free.',
    icon: <ViewInArIcon sx={{ fontSize: 36 }} />,
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=600&h=400&q=80',
  },
  {
    title: 'REFRIGERATED',
    subtitle: 'Temperature Controlled',
    description: 'Need reliable transport for temperature-sensitive goods? Our refrigerated services offer secure handling, ensuring your perishable items arrive fresh and intact.',
    icon: <AcUnitIcon sx={{ fontSize: 36 }} />,
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&h=400&q=80',
  },
  {
    title: 'DRAYAGE',
    subtitle: 'Intermodal Transport',
    description: 'Exploring versatile transport solutions across various modes? Our intermodal services ensure efficient handling for your cargo needs.',
    icon: <DirectionsBoatIcon sx={{ fontSize: 36 }} />,
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=600&h=400&q=80',
  },
  {
    title: 'AUTO TRANSPORT',
    subtitle: 'Vehicle Shipping',
    description: 'Ready for a simplified vehicle shipping experience? Experience seamless logistics designed for your door-to-door delivery. Benefit from hassle-free vehicle handling with our dependable auto transport services.',
    icon: <DirectionsCarIcon sx={{ fontSize: 36 }} />,
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=600&h=400&q=80',
  },
  {
    title: 'WHITE GLOVE',
    subtitle: 'Premium Handling',
    description: 'Are you seeking meticulous and specialized handling for your valuable cargo? Our White Glove services provide tailored solutions, ensuring precise and delicate care throughout the process.',
    icon: <DiamondIcon sx={{ fontSize: 36 }} />,
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&h=400&q=80',
  },
  {
    title: 'WAREHOUSING',
    subtitle: 'Storage Solutions',
    description: 'Yearning for meticulous care for your warehousing needs? Our tailored warehousing services offer precise solutions, ensuring optimal handling and storage, providing dedicated support and expert care for your needs.',
    icon: <WarehouseIcon sx={{ fontSize: 36 }} />,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&h=400&q=80',
  },
];

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Box id="services" sx={{ py: 10, bgcolor: '#fafafa' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" sx={{ fontWeight: 800, mb: 2 }}>
          OUR SERVICES
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 8, maxWidth: 700, mx: 'auto' }}>
          Binux: Empowering Sustainability with Tailored Technology-Driven Logistics Solutions.
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 3 }}>
          {services.map((service, index) => (
            <Box
              key={index}
              sx={{
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                bgcolor: 'white',
                border: '1px solid #eee',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                  transform: 'translateY(-4px)',
                },
                '&:hover .service-image': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Box sx={{ overflow: 'hidden' }}>
                <Box
                  className="service-image"
                  sx={{
                    width: '100%',
                    height: 160,
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.5s ease',
                  }}
                />
              </Box>
              <Box sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                  <Box sx={{ color: '#000' }}>{service.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '1rem' }}>
                    {service.title}
                  </Typography>
                </Box>
                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1.5, textTransform: 'uppercase', letterSpacing: 1 }}>
                  {service.subtitle}
                </Typography>
                
                {/* Truncated text */}
                <Collapse in={expandedIndex !== index} timeout={200}>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, fontSize: '0.8rem' }}>
                    {service.description.substring(0, 80)}...
                  </Typography>
                </Collapse>
                
                {/* Full text */}
                <Collapse in={expandedIndex === index} timeout={200}>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, fontSize: '0.8rem' }}>
                    {service.description}
                  </Typography>
                </Collapse>
                
                {/* Expand/Collapse button */}
                <Box
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToggle(index);
                  }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    mt: 1.5,
                    cursor: 'pointer',
                    color: '#000',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    '&:hover': { opacity: 0.7 },
                  }}
                >
                  <Typography variant="caption" sx={{ fontWeight: 600 }}>
                    {expandedIndex === index ? 'Show Less' : 'Read More'}
                  </Typography>
                  {expandedIndex === index ? (
                    <ExpandLessIcon sx={{ fontSize: 18 }} />
                  ) : (
                    <ExpandMoreIcon sx={{ fontSize: 18 }} />
                  )}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
