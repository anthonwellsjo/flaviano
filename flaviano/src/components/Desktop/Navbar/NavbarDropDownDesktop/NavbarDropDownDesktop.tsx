import classnames from 'classnames';
import { Link } from 'gatsby';
import React, { useContext, useState } from 'react';
import { Trail, Transition } from 'react-spring/renderprops';
import { Category, CategoryQuery } from '../../../../../types';
import { PageContext } from '../../../../contexts/pageContext';
import { useCategoryPreviewQuery } from '../../../../hooks/queries/useCategoryPreviewQuery';
import classes from './NavbarDropDownDesktop.module.scss';

interface MenuItem {
  title: string,
  color: string,
  slug: string
}


const NavbarDropDownDesktop: React.FC = () => {
  const [page, setPage]: any = useContext(PageContext);
  const CategoryData: CategoryQuery = useCategoryPreviewQuery();

  console.log("productsDropDownMenuOpen", page.productsDropDownMenuOpen);
  console.log("pathname", location.pathname,location.pathname.split("/").includes("categories"));

  const onMouseEnterEventHandler = () => {
    setPage((prev: any) => ({ ...prev, productsDropDownMenuOpen: true }))
  }
  const onMouseLeaveEventHandler = () => {
    setPage((prev: any) => ({ ...prev, productsDropDownMenuOpen: false }))
  }

  let menuItems: Array<MenuItem> = [];
  CategoryData.allSanityCategory.edges.forEach((c: Category) => {
    const item: MenuItem = {
      title: c.node.title,
      color: c.node.previewColorBoxColor.hex,
      slug: c.node.slug.current
    }
    menuItems.push(item);
    console.log(item);
  })

  return (
    <>
      <button className={location.pathname.split("/").includes("categories") ? classnames(classes.button, classes.activeYeah) : classes.button} style={{ zIndex: 100, cursor: "pointer" }} onMouseEnter={onMouseEnterEventHandler}>Prodotti</button>
      <Transition
        unique
        reset
        items={page.productsDropDownMenuOpen}
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
            <div onMouseLeave={onMouseLeaveEventHandler} style={props} className={classes.menu}>
              <Trail
                // unique
                // reset
                items={menuItems}
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
              >
                {trailItem => trailProps => (
                  <Link activeClassName={classes.active} to={`/categories/${trailItem.slug}`}>
                    <div style={{ ...trailProps, zIndex: 100, backgroundColor: trailItem.color }} className={classes.menuItem}>
                      {trailItem.title}
                    </div>
                  </Link>
                )}
              </Trail>
            </div>
          ))
        }
      </Transition>
    </>
  )
}

export default NavbarDropDownDesktop;