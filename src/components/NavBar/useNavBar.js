import { useState, useEffect } from 'react';
import { useMediaQuery, useTheme} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMenus } from './../../redux/thunks/menuThunks';

export default function useNavBar() {
  const theme = useTheme()
  const dispatch = useDispatch();
  const menus = useSelector((state) => state.menus.items);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openItems, setOpenItems] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    dispatch(fetchMenus());
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
    setMobileOpen(false)
  };

  return {
    menus,
    mobileOpen,
    openItems,
    anchorEl,
    activeItem,
    isMobileView,
    handleDrawerToggle,
    handleToggle,
    handleClose
  };
}