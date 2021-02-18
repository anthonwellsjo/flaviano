import React from 'react';
import ContattiPageMobileRender from '../components/Mobile/Pages/ContattiPage/ContattiPageMobileRender';
import ContattiPageMobileRenderSmallHeight from '../components/Mobile/Pages/ContattiPage/ContattiPageMobileRenderSmallHeight';
import { useViewport } from '../hooks/useViewPort';

const ContattiPage: React.FC = () => {
  const { width, height } = useViewport();

  if (width > 850) return <h1>no contact page for desktop yet</h1>
  if (height < 680) return <ContattiPageMobileRenderSmallHeight />
  return <ContattiPageMobileRender />
}

export default ContattiPage;