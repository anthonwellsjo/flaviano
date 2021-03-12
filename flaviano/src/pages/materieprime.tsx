import React from 'react';
import { MediaPort } from '../../types';
import MateriePrimeDesktopRender from '../components/Desktop/Pages/MateriePrime/MateriePrimeDesktopRender';
import MateriePrimeXtremeDesktopRender from '../components/Desktop/Pages/MateriePrime/MateriePrimeXtremeDesktopRender';
import MateriePrimeMobileRender from '../components/Mobile/Pages/MateriePrime/MateriePrimeMobileRender';
import MateriePrimeMobileRenderSmallHeight from '../components/Mobile/Pages/MateriePrime/MateriePrimeMobileRenderSmallHeight';
import SEO from '../components/SEO/SEO';
import useGetMediaPort from '../hooks/useGetMediaPort';
import { useViewport } from '../hooks/useViewPort';

const MateriePrimePage: React.FC = () => {
  const { width, height } = useViewport();
  const mediaPort = useGetMediaPort({ height: height, width: width });

  return (
    <>
      <SEO title="Materie prime pregiate, di qualità delle ricche terre campane" />
      {mediaPort == MediaPort.xtremeDesktop && <MateriePrimeXtremeDesktopRender/>}
      {mediaPort == MediaPort.desktop && <MateriePrimeDesktopRender />}
      {mediaPort == MediaPort.mobile && <MateriePrimeMobileRender />}
      {mediaPort == MediaPort.mobileSmallHeight && <MateriePrimeMobileRenderSmallHeight />}
      {mediaPort == MediaPort.mobileHorizontal && <h1>horizontal mobile</h1>}
    </>
  )
}

export default MateriePrimePage;