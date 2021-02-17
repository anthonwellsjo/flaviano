import React from 'react';
import './global.css';
import './mediaQueries.css';
import { PageProvider } from './src/contexts/pageContext';
import { ViewportProvider } from './src/hooks/useViewPort';

export const wrapRootElement = ({ element }) => (
  <PageProvider>
    <ViewportProvider>
      {element}
    </ViewportProvider>
  </PageProvider>
);

