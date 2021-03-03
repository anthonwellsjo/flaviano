import React from 'react';
import ContattiPageMobileRender from '../components/Mobile/Pages/ContattiPage/ContattiPageMobileRender';
import ContattiPageMobileRenderSmallHeight from '../components/Mobile/Pages/ContattiPage/ContattiPageMobileRenderSmallHeight';
import SEO from '../components/SEO/SEO';
import { useViewport } from '../hooks/useViewPort';

const ContattiPage: React.FC = () => {
  const { width, height } = useViewport();

  return (
    <>
      <SEO title="Artigiani moderni|Informazioni e richieste personalizzate" />
      {width > 850 && <h1>no contact page for desktop yet</h1>}
      {height < 680 && width <= 850 && <ContattiPageMobileRenderSmallHeight />}
      {height >= 680 && width <= 850 && <ContattiPageMobileRender />}
    </>
  )
}

export default ContattiPage;