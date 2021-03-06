import React from 'react';
import { MediaPort } from '../../../types';
import BabaPageDesktopRender from '../../components/Desktop/Pages/Categories/BabaPageDesktopRender';
import BabaPageXtremeDesktopRender from '../../components/Desktop/Pages/Categories/BabaPageXtremeDesktopRender';
import BabaPageMobileRender from '../../components/Mobile/Pages/Categories/BabaPageMobileRender';
import BabaPageMobileRenderHorizontal from '../../components/Mobile/Pages/Categories/BabaPageMobileRenderHorizontal';
import BabaPageMobileRenderSmallHeight from '../../components/Mobile/Pages/Categories/BabaPageMobileRenderSmallHeight';
import SEO from '../../components/SEO/SEO';
import useGetMediaPort from '../../hooks/useGetMediaPort';
import { useViewport } from '../../hooks/useViewPort';
const BabaPage: React.FC = () => {
  const { width, height } = useViewport();
  const mediaPort = useGetMediaPort({ height: height, width: width });

  return (
    <>
      <SEO title="O babà è na cosa seria | Prodotto dolciario artigianale" />
      {mediaPort == MediaPort.xtremeDesktop && <BabaPageXtremeDesktopRender />}
      {mediaPort == MediaPort.desktop && <BabaPageDesktopRender />}
      {mediaPort == MediaPort.mobile && <BabaPageMobileRender />}
      {mediaPort == MediaPort.mobileSmallHeight && <BabaPageMobileRenderSmallHeight />}
      {mediaPort == MediaPort.mobileHorizontal && <BabaPageMobileRenderHorizontal />}
    </>
  )
}

export default BabaPage;