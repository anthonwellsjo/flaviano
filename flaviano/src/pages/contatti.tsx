import React from 'react';
import { MediaPort } from '../../types';
import ContattiPageMobileRender from '../components/Mobile/Pages/ContattiPage/ContattiPageMobileRender';
import ContattiPageMobileRenderSmallHeight from '../components/Mobile/Pages/ContattiPage/ContattiPageMobileRenderSmallHeight';
import SEO from '../components/SEO/SEO';
import useGetMediaPort from '../hooks/useGetMediaPort';
import { useViewport } from '../hooks/useViewPort';

const ContattiPage: React.FC = () => {
  const { width, height } = useViewport();
  const mediaPort = useGetMediaPort({ height: height, width: width });


  return (
    <>
      <SEO title="Artigiani moderni|Informazioni e richieste personalizzate" />
      {mediaPort == MediaPort.xtremeDesktop && <h1>x-treme size window render</h1>}
      {mediaPort == MediaPort.desktop && <h1>no contact page for desktop yet</h1>}
      {mediaPort == MediaPort.mobile && <ContattiPageMobileRender />}
      {mediaPort == MediaPort.mobileSmallHeight && <ContattiPageMobileRenderSmallHeight />}
      {mediaPort == MediaPort.mobileHorizontal && <h1>horizontal mobile</h1>}
    </>
  )
}

export default ContattiPage;