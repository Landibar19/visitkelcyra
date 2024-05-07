import React from 'react';
import { IconButton, MenuItem, Popover } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link, useParams } from 'react-router-dom';

export default function MenuItems({ menus, handleToggle, openItems, anchorEl, handleClose, activeItem }) {
  const {link} = useParams();
  return (
    <div>
      {menus.map((menu) => (
        menu.data.map((data) => (
          <React.Fragment key={data.id}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={(event) => handleToggle(event, data)}
              color='secondary'
            >
              {data.attributes.title}
              {openItems[data.id] ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
            {anchorEl && data.id === activeItem && (
              <Popover
                id="menu-appbar"
                open={openItems[data.id]}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <div>
                  {data.attributes.menuitems.map((item) => (
                    item && <MenuItem key={item.id} onClick={handleClose}>
                    <Link to={`menuitem/${item.link}`} style={link === item.link ? { color: 'red' } : {}}>
                      {item.title}
                    </Link>
                  </MenuItem>
                  ))}
                </div>
              </Popover>
            )}
          </React.Fragment>
        ))
      ))}
    </div>
  );
}