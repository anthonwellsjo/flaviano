import React, { createContext, useState } from 'react';

let page = {};
let setPage;

const PageContext = createContext([page, setPage])

const PageProvider: React.FC = ({ children }) => {
  const [page, setPage] = useState({
    productsDropDownMenuOpen: false,
    burgerMenuOpen: false,
    firstStart: true,
    hideMobileNavbarLogo: false,
    english: false
  });
  return (
    <PageContext.Provider value={[page, setPage]}>
      {children}
    </PageContext.Provider>
  )
};

export { PageContext };
export { PageProvider };

