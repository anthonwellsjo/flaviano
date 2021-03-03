import React from 'react';
import BabaPageDesktopRender from '../../components/Desktop/Pages/Categories/BabaPageDesktopRender';
import BabaPageMobileRender from '../../components/Mobile/Pages/Categories/BabaPageMobileRender';
import BabaPageMobileRenderSmallHeight from '../../components/Mobile/Pages/Categories/BabaPageMobileRenderSmallHeight';
import SEO from '../../components/SEO/SEO';
import { useViewport } from '../../hooks/useViewPort';
const BabaPage: React.FC = () => {
  const { width, height } = useViewport();

  return (
    <>
      <SEO title="O babà è na cosa seria | Prodotto dolciario artigianale" />
      {width > 850 && <BabaPageDesktopRender />}
      {height < 680 && width <= 850 && <BabaPageMobileRenderSmallHeight />}
      {height >= 680 && width <= 850 && <BabaPageMobileRender />}
    </>
  )
}

export default BabaPage;