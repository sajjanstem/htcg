import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; 

const Footer = () => {
  const linkStyle = { color: 'inherit', textDecoration: 'none', display: 'block', marginBottom: '4px' };

  return (
    <Box component="footer" sx={{ py: 5, backgroundColor: '#1b1919', color: 'white' }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>Website Links</Typography>
            <Link to="/aboutus" style={linkStyle}>About Us</Link>
            <Link to="/services" style={linkStyle}>Services</Link>
            <Link to="/contactus" style={linkStyle}>Contact Us</Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>Services</Typography>
            <Link to="/services" style={linkStyle}>Software Services</Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>Our Location</Typography>
            <Typography variant="body1">HiTech Consulting Group</Typography>
            <Typography variant="body2">
              131/A, 3rd Floor, Outer ring road, near Grand Seasons Business Hotel, Kasturi Nagar
            </Typography>
            <Typography variant="body2">Bengaluru, Karnataka 560043 (India)</Typography>
            <Typography variant="body2">Phone: 7975176756</Typography>
            <Typography variant="body2">Timings: 08:00 AM to 5:00 PM IST</Typography>
            <Typography variant="body2">
              Email: <a href="mailto:info@hitechconsultinggroup.com" style={{ color: 'inherit', textDecoration: 'none' }}>info@hitechconsultinggroup.com</a>
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Typography variant="body2" color="inherit">
            © 2025, HiTech Consulting Group. All rights reserved.
          </Typography>
          <Box mt={1}>
            <Link to="/privacy-policy" style={{ ...linkStyle, display: 'inline', marginRight: '16px' }}>Privacy Policy</Link>
            <Link to="/terms-conditions" style={{ ...linkStyle, display: 'inline' }}>Terms & Conditions</Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
