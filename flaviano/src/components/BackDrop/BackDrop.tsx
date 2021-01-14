import React, { useContext, useEffect } from 'react';
import { PageContext } from '../../contexts/pageContext';

const BackDrop: React.FC = () => {
  const [page, setPage] = useContext(PageContext);

  useEffect(() => {
    console.log("rerendering", page.productsDropDownMenuOpen)
  })
  if (!page.productsDropDownMenuOpen) return null
  return (
    <div onClick={() => setPage(prev => ({ ...prev, productsDropDownMenuOpen: !page.productsDropDownMenuOpen }))} style={{ zIndex: 1, position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backdropFilter: "blur(10px)" }}></div>
  )
}

export default BackDrop;