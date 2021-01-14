import React, { useContext, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { PageContext } from '../../contexts/pageContext';

const BackDrop: React.FC = () => {
  const [page, setPage] = useContext(PageContext);
  const styles = useSpring({
    reverse: !page.productsDropDownMenuOpen,
    from: { backdropFilter: "blur(0px)", backgroundColor: "rgb(255,255,255,0)" },
    to: [{ backdropFilter: "blur(6px)", backgroundColor: "rgb(255,255,255,0.2)" }],
  })

  
  if (!page.productsDropDownMenuOpen) return null
  return (
    <animated.div onClick={() => setPage(prev => ({ ...prev, productsDropDownMenuOpen: !page.productsDropDownMenuOpen }))} style={{ ...styles, zIndex: 1, position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}></animated.div>
  )
}

export default BackDrop;