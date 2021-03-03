import React from 'react';
import BiscottiPageDesktopRender from '../../components/Desktop/Pages/Categories/BiscottiPageDesktopRender';
import BiscottiPageMobileRender from '../../components/Mobile/Pages/Categories/BiscottiPageMobileRender';
import BiscottiPageMobileRenderSmallHeight from '../../components/Mobile/Pages/Categories/BiscottiPageMobileRenderSmallHeight';
import SEO from '../../components/SEO/SEO';
import { useViewport } from '../../hooks/useViewPort';


const BiscottiPage = () => {
  const { width, height } = useViewport();

  return (
    <>
      <SEO title="Biscotti friabili e gustosi | Prodotto dolciario artigianale" />
      {width > 850 && <BiscottiPageDesktopRender />}
      {height < 680 && width <= 850 && <BiscottiPageMobileRenderSmallHeight />}
      {height >= 680 && width <= 850 && <BiscottiPageMobileRender />}
    </>
  )
}

export default BiscottiPage;