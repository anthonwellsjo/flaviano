import React, { } from 'react';
import ChiSiamoDesktopRender from '../components/Desktop/Pages/ChiSiamoDesktopRender/ChiSiamoDesktopRender';
import ChiSiamoMobileRender from '../components/Mobile/Pages/ChiSiamo/ChiSiamoMobileRender';
import ChiSiamoMobileRenderSmallHeight from '../components/Mobile/Pages/ChiSiamo/ChiSiamoMobileRenderSmallHeight';
import SEO from '../components/SEO/SEO';
import { useViewport } from '../hooks/useViewPort';

const ChiSiamoPage = () => {

  const { width, height } = useViewport();

  return (
    <>
      <SEO title="Prodotti artigianali moderni|Tradizione dolciaria fatta a mano con amore" />
      {height > 860 && <h1>x-treme size window render</h1>}
      {width > 850 && height <=860 && <ChiSiamoDesktopRender />}
      {height < 680 && width <= 850 && <ChiSiamoMobileRenderSmallHeight />}
      {height >= 680 && width <= 850 && <ChiSiamoMobileRender />}
    </>
  )
}

export default ChiSiamoPage;