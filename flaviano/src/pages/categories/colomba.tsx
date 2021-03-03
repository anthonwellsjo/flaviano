import React from 'react';
import ColombaPageDesktopRender from '../../components/Desktop/Pages/Categories/ColombaPageDesktopRender';
import ColombaPageMobileRender from '../../components/Mobile/Pages/Categories/ColombaPageMobileRender';
import SEO from '../../components/SEO/SEO';
import { useViewport } from '../../hooks/useViewPort';

const ColombaPage: React.FC = () => {
  const { width } = useViewport();

  return (
    <>
      <SEO title="Dolce tipico della tradizione pasquale italiana|Prodotto artigianale" />
      {width > 850 && <ColombaPageDesktopRender />}
      {/* {height < 680 && width <= 850 && <BiscottiPageMobileRenderSmallHeight />} */}
      {/* {height >= 680 && width <= 850 && <BiscottiPageMobileRender />} */}
      {width <= 850 && <ColombaPageMobileRender />}
    </>
  )
}

export default ColombaPage;