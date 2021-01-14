import React from 'react';
import './global.css';
import { PageProvider } from './src/contexts/pageContext';

export const wrapRootElement = ({ element }) => (
  <PageProvider>
    {element}
  </PageProvider>
);

