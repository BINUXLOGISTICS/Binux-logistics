import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Container,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logoImage from '../assets/Gemini_Generated_Image_b131qcb131qcb131.png';

const pages = ['Home', 'Services', 'About Us', 'Contact'];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, page: string) => {
    e.preventDefault();
    const targetId = page.toLowerCase().replace(' ', '-');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Box sx={{ my: 2, display: 'flex', justifyContent: 'center' }}>
        <img src={logoImage} alt="Binux Logistics" style={{ height: 100, mixBlendMode: 'multiply' }} />
      </Box>
      <List>
        {pages.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton 
              sx={{ textAlign: 'center' }} 
              onClick={(e) => handleNavClick(e, item)}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" color="default" elevation={0} sx={{ borderBottom: '1px solid #eee' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Desktop Logo */}
          <Box
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              textDecoration: 'none',
            }}
          >
            <img src={logoImage} alt="Binux Logistics" style={{ height: 85, mixBlendMode: 'multiply' }} />
          </Box>

          {/* Mobile Menu Icon */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerToggle}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
              }}
            >
              {drawer}
            </Drawer>
          </Box>

          {/* Mobile Logo */}
          <Box
            component="a"
            href="/"
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              textDecoration: 'none',
            }}
          >
            <img src={logoImage} alt="Binux Logistics" style={{ height: 60, mixBlendMode: 'multiply' }} />
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={(e) => handleNavClick(e, page)}
                sx={{ my: 2, color: 'text.primary', display: 'block', fontWeight: 500 }}
              >
                {page}
              </Button>
            ))}
          </Box>
          
          <Box sx={{ ml: 2, display: { xs: 'none', md: 'flex' } }}>
             <Button 
               variant="contained" 
               color="primary" 
               onClick={(e) => handleNavClick(e, 'contact')}
               sx={{ px: 3 }}
             >
               Get Quote
             </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
