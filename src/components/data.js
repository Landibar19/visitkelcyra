import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, useMediaQuery, ThemeProvider, createTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from './components/Logo';
import SocialMediaIcons from './components/SocialMediaIcons'
import MenuItems from './components/Menuitems'
import MobileDrawer from './components/MobileDrawer';
import DesktopDrawer from './components/DesktopDrawer';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMenus} from './../../redux/thunks/menuThunks'
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/core';

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
  const dispatch = useDispatch();
  const menus = useSelector((state) => state.menus.items);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openItems, setOpenItems] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    dispatch(fetchMenus()); // dispatch the action to fetch menus
  }, [dispatch]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleToggle = (event, data) => {
    setOpenItems(prevOpenItems => ({
      ...prevOpenItems,
      [data.id]: !prevOpenItems[data.id]
    }));
    setAnchorEl(event.currentTarget);
    setActiveItem(data.id);
  };

  const handleClose = () => {
    setOpenItems({});
    setAnchorEl(null);
  };

  const Div = styled('div')(() => ({
    fontFamily: ["Madimi One", 'sans-serif'].join(','),
    fontSize: isMobileView ? 30 : 45,
    color: 'white',
    paddingLeft: '20px',
    paddingTop: '2%'
  }));
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color='primary'> 
        <Toolbar 
          sx={{ 
            display: 'flex', 
            flexDirection: 'row', 
            height: 'auto',
            paddingBottom:"2%"
          }}>
          <Logo />
          <SocialMediaIcons />
          <Div>
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
            Visit Kelcyra
            </Link>
          </Div>
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
      </AppBar>
      <MobileDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} menus={menus} handleToggle={handleToggle} openItems={openItems} handleClose={handleClose} />
      <DesktopDrawer menus={menus} handleToggle={handleToggle} openItems={openItems} anchorEl={anchorEl} handleClose={handleClose} activeItem={activeItem} isMobileView={isMobileView} />
    </ThemeProvider>
  );
}