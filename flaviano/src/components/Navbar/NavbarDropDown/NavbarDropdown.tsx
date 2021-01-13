import React, { useState } from 'react';
import { Trail, Transition } from 'react-spring/renderprops';
import { Category, CategoryQuery } from '../../../../types';
import { useCategoryPreviewQuery } from '../../../hooks/queries/useCategoryPreviewQuery';
import classes from './NavbarDropdown.module.css';

interface MenuItem {
  title: string,
  color: string
}



const NavbarDropDown: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const CategoryData: CategoryQuery = useCategoryPreviewQuery();

  let menuItems: Array<MenuItem> = [];
  CategoryData.allSanityCategory.edges.forEach((c: Category) => {
    const item: MenuItem = {
      title: c.node.title,
      color: c.node.previewColorBoxColor.hex
    }
    menuItems.push(item);
    console.log(item);
  })

  return (
    <>
      <button className={classes.button} style={{ zIndex: 100, cursor: "pointer" }} onClick={() => setMenuOpen(!menuOpen)}>Prodotti</button>
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
                  <div style={{ ...trailProps, backgroundColor: trailItem.color }} className={classes.menuItem}>
                    {trailItem.title}
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