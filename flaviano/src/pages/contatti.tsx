import React from 'react';
import ContattiPageMobileRender from '../components/Mobile/Pages/ContattiPage/ContattiPageMobileRender';
import { useViewport } from '../hooks/useViewPort';

const ContattiPage: React.FC = () => {
  const { width } = useViewport();

  if (width > 850) return <h1>no contact page for desktop yet</h1>
  return <ContattiPageMobileRender />
}

export default ContattiPage;