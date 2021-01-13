import React, { useState } from 'react';
import { Trail, Transition } from 'react-spring/renderprops';
import classes from './NavbarDropdown.module.css';

const menuItems = ['Home', 'Profile', 'Order History', 'Sign out'];

const NavbarDropDown: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);



  return (
    <>
      <button style={{zIndex: 100, cursor: "pointer"}} onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
      <Transition
        unique
        reset
        items={menuOpen}
        from={{
          opacity: 0,
          height: 0,
          transform: 'translateY(-10%)',
        }}
        enter={{
          opacity: 1,
          height: 'auto',
          transform: 'translate(0%)',
        }}
        leave={{ opacity: 0 }}
      >
        {item =>
          item &&
          (props => (
            <div style={props} className={classes.menu}>
              <Trail
                // unique
                // reset
                items={menuItems}
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
              >
                {trailItem => trailProps => (
                  <div style={trailProps} className={classes.menuItem}>
                    {trailItem}
                  </div>
                )}
              </Trail>
            </div>
          ))
        }
      </Transition>
    </>
  )
}

export default NavbarDropDown;