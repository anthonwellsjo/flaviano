import React from 'react';
import { MediaPort } from '../../../types';
import BiscottiPageDesktopRender from '../../components/Desktop/Pages/Categories/BiscottiPageDesktopRender';
import BiscottiPageMobileRender from '../../components/Mobile/Pages/Categories/BiscottiPageMobileRender';
import BiscottiPageMobileRenderSmallHeight from '../../components/Mobile/Pages/Categories/BiscottiPageMobileRenderSmallHeight';
import SEO from '../../components/SEO/SEO';
import useGetMediaPort from '../../hooks/useGetMediaPort';
import { useViewport } from '../../hooks/useViewPort';


const BiscottiPage = () => {
  const { width, height } = useViewport();
  const mediaPort = useGetMediaPort({ height: height, width: width });


  return (
    <>
      <SEO title="Biscotti friabili e gustosi | Prodotto dolciario artigianale" />
      {mediaPort == MediaPort.xtremeDesktop && <h1>x-treme size window render</h1>}
      {mediaPort == MediaPort.desktop && <BiscottiPageDesktopRender />}
      {mediaPort == MediaPort.mobile && <BiscottiPageMobileRender />}
      {mediaPort == MediaPort.mobileSmallHeight && <BiscottiPageMobileRenderSmallHeight />}
      {mediaPort == MediaPort.mobileHorizontal && <h1>horizontal mobile</h1>}
    </>
  )
}

export default BiscottiPage;