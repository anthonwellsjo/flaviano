import React from 'react';
import MateriePrimeDesktopRender from '../components/Desktop/Pages/MateriePrime/MateriePrimeDesktopRender';
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
      {height > 860 && <h1>x-treme size window render</h1>}
      {width > 850 && height <=860 && <MateriePrimeDesktopRender />}
      {height < 680 && width <= 850 && <MateriePrimeMobileRenderSmallHeight />}
      {height >= 680 && width <= 850 && <MateriePrimeMobileRender />}
    </>
  )
}

export default MateriePrimePage;