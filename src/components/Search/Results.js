// Results.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchMenus } from '../../redux/thunks/menuThunks';

export default function Results() {
  const { query } = useParams();
  const dispatch = useDispatch();
  const menus = useSelector(state => state.menus.items);

  useEffect(() => {
    dispatch(fetchMenus());
  }, [dispatch]);

  if (!menus || !menus.data || menus.data.length === 0) {
    return <p>No results found</p>;
  }

  const filteredMenus = menus.data.filter(menu => 
    (menu.attributes.title && menu.attributes.title.toLowerCase().includes(query.toLowerCase())) ||
    (menu.attributes.menuitems && menu.attributes.menuitems.some(menuItem => 
      (menuItem.title && menuItem.title.toLowerCase().includes(query.toLowerCase())) ||
      (menuItem.menuitemdetail && menuItem.menuitemdetail.some(detail => 
        detail.title && detail.title.toLowerCase().includes(query.toLowerCase()))
      ))
    )
  );

  return (
    <div>
      {filteredMenus.map(menu => (
        <div key={menu.id}>
          {menu.attributes.menuitems
            .filter(menuItem => 
              menuItem.title.toLowerCase().includes(query.toLowerCase()) ||
              (menuItem.menuitemdetail && menuItem.menuitemdetail.some(detail => 
                detail.title.toLowerCase().includes(query.toLowerCase()))
              )
            )
            .map(menuItem => (
              <div key={menuItem.id}>
                <Link to={`/menuitem/${menuItem.link}`}>
                  <h2>{menuItem.title}</h2>
                </Link>
                {menuItem.menuitemdetail
                  .filter(detail => detail.title.toLowerCase().includes(query.toLowerCase()))
                  .map(detail => (
                    <div key={detail.id}>
                      <h3>{detail.title}</h3>
                      <p>{detail.description}</p>
                    </div>
                  ))
                }
              </div>
            ))
          }
        </div>
      ))}
    </div>
  );
}