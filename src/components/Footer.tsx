// Footer.js
import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 5, backgroundColor: '#1b1919', color: 'white' }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>Website Links</Typography>
            <Link href="/aboutus" color="inherit" underline="none">About Us</Link><br />
            <Link href="/exams" color="inherit" underline="none">Exams</Link><br />
            <Link href="/contactus" color="inherit" underline="none">Contact Us</Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>Exams</Typography>
            {/* <Link href="#" color="inherit" underline="none">Maths Genius Hunt</Link><br />
            <Link href="#" color="inherit" underline="none">Science Genius Hunt</Link><br /> */}
            <Link href="/exams" color="inherit" underline="none">Junior Coder Hunt</Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>Our Location</Typography>
            <Typography variant="body1">Yuva STEM Organisation</Typography>
            {/* <Typography variant="body1">Line 1, Line 2</Typography> */}
            <p>131/A, 3rd Floor, Outer ring road, near Grand Seasons Business Hotel, Kasturi Nagar</p>
            <Typography variant="body1">Bengaluru, Karnataka 560043(India)</Typography>
            <Typography variant="body1">Phone: 7975176756 </Typography>
            <Typography variant="body1">Timings: 08:00 AM to 5:00 PM IST</Typography>
            <Typography variant="body1">Email: <Link href="mailto:" color="inherit" underline="none">info@yuvastem.org</Link></Typography>
            <Box sx={{ mt: 2 }}>
              {/* <Link href="#" color="inherit" underline="none" sx={{ mr: 1 }}><i className="fab fa-facebook">fb</i></Link>
              <Link href="#" color="inherit" underline="none" sx={{ mr: 1 }}><i className="fab fa-twitter">twiiter</i></Link>
              <Link href="#" color="inherit" underline="none" sx={{ mr: 1 }}><i className="fab fa-youtube">y</i></Link>
              <Link href="#" color="inherit" underline="none" sx={{ mr: 1 }}><i className="fab fa-linkedin">linked</i></Link> */}
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Typography variant="body2" color="inherit">
            Copyright © 2024, Yuva STEM Organisation . All rights reserved.
          </Typography>
          <Link href="#" color="inherit" underline="none" sx={{ ml: 1, mr: 1 }}>Privacy Policy</Link>
          <Link href="#" color="inherit" underline="none" sx={{ ml: 1, mr: 1 }}>Terms & Conditions</Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
