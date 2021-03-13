import React, { } from 'react';
import { MediaPort } from '../../types';
import ChiSiamoDesktopRender from '../components/Desktop/Pages/ChiSiamoDesktopRender/ChiSiamoDesktopRender';
import ChiSiamoXtremeDesktopRender from '../components/Desktop/Pages/ChiSiamoXtremeDesktopRender/ChiSiamoXtremeDesktopRender';
import ChiSiamoMobileRender from '../components/Mobile/Pages/ChiSiamo/ChiSiamoMobileRender';
import ChiSiamoMobileRenderSmallHeight from '../components/Mobile/Pages/ChiSiamo/ChiSiamoMobileRenderSmallHeight';
import SEO from '../components/SEO/SEO';
import useGetMediaPort from '../hooks/useGetMediaPort';
import { useViewport } from '../hooks/useViewPort';

const ChiSiamoPage = () => {

  const { width, height } = useViewport();
  const mediaPort = useGetMediaPort({ height: height, width: width });

  return (
    <>
      <SEO title="Prodotti artigianali moderni|Tradizione dolciaria fatta a mano con amore" />
      {mediaPort == MediaPort.xtremeDesktop && <ChiSiamoXtremeDesktopRender />}
      {mediaPort == MediaPort.desktop && <ChiSiamoDesktopRender />}
      {mediaPort == MediaPort.mobile && <ChiSiamoMobileRender />}
      {mediaPort == MediaPort.mobileSmallHeight && <ChiSiamoMobileRenderSmallHeight />}
      {mediaPort == MediaPort.mobileHorizontal && <h1>horizontal mobile</h1>}
    </>
  )
}

export default ChiSiamoPage;