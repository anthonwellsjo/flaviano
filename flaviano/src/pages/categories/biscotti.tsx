import React from 'react';
import { MediaPort } from '../../../types';
import BiscottiPageDesktopRender from '../../components/Desktop/Pages/Categories/BiscottiPageDesktopRender';
import BiscottiPageXtremeDesktopRender from '../../components/Desktop/Pages/Categories/BiscottiPageXtremeDesktopRender';
import BiscottiPageMobileRender from '../../components/Mobile/Pages/Categories/BiscottiPageMobileRender';
import BiscottiPageMobileRenderHorizontal from '../../components/Mobile/Pages/Categories/BiscottiPageMobileRenderHorizontal';
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
      {mediaPort == MediaPort.xtremeDesktop && <BiscottiPageXtremeDesktopRender />}
      {mediaPort == MediaPort.desktop && <BiscottiPageDesktopRender />}
      {mediaPort == MediaPort.mobile && <BiscottiPageMobileRender />}
      {mediaPort == MediaPort.mobileSmallHeight && <BiscottiPageMobileRenderSmallHeight />}
      {mediaPort == MediaPort.mobileHorizontal && <BiscottiPageMobileRenderHorizontal />}
    </>
  )
}

export default BiscottiPage;