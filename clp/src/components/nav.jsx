import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';

export default function Nav() {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'For Students', path: '/students' },
    { name: 'For Recruiters', path: '/recruiters' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        boxShadow: 'none',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 40px',
        }}
      >
        <Typography
          component={RouterLink}
          to="/"
          sx={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.3rem',
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          Career Launchpad
        </Typography>

        <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
          {menuItems.map((item, index) => (
            <Button
              key={index}
              component={RouterLink}
              to={item.path}
              sx={{
                color: 'white',
                textTransform: 'none',
                fontSize: '0.95rem',
                '&:hover': { color: '#FF5722' },
              }}
            >
              {item.name}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton sx={{ color: 'white' }}>
            <SearchIcon />
          </IconButton>

          <Link component={RouterLink} to="/signin" underline="none">
            <Button
              sx={{
                backgroundColor: '#FF5722',
                color: 'white',
                padding: '8px 24px',
                borderRadius: '5px',
                textTransform: 'none',
                '&:hover': { backgroundColor: '#E64A19' },
              }}
            >
              Join CLP
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}