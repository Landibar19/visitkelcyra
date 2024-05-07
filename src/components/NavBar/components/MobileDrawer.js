import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, Collapse, Fade } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

function MobileDrawer({ menus, mobileOpen, handleToggle, handleClose, openItems, link }) {
  return (
    <Drawer variant="temporary" open={mobileOpen} onClose={handleClose}>
      <Fade in={mobileOpen} timeout={3000}> 
        <div>
          {Array.isArray(menus.data) && menus.data.map((data) => (
            <React.Fragment key={data.id}>
              <ListItem button onClick={(event) => handleToggle(event, data)}>
                <ListItemText primary={data.attributes.title} />
                {openItems[data.id] ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openItems[data.id]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {Array.isArray(data.attributes.menuitems) && data.attributes.menuitems.map((item) => (
                    item && 
                    <ListItem 
                    button 
                    key={item.id} 
                    onClick={handleClose} 
                    component={Link} 
                    to={`menuitem/${item.link}`} 
                    style={link === item.link ? { color: 'red' } : {}}
                    >
                      <ListItemText primary={item.title} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ))}
        </div>
      </Fade>
    </Drawer>
  );
}

export default MobileDrawer;