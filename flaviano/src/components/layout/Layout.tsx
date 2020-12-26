import { Link, PageProps } from 'gatsby';
import React from 'react';

const MainLayout: React.FC = ({ children }) => (
  <div>
    <div>
      <Link to="404">404</Link>
    </div>
    {children}
  </div>
);

export default MainLayout;