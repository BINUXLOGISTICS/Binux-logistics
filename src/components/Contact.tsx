import { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Alert, Snackbar } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';

const inputStyles = {
  '& .MuiOutlinedInput-root': {
    borderRadius: 0,
    bgcolor: 'white',
    '& fieldset': { borderColor: '#ddd' },
    '&:hover fieldset': { borderColor: '#000' },
    '&.Mui-focused fieldset': { borderColor: '#000', borderWidth: 2 },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'ad3455d4-60ca-4ff8-95f2-c2e60c0845c3',
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          subject: formData.subject || 'New Contact Form Submission - Binux Logistics',
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSnackbar({ open: true, message: 'Message sent successfully! We\'ll get back to you soon.', severity: 'success' });
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSnackbar({ open: true, message: 'Failed to send message. Please try again or email us directly.', severity: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box id="contact" sx={{ py: 10, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6 }}>
          {/* Left side - Contact Info */}
          <Box sx={{ flex: '0 0 auto', width: { xs: '100%', md: '40%' } }}>
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 3 }}>
              Get in Touch
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 5, lineHeight: 1.8 }}>
              Have a question or need a quote? We're here to help. Reach out to us and our team will get back to you shortly.
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    border: '2px solid #000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <EmailIcon />
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>Email</Typography>
                  <Typography 
                    variant="body2" 
                    component="a" 
                    href="mailto:binuxlogisticsentrepreneur@gmail.com"
                    sx={{ 
                      color: 'text.secondary', 
                      textDecoration: 'none',
                      '&:hover': { textDecoration: 'underline', color: '#000' }
                    }}
                  >
                    binuxlogisticsentrepreneur@gmail.com
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    border: '2px solid #000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <LocationOnIcon />
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>Address</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Remote 
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Right side - Contact Form */}
          <Box sx={{ flex: 1, bgcolor: '#f5f5f5', p: { xs: 3, md: 4 } }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
              Send a Message
            </Typography>
            
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  variant="outlined"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  sx={inputStyles}
                />
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  variant="outlined"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  sx={inputStyles}
                />
              </Box>
              
              <TextField
                fullWidth
                label="Email"
                name="email"
                variant="outlined"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                sx={inputStyles}
              />
              
              <TextField
                fullWidth
                label="Subject"
                name="subject"
                variant="outlined"
                value={formData.subject}
                onChange={handleChange}
                sx={inputStyles}
              />
              
              <TextField
                fullWidth
                label="Message"
                name="message"
                variant="outlined"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                sx={inputStyles}
              />
              
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                disabled={isSubmitting}
                endIcon={<SendIcon />}
                sx={{
                  py: 1.5,
                  bgcolor: '#000',
                  '&:hover': { bgcolor: '#333' },
                  '&:disabled': { bgcolor: '#666', color: '#ccc' },
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
