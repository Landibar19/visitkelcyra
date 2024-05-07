import React from 'react';
import { AppBar, Toolbar, IconButton, ThemeProvider, createTheme, Stack,Box } from '@mui/material';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from './components/Logo';
import SocialMediaIcons from './components/SocialMediaIcons'
import MobileDrawer from './components/MobileDrawer';
import DesktopDrawer from './components/DesktopDrawer';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import useNavBar from './useNavBar';

const theme = createTheme({
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(227,117,45,255)', 
          },
        },
      },
    },
    MuiToolbar: {
      root: {
        display: 'flex', 
        flexDirection: 'row', 
      }
    }
  },
  palette: {
    primary: {
      main: 'rgba(144,179,25,255)',
    },
    secondary: {
      main: 'rgba(255,255,255,255)',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640, 
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default function NavBar() {
  const {
    menus,
    mobileOpen,
    openItems,
    anchorEl,
    activeItem,
    isMobileView,
    handleDrawerToggle,
    handleToggle,
    handleClose
  } = useNavBar();

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color='primary' style={{paddingBottom:'2%'}}> 
        <Toolbar 
          sx={{ 
            height: 'auto',
            justifyContent: 'center',
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
          
          }}>
          <Logo />
          <Stack sx={{
            width:isMobileView ? '45%': '70%', 
            display:'flex', 
            flexDirection: isMobileView ? 'column' : 'row'	, 
            justifyContent: isMobileView ? 'center': "space-between", 
            alignItems:'center'}}>
          <SocialMediaIcons />
          <Search />
          <IconButton 
              onClick={() => window.open('https://wa.me/+355698325140', '_blank')}
              sx={{color:'white', fontSize:15}}
            >
              <WhatsAppIcon />
              +355698325140
          </IconButton>
          </Stack>
        
          <Box sx={{
            fontFamily: ["Madimi One", 'sans-serif'].join(','),
            fontSize: isMobileView ? 30 : 45,
            color: 'white',
            paddingLeft: '20px',
            }}>
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
            Visit Kelcyra
            </Link>
          </Box>
          {isMobileView ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
           ''
          )}
           </Toolbar>
           <MobileDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} menus={menus} handleToggle={handleToggle} openItems={openItems} handleClose={handleClose} />
          <DesktopDrawer menus={menus} handleToggle={handleToggle} openItems={openItems} anchorEl={anchorEl} handleClose={handleClose} activeItem={activeItem} isMobileView={isMobileView} />
      </AppBar>
    </ThemeProvider>
  );
}